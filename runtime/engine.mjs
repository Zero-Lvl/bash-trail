// Main thread owns transport only. All learner code runs in the worker.
export class TrainingEngine {
  static async create(options={}) {
    const engine=new TrainingEngine(options);
    engine.start();
    const {workerURL,timeoutMs,...init}=options;
    await engine.request('init',init);
    return engine;
  }
  constructor(options) {
    this.options=options;
    this.pending=new Map();
    this.nextId=0;
  }
  start() {
    this.worker=new Worker(this.options.workerURL??new URL('./worker.js',import.meta.url),{type:'module'});
    this.worker.onmessage=({data})=>{
      const pending=this.pending.get(data.id);
      if(!pending) return;
      this.pending.delete(data.id);
      clearTimeout(pending.timer);
      if(data.ok) pending.resolve(data.result);
      else {const error=new Error(data.error?.message??'Runtime failed');error.name=data.error?.name??'Error';pending.reject(error);}
    };
    this.worker.onerror=event=>this.terminate(new Error(event.message??'Runtime worker failed'));
  }
  request(op,payload={},timeoutMs=this.options.timeoutMs??15000) {
    if(!this.worker) return Promise.reject(new Error('Runtime stopped; reset first'));
    const id=++this.nextId;
    return new Promise((resolve,reject)=>{
      const timer=setTimeout(()=>this.terminate(new DOMException(`Runtime ${op} exceeded ${timeoutMs} ms; reset required`,'TimeoutError')),timeoutMs);
      this.pending.set(id,{resolve,reject,timer});
      try {this.worker.postMessage({...payload,id,op});}
      catch(error){clearTimeout(timer);this.pending.delete(id);reject(error);}
    });
  }
  terminate(error=new DOMException('Runtime stopped','AbortError')) {
    this.worker?.terminate();
    this.worker=null;
    for(const pending of this.pending.values()) {clearTimeout(pending.timer);pending.reject(error);}
    this.pending.clear();
  }
  async reset(fixtures=this.options.fixtures??{},cwd=this.options.cwd??'/home/learner',directories=this.options.directories??[]) {
    this.terminate();
    this.options={...this.options,fixtures,cwd,directories};
    this.start();
    const {workerURL,timeoutMs,...init}=this.options;
    return this.request('init',init);
  }
  exec(command,options={}) {return this.request('exec',{command},options.timeoutMs??this.options.timeoutMs??15000);}
  write(path,text) {return this.request('write',{path,text});}
  read(path) {return this.request('read',{path});}
  stat(path) {return this.request('stat',{path});}
  snapshot() {return this.request('snapshot');}
  check(spec) {return this.request('check',{spec});}
}
