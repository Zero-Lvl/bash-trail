var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);

// curriculum/s01.json
var s01_default = {
  id: "s01",
  title: "Meet the terminal",
  summary: "Read a prompt, ask where you are, inspect safe practice files, and recognize a failed command.",
  level: "First steps",
  exam: [
    {
      prompt: "What is a terminal prompt?",
      options: [
        "A file containing your work",
        "A signal that the shell is ready for a command",
        "The output of every command",
        "A command you must copy"
      ],
      correct: 1,
      clue: "Think about what appears before you type, rather than what a command prints."
    },
    {
      prompt: "Which command shows the current directory?",
      options: [
        "cat",
        "ls",
        "pwd",
        "echo"
      ],
      correct: 2,
      clue: "Review the command whose name expands to print working directory."
    },
    {
      prompt: "A command reports a missing file and exits with status 1. What should you do next?",
      options: [
        "Assume the file was created",
        "Install Linux immediately",
        "Delete the whole folder",
        "Check the filename and the directory listing"
      ],
      correct: 3,
      clue: "An error is information about what the command could not do."
    }
  ],
  lessons: [
    {
      id: "s01-l01",
      title: "Your first command",
      minutes: 5,
      mode: "shell",
      why: "You can try a terminal without installing anything or touching your own files.",
      teach: [
        "This page uses a Bash-compatible training sandbox: a small practice filesystem in your browser, not a real Linux VM. The lesson files are supplied for you. No installation is needed; use only this page for now.",
        "A shell reads a command and tries to carry it out. In a terminal, a prompt such as $ means \u201Cready for your command.\u201D Do not type that $ here: the command input accepts just the command.",
        "The command pwd means print working directory. Its anatomy is simple: pwd is the command name, with no extra words. Output is the text a command prints; it is not another command to copy.",
        "The worked example prints /home/learner. The leading / starts an address in the practice filesystem, and the full line names your current folder. A success status of 0 means the command finished normally."
      ],
      terms: [
        {
          word: "shell",
          meaning: "The program that reads and runs your commands."
        },
        {
          word: "prompt",
          meaning: "A ready signal before a command; do not type it into the command input."
        },
        {
          word: "current directory",
          meaning: "The folder commands use as their starting place."
        },
        {
          word: "output",
          meaning: "Text printed by a command."
        }
      ],
      steps: [
        "Select \u201C1 \xB7 Learn\u201D and \u201CRun example\u201D. Look for /home/learner in its output, separate from the command text.",
        "In the \u201CYour command\u201D input on \u201C2 \xB7 Try\u201D, type pwd (without a $) and use the \u201CRun\u201D button. This first command is deliberately coached.",
        "Observe your output and success status. Use \u201CCheck my work\u201D, then compare the result.",
        "On \u201C3 \xB7 Check\u201D, choose \u201CRun automatic checks\u201D and compare Expected with Actual. Answer both concept questions, then choose \u201CCheck concepts & finish lesson\u201D."
      ],
      example: {
        title: "Ask where the example starts",
        explanation: "This introductory example intentionally uses the same first command. Read the returned folder address, not a list of files.",
        files: {},
        directories: [],
        cwd: "/home/learner",
        code: "pwd",
        stdout: "/home/learner\n",
        stderr: "",
        exitCode: 0
      },
      task: {
        goal: "Ask the training shell to print its current directory.",
        requirements: [
          "Your last command prints /home/learner on its own line.",
          "Your last command finishes with status 0."
        ],
        files: {},
        directories: [],
        cwd: "/home/learner",
        editor: null,
        runCommand: null,
        checks: [
          {
            id: "location-output",
            label: "The folder address is printed",
            kind: "stdout",
            expected: "/home/learner\n",
            path: null,
            command: null,
            stderr: null,
            exitCode: null,
            clue: "pwd prints the folder address; the prompt marker is not part of the command."
          },
          {
            id: "success",
            label: "The command succeeds",
            kind: "exit",
            expected: 0,
            path: null,
            command: null,
            stderr: null,
            exitCode: null,
            clue: "A successful command reports status 0."
          }
        ]
      },
      hints: [
        "The command name is short for print working directory.",
        "Type in the challenge command input, not in the example output.",
        "For this first task, enter only pwd, run it, and compare the printed address."
      ],
      resources: [
        {
          label: "GNU Bash: working-directory builtins",
          url: "https://www.gnu.org/software/bash/manual/html_node/Bourne-Shell-Builtins.html"
        }
      ],
      quiz: [
        {
          prompt: "If an example shows $ pwd, what do you type in this page\u2019s command input?",
          options: [
            "The word output",
            "Only $",
            "pwd",
            "/home/learner"
          ],
          correct: 2,
          clue: "The ready marker belongs to the terminal display, not the command."
        },
        {
          prompt: "What does /home/learner in the pwd output describe?",
          options: [
            "Your current practice folder",
            "Your computer model",
            "An error message",
            "A command to run next"
          ],
          correct: 0,
          clue: "Read the output as a filesystem address."
        }
      ],
      local: null
    },
    {
      id: "s01-l02",
      title: "List names, then read a file",
      minutes: 7,
      mode: "shell",
      why: "Seeing a filename and reading its contents are different actions.",
      teach: [
        "ls lists names in the current directory. In the example, ls shows a folder named desk. A name in a listing is not the text inside that file or folder.",
        "cat reads a text file and prints its contents. In cat desk/card.txt, cat is the command name and desk/card.txt is an argument: extra information telling the command which file to read.",
        "A slash between names means \u201Cinside\u201D: desk/card.txt means card.txt inside desk. You do not type the displayed file contents back into the shell.",
        "The example prints a short reminder after the listing. The challenge has different supplied files. Read their names with ls, then read the requested text with cat; you do not need to create files."
      ],
      terms: [
        {
          word: "argument",
          meaning: "An extra word giving a command information, such as a filename."
        },
        {
          word: "ls",
          meaning: "A command that lists file and directory names."
        },
        {
          word: "cat",
          meaning: "A command that prints text from a file."
        },
        {
          word: "path",
          meaning: "An address locating a file or directory."
        }
      ],
      steps: [
        "Select \u201C1 \xB7 Learn\u201D and \u201CRun example\u201D and compare its first line (a name) with its second line (file contents).",
        "Use the \u201CYour command\u201D input on \u201C2 \xB7 Try\u201D and run button to list the supplied names. Find welcome.txt in the output.",
        "Run a command to read welcome.txt. Observe the message, then use \u201CCheck my work\u201D while that reading is your last run.",
        "On \u201C3 \xB7 Check\u201D, choose \u201CRun automatic checks\u201D and compare Expected with Actual. Answer both concept questions, then choose \u201CCheck concepts & finish lesson\u201D."
      ],
      example: {
        title: "A name is not its contents",
        explanation: "The example lists desk, then reads the file inside it. Each line of code is a separate command.",
        files: {
          "/home/learner/desk/card.txt": "Bring a notebook.\n"
        },
        directories: [],
        cwd: "/home/learner",
        code: "ls\ncat desk/card.txt",
        stdout: "desk\nBring a notebook.\n",
        stderr: "",
        exitCode: 0
      },
      task: {
        goal: "Read the supplied welcome.txt file, leaving its message as your last output.",
        requirements: [
          "Your last output is exactly: Your practice trail starts here.",
          "The read succeeds with status 0."
        ],
        files: {
          "/home/learner/welcome.txt": "Your practice trail starts here.\n",
          "/home/learner/supplies.txt": "pencil\npaper\n"
        },
        directories: [],
        cwd: "/home/learner",
        editor: null,
        runCommand: null,
        checks: [
          {
            id: "message",
            label: "The welcome message is printed",
            kind: "stdout",
            expected: "Your practice trail starts here.\n",
            path: null,
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the goal, then inspect the named file or command."
          },
          {
            id: "success",
            label: "The read succeeds",
            kind: "exit",
            expected: 0,
            path: null,
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the goal, then inspect the named file or command."
          }
        ]
      },
      hints: [
        "Listing names does not show the text inside each file.",
        "The reading command takes a filename as its argument.",
        "Use the exact name welcome.txt after the command that prints file contents."
      ],
      resources: [
        {
          label: "GNU Coreutils: ls",
          url: "https://www.gnu.org/software/coreutils/manual/html_node/ls-invocation.html"
        },
        {
          label: "GNU Coreutils: cat",
          url: "https://www.gnu.org/software/coreutils/manual/html_node/cat-invocation.html"
        }
      ],
      quiz: [
        {
          prompt: "What is note.txt in cat note.txt?",
          options: [
            "The prompt",
            "An argument selecting a file",
            "The command name",
            "A success status"
          ],
          correct: 1,
          clue: "Separate the action word from the extra information it receives."
        },
        {
          prompt: "What does ls normally show?",
          options: [
            "Names of files and folders",
            "The contents of every file",
            "Only error messages",
            "The current file\u2019s first sentence"
          ],
          correct: 0,
          clue: "Think of looking at labels on a shelf rather than opening each item."
        }
      ],
      local: null
    },
    {
      id: "s01-l03",
      title: "Read an error without panic",
      minutes: 6,
      mode: "shell",
      why: "An error can tell you what to investigate without damaging your work.",
      teach: [
        "A command can print ordinary output, an error message, or both. The error stream is called stderr; ordinary output is called stdout. The page displays these separately so you can tell them apart.",
        "In the example, cat absent.txt asks to read a file that does not exist. The error names that file and says it is missing. No text is read, so ordinary output is empty. Reading a missing file does not create it.",
        "The exit status is a number: 0 means success; a nonzero number means the command did not report success. This missing-file example returns 1. Do not assume every command uses 1 for every problem.",
        "Use ls to compare the supplied names with the name in an error. In this exercise the missing name is intentional. The check looks for empty ordinary output and status 1, not for success."
      ],
      terms: [
        {
          word: "stdout",
          meaning: "The ordinary output stream."
        },
        {
          word: "stderr",
          meaning: "A separate stream used for error messages."
        },
        {
          word: "exit status",
          meaning: "A number reporting success (0) or another outcome (nonzero)."
        }
      ],
      steps: [
        "Select \u201C1 \xB7 Learn\u201D and \u201CRun example\u201D. Observe the empty ordinary output, the missing-file error, and status 1.",
        "In the \u201CYour command\u201D input on \u201C2 \xB7 Try\u201D, run a listing and confirm present.txt exists but not tomorrow.txt.",
        "Ask the reading command to open tomorrow.txt. Leave that run last, inspect the error area, then use \u201CCheck my work\u201D. The expected failure is the task.",
        "On \u201C3 \xB7 Check\u201D, choose \u201CRun automatic checks\u201D and compare Expected with Actual. Answer both concept questions, then choose \u201CCheck concepts & finish lesson\u201D."
      ],
      example: {
        title: "A deliberately missing example file",
        explanation: "The error reports a missing file; it is not text read from that file.",
        files: {
          "/home/learner/present-demo.txt": "This exists.\n"
        },
        directories: [],
        cwd: "/home/learner",
        code: "cat absent.txt",
        stdout: "",
        stderr: "cat: absent.txt: No such file or directory\n",
        exitCode: 1
      },
      task: {
        goal: "Observe an intentional failed read of the missing tomorrow.txt without changing present.txt.",
        requirements: [
          "Your last read has empty ordinary output.",
          "Your last command has exit status 1; its error area reports a missing file.",
          "present.txt still contains Keep this note. and tomorrow.txt remains absent."
        ],
        files: {
          "/home/learner/present.txt": "Keep this note.\n"
        },
        directories: [],
        cwd: "/home/learner",
        editor: null,
        runCommand: null,
        checks: [
          {
            id: "empty",
            label: "No ordinary text is read",
            kind: "stdout",
            expected: "",
            path: null,
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the goal, then inspect the named file or command."
          },
          {
            id: "expected-failure",
            label: "The deliberate failed read returns 1",
            kind: "exit",
            expected: 1,
            path: null,
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the goal, then inspect the named file or command."
          },
          {
            id: "keep",
            label: "The supplied note is unchanged",
            kind: "file",
            expected: "Keep this note.\n",
            path: "/home/learner/present.txt",
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the goal, then inspect the named file or command."
          },
          {
            id: "missing-file-error",
            label: "The error reports the missing tomorrow.txt",
            kind: "stderr",
            expected: "cat: tomorrow.txt: No such file or directory\n",
            path: null,
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Read the error area: does it describe a failed read of the named missing file?"
          },
          {
            id: "absent",
            label: "No missing file was created",
            kind: "missing",
            expected: 1,
            path: "/home/learner/tomorrow.txt",
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the goal, then inspect the named file or command."
          }
        ]
      },
      hints: [
        "A failed read is expected here; do not fix it by creating the missing file.",
        "Use a filename that the listing does not contain, exactly as the goal requests.",
        "After inspecting the listing, use the reading command with tomorrow.txt and check before running anything else."
      ],
      resources: [
        {
          label: "GNU Coreutils: exit status",
          url: "https://www.gnu.org/software/coreutils/manual/html_node/Exit-status.html"
        },
        {
          label: "GNU Coreutils: cat",
          url: "https://www.gnu.org/software/coreutils/manual/html_node/cat-invocation.html"
        }
      ],
      quiz: [
        {
          prompt: "Where should a missing-file complaint appear?",
          options: [
            "Inside a newly created file",
            "Only in the prompt",
            "In the error stream (stderr)",
            "As the contents of the missing file"
          ],
          correct: 2,
          clue: "Commands have a separate place to explain problems."
        },
        {
          prompt: "What does exit status 0 mean?",
          options: [
            "The file is empty",
            "The command reported success",
            "The command was never run",
            "There are no folders"
          ],
          correct: 1,
          clue: "Status is about the command\u2019s outcome, not the length of its output."
        }
      ],
      local: null
    }
  ]
};

// curriculum/s02.json
var s02_default = {
  id: "s02",
  title: "Moving around",
  summary: "Use folder addresses, navigate from your current location, and handle spaces and letter case.",
  level: "First steps",
  exam: [
    {
      prompt: "Which path is absolute?",
      options: [
        "notes/today.txt",
        "../today.txt",
        "./today.txt",
        "/home/learner/today.txt"
      ],
      correct: 3,
      clue: "An absolute path starts at the filesystem root."
    },
    {
      prompt: "What does .. mean as a directory path?",
      options: [
        "The parent directory",
        "An empty file",
        "The home directory in every location",
        "The last printed line"
      ],
      correct: 0,
      clue: "Picture one step upward in the folder tree."
    },
    {
      prompt: 'Why quote "Travel Notes" when it is one folder name?',
      options: [
        "To make it lowercase",
        "To keep the space inside one argument",
        "To delete the space from its actual name",
        "To turn it into a command"
      ],
      correct: 1,
      clue: "The shell otherwise treats spaces between words as argument separators."
    }
  ],
  lessons: [
    {
      id: "s02-l01",
      title: "Addresses and cd",
      minutes: 7,
      mode: "shell",
      why: "Change the starting folder instead of guessing where commands will look.",
      teach: [
        "A filesystem is a tree of folders. An absolute path starts with /, the root of that tree. /home/learner/garden is a complete address; garden is a relative path, interpreted from your current directory.",
        "cd changes directory. In cd garden, cd is the command and garden is its destination argument. It normally prints nothing when it succeeds. Run pwd afterward to see the new location.",
        "The example enters garden using a relative path, then returns using an absolute path. The printed addresses confirm each move. No file text is changed by cd.",
        "The challenge supplies a different folder named workshop. Each lesson starts fresh at /home/learner. Your challenge directory persists between runs of its command input; examples use a separate practice state."
      ],
      terms: [
        {
          word: "absolute path",
          meaning: "A complete filesystem address beginning with /."
        },
        {
          word: "relative path",
          meaning: "An address interpreted from the current directory."
        },
        {
          word: "cd",
          meaning: "Change directory: choose the starting folder for later commands."
        }
      ],
      steps: [
        "Select \u201C1 \xB7 Learn\u201D and \u201CRun example\u201D and observe the two addresses printed by pwd; cd itself is quiet.",
        "Use the \u201CYour command\u201D input on \u201C2 \xB7 Try\u201D to inspect the supplied names, then move into workshop with the navigation command.",
        "Run the location command to confirm the address. Use \u201CCheck my work\u201D while your current directory is workshop.",
        "On \u201C3 \xB7 Check\u201D, choose \u201CRun automatic checks\u201D and compare Expected with Actual. Answer both concept questions, then choose \u201CCheck concepts & finish lesson\u201D."
      ],
      example: {
        title: "Enter the garden and return",
        explanation: "The relative destination works from home. The absolute destination identifies home directly.",
        files: {},
        directories: [
          "/home/learner/garden"
        ],
        cwd: "/home/learner",
        code: "cd garden\npwd\ncd /home/learner\npwd",
        stdout: "/home/learner/garden\n/home/learner\n",
        stderr: "",
        exitCode: 0
      },
      task: {
        goal: "Finish in the supplied workshop directory.",
        requirements: [
          "Your current directory is /home/learner/workshop.",
          "The supplied tools.txt file is unchanged."
        ],
        files: {
          "/home/learner/workshop/tools.txt": "brush\n"
        },
        directories: [],
        cwd: "/home/learner",
        editor: null,
        runCommand: null,
        checks: [
          {
            id: "destination",
            label: "The working directory is workshop",
            kind: "cwd",
            expected: "/home/learner/workshop",
            path: null,
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the goal, then inspect the named file or command."
          },
          {
            id: "keep",
            label: "The tools list stays unchanged",
            kind: "file",
            expected: "brush\n",
            path: "/home/learner/workshop/tools.txt",
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the goal, then inspect the named file or command."
          }
        ]
      },
      hints: [
        "Check where you start before choosing a relative destination.",
        "Use cd with the folder name, rather than cat, which reads files.",
        "A relative folder name is enough from home; a complete address also works. Verify with pwd."
      ],
      resources: [
        {
          label: "GNU Bash: cd",
          url: "https://www.gnu.org/software/bash/manual/html_node/Bourne-Shell-Builtins.html"
        }
      ],
      quiz: [
        {
          prompt: "What does a leading / tell you about a path?",
          options: [
            "It is an error",
            "It starts from the filesystem root",
            "It always points to a file",
            "It is a command option"
          ],
          correct: 1,
          clue: "Compare a complete address with a direction relative to where you stand."
        },
        {
          prompt: "cd succeeds but prints no text. How can you see where you are?",
          options: [
            "Read every file",
            "Run cat without a filename",
            "Run pwd",
            "Assume it failed"
          ],
          correct: 2,
          clue: "Use the command that prints your working directory."
        }
      ],
      local: null
    },
    {
      id: "s02-l02",
      title: "Parent and home",
      minutes: 7,
      mode: "shell",
      why: "Use short paths to go up one level or return to your practice home.",
      teach: [
        "The special directory name .. means the parent: the folder containing your current folder. A single . means the current folder. These are paths, not commands by themselves.",
        "In cd .., cd is the navigation command and .. selects one level up. From /home/learner/pond/reeds, that reaches /home/learner/pond, not home immediately.",
        "The unquoted shortcut ~ names your home directory. In this sandbox that is /home/learner, regardless of your current folder. cd ~ returns there. On another computer, a user\u2019s home address can be different.",
        "The example prints the parent address and then the home address. Its last output means the shell is back at home, not that the nested directories have disappeared."
      ],
      terms: [
        {
          word: "parent directory",
          meaning: "The folder one level above another folder."
        },
        {
          word: "..",
          meaning: "A relative path to the parent directory."
        },
        {
          word: ".",
          meaning: "A relative path to the current directory."
        },
        {
          word: "~",
          meaning: "An unquoted shell shortcut for your home directory."
        }
      ],
      steps: [
        "Select \u201C1 \xB7 Learn\u201D and \u201CRun example\u201D and compare the intermediate parent address with the final home address.",
        "In the \u201CYour command\u201D input on \u201C2 \xB7 Try\u201D, enter projects/draft, then go to its parent. Run pwd to observe /home/learner/projects.",
        "Use the home shortcut to return home. Print your location as the last run, then use \u201CCheck my work\u201D.",
        "On \u201C3 \xB7 Check\u201D, choose \u201CRun automatic checks\u201D and compare Expected with Actual. Answer both concept questions, then choose \u201CCheck concepts & finish lesson\u201D."
      ],
      example: {
        title: "Leave a nested garden folder",
        explanation: "Each cd .. climbs just one level. The home shortcut returns to home directly.",
        files: {},
        directories: [
          "/home/learner/pond/reeds"
        ],
        cwd: "/home/learner",
        code: "cd pond/reeds\ncd ..\npwd\ncd ~\npwd",
        stdout: "/home/learner/pond\n/home/learner\n",
        stderr: "",
        exitCode: 0
      },
      task: {
        goal: "Practice the parent move, then finish at home with its address printed.",
        requirements: [
          "Your final current directory is /home/learner.",
          "Your last output is /home/learner on its own line."
        ],
        files: {},
        directories: [
          "/home/learner/projects/draft"
        ],
        cwd: "/home/learner",
        editor: null,
        runCommand: null,
        checks: [
          {
            id: "home",
            label: "The current directory is home",
            kind: "cwd",
            expected: "/home/learner",
            path: null,
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the goal, then inspect the named file or command."
          },
          {
            id: "address",
            label: "The home address is printed last",
            kind: "stdout",
            expected: "/home/learner\n",
            path: null,
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the goal, then inspect the named file or command."
          }
        ]
      },
      hints: [
        "Each .. refers to one parent, not necessarily to home.",
        "Use pwd after the parent move to observe the intermediate location.",
        "The unquoted ~ shortcut is a destination for cd; print your location after returning."
      ],
      resources: [
        {
          label: "GNU Bash: tilde expansion",
          url: "https://www.gnu.org/software/bash/manual/html_node/Tilde-Expansion.html"
        },
        {
          label: "GNU Bash: cd",
          url: "https://www.gnu.org/software/bash/manual/html_node/Bourne-Shell-Builtins.html"
        }
      ],
      quiz: [
        {
          prompt: "From /home/learner/box/inner, where does cd .. go?",
          options: [
            "/home",
            "/home/learner/box",
            "/home/learner",
            "/"
          ],
          correct: 1,
          clue: "Remove just the last folder component."
        },
        {
          prompt: "In this sandbox, which location does unquoted ~ name?",
          options: [
            "Any parent directory",
            "The current directory every time",
            "/home/learner",
            "The last file opened"
          ],
          correct: 2,
          clue: "The shortcut refers to the learner\u2019s home, not to the parent of an arbitrary folder."
        }
      ],
      local: null
    },
    {
      id: "s02-l03",
      title: "Spaces and exact letter case",
      minutes: 7,
      mode: "shell",
      why: "Read the intended file even when names contain spaces or differ only by case.",
      teach: [
        'Spaces normally separate command words. In cd "Book Shelf", the double quotes keep Book Shelf together as one argument. The quotes are shell punctuation; they are not part of the folder\u2019s actual name.',
        "This practice filesystem distinguishes uppercase and lowercase letters. Card.txt and card.txt can be different files. Copy the name\u2019s case exactly when choosing a path.",
        'In the example, cd "Book Shelf" selects a folder with a space, and cat Card.txt selects its uppercase file. The displayed message comes from that file, not its lowercase neighbor.',
        "You can quote a whole path, including slashes. Quotes protect spaces but do not correct a wrong letter or change the current directory automatically."
      ],
      terms: [
        {
          word: "quoting",
          meaning: "Using quote marks to keep text together or protect it from shell interpretation."
        },
        {
          word: "case-sensitive",
          meaning: "Uppercase and lowercase spellings can identify different names."
        }
      ],
      steps: [
        "Select \u201C1 \xB7 Learn\u201D and \u201CRun example\u201D and observe which card\u2019s text is printed.",
        "Use the \u201CYour command\u201D input on \u201C2 \xB7 Try\u201D to list names. Move into the supplied Travel Notes folder, keeping its space within one argument.",
        "List the two note names inside it. Read Plan.txt with its exact capital P, then use \u201CCheck my work\u201D without running another command.",
        "On \u201C3 \xB7 Check\u201D, choose \u201CRun automatic checks\u201D and compare Expected with Actual. Answer both concept questions, then choose \u201CCheck concepts & finish lesson\u201D."
      ],
      example: {
        title: "Choose the uppercase card",
        explanation: "Both cards exist. Quoting selects the spaced folder; case selects the intended file.",
        files: {
          "/home/learner/Book Shelf/Card.txt": "Read the blue book.\n",
          "/home/learner/Book Shelf/card.txt": "Read the red book.\n"
        },
        directories: [],
        cwd: "/home/learner",
        code: 'cd "Book Shelf"\ncat Card.txt',
        stdout: "Read the blue book.\n",
        stderr: "",
        exitCode: 0
      },
      task: {
        goal: "Enter Travel Notes and read its uppercase Plan.txt file.",
        requirements: [
          "Your current directory is /home/learner/Travel Notes.",
          "Your last output is Meet at the north gate.",
          "The read exits with status 0."
        ],
        files: {
          "/home/learner/Travel Notes/Plan.txt": "Meet at the north gate.\n",
          "/home/learner/Travel Notes/plan.txt": "Meet at the south gate.\n"
        },
        directories: [],
        cwd: "/home/learner",
        editor: null,
        runCommand: null,
        checks: [
          {
            id: "folder",
            label: "The spaced directory is selected",
            kind: "cwd",
            expected: "/home/learner/Travel Notes",
            path: null,
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the goal, then inspect the named file or command."
          },
          {
            id: "right-file",
            label: "The uppercase plan is read",
            kind: "stdout",
            expected: "Meet at the north gate.\n",
            path: null,
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the goal, then inspect the named file or command."
          },
          {
            id: "success",
            label: "The read succeeds",
            kind: "exit",
            expected: 0,
            path: null,
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the goal, then inspect the named file or command."
          }
        ]
      },
      hints: [
        "The folder\u2019s space needs protection from word splitting.",
        "The requested filename starts with a capital letter; the lowercase file is different.",
        "Quote the spaced destination as one argument to cd, then use the exact filename with the reading command."
      ],
      resources: [
        {
          label: "GNU Bash: quoting",
          url: "https://www.gnu.org/software/bash/manual/html_node/Quoting.html"
        }
      ],
      quiz: [
        {
          prompt: 'How many destination arguments are in cd "Blue Room"?',
          options: [
            "Two",
            "Zero",
            "Three",
            "One"
          ],
          correct: 3,
          clue: "Quote marks group the words between them."
        },
        {
          prompt: "In this sandbox, are Note.txt and note.txt necessarily the same file?",
          options: [
            "Yes, quotes make them equal",
            "No, their letter case differs",
            "Yes, extensions ignore case",
            "Only when read with cat"
          ],
          correct: 1,
          clue: "Quoting changes shell interpretation, not the spelling of a filename."
        }
      ],
      local: null
    }
  ]
};

// curriculum/s03.json
var s03_default = {
  id: "s03",
  title: "Files safely",
  summary: "Create small practice items, copy and rename them, then remove one deliberately disposable file.",
  level: "Building confidence",
  exam: [
    {
      prompt: "Which command makes a directory?",
      options: [
        "cat",
        "mkdir",
        "pwd",
        "touch"
      ],
      correct: 1,
      clue: "A directory is a container, not an empty text file."
    },
    {
      prompt: "What is the usual difference between copying and moving a file?",
      options: [
        "Moving always duplicates it",
        "Copying removes the original",
        "Copying keeps the original; moving relocates or renames it",
        "They always do exactly the same thing"
      ],
      correct: 2,
      clue: "Consider whether the source name still exists afterward."
    },
    {
      prompt: "Before removing one disposable file, what is the safer first step?",
      options: [
        "Inspect its exact name and contents",
        "Use the broadest possible path",
        "Delete its parent folder",
        "Assume its name is unimportant"
      ],
      correct: 0,
      clue: "Narrow the target and confirm it before the action that has no automatic undo."
    }
  ],
  lessons: [
    {
      id: "s03-l01",
      title: "Make a folder and an empty file",
      minutes: 7,
      mode: "shell",
      why: "Build a tiny workspace without needing a text editor.",
      teach: [
        "mkdir creates a directory. In mkdir sketches, mkdir is the command and sketches names the new directory in your current folder. Here, create one folder at a time, inside the practice home.",
        "touch creates an empty file when the named file does not already exist. In touch sketches/idea.txt, the argument names a file inside sketches. Its parent folder must already exist.",
        "If a file already exists, touch does not empty its contents; it normally updates its timestamps. We use it only to make a new empty file in this task.",
        "Both commands are usually silent on success. The example\u2019s ls command makes the new name visible. An empty file contains no text at all, not even a blank line."
      ],
      terms: [
        {
          word: "mkdir",
          meaning: "Create a directory at the supplied path."
        },
        {
          word: "touch",
          meaning: "Create a missing empty file, or update timestamps of an existing file."
        },
        {
          word: "empty file",
          meaning: "A file containing zero characters."
        }
      ],
      steps: [
        "Select \u201C1 \xB7 Learn\u201D and \u201CRun example\u201D and observe idea.txt in the listing. The creation commands themselves print nothing.",
        "In the \u201CYour command\u201D input on \u201C2 \xB7 Try\u201D, create the requested folder first, then an empty file inside it. Run each command with \u201CRun\u201D.",
        "Inspect the folder with ls, then use \u201CCheck my work\u201D. Checks inspect the filesystem, so your last output need not be a particular sentence.",
        "On \u201C3 \xB7 Check\u201D, choose \u201CRun automatic checks\u201D and compare Expected with Actual. Answer both concept questions, then choose \u201CCheck concepts & finish lesson\u201D."
      ],
      example: {
        title: "A folder for sketches",
        explanation: "The parent is created before the file. The listing confirms the file name.",
        files: {},
        directories: [],
        cwd: "/home/learner",
        code: "mkdir sketches\ntouch sketches/idea.txt\nls sketches",
        stdout: "idea.txt\n",
        stderr: "",
        exitCode: 0
      },
      task: {
        goal: "Create a drafts folder containing a new empty todo.txt file.",
        requirements: [
          "The directory /home/learner/drafts exists.",
          "The file /home/learner/drafts/todo.txt exists and is completely empty."
        ],
        files: {},
        directories: [],
        cwd: "/home/learner",
        editor: null,
        runCommand: null,
        checks: [
          {
            id: "folder",
            label: "The drafts directory exists",
            kind: "directory",
            expected: 1,
            path: "/home/learner/drafts",
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the goal, then inspect the named file or command."
          },
          {
            id: "empty-file",
            label: "The new todo file is empty",
            kind: "file",
            expected: "",
            path: "/home/learner/drafts/todo.txt",
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the goal, then inspect the named file or command."
          }
        ]
      },
      hints: [
        "A directory and a file need different creation commands.",
        "Create the containing folder before using a path inside it.",
        "Use mkdir for the folder and touch for the missing file; use the task\u2019s names rather than the example\u2019s names."
      ],
      resources: [
        {
          label: "GNU Coreutils: mkdir",
          url: "https://www.gnu.org/software/coreutils/manual/html_node/mkdir-invocation.html"
        },
        {
          label: "GNU Coreutils: touch",
          url: "https://www.gnu.org/software/coreutils/manual/html_node/touch-invocation.html"
        }
      ],
      quiz: [
        {
          prompt: "What must exist before touch folder/note.txt can create its file?",
          options: [
            "A prompt file",
            "The folder directory",
            "A copy of note.txt",
            "A script"
          ],
          correct: 1,
          clue: "A file\u2019s containing directory must be available."
        },
        {
          prompt: "What happens to existing text when touch is used on that file?",
          options: [
            "The text is automatically deleted",
            "It becomes uppercase",
            "The text is kept",
            "The file becomes a directory"
          ],
          correct: 2,
          clue: "Creating a missing empty file is not the same as erasing an existing one."
        }
      ],
      local: null
    },
    {
      id: "s03-l02",
      title: "Copy, then rename",
      minutes: 8,
      mode: "shell",
      why: "Preserve an original while giving a duplicate a useful name.",
      teach: [
        "cp copies a file. In cp seed.txt spare.txt, cp is the command, seed.txt is the source, and spare.txt is the destination. The original remains, and the new file has the same text.",
        "mv moves or renames a file. In mv spare.txt labeled.txt, the source name disappears and labeled.txt refers to the moved file. Within one folder, that is a rename.",
        "Argument order matters: source first, destination second. Both commands can replace a destination that already exists. These exercises provide unused destination names; inspect the listing before choosing them.",
        "The example copies a reminder and renames only the copy. Its final listing shows the original and the renamed copy. A silent cp or mv can be successful; use ls and cat to inspect the result."
      ],
      terms: [
        {
          word: "source",
          meaning: "The existing file being copied or moved."
        },
        {
          word: "destination",
          meaning: "The new name or location receiving a copy or move."
        },
        {
          word: "cp",
          meaning: "Copy a file while retaining the original."
        },
        {
          word: "mv",
          meaning: "Move or rename a file."
        }
      ],
      steps: [
        "Select \u201C1 \xB7 Learn\u201D and \u201CRun example\u201D and observe that seed.txt remains while spare.txt does not.",
        "In the \u201CYour command\u201D input on \u201C2 \xB7 Try\u201D, inspect the supplied original.txt with ls and cat. Copy it to an unused temporary name of your choice.",
        "Rename your copy to delivery.txt without moving the original. Inspect both remaining files, then use \u201CCheck my work\u201D.",
        "On \u201C3 \xB7 Check\u201D, choose \u201CRun automatic checks\u201D and compare Expected with Actual. Answer both concept questions, then choose \u201CCheck concepts & finish lesson\u201D."
      ],
      example: {
        title: "Rename a spare reminder",
        explanation: "Copying keeps the source. Moving the copy gives it a new name.",
        files: {
          "/home/learner/seed.txt": "Water the tray.\n"
        },
        directories: [],
        cwd: "/home/learner",
        code: "cp seed.txt spare.txt\nmv spare.txt labeled.txt\nls",
        stdout: "labeled.txt\nseed.txt\n",
        stderr: "",
        exitCode: 0
      },
      task: {
        goal: "Keep original.txt and create an identical copy named delivery.txt, practicing a rename on the copy.",
        requirements: [
          "original.txt still contains Pack the green folder.",
          "delivery.txt contains exactly the same text."
        ],
        files: {
          "/home/learner/original.txt": "Pack the green folder.\n"
        },
        directories: [],
        cwd: "/home/learner",
        editor: null,
        runCommand: null,
        checks: [
          {
            id: "original",
            label: "The source is preserved",
            kind: "file",
            expected: "Pack the green folder.\n",
            path: "/home/learner/original.txt",
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the goal, then inspect the named file or command."
          },
          {
            id: "copy",
            label: "The final copy has the right contents",
            kind: "file",
            expected: "Pack the green folder.\n",
            path: "/home/learner/delivery.txt",
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the goal, then inspect the named file or command."
          }
        ]
      },
      hints: [
        "Copy before renaming so the source can stay untouched.",
        "For both commands, put the current source name before its destination.",
        "Use cp to make a spare with an unused name, then mv on that spare to give it the requested final name."
      ],
      resources: [
        {
          label: "GNU Coreutils: cp",
          url: "https://www.gnu.org/software/coreutils/manual/html_node/cp-invocation.html"
        },
        {
          label: "GNU Coreutils: mv",
          url: "https://www.gnu.org/software/coreutils/manual/html_node/mv-invocation.html"
        }
      ],
      quiz: [
        {
          prompt: "After cp a.txt b.txt succeeds with a new destination, which file remains?",
          options: [
            "Only b.txt",
            "Neither file",
            "Only a.txt",
            "Both a.txt and b.txt"
          ],
          correct: 3,
          clue: "A copy duplicates rather than relocates."
        },
        {
          prompt: "In mv draft.txt final.txt, what does final.txt mean?",
          options: [
            "The source",
            "The destination",
            "The command",
            "The contents to print"
          ],
          correct: 1,
          clue: "The action\u2019s two path arguments have an order."
        }
      ],
      local: null
    },
    {
      id: "s03-l03",
      title: "Remove only a disposable file",
      minutes: 8,
      mode: "shell",
      why: "Practice a narrow deletion after checking what the target really contains.",
      teach: [
        "rm removes a named file. In rm bin/old.txt, rm is the command and bin/old.txt is the exact target. It normally prints nothing on success. It does not send the file to a recycle bin or offer an automatic undo.",
        "Inspect before removing: use pwd to check your location, ls to see the names, and cat to read the disposable file. A nearby file may be important even if its name looks similar.",
        "The example removes one supplied practice file and lists the remaining keeper. We use no broad patterns, recursive options, or system paths. Never experiment with those on your own computer.",
        "This challenge uses only disposable training data under /home/learner. The reset control restores lesson fixtures after warning that current work will be lost. Reset is a course feature, not a general undo for rm."
      ],
      terms: [
        {
          word: "rm",
          meaning: "Remove the exact named file; no automatic undo."
        },
        {
          word: "disposable",
          meaning: "Provided for practice and safe to discard within this lesson."
        }
      ],
      steps: [
        "Select \u201C1 \xB7 Learn\u201D and \u201CRun example\u201D and observe which name disappears from its final listing.",
        "In the \u201CYour command\u201D input on \u201C2 \xB7 Try\u201D, inspect your location, the discard folder, and old-note.txt inside it. Confirm its contents say it is disposable.",
        "Remove only that inspected file, leaving keep-note.txt and the folder intact. List the remaining names, then use \u201CCheck my work\u201D.",
        "On \u201C3 \xB7 Check\u201D, choose \u201CRun automatic checks\u201D and compare Expected with Actual. Answer both concept questions, then choose \u201CCheck concepts & finish lesson\u201D."
      ],
      example: {
        title: "Delete one inspected practice file",
        explanation: "The reading confirms the disposable target. The final listing still contains the keeper.",
        files: {
          "/home/learner/bin/old.txt": "Disposable demo note.\n",
          "/home/learner/bin/keep.txt": "Keep the demo list.\n"
        },
        directories: [],
        cwd: "/home/learner",
        code: "pwd\nls bin\ncat bin/old.txt\nrm bin/old.txt\nls bin",
        stdout: "/home/learner\nkeep.txt\nold.txt\nDisposable demo note.\nkeep.txt\n",
        stderr: "",
        exitCode: 0
      },
      task: {
        goal: "Inspect and remove discard/old-note.txt, preserving its neighbor and containing directory.",
        requirements: [
          "discard/old-note.txt is absent.",
          "discard/keep-note.txt still contains Save this packing list.",
          "The discard directory still exists."
        ],
        files: {
          "/home/learner/discard/old-note.txt": "Disposable practice note.\n",
          "/home/learner/discard/keep-note.txt": "Save this packing list.\n"
        },
        directories: [],
        cwd: "/home/learner",
        editor: null,
        runCommand: null,
        checks: [
          {
            id: "removed",
            label: "Only the disposable target is gone",
            kind: "missing",
            expected: 1,
            path: "/home/learner/discard/old-note.txt",
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the goal, then inspect the named file or command."
          },
          {
            id: "neighbor",
            label: "The neighboring note is unchanged",
            kind: "file",
            expected: "Save this packing list.\n",
            path: "/home/learner/discard/keep-note.txt",
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the goal, then inspect the named file or command."
          },
          {
            id: "folder",
            label: "The containing directory is retained",
            kind: "directory",
            expected: 1,
            path: "/home/learner/discard",
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the goal, then inspect the named file or command."
          }
        ]
      },
      hints: [
        "Check the exact target\u2019s text before using a removal command.",
        "The goal removes one file, not the directory and not its neighbor.",
        "Use rm with only the inspected file\u2019s exact path; a later listing should still show the keeper."
      ],
      resources: [
        {
          label: "GNU Coreutils: rm",
          url: "https://www.gnu.org/software/coreutils/manual/html_node/rm-invocation.html"
        }
      ],
      quiz: [
        {
          prompt: "Does ordinary rm send a file to a recycle bin?",
          options: [
            "Yes, always",
            "Only if the name has spaces",
            "No; do not rely on automatic undo",
            "Yes, when run from home"
          ],
          correct: 2,
          clue: "The course reset feature and a real command\u2019s deletion behavior are different things."
        },
        {
          prompt: "Which target is narrowest when removing one old practice note?",
          options: [
            "The whole home directory",
            "The exact inspected file path",
            "Every file with a similar name",
            "The containing folder"
          ],
          correct: 1,
          clue: "Match the scope of the action to the one item you intend to remove."
        }
      ],
      local: null
    }
  ]
};

// curriculum/s04.json
var s04_default = {
  id: "s04",
  title: "Words and text",
  summary: "Print exact text, quote it safely, reuse a value, find literal text, and finally connect small text commands.",
  level: "Building confidence",
  exam: [
    {
      prompt: "Which quote style keeps a literal $ in ordinary text without variable expansion?",
      options: [
        "No quotes",
        "Single quotes",
        "Only a leading slash",
        "Parent directory notation"
      ],
      correct: 1,
      clue: "Review which quotes protect all the characters inside them in these simple examples."
    },
    {
      prompt: "What does grep -F do with its search pattern?",
      options: [
        "Renames matching files",
        "Counts directories",
        "Treats it as literal text and prints matching lines",
        "Always prints only the search word"
      ],
      correct: 2,
      clue: "Distinguish a whole selected line from just the fragment used to select it."
    },
    {
      prompt: "Why sort before uniq when finding all distinct lines?",
      options: [
        "uniq removes only adjacent duplicates",
        "sort counts words automatically",
        "A pipe renames each line",
        "wc requires alphabetic input"
      ],
      correct: 0,
      clue: "Think about repeated lines separated by other lines in the original file."
    }
  ],
  lessons: [
    {
      id: "s04-l01",
      title: "Print exactly what you mean",
      minutes: 8,
      mode: "shell",
      why: "Use quotes and a format to control spaces, dollar signs, and line breaks.",
      teach: [
        'echo prints its text arguments followed by a newline. In echo "Tea is ready", echo is the command and the quoted phrase is one argument. Use echo for simple messages, not for text whose backslashes need special handling.',
        "Single quotes protect literal text: a $ inside single quotes stays a dollar sign. Double quotes also keep spaces together, but can interpret $ as the start of a value reference. For a literal price, single quotes avoid that interpretation.",
        "printf gives you a format followed by values. In printf '%s\\n' 'Tea time', %s means \u201Cinsert one string\u201D and \\n means \u201Cprint a newline.\u201D printf itself adds no newline unless the format asks for one.",
        "When this simple %s\\n format receives two text arguments, it repeats the format and prints one argument per line. The example first uses echo, then prints a literal price and a short note. No file is created: these commands print to ordinary output."
      ],
      terms: [
        {
          word: "echo",
          meaning: "Print simple text followed by a newline."
        },
        {
          word: "single quotes",
          meaning: "Protect literal characters, including spaces and dollar signs, in these examples."
        },
        {
          word: "printf",
          meaning: "Print values using an explicit format."
        },
        {
          word: "%s and \\n",
          meaning: "Format markers for one string and a newline."
        }
      ],
      steps: [
        "Select \u201C1 \xB7 Learn\u201D and \u201CRun example\u201D and observe its three output lines. Notice that the dollar sign is printed literally.",
        "In the \u201CYour command\u201D input on \u201C2 \xB7 Try\u201D, choose printf for the exact two-line message in the goal. Keep each line\u2019s text as one argument.",
        "Run your printing command, compare spaces and punctuation in the output, then use \u201CCheck my work\u201D while that run is last.",
        "On \u201C3 \xB7 Check\u201D, choose \u201CRun automatic checks\u201D and compare Expected with Actual. Answer both concept questions, then choose \u201CCheck concepts & finish lesson\u201D."
      ],
      example: {
        title: "A small cafe notice",
        explanation: "echo adds its newline. printf repeats the string-plus-newline format for the two values.",
        files: {},
        directories: [],
        cwd: "/home/learner",
        code: `echo "Cafe opens soon"
printf '%s\\n' 'Tea costs $3' 'Bring a mug'`,
        stdout: "Cafe opens soon\nTea costs $3\nBring a mug\n",
        stderr: "",
        exitCode: 0
      },
      task: {
        goal: "Print a two-line ticket notice, with a literal dollar sign and a newline after each line.",
        requirements: [
          "Your last output has first line: Ticket costs $5",
          "Its second line is: Keep this ticket",
          "There is a newline after the second line, and no extra output."
        ],
        files: {},
        directories: [],
        cwd: "/home/learner",
        editor: null,
        runCommand: null,
        checks: [
          {
            id: "notice",
            label: "The exact two-line notice is printed",
            kind: "stdout",
            expected: "Ticket costs $5\nKeep this ticket\n",
            path: null,
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the goal, then inspect the named file or command."
          },
          {
            id: "success",
            label: "The printing succeeds",
            kind: "exit",
            expected: 0,
            path: null,
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the goal, then inspect the named file or command."
          }
        ]
      },
      hints: [
        "Use a format that inserts one string and then a newline.",
        "Single quotes protect the dollar sign from interpretation.",
        "The worked format repeats for extra text arguments; supply the task\u2019s two lines, not the cafe example\u2019s text."
      ],
      resources: [
        {
          label: "GNU Bash: quoting",
          url: "https://www.gnu.org/software/bash/manual/html_node/Quoting.html"
        },
        {
          label: "GNU Bash: printf and echo",
          url: "https://www.gnu.org/software/bash/manual/html_node/Bash-Builtins.html"
        }
      ],
      quiz: [
        {
          prompt: "What does %s mean in the simple printf format taught here?",
          options: [
            "A directory separator",
            "A success status",
            "Insert one string value",
            "Sort the values"
          ],
          correct: 2,
          clue: "The format describes how to print each value."
        },
        {
          prompt: "Why use single quotes around a literal price such as 'Cost $4'?",
          options: [
            "They write a file automatically",
            "They protect the dollar sign from expansion",
            "They change the price",
            "They remove all spaces"
          ],
          correct: 1,
          clue: "Quoting can protect more than just spaces."
        }
      ],
      local: null
    },
    {
      id: "s04-l02",
      title: "Reuse a value and find matching lines",
      minutes: 9,
      mode: "shell",
      why: "Name a small piece of text, then find lines containing it literally.",
      teach: [
        "A shell variable stores a named value. In topic=tea, topic is the name and tea is its value. There are no spaces around =. This assignment normally prints nothing; it is not the same as printing the word topic.",
        '"$topic" retrieves the stored value. The dollar sign asks for expansion; double quotes keep the resulting text in one argument. Single quotes would instead keep $topic as literal characters.',
        'grep selects lines from text. In grep -F "tea" stock.txt, grep is the command, -F is an option meaning fixed (literal) text, tea is the pattern, and stock.txt is the input file. It prints each whole line containing that text; it does not require a whole-word match.',
        "Matching is case-sensitive by default. A match returns status 0; no matching lines returns status 1 and no ordinary output, not a missing-file error. A semicolon (;) separates commands in one input: assign a value, then use it. Enter the assignment and search together on one line; no script file is needed."
      ],
      terms: [
        {
          word: "variable",
          meaning: "A name holding a value for use later in the same shell run here."
        },
        {
          word: "expansion",
          meaning: "Replacing a value reference such as $topic with the stored text."
        },
        {
          word: "option",
          meaning: "A command setting, often introduced by a dash."
        },
        {
          word: "literal pattern",
          meaning: "Text matched as written, rather than as a special pattern language."
        },
        {
          word: "semicolon ;",
          meaning: "Separate commands so they run in order within one input."
        }
      ],
      steps: [
        "Select \u201C1 \xB7 Learn\u201D and \u201CRun example\u201D and compare the printed value with the whole matching lines. The capitalized Tea line is not selected.",
        "Inspect pantry.txt using \u201CYour command\u201D and \u201CRun\u201D. Then prepare one line: a variable assignment for the literal search text oat, a semicolon, and a fixed-text search using the double-quoted variable value.",
        "Choose \u201CRun\u201D for that single line. Observe that a longer word containing oat also matches. Choose \u201CCheck my work\u201D while this search is your latest run.",
        "On \u201C3 \xB7 Check\u201D, choose \u201CRun automatic checks\u201D and compare Expected with Actual. Answer both concept questions, then choose \u201CCheck concepts & finish lesson\u201D."
      ],
      example: {
        title: "Search using a named value",
        explanation: "Semicolons run the assignment, printing command, and search in order. The stored value is printed once, then grep prints whole matching lines.",
        files: {
          "/home/learner/stock.txt": "green tea\nteapot\nTea tin\ncoffee\n"
        },
        directories: [],
        cwd: "/home/learner",
        code: `topic=tea; printf '%s\\n' "$topic"; grep -F "$topic" stock.txt`,
        stdout: "tea\ngreen tea\nteapot\n",
        stderr: "",
        exitCode: 0
      },
      task: {
        goal: "Using a variable in one run, find the pantry lines containing the literal lowercase text oat.",
        requirements: [
          "Your last output is exactly two lines: oat milk then goat cheese.",
          "The search succeeds with status 0.",
          "pantry.txt is unchanged."
        ],
        files: {
          "/home/learner/pantry.txt": "oat milk\nrice\ngoat cheese\nOat biscuits\n"
        },
        directories: [],
        cwd: "/home/learner",
        editor: null,
        runCommand: null,
        checks: [
          {
            id: "matching-lines",
            label: "Both lowercase substring matches are printed",
            kind: "stdout",
            expected: "oat milk\ngoat cheese\n",
            path: null,
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the goal, then inspect the named file or command."
          },
          {
            id: "match-status",
            label: "The matching search succeeds",
            kind: "exit",
            expected: 0,
            path: null,
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the goal, then inspect the named file or command."
          },
          {
            id: "input-kept",
            label: "The pantry list is unchanged",
            kind: "file",
            expected: "oat milk\nrice\ngoat cheese\nOat biscuits\n",
            path: "/home/learner/pantry.txt",
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the goal, then inspect the named file or command."
          }
        ]
      },
      hints: [
        "A variable assignment uses a name and value with no spaces around the equals sign.",
        "Keep the assignment and the command that uses it in one input, separated by a semicolon; double-quote the value reference.",
        "Use grep\u2019s fixed-text option; a matching line can contain the search text inside a longer word."
      ],
      resources: [
        {
          label: "GNU Bash: shell parameters",
          url: "https://www.gnu.org/software/bash/manual/html_node/Shell-Parameters.html"
        },
        {
          label: "GNU Grep: official manual",
          url: "https://www.gnu.org/software/grep/manual/grep.html"
        }
      ],
      quiz: [
        {
          prompt: "Which form retrieves a variable\u2019s value while keeping it one argument?",
          options: [
            "'$topic'",
            '"$topic"',
            "topic=",
            "The word dollar"
          ],
          correct: 1,
          clue: "Double quotes allow expansion; single quotes protect the reference literally."
        },
        {
          prompt: "For the fixed text oat, which whole line also matches?",
          options: [
            "Only the exact line oat can match",
            "OAT milk",
            "goat cheese",
            "rice"
          ],
          correct: 2,
          clue: "Fixed-text searching can match a substring within a longer word."
        }
      ],
      local: null
    },
    {
      id: "s04-l03",
      title: "Sort, deduplicate, and count",
      minutes: 10,
      mode: "shell",
      why: "Connect already-explained text tools to answer a small data question.",
      teach: [
        "sort prints a file\u2019s lines in sorted order without changing the file. In sort colors.txt, sort is the command and colors.txt is the input. The simple lowercase words here sort alphabetically; real sorting can depend on language settings.",
        "uniq prints one copy of each adjacent group of equal lines. In uniq grouped.txt, only neighboring repeats are collapsed. Sorting first puts equal lines together, so uniq can remove all repeated copies from that stream.",
        "wc counts text. Its -l option counts newline characters: wc -l grouped.txt prints a count and a filename. Our supplied data has a newline after every line, so that number is also its line count. This counts lines, not letters or words.",
        "Only now connect commands: the pipe character | sends the left command\u2019s ordinary output into the next command as input. In sort colors.txt | uniq | wc -l, sort reads the file; uniq and wc read incoming text, so they need no filename. The final result is just a count and newline, with no filename."
      ],
      terms: [
        {
          word: "sort",
          meaning: "Print input lines in sorted order."
        },
        {
          word: "uniq",
          meaning: "Collapse neighboring repeated lines."
        },
        {
          word: "wc -l",
          meaning: "Count newline characters; here every line ends with one."
        },
        {
          word: "pipe |",
          meaning: "Connect one command\u2019s ordinary output to the next command\u2019s input."
        }
      ],
      steps: [
        "Select \u201C1 \xB7 Learn\u201D and \u201CRun example\u201D. Its first block is sorted text, its next block has adjacent duplicates removed, then you see a file line count and a pipeline count.",
        "Read the challenge fruit.txt using the command input. Observe repeated names that are not always neighbors.",
        "Connect the sorting, adjacent-deduplication, and line-counting tools in that order. Run your command and use \u201CCheck my work\u201D while its single count is the last output.",
        "On \u201C3 \xB7 Check\u201D, choose \u201CRun automatic checks\u201D and compare Expected with Actual. Answer both concept questions, then choose \u201CCheck concepts & finish lesson\u201D."
      ],
      example: {
        title: "Count distinct colors",
        explanation: "The first three commands show individual tools. The last command connects them and counts distinct color lines.",
        files: {
          "/home/learner/colors.txt": "red\nblue\nred\nblue\n",
          "/home/learner/grouped.txt": "blue\nblue\nred\nred\n"
        },
        directories: [],
        cwd: "/home/learner",
        code: "sort colors.txt\nuniq grouped.txt\nwc -l grouped.txt\nsort colors.txt | uniq | wc -l",
        stdout: "blue\nblue\nred\nred\nblue\nred\n4 grouped.txt\n2\n",
        stderr: "",
        exitCode: 0
      },
      task: {
        goal: "Count the distinct fruit names in fruit.txt without modifying the file.",
        requirements: [
          "Your last output is the number 3 on its own line, with a final newline.",
          "fruit.txt remains unchanged.",
          "Your counting command exits with status 0."
        ],
        files: {
          "/home/learner/fruit.txt": "pear\napple\npear\nplum\napple\npear\n"
        },
        directories: [],
        cwd: "/home/learner",
        editor: null,
        runCommand: null,
        checks: [
          {
            id: "distinct-count",
            label: "Three distinct names are counted",
            kind: "stdout",
            expected: "3\n",
            path: null,
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the goal, then inspect the named file or command."
          },
          {
            id: "input-kept",
            label: "The original fruit list is unchanged",
            kind: "file",
            expected: "pear\napple\npear\nplum\napple\npear\n",
            path: "/home/learner/fruit.txt",
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the goal, then inspect the named file or command."
          },
          {
            id: "success",
            label: "The count succeeds",
            kind: "exit",
            expected: 0,
            path: null,
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the goal, then inspect the named file or command."
          }
        ]
      },
      hints: [
        "Count names after removing repeated copies, not before.",
        "uniq only combines neighbors; first put equal lines next to each other.",
        "Pipe sorted lines into uniq, then pipe those remaining lines into the line-counting command. Only the first command needs the filename."
      ],
      resources: [
        {
          label: "GNU Coreutils: sort",
          url: "https://www.gnu.org/software/coreutils/manual/html_node/sort-invocation.html"
        },
        {
          label: "GNU Coreutils: uniq",
          url: "https://www.gnu.org/software/coreutils/manual/html_node/uniq-invocation.html"
        },
        {
          label: "GNU Coreutils: wc",
          url: "https://www.gnu.org/software/coreutils/manual/html_node/wc-invocation.html"
        },
        {
          label: "GNU Bash: pipelines",
          url: "https://www.gnu.org/software/bash/manual/html_node/Pipelines.html"
        }
      ],
      quiz: [
        {
          prompt: "Why can uniq alone leave repeated values in an unsorted file?",
          options: [
            "It reads only filenames",
            "It only collapses adjacent duplicates",
            "It deletes the input",
            "It only counts spaces"
          ],
          correct: 1,
          clue: "Compare equal lines that touch with equal lines separated by another value."
        },
        {
          prompt: "What does | connect in the pipeline taught here?",
          options: [
            "A filename to its extension",
            "A directory to its parent",
            "A command\u2019s ordinary output to the next command\u2019s input",
            "The browser to a real Linux VM"
          ],
          correct: 2,
          clue: "The next tool receives text from the previous tool instead of reading a named file."
        }
      ],
      local: null
    }
  ]
};

// curriculum/s05.json
var s05_default = {
  id: "s05",
  title: "Streams and data",
  summary: "Save output deliberately, separate diagnostics, and assemble a small pipeline report.",
  level: "Building confidence",
  exam: [
    {
      prompt: "Which operator keeps existing destination text and adds more?",
      options: [
        ">",
        ">>",
        "<",
        "|"
      ],
      correct: 1,
      clue: "Compare replacement with adding at the end."
    },
    {
      prompt: "Does an empty stdout prove that a command failed?",
      options: [
        "Yes, always",
        "Yes, unless it used sort",
        "No; it may have succeeded quietly or redirected output",
        "No command can have empty stdout"
      ],
      correct: 2,
      clue: "Separate the output destination from the numeric outcome."
    },
    {
      prompt: "Where should a pipeline\u2019s final > report.txt go?",
      options: [
        "After the final stage",
        "Inside the input filename",
        "Before every pipe",
        "Only after exiting the browser"
      ],
      correct: 0,
      clue: "Find the stage whose result you want to preserve."
    }
  ],
  lessons: [
    {
      id: "s05-l01",
      title: "Keep or replace output",
      minutes: 12,
      mode: "shell",
      why: "Redirecting output lets a command produce a reusable file instead of a fleeting screen message.",
      teach: [
        "A command normally sends its ordinary output to the screen. Add > followed by a path to put that output into a file instead. The shell creates the file if needed, but replaces its previous contents if it already exists. Inspect valuable files before replacing them.",
        "Use >> to append: keep the existing contents and add new output at the end. Neither operator adds a newline of its own; printf supplies the text and \\n supplies a line ending. A successful redirect can be quiet because the text went into the file.",
        "In the separate example, a weather note is replaced once and then extended. In your task, use the supplied shift note, not the weather data. cat lets you inspect the result after each small change."
      ],
      terms: [
        {
          word: "redirect",
          meaning: "Send output somewhere other than its usual destination."
        },
        {
          word: "append",
          meaning: "Add at the end without replacing earlier contents."
        }
      ],
      steps: [
        "Read the supplied shift.txt with cat before changing it.",
        "Replace the old note with the requested first line.",
        "Append the second line, then inspect the whole file."
      ],
      example: {
        title: "A two-line weather note",
        explanation: "The first redirect removes the old weather note; the second preserves the new first line.",
        files: {
          "/home/learner/weather.txt": "outdated\n"
        },
        directories: [],
        cwd: "/home/learner",
        code: "printf 'sunny\\n' > /home/learner/weather.txt\nprintf 'breezy\\n' >> /home/learner/weather.txt\ncat /home/learner/weather.txt",
        stdout: "sunny\nbreezy\n",
        stderr: "",
        exitCode: 0
      },
      task: {
        goal: "Replace the old shift note, then add one more line.",
        requirements: [
          "/home/learner/shift.txt contains exactly morning then evening, one per line, with a final newline.",
          "/home/learner/keep.txt remains exactly keep me followed by a newline."
        ],
        files: {
          "/home/learner/shift.txt": "old shift\n",
          "/home/learner/keep.txt": "keep me\n"
        },
        directories: [],
        cwd: "/home/learner",
        editor: null,
        runCommand: null,
        checks: [
          {
            id: "note",
            label: "Shift note has exactly two requested lines",
            kind: "file",
            expected: "morning\nevening\n",
            path: "/home/learner/shift.txt",
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Inspect shift.txt: old text suggests append was used before replacement; a missing first line suggests a second replacement."
          },
          {
            id: "keep",
            label: "Unrelated note is unchanged",
            kind: "file",
            expected: "keep me\n",
            path: "/home/learner/keep.txt",
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the stated expectation, including spaces and newlines."
          }
        ]
      },
      hints: [
        "Choose the operator by asking whether the previous contents should survive.",
        "The first write must remove old shift. The second must retain morning.",
        "Inspect with cat after each write; check for exactly two lines."
      ],
      resources: [
        {
          label: "GNU Bash: redirections",
          url: "https://www.gnu.org/software/bash/manual/html_node/Redirections.html"
        }
      ],
      quiz: [
        {
          prompt: "What does > do to an existing destination file?",
          options: [
            "Always refuses to write",
            "Replaces its previous contents",
            "Adds only at the end",
            "Renames it"
          ],
          correct: 1,
          clue: "Review the difference between replacement and append."
        },
        {
          prompt: "Where did the text go if a successful redirected printf is quiet?",
          options: [
            "Into its destination file",
            "Into a new terminal window",
            "Nowhere: quiet always means failure",
            "Into the command name"
          ],
          correct: 0,
          clue: "Follow the output destination rather than judging success by screen text."
        }
      ],
      local: null
    },
    {
      id: "s05-l02",
      title: "Separate messages from status",
      minutes: 12,
      mode: "shell",
      why: "An error message and a success/failure number answer different questions.",
      teach: [
        "Commands have two output channels: stdout (ordinary results) and stderr (diagnostic messages). > captures stdout; 2> captures stderr. You can use both on one command. To deliberately send a message to stderr, put >&2 after printf.",
        "A command also finishes with an exit status: 0 conventionally means success, while nonzero indicates another outcome or failure. $? expands to the status of the immediately previous command. Record it immediately: even a successful printf replaces the previous status. false is a small command that returns 1 without printing.",
        "cat on a missing file is a real failure: it prints a diagnostic to stderr and returns 1 here. The task supplies no missing.txt on purpose. Capture both streams and then record the failing cat status. The later status-recording command may itself finish successfully."
      ],
      terms: [
        {
          word: "stdout / stderr",
          meaning: "Separate channels for ordinary output and diagnostics."
        },
        {
          word: "exit status",
          meaning: "A number describing a completed command; available immediately as $?."
        }
      ],
      steps: [
        "Try the isolated example and identify its two channels.",
        "Run cat on the specified missing path, directing stdout and stderr to different files.",
        "Immediately write the cat status into status.txt, then inspect the saved files."
      ],
      example: {
        title: "A diagnostic is not the status",
        explanation: "printf writes the diagnostic; false supplies a separate numeric outcome.",
        files: {},
        directories: [],
        cwd: "/home/learner",
        code: `printf 'check the tray\\n' >&2
false
printf 'status=%s\\n' "$?"`,
        stdout: "status=1\n",
        stderr: "check the tray\n",
        exitCode: 0
      },
      task: {
        goal: "Capture a failed read without mixing its messages with its data.",
        requirements: [
          "/home/learner/data.txt is empty after trying to read /home/learner/missing.txt with cat.",
          "/home/learner/errors.txt contains the diagnostic naming /home/learner/missing.txt.",
          "/home/learner/status.txt contains exactly 1 followed by a newline; the missing source still does not exist."
        ],
        files: {
          "/home/learner/data.txt": "stale data\n",
          "/home/learner/errors.txt": "",
          "/home/learner/status.txt": ""
        },
        directories: [],
        cwd: "/home/learner",
        editor: null,
        runCommand: null,
        checks: [
          {
            id: "data",
            label: "No ordinary output from the failed read",
            kind: "file",
            expected: "",
            path: "/home/learner/data.txt",
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the stated expectation, including spaces and newlines."
          },
          {
            id: "diagnostic",
            label: "Diagnostic identifies the missing source",
            kind: "run",
            expected: "",
            path: null,
            command: "grep -F -q '/home/learner/missing.txt' /home/learner/errors.txt",
            stderr: "",
            exitCode: 0,
            clue: "Check whether stderr, rather than stdout, was saved to errors.txt."
          },
          {
            id: "status",
            label: "The failed cat status was captured immediately",
            kind: "file",
            expected: "1\n",
            path: "/home/learner/status.txt",
            command: null,
            stderr: null,
            exitCode: null,
            clue: "A later command changes $?. Record the status before inspecting files."
          },
          {
            id: "absent",
            label: "The failed source remains absent",
            kind: "missing",
            expected: 1,
            path: "/home/learner/missing.txt",
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the stated expectation, including spaces and newlines."
          }
        ]
      },
      hints: [
        "Use different destinations for ordinary output and diagnostics.",
        "2> captures the diagnostic channel; > alone captures ordinary output.",
        "Save $? as the very next command after the failing read, before cat or another inspection."
      ],
      resources: [
        {
          label: "GNU Bash: redirections",
          url: "https://www.gnu.org/software/bash/manual/html_node/Redirections.html"
        },
        {
          label: "GNU Bash: exit status",
          url: "https://www.gnu.org/software/bash/manual/html_node/Exit-Status.html"
        }
      ],
      quiz: [
        {
          prompt: "Which channel usually carries a missing-file diagnostic?",
          options: [
            "The command name",
            "stdout only",
            "stderr",
            "The current directory"
          ],
          correct: 2,
          clue: "Distinguish ordinary data from diagnostic messages."
        },
        {
          prompt: "When should you inspect $? for a particular command?",
          options: [
            "After any number of other commands",
            "Immediately after that command",
            "Before running that command",
            "Only after closing the page"
          ],
          correct: 1,
          clue: "Each completed command replaces the previous status."
        }
      ],
      local: null
    },
    {
      id: "s05-l03",
      title: "Build a small text report",
      minutes: 12,
      mode: "shell",
      why: "A pipeline can turn a noisy source into a clean file you can inspect and reuse.",
      teach: [
        "Recall that | connects the stdout of one command to the input of the next. grep -F keeps lines containing literal text; sort orders lines; uniq removes adjacent duplicates. Sorting before uniq brings duplicate lines together.",
        "Place > after the final stage to save the pipeline result. The source file remains unchanged. To count just the resulting lines without a filename label, wc -l < report.txt reads the file as input; < redirects input rather than output.",
        "Build the report in small stages and inspect each stage before saving. The example filters fruit labels. Your challenge filters the supplied dispatch list; it asks for a saved list and a saved count, not a script."
      ],
      terms: [
        {
          word: "pipeline",
          meaning: "Commands connected so one command supplies the next command\u2019s input."
        },
        {
          word: "input redirection",
          meaning: "< supplies a file as a command\u2019s input."
        }
      ],
      steps: [
        "Inspect dispatch.txt and find the lines containing ship:.",
        "Filter, sort and remove duplicates; inspect before saving the result.",
        "Save the unique lines, then count the saved lines into a separate file."
      ],
      example: {
        title: "Fruit labels, not dispatches",
        explanation: "uniq needs adjacent duplicates; wc reads the saved result through input redirection.",
        files: {
          "/home/learner/labels.txt": "fruit:pear\nvegetable:kale\nfruit:apple\nfruit:pear\n"
        },
        directories: [],
        cwd: "/home/learner",
        code: "grep -F 'fruit:' /home/learner/labels.txt | sort | uniq > /home/learner/fruit.txt\ncat /home/learner/fruit.txt\nwc -l < /home/learner/fruit.txt",
        stdout: "fruit:apple\nfruit:pear\n2\n",
        stderr: "",
        exitCode: 0
      },
      task: {
        goal: "Create an alphabetized dispatch report and its line count.",
        requirements: [
          "/home/learner/shipping.txt contains exactly ship:birch, ship:cedar, ship:maple, one per line in that order.",
          "/home/learner/count.txt contains exactly 3 followed by a newline.",
          "The original dispatch.txt stays unchanged."
        ],
        files: {
          "/home/learner/dispatch.txt": "ship:maple\nhold:oak\nship:birch\nship:maple\nship:cedar\nhold:elm\n"
        },
        directories: [],
        cwd: "/home/learner",
        editor: null,
        runCommand: null,
        checks: [
          {
            id: "report",
            label: "Three sorted unique dispatch lines",
            kind: "file",
            expected: "ship:birch\nship:cedar\nship:maple\n",
            path: "/home/learner/shipping.txt",
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the stated expectation, including spaces and newlines."
          },
          {
            id: "count",
            label: "Count has no filename label",
            kind: "file",
            expected: "3\n",
            path: "/home/learner/count.txt",
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Count lines from the saved report, using file input if wc is also printing a filename."
          },
          {
            id: "source",
            label: "Source data is unchanged",
            kind: "file",
            expected: "ship:maple\nhold:oak\nship:birch\nship:maple\nship:cedar\nhold:elm\n",
            path: "/home/learner/dispatch.txt",
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the stated expectation, including spaces and newlines."
          }
        ]
      },
      hints: [
        "First check which lines survive the literal filter.",
        "Duplicates must be adjacent before uniq can remove them.",
        "The count should come from the cleaned report, not from the original dispatch list."
      ],
      resources: [
        {
          label: "GNU Bash: pipelines",
          url: "https://www.gnu.org/software/bash/manual/html_node/Pipelines.html"
        },
        {
          label: "GNU Bash: redirections",
          url: "https://www.gnu.org/software/bash/manual/html_node/Redirections.html"
        }
      ],
      quiz: [
        {
          prompt: "Why put sort before uniq in this report?",
          options: [
            "To turn text into numbers",
            "To delete the source",
            "To collect duplicate lines next to each other",
            "To capture stderr"
          ],
          correct: 2,
          clue: "Think about which duplicates uniq can recognize."
        },
        {
          prompt: "What does wc -l < report.txt read?",
          options: [
            "The text of report.txt as input",
            "Only the filename as text",
            "Only stderr",
            "An interactive editor"
          ],
          correct: 0,
          clue: "Follow the direction of the input redirection symbol."
        }
      ],
      local: null
    }
  ]
};

// curriculum/s06.json
var s06_default = {
  id: "s06",
  title: "First Bash scripts",
  summary: "Use the editor and runner, pass quoted inputs, and validate small script interfaces.",
  level: "Building confidence",
  exam: [
    {
      prompt: "Which workflow runs newly edited script text?",
      options: [
        "Run without saving",
        "Save, then Run",
        "Install a terminal editor first",
        "Change the quiz answer"
      ],
      correct: 1,
      clue: "The runner reads the saved file."
    },
    {
      prompt: "Which parameter counts script arguments?",
      options: [
        "$1",
        "$2",
        "$#",
        "$?"
      ],
      correct: 2,
      clue: "Separate argument position, argument count and exit status."
    },
    {
      prompt: "Where should an invalid-input explanation go?",
      options: [
        "Into the successful data output",
        "Into the script filename",
        "To stderr, accompanied by a nonzero exit",
        "Into the current directory path"
      ],
      correct: 2,
      clue: "Think about callers that save ordinary output for another tool."
    }
  ],
  lessons: [
    {
      id: "s06-l01",
      title: "Save your first Bash script",
      minutes: 12,
      mode: "script",
      why: "A saved script makes the same few commands easy to run again without retyping.",
      teach: [
        "A script is a plain text file containing commands. You already know commands such as printf; now put them on separate lines in a file. Bash reads them from top to bottom when you run bash followed by the file path.",
        "The editor on this page is a text area, not vim or nano. Edit /home/learner/solution.sh, choose Save, then Run. The runner uses bash /home/learner/solution.sh. Saving changes the file; running executes the saved file. You do not need chmod or a terminal editor here.",
        "The conventional first line #!/bin/bash is called a shebang: it identifies a Bash interpreter when a compatible real system launches a script directly. Here we explicitly select the training Bash runner, so the shebang is a helpful label, not an installation or permission step. Other lines beginning with # are comments, not printed instructions."
      ],
      terms: [
        {
          word: "script",
          meaning: "A text file of commands to run in order."
        },
        {
          word: "shebang",
          meaning: "A first-line interpreter label beginning with #!."
        }
      ],
      steps: [
        "Run the separate example and read its two output lines.",
        "In the provided editor, keep the first line and add the requested messages below it.",
        "Choose Save, then Run; check the output and run it once more."
      ],
      example: {
        title: "A saved garden reminder",
        explanation: "A script is made of familiar commands; bash reads the saved file.",
        files: {
          "/home/learner/garden-demo.sh": "#!/bin/bash\n# A comment is not output.\nprintf 'Water the basil\\n'\nprintf 'Check the soil\\n'\n"
        },
        directories: [],
        cwd: "/home/learner",
        code: "bash /home/learner/garden-demo.sh",
        stdout: "Water the basil\nCheck the soil\n",
        stderr: "",
        exitCode: 0
      },
      task: {
        goal: "Save a two-line welcome script.",
        requirements: [
          "Running bash /home/learner/solution.sh prints exactly Trail ready then One step at a time, each on its own line.",
          "The script has no diagnostic output and finishes with status 0 on repeated runs."
        ],
        files: {},
        directories: [],
        cwd: "/home/learner",
        editor: {
          path: "/home/learner/solution.sh",
          starter: "#!/bin/bash\n# Write your commands below.\n"
        },
        runCommand: "bash /home/learner/solution.sh",
        checks: [
          {
            id: "first",
            label: "Saved script prints the two welcome lines",
            kind: "run",
            expected: "Trail ready\nOne step at a time\n",
            path: null,
            command: "bash /home/learner/solution.sh",
            stderr: "",
            exitCode: 0,
            clue: "Run this case yourself and compare the output with the task requirement."
          },
          {
            id: "repeat",
            label: "The same saved script works again",
            kind: "run",
            expected: "Trail ready\nOne step at a time\nTrail ready\nOne step at a time\n",
            path: null,
            command: "bash /home/learner/solution.sh; bash /home/learner/solution.sh",
            stderr: "",
            exitCode: 0,
            clue: "Run this case yourself and compare the output with the task requirement."
          }
        ]
      },
      hints: [
        "Use commands you already know; no new printing command is needed.",
        "Put each message-producing command on its own line below the shebang.",
        "Save before Run. If old output remains, check whether the editor changes were saved."
      ],
      resources: [
        {
          label: "GNU Bash: shell scripts",
          url: "https://www.gnu.org/software/bash/manual/html_node/Shell-Scripts.html"
        }
      ],
      quiz: [
        {
          prompt: "What does Save do in this lesson?",
          options: [
            "Runs the script immediately",
            "Writes editor text into the script file",
            "Installs Bash",
            "Changes the text into a multiple-choice answer"
          ],
          correct: 1,
          clue: "Distinguish editing the file from executing it."
        },
        {
          prompt: "What does bash /home/learner/solution.sh ask the runner to do?",
          options: [
            "Read and execute commands from that file",
            "Open vim",
            "Print only the filename",
            "Change a real system permission"
          ],
          correct: 0,
          clue: "The word after bash names a file containing commands."
        }
      ],
      local: null
    },
    {
      id: "s06-l02",
      title: "Give a script two arguments",
      minutes: 12,
      mode: "script",
      why: "Arguments let one saved program work with different names and values.",
      teach: [
        "An argument is a value written after a command or script name. When Bash runs a script, $1 is the first argument and $2 is the second. The script filename itself is not $1. Use the same saved script for several inputs instead of rewriting its text.",
        'Quote at both boundaries: write a multiword value as one quoted argument when launching the script, then expand it as "$1" inside the script. Without expansion quotes, spaces can split a value and * can expand into filenames. A quoted empty string is still one argument, containing no characters.',
        'printf uses a format followed by values. In printf "Item: %s\\n" "$1", %s is replaced by that one string. A constant format keeps punctuation such as % inside an argument from becoming part of the format. The fruit example uses different data from the badge challenge.'
      ],
      terms: [
        {
          word: "argument",
          meaning: "One input value passed when a command is run."
        },
        {
          word: "positional parameter",
          meaning: "A script input addressed by its position, such as $1 or $2."
        }
      ],
      steps: [
        "Read the fruit example and identify its first and second inputs.",
        "Use the editor to make the badge text depend on the two arguments.",
        "Save and run the default command, then try names with spaces and punctuation."
      ],
      example: {
        title: "A fruit label",
        explanation: "Launch-time quotes keep Conference pear together; expansion quotes preserve it in the script.",
        files: {
          "/home/learner/fruit-demo.sh": `#!/bin/bash
printf 'Item: %s\\nState: %s\\n' "$1" "$2"
`
        },
        directories: [],
        cwd: "/home/learner",
        code: "bash /home/learner/fruit-demo.sh 'Conference pear' ripe",
        stdout: "Item: Conference pear\nState: ripe\n",
        stderr: "",
        exitCode: 0
      },
      task: {
        goal: "Make a badge printer that uses its two supplied arguments.",
        requirements: [
          "For two arguments, print Name: followed by one space and the first value, then Team: followed by one space and the second value, each ending in a newline.",
          "Preserve spaces, literal * and % characters, and empty argument values; do not print extra text."
        ],
        files: {
          "/home/learner/nearby.txt": "a wildcard must not expand to this name\n"
        },
        directories: [],
        cwd: "/home/learner",
        editor: {
          path: "/home/learner/solution.sh",
          starter: "#!/bin/bash\n# Write your commands below.\n"
        },
        runCommand: "bash /home/learner/solution.sh 'Ari Vale' 'Night Crew'",
        checks: [
          {
            id: "ordinary",
            label: "Two simple values",
            kind: "run",
            expected: "Name: Lina\nTeam: Blue\n",
            path: null,
            command: "bash /home/learner/solution.sh Lina Blue",
            stderr: "",
            exitCode: 0,
            clue: "Run this case yourself and compare the output with the task requirement."
          },
          {
            id: "spaces",
            label: "Multiword arguments remain intact",
            kind: "run",
            expected: "Name: Ari Vale\nTeam: Night Crew\n",
            path: null,
            command: "bash /home/learner/solution.sh 'Ari Vale' 'Night Crew'",
            stderr: "",
            exitCode: 0,
            clue: "Run this case yourself and compare the output with the task requirement."
          },
          {
            id: "punctuation",
            label: "Literal characters stay data",
            kind: "run",
            expected: "Name: *\nTeam: 50% ready\n",
            path: null,
            command: "bash /home/learner/solution.sh '*' '50% ready'",
            stderr: "",
            exitCode: 0,
            clue: "Run this case yourself and compare the output with the task requirement."
          },
          {
            id: "empty",
            label: "An empty first value is preserved",
            kind: "run",
            expected: "Name: \nTeam: Green\n",
            path: null,
            command: "bash /home/learner/solution.sh '' Green",
            stderr: "",
            exitCode: 0,
            clue: "Run this case yourself and compare the output with the task requirement."
          }
        ]
      },
      hints: [
        "Work out which output line depends on $1 and which depends on $2.",
        "Keep the format text constant and supply each input as a separate value.",
        "Quote positional-parameter expansions, even when the sample value has no spaces."
      ],
      resources: [
        {
          label: "GNU Bash: positional parameters",
          url: "https://www.gnu.org/software/bash/manual/html_node/Positional-Parameters.html"
        },
        {
          label: "GNU Bash: double quotes",
          url: "https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html"
        }
      ],
      quiz: [
        {
          prompt: 'In bash label.sh "red apple" fresh, what is $1?',
          options: [
            "label.sh",
            "red",
            "red apple",
            "fresh"
          ],
          correct: 2,
          clue: "Count arguments after the script filename, respecting quotes."
        },
        {
          prompt: 'Why expand an input as "$1" rather than $1?',
          options: [
            "To preserve it as one value",
            "To make every value numeric",
            "To change the script filename",
            "To turn it into a comment"
          ],
          correct: 0,
          clue: "Consider a value containing spaces or a wildcard."
        }
      ],
      local: null
    },
    {
      id: "s06-l03",
      title: "Choose a path with if and test",
      minutes: 15,
      mode: "script",
      why: "Rejecting unsuitable inputs gives the caller a clear failure instead of misleading output.",
      teach: [
        "if runs one block when a test succeeds and another after else when it does not. A common form is if [ condition ]; then, followed by commands, else, other commands, and fi. fi closes the decision. Keep spaces after [ and before ]; [ is a test command, not decoration.",
        'For an argument-count test, $# gives the number of arguments and [ "$#" -ne 1 ] succeeds when that number is not 1. For text, [ -z "$1" ] succeeds when the first value is empty. Check the count before inspecting the value. A blank string and a missing argument are different inputs, but this task rejects both.',
        "A guard is an early check that stops unsuitable work: print its diagnostic with >&2 and use exit 2. exit ends the script immediately with that status. If the guards pass, print the ordinary result. The example tests whether a supplied color equals blue using =; your task uses the count and empty-string tests described above."
      ],
      terms: [
        {
          word: "condition",
          meaning: "A test whose success or failure selects a branch."
        },
        {
          word: "guard",
          meaning: "An early validation check that rejects unsuitable input."
        }
      ],
      steps: [
        "Trace the example\u2019s matching and nonmatching branches.",
        "Write a count guard, then an empty-value guard in the editor.",
        "Add the success message after validation; save and test a valid name and an invalid call."
      ],
      example: {
        title: "A color decision",
        explanation: "The = operator compares strings; the failure branch writes to stderr and stops.",
        files: {
          "/home/learner/color-demo.sh": `#!/bin/bash
if [ "$1" = blue ]; then
  printf 'Cool color\\n'
else
  printf 'Choose blue\\n' >&2
  exit 2
fi
`
        },
        directories: [],
        cwd: "/home/learner",
        code: "bash /home/learner/color-demo.sh blue",
        stdout: "Cool color\n",
        stderr: "",
        exitCode: 0
      },
      task: {
        goal: "Accept exactly one nonempty name, otherwise explain the problem.",
        requirements: [
          "Exactly one nonempty argument produces Hello, followed by one space and the unchanged name, then a newline, with status 0 and empty stderr.",
          "Zero arguments, two arguments, or one empty argument produce empty stdout, exactly Need one nonempty name followed by a newline on stderr, and status 2."
        ],
        files: {},
        directories: [],
        cwd: "/home/learner",
        editor: {
          path: "/home/learner/solution.sh",
          starter: "#!/bin/bash\n# Write your commands below.\n"
        },
        runCommand: "bash /home/learner/solution.sh Mina",
        checks: [
          {
            id: "name",
            label: "One name succeeds",
            kind: "run",
            expected: "Hello, Mina\n",
            path: null,
            command: "bash /home/learner/solution.sh Mina",
            stderr: "",
            exitCode: 0,
            clue: "Run this case yourself and compare the output with the task requirement."
          },
          {
            id: "space",
            label: "One multiword name succeeds",
            kind: "run",
            expected: "Hello, Sol River\n",
            path: null,
            command: "bash /home/learner/solution.sh 'Sol River'",
            stderr: "",
            exitCode: 0,
            clue: "Run this case yourself and compare the output with the task requirement."
          },
          {
            id: "none",
            label: "No argument fails clearly",
            kind: "run",
            expected: "",
            path: null,
            command: "bash /home/learner/solution.sh",
            stderr: "Need one nonempty name\n",
            exitCode: 2,
            clue: "Run this case yourself and compare the output with the task requirement."
          },
          {
            id: "extra",
            label: "Two arguments are rejected",
            kind: "run",
            expected: "",
            path: null,
            command: "bash /home/learner/solution.sh Mina River",
            stderr: "Need one nonempty name\n",
            exitCode: 2,
            clue: "Run this case yourself and compare the output with the task requirement."
          },
          {
            id: "empty",
            label: "An empty argument is rejected",
            kind: "run",
            expected: "",
            path: null,
            command: "bash /home/learner/solution.sh ''",
            stderr: "Need one nonempty name\n",
            exitCode: 2,
            clue: "Run this case yourself and compare the output with the task requirement."
          }
        ]
      },
      hints: [
        "Validate how many inputs arrived before checking their contents.",
        "A count test and an empty-string test answer different questions.",
        "Keep success output after the guards, so invalid calls cannot print a greeting."
      ],
      resources: [
        {
          label: "GNU Bash: conditional constructs",
          url: "https://www.gnu.org/software/bash/manual/html_node/Conditional-Constructs.html"
        },
        {
          label: "GNU Bash: conditional expressions",
          url: "https://www.gnu.org/software/bash/manual/html_node/Bash-Conditional-Expressions.html"
        }
      ],
      quiz: [
        {
          prompt: 'What does [ -z "$1" ] test?',
          options: [
            "Whether the first value is empty",
            "Whether there are ten arguments",
            "Whether stdout contains a file",
            "Whether the first value is a number"
          ],
          correct: 0,
          clue: "Review what the string-length predicate measures."
        },
        {
          prompt: "What does exit 2 do inside a validation guard?",
          options: [
            "Keeps running and prints 2",
            "Stops the script with nonzero status 2",
            "Removes two files",
            "Closes the browser"
          ],
          correct: 1,
          clue: "Distinguish terminating a script from printing text."
        }
      ],
      local: null
    }
  ]
};

// curriculum/s07.json
var s07_default = {
  id: "s07",
  title: "Bash automation",
  summary: "Repeat work with loops and functions, preserve grouped inputs, and build a cautious reusable report.",
  level: "Automation",
  exam: [
    {
      prompt: "What belongs inside the body of a per-item loop?",
      options: [
        "The action to repeat for the current item",
        "Only the script filename",
        "A new installation",
        "An unconditional browser reset"
      ],
      correct: 0,
      clue: "Separate the list of values from the repeated action."
    },
    {
      prompt: "Inside a Bash function, what does $1 refer to?",
      options: [
        "Always the outer script\u2019s filename",
        "The first argument passed to that function",
        "The last exit status",
        "The array\u2019s size"
      ],
      correct: 1,
      clue: "The function has its own supplied arguments."
    },
    {
      prompt: "Which behavior is appropriate when a report source is missing?",
      options: [
        "Truncate the old report, then warn",
        "Append an error to ordinary report data",
        "Reject the call before rewriting the report",
        "Print success regardless"
      ],
      correct: 2,
      clue: "Think about preserving an earlier valid result."
    }
  ],
  lessons: [
    {
      id: "s07-l01",
      title: "Repeat a small action with for",
      minutes: 12,
      mode: "script",
      why: "A loop applies one clear action to each input without copied command lines.",
      teach: [
        "A for loop assigns each value in a list to a variable, one at a time. Write for name in ...; do, put the repeated command on the next line, and close with done. The loop variable changes on each pass; the body is the same.",
        'In a script, "$@" expands to all arguments while preserving each argument as one separate value. Use for name in "$@"; do to visit them in order, and quote "$name" inside the body. With no arguments, the list is empty and the body runs zero times.',
        "The example loops over two literal bird names. Your challenge loops over arguments instead, so a single script can handle one item, several items, or no items. No counter or numeric arithmetic is needed."
      ],
      terms: [
        {
          word: "loop",
          meaning: "A block that repeats for each input value."
        },
        {
          word: '"$@"',
          meaning: "All arguments, each preserved as its own value."
        }
      ],
      steps: [
        "Trace the two iterations in the bird example.",
        "Write a loop over script arguments in the editor.",
        "Save and try several inputs, one input containing spaces, and no inputs."
      ],
      example: {
        title: "Two bird labels",
        explanation: "The variable receives robin and then snow goose.",
        files: {
          "/home/learner/birds-demo.sh": `#!/bin/bash
for bird in robin 'snow goose'; do
  printf 'Bird: %s\\n' "$bird"
done
`
        },
        directories: [],
        cwd: "/home/learner",
        code: "bash /home/learner/birds-demo.sh",
        stdout: "Bird: robin\nBird: snow goose\n",
        stderr: "",
        exitCode: 0
      },
      task: {
        goal: "Print one packing line for every argument, in order.",
        requirements: [
          "Each supplied argument produces Pack: followed by one space and the unchanged value, then a newline.",
          "No arguments produce no output; spaces, a literal *, and an empty argument remain intact. Every tested call finishes successfully without stderr."
        ],
        files: {
          "/home/learner/nearby.txt": "wildcard probe\n"
        },
        directories: [],
        cwd: "/home/learner",
        editor: {
          path: "/home/learner/solution.sh",
          starter: "#!/bin/bash\n# Write your commands below.\n"
        },
        runCommand: "bash /home/learner/solution.sh rope 'rain coat'",
        checks: [
          {
            id: "several",
            label: "Visit each argument in order",
            kind: "run",
            expected: "Pack: rope\nPack: map\nPack: flask\n",
            path: null,
            command: "bash /home/learner/solution.sh rope map flask",
            stderr: "",
            exitCode: 0,
            clue: "Run this case yourself and compare the output with the task requirement."
          },
          {
            id: "one",
            label: "A multiword input is one item",
            kind: "run",
            expected: "Pack: rain coat\n",
            path: null,
            command: "bash /home/learner/solution.sh 'rain coat'",
            stderr: "",
            exitCode: 0,
            clue: "Run this case yourself and compare the output with the task requirement."
          },
          {
            id: "empty-list",
            label: "An empty list has zero iterations",
            kind: "run",
            expected: "",
            path: null,
            command: "bash /home/learner/solution.sh",
            stderr: "",
            exitCode: 0,
            clue: "Run this case yourself and compare the output with the task requirement."
          },
          {
            id: "literal",
            label: "Special and empty values remain intact",
            kind: "run",
            expected: "Pack: *\nPack: \n",
            path: null,
            command: "bash /home/learner/solution.sh '*' ''",
            stderr: "",
            exitCode: 0,
            clue: "Run this case yourself and compare the output with the task requirement."
          }
        ]
      },
      hints: [
        "Each iteration prints one line; do not print the entire input list as one value.",
        "Use the all-arguments expansion that preserves boundaries.",
        "Check the quotes both around the argument list and around the current loop variable."
      ],
      resources: [
        {
          label: "GNU Bash: looping constructs",
          url: "https://www.gnu.org/software/bash/manual/html_node/Looping-Constructs.html"
        },
        {
          label: "GNU Bash: special parameters",
          url: "https://www.gnu.org/software/bash/manual/html_node/Special-Parameters.html"
        }
      ],
      quiz: [
        {
          prompt: "How often does the loop body run for an empty argument list?",
          options: [
            "Once with the script filename",
            "Forever",
            "Zero times",
            "Twice"
          ],
          correct: 2,
          clue: "Count the values available to visit."
        },
        {
          prompt: 'What does quoted "$@" preserve?',
          options: [
            "Only the last value",
            "The original argument boundaries",
            "Only numbers",
            "The last exit status"
          ],
          correct: 1,
          clue: "Think about two arguments where one contains a space."
        }
      ],
      local: null
    },
    {
      id: "s07-l02",
      title: "Name an action and keep an array",
      minutes: 15,
      mode: "script",
      why: "Functions name a repeated operation; arrays keep several values without flattening their boundaries.",
      teach: [
        'A Bash function groups commands under a name: label() {, the body, then }. Defining it does not run it. Invoke it like a command, such as label "spruce". Inside the function, $1 means the first value given to that function, rather than the outer script\u2019s first argument.',
        'An indexed array stores a sequence: trees=("spruce" "silver birch"). Parentheses group its elements. "${trees[@]}" expands to each element as a separate value, so it works as a for-loop list. You can also copy all script arguments into an array using items=("$@").',
        "The tree example separates stored data from the printing action. Your task does the same for work items: store inputs, loop over them, and call a small function for each. The checks exercise output on different calls; they do not grade spelling of your code. Inspect your saved code yourself to confirm that you practiced both tools."
      ],
      terms: [
        {
          word: "function",
          meaning: "A named group of commands invoked like a command."
        },
        {
          word: "array",
          meaning: "A variable holding multiple ordered elements."
        }
      ],
      steps: [
        "Identify the array definition, function definition, and function call in the example.",
        "In the editor, store the script arguments in an array and define a one-item printing function.",
        "Loop through the array and invoke the function; save and run with different inputs."
      ],
      example: {
        title: "Tree tags",
        explanation: "Quotes around the array expansion keep silver birch in one element.",
        files: {
          "/home/learner/trees-demo.sh": `#!/bin/bash
trees=("spruce" "silver birch")
tag() {
  printf 'Tree: %s\\n' "$1"
}
for tree in "\${trees[@]}"; do
  tag "$tree"
done
`
        },
        directories: [],
        cwd: "/home/learner",
        code: "bash /home/learner/trees-demo.sh",
        stdout: "Tree: spruce\nTree: silver birch\n",
        stderr: "",
        exitCode: 0
      },
      task: {
        goal: "Use an array and a one-item function to label work items.",
        requirements: [
          "For each script argument in order, print Task: followed by one space and that unchanged value, then a newline.",
          "An empty argument list prints nothing; an empty argument is one labeled item. All tested calls have empty stderr and status 0."
        ],
        files: {
          "/home/learner/nearby.txt": "wildcard probe\n"
        },
        directories: [],
        cwd: "/home/learner",
        editor: {
          path: "/home/learner/solution.sh",
          starter: "#!/bin/bash\n# Write your commands below.\n"
        },
        runCommand: "bash /home/learner/solution.sh sweep 'check doors'",
        checks: [
          {
            id: "items",
            label: "Several items are labeled",
            kind: "run",
            expected: "Task: sweep\nTask: sort\n",
            path: null,
            command: "bash /home/learner/solution.sh sweep sort",
            stderr: "",
            exitCode: 0,
            clue: "Run this case yourself and compare the output with the task requirement."
          },
          {
            id: "boundaries",
            label: "Multiword and literal values remain distinct",
            kind: "run",
            expected: "Task: check doors\nTask: *\nTask: 100%\n",
            path: null,
            command: "bash /home/learner/solution.sh 'check doors' '*' '100%'",
            stderr: "",
            exitCode: 0,
            clue: "Run this case yourself and compare the output with the task requirement."
          },
          {
            id: "no-items",
            label: "Empty array has no output",
            kind: "run",
            expected: "",
            path: null,
            command: "bash /home/learner/solution.sh",
            stderr: "",
            exitCode: 0,
            clue: "Run this case yourself and compare the output with the task requirement."
          },
          {
            id: "blank",
            label: "One empty item is not zero items",
            kind: "run",
            expected: "Task: \n",
            path: null,
            command: "bash /home/learner/solution.sh ''",
            stderr: "",
            exitCode: 0,
            clue: "Run this case yourself and compare the output with the task requirement."
          }
        ]
      },
      hints: [
        "Separate three jobs: store the inputs, define the label action, then visit each stored value.",
        "Inside a function, $1 is its first supplied value, so pass the current item when calling it.",
        "Use the quoted array expansion to preserve each stored item, including blank items."
      ],
      resources: [
        {
          label: "GNU Bash: shell functions",
          url: "https://www.gnu.org/software/bash/manual/html_node/Shell-Functions.html"
        },
        {
          label: "GNU Bash: arrays",
          url: "https://www.gnu.org/software/bash/manual/html_node/Arrays.html"
        }
      ],
      quiz: [
        {
          prompt: "When does a function body run?",
          options: [
            "Whenever its name is called",
            "As soon as its definition is saved",
            "Only after closing the script",
            "Never if it uses $1"
          ],
          correct: 0,
          clue: "Distinguish defining an action from invoking it."
        },
        {
          prompt: "Which expansion gives each array element separately?",
          options: [
            '"$trees"',
            '"${trees[@]}"',
            '"$?"',
            '"$#"'
          ],
          correct: 1,
          clue: "Look for the all-elements array notation shown in the example."
        }
      ],
      local: null
    },
    {
      id: "s07-l03",
      title: "Make a report safe to repeat",
      minutes: 17,
      mode: "script",
      why: "A report should not accumulate duplicates or destroy a previous result merely because an input was missing.",
      teach: [
        "A repeatable report produces the same result when rerun on the same input. For a complete fresh report, > is usually appropriate; >> would add another copy on every run. Reuse sort followed by uniq to produce an ordered set of lines.",
        'Validate before opening the output file. [ -f "$1" ] tests whether the input path is a regular file; -f is false for a missing path or a directory. First check the argument count, then check the path. Only after these guards pass should you redirect report output.',
        "Do not assume a script stops after any failed command: Bash normally continues to the next command. The example uses if directly on a command to select a result message. In your challenge, use explicit exit 2 for rejected inputs, so no later report-writing command runs. The browser cases cover missing inputs and directories, not every possible real-system I/O failure."
      ],
      terms: [
        {
          word: "repeatable report",
          meaning: "A fresh result that does not grow merely because the program is run again."
        },
        {
          word: "preflight validation",
          meaning: "Check inputs before performing an operation that changes files."
        }
      ],
      steps: [
        "Read the example and notice that if can test a command\u2019s status directly.",
        "In the editor, reject an incorrect argument count and any source that is not a regular file.",
        "After validation, write the cleaned report and success message; save and test twice, then test a missing source."
      ],
      example: {
        title: "Choose a message from a command result",
        explanation: "The condition uses grep\u2019s exit status; a diagnostic is not mistaken for ordinary result data.",
        files: {
          "/home/learner/marker.txt": "ready\n",
          "/home/learner/check-demo.sh": "#!/bin/bash\nif grep -F -q 'ready' /home/learner/marker.txt; then\n  printf 'Marker found\\n'\nelse\n  printf 'Marker absent\\n' >&2\n  exit 2\nfi\n"
        },
        directories: [],
        cwd: "/home/learner",
        code: "bash /home/learner/check-demo.sh",
        stdout: "Marker found\n",
        stderr: "",
        exitCode: 0
      },
      task: {
        goal: "Build a small report that is repeatable and refuses invalid input before writing.",
        requirements: [
          "Exactly one existing regular-file argument creates /home/learner/report.txt with its sorted unique lines, prints exactly Report ready followed by a newline, and returns 0 with empty stderr.",
          "Zero or multiple arguments, a missing file, or a directory produce empty stdout, exactly Need one source file followed by a newline on stderr, and status 2.",
          "Rejected calls leave the existing report untouched. Running a valid call twice does not duplicate lines; source files remain unchanged."
        ],
        files: {
          "/home/learner/names-a.txt": "willow\ncedar\nwillow\n",
          "/home/learner/other names.txt": "plum\napricot\nplum\n",
          "/home/learner/report.txt": "previous report\n",
          "/home/learner/empty.txt": ""
        },
        directories: [],
        cwd: "/home/learner",
        editor: {
          path: "/home/learner/solution.sh",
          starter: "#!/bin/bash\n# Write your commands below.\n"
        },
        runCommand: "bash /home/learner/solution.sh /home/learner/names-a.txt",
        checks: [
          {
            id: "source-a",
            label: "Clean the first source",
            kind: "run",
            expected: "Report ready\n",
            path: null,
            command: "bash /home/learner/solution.sh /home/learner/names-a.txt",
            stderr: "",
            exitCode: 0,
            clue: "Run this case yourself and compare the output with the task requirement."
          },
          {
            id: "source-b",
            label: "Read a different source whose path contains a space",
            kind: "run",
            expected: "Report ready\napricot\nplum\n",
            path: null,
            command: "bash /home/learner/solution.sh '/home/learner/other names.txt'; cat /home/learner/report.txt",
            stderr: "",
            exitCode: 0,
            clue: "Run this case yourself and compare the output with the task requirement."
          },
          {
            id: "repeat",
            label: "Two valid runs still create just one report",
            kind: "run",
            expected: "Report ready\nReport ready\ncedar\nwillow\n",
            path: null,
            command: "bash /home/learner/solution.sh /home/learner/names-a.txt; bash /home/learner/solution.sh /home/learner/names-a.txt; cat /home/learner/report.txt",
            stderr: "",
            exitCode: 0,
            clue: "Run this case yourself and compare the output with the task requirement."
          },
          {
            id: "empty-source",
            label: "An empty regular file produces an empty fresh report",
            kind: "run",
            expected: "Report ready\n",
            path: null,
            command: "bash /home/learner/solution.sh /home/learner/empty.txt; cat /home/learner/report.txt",
            stderr: "",
            exitCode: 0,
            clue: "Run this case yourself and compare the output with the task requirement."
          },
          {
            id: "missing",
            label: "Missing source is rejected",
            kind: "run",
            expected: "",
            path: null,
            command: "bash /home/learner/solution.sh /home/learner/absent.txt",
            stderr: "Need one source file\n",
            exitCode: 2,
            clue: "Run this case yourself and compare the output with the task requirement."
          },
          {
            id: "directory",
            label: "A directory is not a source file",
            kind: "run",
            expected: "",
            path: null,
            command: "bash /home/learner/solution.sh /home/learner",
            stderr: "Need one source file\n",
            exitCode: 2,
            clue: "Run this case yourself and compare the output with the task requirement."
          },
          {
            id: "none",
            label: "Missing argument is rejected",
            kind: "run",
            expected: "",
            path: null,
            command: "bash /home/learner/solution.sh",
            stderr: "Need one source file\n",
            exitCode: 2,
            clue: "Run this case yourself and compare the output with the task requirement."
          },
          {
            id: "extra",
            label: "Extra arguments are rejected",
            kind: "run",
            expected: "",
            path: null,
            command: "bash /home/learner/solution.sh /home/learner/names-a.txt /home/learner/names-a.txt",
            stderr: "Need one source file\n",
            exitCode: 2,
            clue: "Run this case yourself and compare the output with the task requirement."
          },
          {
            id: "preserve",
            label: "Preflight rejection preserves a previous report",
            kind: "run",
            expected: "previous report\n",
            path: null,
            command: "printf 'previous report\\n' > /home/learner/report.txt; bash /home/learner/solution.sh /home/learner/absent.txt 2>/dev/null; cat /home/learner/report.txt",
            stderr: "",
            exitCode: 0,
            clue: "Run this case yourself and compare the output with the task requirement."
          },
          {
            id: "source",
            label: "The original source is intact",
            kind: "file",
            expected: "willow\ncedar\nwillow\n",
            path: "/home/learner/names-a.txt",
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the stated expectation, including spaces and newlines."
          },
          {
            id: "preserve-none",
            label: "Missing argument leaves previous report intact",
            kind: "run",
            expected: "previous report\n",
            path: null,
            command: "printf 'previous report\\n' > /home/learner/report.txt; bash /home/learner/solution.sh 2>/dev/null; cat /home/learner/report.txt",
            stderr: "",
            exitCode: 0,
            clue: "Run this case yourself and compare the output with the task requirement."
          },
          {
            id: "preserve-extra",
            label: "Extra arguments leave previous report intact",
            kind: "run",
            expected: "previous report\n",
            path: null,
            command: "printf 'previous report\\n' > /home/learner/report.txt; bash /home/learner/solution.sh /home/learner/names-a.txt /home/learner/names-a.txt 2>/dev/null; cat /home/learner/report.txt",
            stderr: "",
            exitCode: 0,
            clue: "Run this case yourself and compare the output with the task requirement."
          },
          {
            id: "preserve-directory",
            label: "Directory rejection leaves previous report intact",
            kind: "run",
            expected: "previous report\n",
            path: null,
            command: "printf 'previous report\\n' > /home/learner/report.txt; bash /home/learner/solution.sh /home/learner 2>/dev/null; cat /home/learner/report.txt",
            stderr: "",
            exitCode: 0,
            clue: "Run this case yourself and compare the output with the task requirement."
          },
          {
            id: "other-source",
            label: "The second source is intact",
            kind: "file",
            expected: "plum\napricot\nplum\n",
            path: "/home/learner/other names.txt",
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Compare the observed result with the stated expectation, including spaces and newlines."
          }
        ]
      },
      hints: [
        "Place rejection checks before the first redirect to report.txt.",
        "A directory exists but is not a regular file; select the predicate for a file.",
        "Use replacement for a whole fresh report. An invalid-input branch must stop, not merely print a warning."
      ],
      resources: [
        {
          label: "GNU Bash: conditional expressions",
          url: "https://www.gnu.org/software/bash/manual/html_node/Bash-Conditional-Expressions.html"
        },
        {
          label: "GNU Bash: exit status",
          url: "https://www.gnu.org/software/bash/manual/html_node/Exit-Status.html"
        },
        {
          label: "GNU Bash: redirections",
          url: "https://www.gnu.org/software/bash/manual/html_node/Redirections.html"
        }
      ],
      quiz: [
        {
          prompt: "Why validate before redirecting output with >?",
          options: [
            "Redirection may replace the old report before the source is read",
            "Because > can only appear before if",
            "To append more copies",
            "To hide the argument count"
          ],
          correct: 0,
          clue: "Consider when opening an output destination can discard old text."
        },
        {
          prompt: "Does every failed Bash command automatically stop a normal script?",
          options: [
            "Yes, without exception",
            "No; an explicit branch or exit may be needed",
            "Only when it prints no output",
            "Only when its argument contains spaces"
          ],
          correct: 1,
          clue: "Review the difference between failure status and stopping execution."
        }
      ],
      local: null
    }
  ]
};

// curriculum/s08.json
var s08_default = {
  id: "s08",
  title: "Python from scratch",
  summary: "Start with values and output, choose and repeat using small collections, then return results and handle invalid values.",
  level: "Automation",
  exam: [
    {
      prompt: "Which is a Python string rather than a number?",
      options: [
        "12",
        "3 + 9",
        '"12"',
        "2 * 6"
      ],
      correct: 2,
      clue: "Look for the notation that marks text."
    },
    {
      prompt: "Which collection supplies the visiting order in the fruit lesson?",
      options: [
        "The list named order",
        "The name of the Python file",
        "An exception",
        "The number zero"
      ],
      correct: 0,
      clue: "Separate an ordered sequence from a lookup by key."
    },
    {
      prompt: "Why return a calculated value rather than only printing inside a function?",
      options: [
        "Returning automatically saves a file",
        "Returning lets the caller use the value",
        "Printing and returning are always identical",
        "Returning suppresses every error"
      ],
      correct: 1,
      clue: "Consider what the caller receives for further work."
    }
  ],
  lessons: [
    {
      id: "s08-l01",
      title: "Python starts with values and print",
      minutes: 15,
      mode: "python",
      why: "Python is another language for expressing small calculations and readable programs; no earlier Python knowledge is assumed.",
      teach: [
        "Python code is not Bash code. Put it in the provided /home/learner/solution.py editor, choose Save, then Run. The runner uses python3 /home/learner/solution.py. Python executes statements from top to bottom. A line beginning with # is a comment. Do not put a Bash shebang or shell commands into this exercise.",
        'A value is a piece of data. Text inside quotes, such as "cedar", is a string; a number such as 8 is written without quotes. print("cedar") calls the print function: parentheses contain what to display, and print adds a newline. Capitalization matters: print is lowercase.',
        'A variable gives a value a name: tree = "cedar" stores a string; print(tree) displays its value, while print("tree") displays the literal word tree. Unlike Bash, Python permits spaces around = and reads a variable without a $ prefix.',
        'For numbers, + adds and * multiplies: print(2 * 4 + 1) displays 9. Quotes change meaning: "8" is text, not the number 8. The example displays a string, a stored string, and a calculated number; your challenge uses different data.'
      ],
      terms: [
        {
          word: "string",
          meaning: "Text represented inside quotes."
        },
        {
          word: "value / variable",
          meaning: "A piece of data, and a name that refers to a value."
        }
      ],
      steps: [
        "Run the separate example and connect each print call with its output line.",
        "In the editor, write the title and store the requested name in a variable.",
        "Print the name and the requested numeric sum; Save, then Run."
      ],
      example: {
        title: "A tiny tree notebook",
        explanation: "The variable name refers to stored text; the arithmetic expression produces a number.",
        files: {
          "/home/learner/tree-demo.py": 'print("Tree notebook")\ntree = "cedar"\nprint(tree)\nprint(2 * 4 + 1)\n'
        },
        directories: [],
        cwd: "/home/learner",
        code: "python3 /home/learner/tree-demo.py",
        stdout: "Tree notebook\ncedar\n9\n",
        stderr: "",
        exitCode: 0
      },
      task: {
        goal: "Write your first three-line Python notebook.",
        requirements: [
          "Print Trail notebook on the first line and Mira on the second; store the name in a variable before printing it.",
          "Calculate the numeric sum of 4 and 6 and print 10 on the third line. Output ends with a newline, with no other output or errors."
        ],
        files: {},
        directories: [],
        cwd: "/home/learner",
        editor: {
          path: "/home/learner/solution.py",
          starter: "# Python starts here. Write your program below.\n"
        },
        runCommand: "python3 /home/learner/solution.py",
        checks: [
          {
            id: "notebook",
            label: "The saved Python file produces three exact lines",
            kind: "run",
            expected: "Trail notebook\nMira\n10\n",
            path: null,
            command: "python3 /home/learner/solution.py",
            stderr: "",
            exitCode: 0,
            clue: "Run this case yourself and compare the output with the task requirement."
          }
        ]
      },
      hints: [
        "Write Python statements, not Bash commands; print uses parentheses.",
        "A quoted name is text; an unquoted variable name retrieves the stored value.",
        "Use unquoted numbers for the addition. Inspect each output line separately if the result differs."
      ],
      resources: [
        {
          label: "Python tutorial: numbers and text",
          url: "https://docs.python.org/3/tutorial/introduction.html"
        }
      ],
      quiz: [
        {
          prompt: 'What does print("pine") display?',
          options: [
            "The word pine followed by a newline",
            "The name of the Python file",
            "Nothing until you use echo",
            "The quotation marks as required output"
          ],
          correct: 0,
          clue: "Separate the text value from the notation used to write it."
        },
        {
          prompt: "After score = 8, which expression is numeric addition?",
          options: [
            '"score + 2"',
            '"8 + 2"',
            "score + 2",
            "echo score"
          ],
          correct: 2,
          clue: "Quoted expressions are text rather than calculations."
        }
      ],
      local: null
    },
    {
      id: "s08-l02",
      title: "Choose and repeat with small collections",
      minutes: 18,
      mode: "python",
      why: "A few stored values can drive a useful decision without copying a block of code for each item.",
      teach: [
        'A collection holds related values. A list such as ["tea", "juice"] keeps an order. A dictionary such as {"tea": 2, "juice": 0} associates each key with a value; stock["tea"] retrieves 2. The starter supplies both collections, so you do not need to build or edit them for this task.',
        'Control flow chooses which statements run and how often. if stock["tea"] > 0: means run the indented block only when that number is greater than zero. An optional else: handles the other case. Unlike Bash, Python uses a colon and indentation rather than then and fi. Use four spaces for one indentation level.',
        "for drink in order: visits each list value in order. The indented body runs once for each value; drink names the current value. Inside the loop, stock[drink] looks up that current item\u2019s number. Put an if inside the loop when each item needs a decision: the print inside that if is indented eight spaces.",
        "Read the example one item at a time: the dictionary has the quantities, while the list supplies the visiting order. The task is one small loop containing one decision. It does not ask for input prompts, command-line arguments, or reading any files."
      ],
      terms: [
        {
          word: "list / dictionary",
          meaning: "An ordered sequence, and a key-to-value lookup collection."
        },
        {
          word: "control flow",
          meaning: "Choosing statements with if and repeating them with for."
        }
      ],
      steps: [
        "Trace the example\u2019s first item, then its second; compare each quantity with zero.",
        "Keep the supplied order and stock data; below them, visit each item in order.",
        "Print an item only if its quantity is greater than zero; Save and Run."
      ],
      example: {
        title: "Choose available drinks",
        explanation: "The loop follows the list order, not a sort; zero-stock drinks produce no line.",
        files: {
          "/home/learner/drinks-demo.py": 'order = ["juice", "water", "tea"]\nstock = {"tea": 2, "juice": 1, "water": 0}\nfor drink in order:\n    if stock[drink] > 0:\n        print(drink)\n'
        },
        directories: [],
        cwd: "/home/learner",
        code: "python3 /home/learner/drinks-demo.py",
        stdout: "juice\ntea\n",
        stderr: "",
        exitCode: 0
      },
      task: {
        goal: "Print only available fruit, following the supplied order.",
        requirements: [
          'Keep order = ["plums", "limes", "pears"] and stock = {"pears": 3, "limes": 0, "plums": 2} as supplied. Use their values to decide what to print.',
          "Print exactly plums then pears, one name per line: skip limes because its quantity is zero. The program finishes successfully without diagnostic output."
        ],
        files: {},
        directories: [],
        cwd: "/home/learner",
        editor: {
          path: "/home/learner/solution.py",
          starter: 'order = ["plums", "limes", "pears"]\nstock = {"pears": 3, "limes": 0, "plums": 2}\n# Below, visit the ordered items and print only available ones.\n'
        },
        runCommand: "python3 /home/learner/solution.py",
        checks: [
          {
            id: "available",
            label: "Only positive-stock items are printed in visiting order",
            kind: "run",
            expected: "plums\npears\n",
            path: null,
            command: "python3 /home/learner/solution.py",
            stderr: "",
            exitCode: 0,
            clue: "Run this case yourself and compare the output with the task requirement."
          },
          {
            id: "repeat",
            label: "Rerunning the saved file gives the same selection",
            kind: "run",
            expected: "plums\npears\n",
            path: null,
            command: "python3 /home/learner/solution.py",
            stderr: "",
            exitCode: 0,
            clue: "Run this case yourself and compare the output with the task requirement."
          }
        ]
      },
      hints: [
        "The list answers which item comes next; the dictionary answers how many of that item exist.",
        "Use the loop variable as the lookup key rather than checking one fixed fruit repeatedly.",
        "Indent the decision inside the loop, and indent its print inside the decision. Check the zero-stock item first if an extra line appears."
      ],
      resources: [
        {
          label: "Python tutorial: if and for",
          url: "https://docs.python.org/3/tutorial/controlflow.html"
        },
        {
          label: "Python tutorial: lists and dictionaries",
          url: "https://docs.python.org/3/tutorial/datastructures.html"
        }
      ],
      quiz: [
        {
          prompt: 'What does stock["tea"] retrieve from {"tea": 2}?',
          options: [
            "The entire list",
            "The value associated with the key tea",
            "The current script path",
            "The word stock"
          ],
          correct: 1,
          clue: "Distinguish a dictionary\u2019s key from its stored value."
        },
        {
          prompt: "What determines which statements belong inside a Python if block?",
          options: [
            "A closing fi",
            "A pipe symbol",
            "Their indentation after the colon",
            "A dollar sign"
          ],
          correct: 2,
          clue: "Python marks blocks differently from Bash."
        }
      ],
      local: null
    },
    {
      id: "s08-l03",
      title: "Return a value and reject an invalid one",
      minutes: 18,
      mode: "python",
      why: "A reusable calculation should return usable data and give invalid input a distinct path.",
      teach: [
        "A function packages a reusable action. def next_score(score): defines a function with one parameter named score; indent its body four spaces. next_score(4) calls it with 4. return score + 1 sends a value back to the caller and ends that call. return does not print: print(next_score(4)) displays the returned value.",
        'A function can reject a value by raising an exception: raise ValueError("negative score") signals that the supplied value is unsuitable. if score < 0: checks for a negative number. Once raised, the exception skips the rest of that call; it must not also return an ordinary result.',
        "try: starts a block that might raise an exception. except ValueError: runs a separate block if that specific error occurs. Indent both blocks as shown in the example. Catching ValueError here does not hide other mistakes such as misspelled variable names. A normal return skips the except block.",
        "Your starter already contains a tiny test loop with positive, zero, and negative counts. Keep it and define only the small double_count function above it. Use a normal return for the calculated result and a ValueError for an unsuitable count. The supplied caller prints the returned results or its error message, so your function itself should not print."
      ],
      terms: [
        {
          word: "parameter / return",
          meaning: "A function\u2019s named input, and the value it sends back to its caller."
        },
        {
          word: "exception",
          meaning: "A distinct error path that can be raised and caught by a matching handler."
        }
      ],
      steps: [
        "Trace the example\u2019s normal return, then its negative-input exception.",
        "Above the supplied test loop, define the one-parameter double_count function.",
        "Add its negative guard and normal return; leave printing to the supplied caller, then Save and Run."
      ],
      example: {
        title: "A score function with an error path",
        explanation: "The caller, not the function, decides how returned values and caught errors are displayed.",
        files: {
          "/home/learner/score-demo.py": 'def next_score(score):\n    if score < 0:\n        raise ValueError("negative score")\n    return score + 1\n\nfor score in [4, -1]:\n    try:\n        print(next_score(score))\n    except ValueError:\n        print("Score rejected")\n'
        },
        directories: [],
        cwd: "/home/learner",
        code: "python3 /home/learner/score-demo.py",
        stdout: "5\nScore rejected\n",
        stderr: "",
        exitCode: 0
      },
      task: {
        goal: "Complete a tiny calculation function without mixing results and errors.",
        requirements: [
          "Define double_count(count): for a nonnegative integer, return twice that integer without printing inside the function.",
          "For a negative integer, raise ValueError rather than returning a number. Keep the supplied caller loop unchanged.",
          "Running the saved file prints exactly 6, 0, 10, Count must not be negative, Count must not be negative on five separate lines, then finishes with no uncaught error."
        ],
        files: {},
        directories: [],
        cwd: "/home/learner",
        editor: {
          path: "/home/learner/solution.py",
          starter: '# Define double_count(count) here, above the supplied caller.\n\n# Supplied small test loop: define double_count above this line.\nfor count in [3, 0, 5, -2, -7]:\n    try:\n        print(double_count(count))\n    except ValueError:\n        print("Count must not be negative")\n'
        },
        runCommand: "python3 /home/learner/solution.py",
        checks: [
          {
            id: "cases",
            label: "Positive, zero, and two negative cases follow their distinct paths",
            kind: "run",
            expected: "6\n0\n10\nCount must not be negative\nCount must not be negative\n",
            path: null,
            command: "python3 /home/learner/solution.py",
            stderr: "",
            exitCode: 0,
            clue: "Run this case yourself and compare the output with the task requirement."
          }
        ]
      },
      hints: [
        "The supplied caller owns the output; the function should provide a value or signal an error.",
        "Test the negative case before the normal return, because return ends the call.",
        "Extra output suggests the function is printing as well as returning. An uncaught exception may have a different type than ValueError."
      ],
      resources: [
        {
          label: "Python tutorial: defining functions",
          url: "https://docs.python.org/3/tutorial/controlflow.html#defining-functions"
        },
        {
          label: "Python tutorial: handling and raising exceptions",
          url: "https://docs.python.org/3/tutorial/errors.html"
        }
      ],
      quiz: [
        {
          prompt: "What does return do in a Python function?",
          options: [
            "Displays a line by itself",
            "Sends a value back to the caller and ends the call",
            "Continues into every remaining statement",
            "Writes the editor file"
          ],
          correct: 1,
          clue: "Separate returning data from displaying it with print."
        },
        {
          prompt: "Which block handles a ValueError raised inside try?",
          options: [
            "Any later for loop",
            "A Bash else",
            "The matching except ValueError block",
            "A print statement before try"
          ],
          correct: 2,
          clue: "Match the raised exception type with the handler."
        }
      ],
      local: null
    }
  ]
};

// curriculum/s09.json
var s09_default = {
  id: "s09",
  title: "Python files and interfaces",
  summary: "Read text, handle expected failures, exchange JSON, and accept a small command-line argument.",
  level: "Automation",
  exam: [
    {
      prompt: "What does a with block do for an opened file?",
      options: [
        "Closes it when the block ends",
        "Deletes it",
        "Changes its owner",
        "Runs Bash"
      ],
      correct: 0,
      clue: "Look up the file context manager."
    },
    {
      prompt: "What does json.loads(text) produce?",
      options: [
        "Always a string",
        "Python values parsed from JSON",
        "An operating-system process",
        "A new terminal"
      ],
      correct: 1,
      clue: "Compare decoding and encoding."
    },
    {
      prompt: "In python3 tool.py blue, where is blue?",
      options: [
        "sys.stdin",
        "sys.argv[0]",
        "sys.argv[1]",
        "The current directory"
      ],
      correct: 2,
      clue: "Sketch the argument list including the script name."
    }
  ],
  lessons: [
    {
      id: "s09-l01",
      title: "Read a file, explain a missing file",
      minutes: 14,
      mode: "python",
      why: "A useful script reads real input and gives a short explanation when that input is unavailable.",
      teach: [
        'open("name", encoding="utf-8") reads a text file relative to the working directory. A with block closes the file for you. handle.read() returns one string, including any newline characters in the file.',
        'print(text) adds a newline; print(text, end="") preserves the exact text you read. The browser supplies files inside its training filesystem, not your computer. Start with a known file before trying an error case.',
        "A failed file read raises an OSError, including FileNotFoundError. Wrap only the read in try/except OSError. In the except block, print a short message with file=sys.stderr and stop with sys.exit(1). A normal run ends with status 0."
      ],
      terms: [
        {
          word: "context manager",
          meaning: "A with block that finishes cleanup even if reading fails."
        },
        {
          word: "exception",
          meaning: "A Python signal that an operation could not finish."
        },
        {
          word: "stderr",
          meaning: "The stream for diagnostics rather than useful output."
        }
      ],
      steps: [
        "Read the postcard example; notice that its final newline comes from the file.",
        "Write read_agenda.py using the provided agenda.txt; run it once.",
        "Use the checks to try the same program from an empty folder; compare stdout, stderr, and status."
      ],
      example: {
        title: "A postcard reader",
        explanation: "This reads a different file; the challenge uses its own name and error message.",
        files: {
          "/home/learner/postcard.txt": "Hello from the coast!\n",
          "/home/learner/postcard-demo.py": 'import sys\ntry:\n    with open("postcard.txt", encoding="utf-8") as handle:\n        message = handle.read()\nexcept OSError:\n    print("Postcard unavailable", file=sys.stderr)\n    sys.exit(1)\nprint(message, end="")\n'
        },
        directories: [],
        cwd: "/home/learner",
        code: "python3 /home/learner/postcard-demo.py",
        stdout: "Hello from the coast!\n",
        stderr: "",
        exitCode: 0
      },
      task: {
        goal: "Read agenda.txt without hiding a missing-file error.",
        requirements: [
          "On success print agenda.txt exactly, without an extra newline, and exit 0.",
          "If the file cannot be read, print nothing to stdout, print Cannot read agenda.txt followed by a newline to stderr, and exit 1."
        ],
        files: {
          "/home/learner/agenda.txt": "Focus: backups\n"
        },
        directories: [
          "/home/learner/empty"
        ],
        cwd: "/home/learner",
        editor: {
          path: "/home/learner/read_agenda.py",
          starter: "# Read agenda.txt here.\n"
        },
        runCommand: "python3 read_agenda.py",
        checks: [
          {
            id: "read",
            label: "Print the supplied agenda",
            kind: "run",
            expected: "Focus: backups\n",
            path: null,
            command: "python3 read_agenda.py",
            stderr: "",
            exitCode: 0,
            clue: "Trace the useful output from the supplied input; compare the expected text and its final newline."
          },
          {
            id: "missing",
            label: "Explain a missing agenda",
            kind: "run",
            expected: "",
            path: null,
            command: "cd /home/learner/empty && python3 /home/learner/read_agenda.py",
            stderr: "Cannot read agenda.txt\n",
            exitCode: 1,
            clue: "Inspect the read-error branch: which stream receives the diagnostic, and does the program stop?"
          }
        ]
      },
      hints: [
        "First get a with/open/read block working on the supplied file.",
        "Catch OSError around opening and reading, not around unrelated logic.",
        "The error branch needs sys.stderr and a nonzero sys.exit; preserving file text uses print with an empty end."
      ],
      resources: [
        {
          label: "Python tutorial",
          url: "https://docs.python.org/3/tutorial/"
        }
      ],
      quiz: [
        {
          prompt: "Why might print(handle.read()) add an unwanted blank line?",
          options: [
            "read removes every newline",
            "print normally adds a newline too",
            "with prints a line",
            "UTF-8 doubles lines"
          ],
          correct: 1,
          clue: "Compare the file ending with print\u2019s default end."
        },
        {
          prompt: "A missing input file should usually be reported where?",
          options: [
            "Only in a comment",
            "As a success message",
            "On stderr with a failure status",
            "In a new browser tab"
          ],
          correct: 2,
          clue: "Separate useful data from diagnostics."
        }
      ],
      local: null
    },
    {
      id: "s09-l02",
      title: "Decode and encode JSON",
      minutes: 14,
      mode: "python",
      why: "Structured data keeps names and numbers separate instead of asking you to split a sentence.",
      teach: [
        "JSON represents objects, lists, strings, numbers, booleans, and null. Python uses dictionaries and lists for the first two. json.load(handle) reads JSON from an open file; json.loads(text) reads an existing string.",
        'After decoding {"red": 2, "blue": 4}, data["red"] is the integer 2, not the text "2". The supplied challenge files always use the keys apples and pears with integer values; you do not need to invent a general schema validator.',
        "json.dumps(value) encodes a Python value as JSON text. Printing that text adds a useful final newline. Invalid JSON raises json.JSONDecodeError. Catch it alongside OSError for this exercise, using except (OSError, json.JSONDecodeError)."
      ],
      terms: [
        {
          word: "JSON",
          meaning: "A text format for structured data."
        },
        {
          word: "decode",
          meaning: "Turn JSON text into Python values."
        },
        {
          word: "encode",
          meaning: "Turn Python values into JSON text."
        }
      ],
      steps: [
        "Compare the example JSON file with its decoded dictionary.",
        "Load counts.json and add its two named integer values.",
        "Encode a dictionary with the single key total; then try the malformed fixture using the checks."
      ],
      example: {
        title: "Two paint colors",
        explanation: "The example uses different keys and a different result.",
        files: {
          "/home/learner/paint.json": '{"red": 2, "blue": 4}\n',
          "/home/learner/paint-demo.py": 'import json\nwith open("paint.json", encoding="utf-8") as handle:\n    paint = json.load(handle)\nprint(json.dumps({"cans": paint["red"] + paint["blue"]}))\n'
        },
        directories: [],
        cwd: "/home/learner",
        code: "python3 /home/learner/paint-demo.py",
        stdout: '{"cans": 6}\n',
        stderr: "",
        exitCode: 0
      },
      task: {
        goal: "Make fruit_total.py read counts.json and emit a JSON total.",
        requirements: [
          'For integer apples and pears values, print JSON in the form {"total": 7} followed by a newline; use the actual sum.',
          "Unreadable or malformed JSON must produce no stdout, stderr Invalid counts.json followed by a newline, and status 1."
        ],
        files: {
          "/home/learner/counts.json": '{"apples": 3, "pears": 4}\n',
          "/home/learner/other/counts.json": '{"apples": 8, "pears": 2}\n',
          "/home/learner/bad/counts.json": "{not JSON\n"
        },
        directories: [
          "/home/learner/empty"
        ],
        cwd: "/home/learner",
        editor: {
          path: "/home/learner/fruit_total.py",
          starter: "import json\nimport sys\n# Decode, calculate, encode.\n"
        },
        runCommand: "python3 fruit_total.py",
        checks: [
          {
            id: "total",
            label: "Sum the initial fruit counts",
            kind: "run",
            expected: '{"total": 7}\n',
            path: null,
            command: "python3 fruit_total.py",
            stderr: "",
            exitCode: 0,
            clue: "Trace the useful output from the supplied input; compare the expected text and its final newline."
          },
          {
            id: "other",
            label: "Use values from a different fixture",
            kind: "run",
            expected: '{"total": 10}\n',
            path: null,
            command: "cd /home/learner/other && python3 /home/learner/fruit_total.py",
            stderr: "",
            exitCode: 0,
            clue: "Read the active fixture values instead of fixing the initial result in the code."
          },
          {
            id: "bad",
            label: "Handle malformed JSON",
            kind: "run",
            expected: "",
            path: null,
            command: "cd /home/learner/bad && python3 /home/learner/fruit_total.py",
            stderr: "Invalid counts.json\n",
            exitCode: 1,
            clue: "Trace how malformed input reaches the error branch without producing useful output."
          },
          {
            id: "missing",
            label: "Handle an unreadable file",
            kind: "run",
            expected: "",
            path: null,
            command: "cd /home/learner/empty && python3 /home/learner/fruit_total.py",
            stderr: "Invalid counts.json\n",
            exitCode: 1,
            clue: "Inspect the read-error branch: which stream receives the diagnostic, and does the program stop?"
          }
        ]
      },
      hints: [
        "Use json.load inside the same with block as the file handle.",
        "Add the decoded integers, then put the result in a new one-key dictionary.",
        "Use json.dumps rather than printing the Python dictionary directly; catch the two taught exceptions."
      ],
      resources: [
        {
          label: "Python tutorial",
          url: "https://docs.python.org/3/tutorial/"
        }
      ],
      quiz: [
        {
          prompt: "Which is suitable for json.load?",
          options: [
            "An open text-file handle",
            "A Bash PID",
            "Only an integer",
            "A directory permission"
          ],
          correct: 0,
          clue: "Distinguish load from loads."
        },
        {
          prompt: "Why not print a Python dictionary as your JSON interface?",
          options: [
            "Dictionaries cannot contain numbers",
            "print closes stdout",
            "Python representation is not guaranteed JSON syntax",
            "JSON must be binary"
          ],
          correct: 2,
          clue: "Consider quote styles and boolean spellings."
        }
      ],
      local: null
    },
    {
      id: "s09-l03",
      title: "A small command-line interface",
      minutes: 14,
      mode: "python",
      why: "Arguments let the same program do useful work without editing its source each time.",
      teach: [
        'When Bash runs python3 portions.py 3, sys.argv is ["portions.py", "3"]. All arguments start as strings. Check len(sys.argv) before using an index so a missing argument does not cause a traceback.',
        'int(text) converts a whole-number string and raises ValueError for text such as "three". A conversion succeeding does not prove the value makes sense: this task also rejects negative counts. Zero is allowed.',
        "For this small interface, every bad invocation has one helpful usage message on stderr and status 2. Keep stdout for the result. Importing sys does not start an OS process; these arguments are supported by the browser Python bridge."
      ],
      terms: [
        {
          word: "argument",
          meaning: "A value after the program name on its command line."
        },
        {
          word: "validation",
          meaning: "Checking input before using it."
        },
        {
          word: "usage message",
          meaning: "A short description of accepted arguments."
        }
      ],
      steps: [
        "Read the example argument list and conversion.",
        "Write the count and conversion checks before calculating.",
        "Try 3, 0, a negative number, and text through the checks."
      ],
      example: {
        title: "Understand an argument list",
        explanation: "This runnable illustration uses a sample list to show conversion; a real CLI reads sys.argv instead. The challenge must read real arguments.",
        files: {
          "/home/learner/arguments-demo.py": 'sample_argv = ["tickets.py", "4"]\nnumber = int(sample_argv[1])\nprint(number * 2)\n'
        },
        directories: [],
        cwd: "/home/learner",
        code: "python3 /home/learner/arguments-demo.py",
        stdout: "8\n",
        stderr: "",
        exitCode: 0
      },
      task: {
        goal: "Write portions.py: each nonnegative count makes two meals.",
        requirements: [
          "With exactly one nonnegative integer COUNT, print Meals: followed by a space and twice COUNT, then a newline; exit 0.",
          "With a missing/extra argument, noninteger text, or a negative count, print no stdout, print Usage: portions.py COUNT to stderr with a newline, and exit 2."
        ],
        files: {},
        directories: [],
        cwd: "/home/learner",
        editor: {
          path: "/home/learner/portions.py",
          starter: "import sys\n# Validate before calculating.\n"
        },
        runCommand: "python3 portions.py 3",
        checks: [
          {
            id: "three",
            label: "Calculate from an argument",
            kind: "run",
            expected: "Meals: 6\n",
            path: null,
            command: "python3 portions.py 3",
            stderr: "",
            exitCode: 0,
            clue: "Trace the useful output from the supplied input; compare the expected text and its final newline."
          },
          {
            id: "zero",
            label: "Allow zero",
            kind: "run",
            expected: "Meals: 0\n",
            path: null,
            command: "python3 portions.py 0",
            stderr: "",
            exitCode: 0,
            clue: "Trace the useful output from the supplied input; compare the expected text and its final newline."
          },
          {
            id: "text",
            label: "Reject noninteger input",
            kind: "run",
            expected: "",
            path: null,
            command: "python3 portions.py three",
            stderr: "Usage: portions.py COUNT\n",
            exitCode: 2,
            clue: "Trace the ValueError path before looking at the calculation."
          },
          {
            id: "negative",
            label: "Reject negative input",
            kind: "run",
            expected: "",
            path: null,
            command: "python3 portions.py -1",
            stderr: "Usage: portions.py COUNT\n",
            exitCode: 2,
            clue: "A successful integer conversion still needs the taught range check."
          },
          {
            id: "missing",
            label: "Explain a missing argument",
            kind: "run",
            expected: "",
            path: null,
            command: "python3 portions.py",
            stderr: "Usage: portions.py COUNT\n",
            exitCode: 2,
            clue: "Inspect the read-error branch: which stream receives the diagnostic, and does the program stop?"
          },
          {
            id: "extra",
            label: "Reject extra arguments",
            kind: "run",
            expected: "",
            path: null,
            command: "python3 portions.py 2 3",
            stderr: "Usage: portions.py COUNT\n",
            exitCode: 2,
            clue: "Compare the entire argument count with the interface, not just the first argument."
          }
        ]
      },
      hints: [
        "Check the argument-list length before reading element 1.",
        "Separate conversion failure from the negative-value rule.",
        "Use one consistent error message for all invalid inputs, and do not continue to the result after reporting an error."
      ],
      resources: [
        {
          label: "Python tutorial",
          url: "https://docs.python.org/3/tutorial/"
        }
      ],
      quiz: [
        {
          prompt: "What type is sys.argv[1] before conversion?",
          options: [
            "Always an integer",
            "A string",
            "A file handle",
            "A JSON object"
          ],
          correct: 1,
          clue: "The command line supplies text."
        },
        {
          prompt: "Why check the number of arguments first?",
          options: [
            "To make int run faster",
            "To install Python",
            "To avoid accessing a missing list element",
            "To turn stderr off"
          ],
          correct: 2,
          clue: "What happens to argv[1] when no argument was supplied?"
        }
      ],
      local: null
    }
  ]
};

// curriculum/s10.json
var s10_default = {
  id: "s10",
  title: "Bash and Python as teammates",
  summary: "Keep Bash orchestration small and use supplied Python programs for structured data.",
  level: "Automation",
  exam: [
    {
      prompt: 'Why quote "$1" when forwarding a filename?',
      options: [
        "It makes the file executable",
        "It deletes whitespace",
        "It converts JSON",
        "It keeps one argument even when the name contains spaces"
      ],
      correct: 3,
      clue: "Review shell word splitting."
    },
    {
      prompt: "What does a pipe connect?",
      options: [
        "Left stdout to right stdin",
        "Both error streams to disk",
        "A local Linux scheduler",
        "A Python import to Bash"
      ],
      correct: 0,
      clue: "Draw the two commands and their streams."
    },
    {
      prompt: "Why collect helper output before opening the final report?",
      options: [
        "To make JSON invalid",
        "To avoid truncating the old report if the helper fails",
        "To hide every error",
        "To start more processes"
      ],
      correct: 1,
      clue: "Redirection happens before a command runs."
    }
  ],
  lessons: [
    {
      id: "s10-l01",
      title: "Call a supplied helper",
      minutes: 14,
      mode: "script",
      why: "You can use a Python program without rewriting it in Bash.",
      teach: [
        'python3 helper.py "some file.txt" asks the browser bridge to run real Python with one filename argument. This is still a training filesystem, not a Linux virtual machine. Do not try subprocess, sudo, or OS process control here.',
        "The supplied word_count.py helper counts whitespace-separated words. It accepts one filename, prints the count on stdout, and exits 0. It reports Cannot read words on stderr with status 1 for unreadable input; wrong argument count gives its usage message and status 2.",
        'Bash forwards arguments with "$@": each original argument remains separate, including filenames with spaces. The status of the last command becomes the script status unless you override it. Avoid printing a success message after a failed helper.'
      ],
      terms: [
        {
          word: "helper",
          meaning: "An existing program that handles one focused operation."
        },
        {
          word: '"$@"',
          meaning: "Bash expansion that forwards each positional argument without losing boundaries."
        }
      ],
      steps: [
        "Inspect the supplied helper before using it.",
        "Write count.sh to forward its arguments to word_count.py.",
        "Run it with the spaced filename; use checks to explore a missing file and missing argument."
      ],
      example: {
        title: "A tiny helper invocation",
        explanation: "Bash calls a supplied Python file. This example reports character length, not the challenge word count.",
        files: {
          "/home/learner/short note.txt": "hello",
          "/home/learner/letters.py": 'import sys\nif len(sys.argv) != 2:\n    print("Usage: letters.py FILE", file=sys.stderr)\n    sys.exit(2)\ntry:\n    with open(sys.argv[1], encoding="utf-8") as handle:\n        text = handle.read()\nexcept (OSError, UnicodeError):\n    print("Cannot read letters", file=sys.stderr)\n    sys.exit(1)\nprint(len(text))\n'
        },
        directories: [],
        cwd: "/home/learner",
        code: 'python3 letters.py "short note.txt"\n',
        stdout: "5\n",
        stderr: "",
        exitCode: 0
      },
      task: {
        goal: "Write count.sh as a small Bash wrapper around the supplied helper.",
        requirements: [
          "Forward arguments unchanged to word_count.py and preserve its stdout, stderr, and status.",
          "The provided team notes.txt contains five words; another.txt contains two. Do not hard-code counts.",
          "Missing files must retain the helper\u2019s status 1; missing arguments must retain its usage message and status 2."
        ],
        files: {
          "/home/learner/word_count.py": 'import sys\nif len(sys.argv) != 2:\n    print("Usage: word_count.py FILE", file=sys.stderr)\n    sys.exit(2)\ntry:\n    with open(sys.argv[1], encoding="utf-8") as handle:\n        words = handle.read().split()\nexcept (OSError, UnicodeError):\n    print("Cannot read words", file=sys.stderr)\n    sys.exit(1)\nprint(len(words))\n',
          "/home/learner/team notes.txt": "plan a calm release today\n",
          "/home/learner/another.txt": "test first\n"
        },
        directories: [],
        cwd: "/home/learner",
        editor: {
          path: "/home/learner/count.sh",
          starter: "#!/usr/bin/env bash\n# Call the supplied helper.\n"
        },
        runCommand: 'bash count.sh "team notes.txt"',
        checks: [
          {
            id: "spaced",
            label: "Forward a filename containing spaces",
            kind: "run",
            expected: "5\n",
            path: null,
            command: 'bash count.sh "team notes.txt"',
            stderr: "",
            exitCode: 0,
            clue: "Check that the spaced filename remains one argument at the helper boundary."
          },
          {
            id: "different",
            label: "Count different input",
            kind: "run",
            expected: "2\n",
            path: null,
            command: "bash count.sh another.txt",
            stderr: "",
            exitCode: 0,
            clue: "Follow the forwarded filename and inspect the data in that file."
          },
          {
            id: "missing",
            label: "Retain helper read errors",
            kind: "run",
            expected: "",
            path: null,
            command: "bash count.sh absent.txt",
            stderr: "Cannot read words\n",
            exitCode: 1,
            clue: "Inspect the read-error branch: which stream receives the diagnostic, and does the program stop?"
          },
          {
            id: "usage",
            label: "Retain helper usage errors",
            kind: "run",
            expected: "",
            path: null,
            command: "bash count.sh",
            stderr: "Usage: word_count.py FILE\n",
            exitCode: 2,
            clue: "Check the argument count before reading positional arguments or starting useful work."
          }
        ]
      },
      hints: [
        "Your Bash file does not need to read the text itself.",
        'Compare "$1" for one argument with "$@" for all supplied arguments.',
        "If the helper is the last command, its failure status already becomes the script status."
      ],
      resources: [
        {
          label: "Python tutorial",
          url: "https://docs.python.org/3/tutorial/"
        }
      ],
      quiz: [
        {
          prompt: "What is the benefit of a small Bash wrapper?",
          options: [
            "It replaces Python syntax",
            "It can orchestrate an existing focused helper",
            "It makes subprocess work in the browser",
            "It ignores errors automatically"
          ],
          correct: 1,
          clue: "Think about dividing responsibilities."
        },
        {
          prompt: "What status does a script normally have when its final command fails with 1?",
          options: [
            "Always 0",
            "Always 2",
            "1",
            "A JSON string"
          ],
          correct: 2,
          clue: "Review how the last command determines the status."
        }
      ],
      local: null
    },
    {
      id: "s10-l02",
      title: "Feed JSON through stdin",
      minutes: 14,
      mode: "script",
      why: "A pipe sends data between programs without inventing a temporary interchange file.",
      teach: [
        'A pipe connects the left command\u2019s stdout to the right command\u2019s stdin. cat "values.json" | python3 helper.py sends file contents as input, not as a filename argument. Python uses sys.stdin.read() to receive the whole text.',
        "The supplied sum_json.py decodes one JSON list of integers and prints a JSON object with a total. An empty list totals zero. Malformed JSON or a different structure gives Expected a JSON integer list on stderr and status 1.",
        "Keep diagnostics on stderr so they cannot corrupt JSON on stdout. A pipeline normally reports the rightmost command\u2019s status; this exercise uses existing files and checks the helper\u2019s data errors. The next lesson handles a file-read failure before writing a report."
      ],
      terms: [
        {
          word: "stdin",
          meaning: "A program\u2019s input stream."
        },
        {
          word: "pipeline",
          meaning: "Commands connected so one stdout becomes the next stdin."
        }
      ],
      steps: [
        "Run the example pipeline and inspect its supplied helper.",
        "Write total.sh to send the file named by its first argument into sum_json.py.",
        "Use the checks with a second list, an empty list, and malformed JSON."
      ],
      example: {
        title: "Decode data arriving on stdin",
        explanation: "This supplied helper reports list length rather than a sum.",
        files: {
          "/home/learner/list_size.py": 'import json\nimport sys\ntry:\n    values = json.loads(sys.stdin.read())\n    if not isinstance(values, list):\n        raise ValueError("not a list")\nexcept (json.JSONDecodeError, ValueError):\n    print("Expected a JSON list", file=sys.stderr)\n    sys.exit(1)\nprint(len(values))\n'
        },
        directories: [],
        cwd: "/home/learner",
        code: `printf '["oak", "elm"]\\n' | python3 list_size.py
`,
        stdout: "2\n",
        stderr: "",
        exitCode: 0
      },
      task: {
        goal: "Use a Bash pipeline to total a JSON list with the supplied Python helper.",
        requirements: [
          "With one existing filename argument, pipe its contents into sum_json.py; keep filenames with spaces intact.",
          "Print only the helper JSON and preserve its status: the initial input totals 12, and an empty list totals 0.",
          "Malformed input must retain the helper\u2019s stderr Expected a JSON integer list and status 1."
        ],
        files: {
          "/home/learner/sum_json.py": 'import json\nimport sys\ntry:\n    values = json.loads(sys.stdin.read())\n    if not isinstance(values, list) or any(type(n) is not int for n in values):\n        raise ValueError("expected integer list")\nexcept (json.JSONDecodeError, ValueError):\n    print("Expected a JSON integer list", file=sys.stderr)\n    sys.exit(1)\nprint(json.dumps({"total": sum(values)}))\n',
          "/home/learner/daily numbers.json": "[3, 4, 5]\n",
          "/home/learner/more.json": "[2, 8]\n",
          "/home/learner/empty.json": "[]\n",
          "/home/learner/bad.json": "not JSON\n"
        },
        directories: [],
        cwd: "/home/learner",
        editor: {
          path: "/home/learner/total.sh",
          starter: "#!/usr/bin/env bash\n# Pipe the input file into sum_json.py.\n"
        },
        runCommand: 'bash total.sh "daily numbers.json"',
        checks: [
          {
            id: "sum",
            label: "Send file contents through the pipeline",
            kind: "run",
            expected: '{"total": 12}\n',
            path: null,
            command: 'bash total.sh "daily numbers.json"',
            stderr: "",
            exitCode: 0,
            clue: "Trace the useful output from the supplied input; compare the expected text and its final newline."
          },
          {
            id: "more",
            label: "Use different input values",
            kind: "run",
            expected: '{"total": 10}\n',
            path: null,
            command: "bash total.sh more.json",
            stderr: "",
            exitCode: 0,
            clue: "Follow the pipeline with the second fixture, keeping the JSON result unadorned."
          },
          {
            id: "empty",
            label: "Handle an empty list",
            kind: "run",
            expected: '{"total": 0}\n',
            path: null,
            command: "bash total.sh empty.json",
            stderr: "",
            exitCode: 0,
            clue: "Check the result for an empty collection rather than reusing the initial fixture result."
          },
          {
            id: "bad",
            label: "Retain the data error",
            kind: "run",
            expected: "",
            path: null,
            command: "bash total.sh bad.json",
            stderr: "Expected a JSON integer list\n",
            exitCode: 1,
            clue: "Trace how malformed input reaches the error branch without producing useful output."
          }
        ]
      },
      hints: [
        "The helper reads stdin; passing the filename to Python is not the same as sending file contents.",
        "The left command needs a quoted filename argument.",
        "Let helper output travel straight to the caller; do not add labels around its JSON."
      ],
      resources: [
        {
          label: "Python tutorial",
          url: "https://docs.python.org/3/tutorial/"
        }
      ],
      quiz: [
        {
          prompt: "What does sys.stdin.read() receive in this pipeline?",
          options: [
            "The filename only",
            "The script source",
            "The JSON file contents",
            "A Linux process ID"
          ],
          correct: 2,
          clue: "Trace cat\u2019s stdout."
        },
        {
          prompt: "Why keep error messages off stdout in a JSON pipeline?",
          options: [
            "They could make the JSON invalid",
            "They run faster on stderr",
            "JSON cannot contain numbers",
            "stderr is always hidden"
          ],
          correct: 0,
          clue: "Imagine a decoder receiving a message before its JSON."
        }
      ],
      local: null
    },
    {
      id: "s10-l03",
      title: "Build a report without clobbering it on input failure",
      minutes: 14,
      mode: "script",
      why: "This small integration project joins arguments, helper errors, and safe ordering.",
      teach: [
        "The supplied task_summary.py accepts a JSON filename containing a list of objects with a boolean done field. It prints two lines: Tasks: N and Done: N. A missing, unreadable, malformed, or wrong-shaped input reports Cannot read task data on stderr and exits 1.",
        'Redirecting helper output straight to an existing report with > opens and truncates the report before the helper runs. Instead, collect a small result with summary=$(python3 helper.py "$input"). Command substitution removes trailing newlines, so printf "%s\\n" "$summary" restores one final newline.',
        "An assignment containing command substitution has the helper\u2019s status. You can use if summary=$(...); then ...; else exit 1; fi to write only on success. Check for exactly two arguments first; this task uses a short usage message and status 2.",
        "This is bounded training data, not a solution for huge reports or disk failures. Your Bash file orchestrates the supplied helper; you do not need to parse JSON in Bash."
      ],
      terms: [
        {
          word: "command substitution",
          meaning: "Capture a command\u2019s stdout in a Bash value."
        },
        {
          word: "truncate",
          meaning: "Replace a file\u2019s old contents, even before new data is available."
        }
      ],
      steps: [
        "Inspect the JSON fixture and helper\u2019s two-line output.",
        "Validate the two arguments, collect the helper result, and write only in the success branch.",
        "Run the capstone checks; a failed input must leave the pre-existing guard report unchanged."
      ],
      example: {
        title: "Capture first, then save",
        explanation: "This different example only illustrates the ordering and restored newline.",
        files: {},
        directories: [],
        cwd: "/home/learner",
        code: `if note=$(printf 'Practice complete\\n'); then
    printf '%s\\n' "$note" > practice.txt
    printf 'Wrote practice note\\n'
fi
`,
        stdout: "Wrote practice note\n",
        stderr: "",
        exitCode: 0
      },
      task: {
        goal: "Write report.sh INPUT OUTPUT using the supplied task_summary.py.",
        requirements: [
          "For a valid input, write the exact two helper lines to OUTPUT, print Saved report with a newline to stdout, and exit 0; quote both paths.",
          "On an input/helper failure, preserve its diagnostic, exit 1, print no success message, and neither create nor overwrite OUTPUT.",
          "If the number of arguments is not two, print Usage: report.sh INPUT OUTPUT with a newline to stderr, no stdout, and exit 2."
        ],
        files: {
          "/home/learner/task_summary.py": 'import json\nimport sys\nif len(sys.argv) != 2:\n    print("Usage: task_summary.py FILE", file=sys.stderr)\n    sys.exit(2)\ntry:\n    with open(sys.argv[1], encoding="utf-8") as handle:\n        tasks = json.load(handle)\nexcept (OSError, UnicodeError, json.JSONDecodeError):\n    print("Cannot read task data", file=sys.stderr)\n    sys.exit(1)\nif not isinstance(tasks, list) or any(not isinstance(t, dict) or type(t.get("done")) is not bool for t in tasks):\n    print("Cannot read task data", file=sys.stderr)\n    sys.exit(1)\nprint("Tasks:", len(tasks))\nprint("Done:", sum(t["done"] for t in tasks))\n',
          "/home/learner/daily tasks.json": '[{"done": true}, {"done": false}, {"done": true}]\n',
          "/home/learner/empty-tasks.json": "[]\n",
          "/home/learner/bad-tasks.json": "{broken\n",
          "/home/learner/guard.txt": "keep\n"
        },
        directories: [],
        cwd: "/home/learner",
        editor: {
          path: "/home/learner/report.sh",
          starter: "#!/usr/bin/env bash\n# Validate, collect, then save.\n"
        },
        runCommand: 'bash report.sh "daily tasks.json" "daily report.txt"',
        checks: [
          {
            id: "success",
            label: "Save a report and announce success",
            kind: "run",
            expected: "Saved report\n",
            path: null,
            command: 'bash report.sh "daily tasks.json" "daily report.txt"',
            stderr: "",
            exitCode: 0,
            clue: "Trace the useful output from the supplied input; compare the expected text and its final newline."
          },
          {
            id: "file",
            label: "Report contains the actual helper data",
            kind: "file",
            expected: "Tasks: 3\nDone: 2\n",
            path: "/home/learner/daily report.txt",
            command: null,
            stderr: null,
            exitCode: null,
            clue: "Open the saved report and compare both lines and the final newline."
          },
          {
            id: "empty",
            label: "Report another dataset",
            kind: "run",
            expected: "Saved report\nTasks: 0\nDone: 0\n",
            path: null,
            command: "bash report.sh empty-tasks.json empty-report.txt && cat empty-report.txt",
            stderr: "",
            exitCode: 0,
            clue: "Check the result for an empty collection rather than reusing the initial fixture result."
          },
          {
            id: "missing",
            label: "Preserve old output after a missing input",
            kind: "run",
            expected: "keep\n",
            path: null,
            command: 'bash report.sh absent.json guard.txt; status=$?; cat guard.txt; exit "$status"',
            stderr: "Cannot read task data\n",
            exitCode: 1,
            clue: "Inspect the read-error branch: which stream receives the diagnostic, and does the program stop?"
          },
          {
            id: "bad",
            label: "Do not create output for malformed JSON",
            kind: "run",
            expected: "",
            path: null,
            command: 'bash report.sh bad-tasks.json failed-report.txt; status=$?; if test -e failed-report.txt; then printf "Unexpected report\\n"; fi; exit "$status"',
            stderr: "Cannot read task data\n",
            exitCode: 1,
            clue: "Trace how malformed input reaches the error branch without producing useful output."
          },
          {
            id: "usage",
            label: "Explain missing arguments",
            kind: "run",
            expected: "",
            path: null,
            command: "bash report.sh",
            stderr: "Usage: report.sh INPUT OUTPUT\n",
            exitCode: 2,
            clue: "Check the argument count before reading positional arguments or starting useful work."
          }
        ]
      },
      hints: [
        "Think about when > opens the output file; move that operation after helper success.",
        "Use an if around the assignment so you can separate success from failure without printing captured text early.",
        "Command substitution trims trailing newlines; printf with a %s format and one newline restores the report ending."
      ],
      resources: [
        {
          label: "Python tutorial",
          url: "https://docs.python.org/3/tutorial/"
        }
      ],
      quiz: [
        {
          prompt: "When does > open an existing destination?",
          options: [
            "Only after successful helper execution",
            "Before the command runs",
            "After the browser closes",
            "Never"
          ],
          correct: 1,
          clue: "Review why writing directly can destroy an old report."
        },
        {
          prompt: "What should follow a failed helper in this task?",
          options: [
            "A success announcement",
            "Writing an empty report",
            "A nonzero exit without touching the output",
            "Ignoring stderr"
          ],
          correct: 2,
          clue: "Match the failure branch to the report-preservation requirement."
        }
      ],
      local: null
    }
  ]
};

// curriculum/s11.json
var s11_default = {
  id: "s11",
  title: "Real Linux: small, isolated labs",
  summary: "Leave the browser deliberately to practice permissions, real signals, and scheduler-ready environments. Completion is self-attested after running local tests.",
  level: "Real Linux labs",
  exam: [
    {
      prompt: "Why do these labs use your chosen local Linux environment?",
      options: [
        "The browser training filesystem has real OS permissions",
        "The browser cannot provide real Linux processes and permission behavior",
        "JSON needs sudo",
        "Quizzes install Bash"
      ],
      correct: 1,
      clue: "Separate the training interpreter from an operating system."
    },
    {
      prompt: "What does a TERM trap help a Bash process do?",
      options: [
        "Handle a request to stop cleanly",
        "Catch every possible signal including KILL",
        "Make cron install itself",
        "Change all system permissions"
      ],
      correct: 0,
      clue: "Review catchable termination versus forced termination."
    },
    {
      prompt: "Why specify paths and environment for a scheduled task?",
      options: [
        "Cron always has your terminal aliases",
        "Scheduled jobs share the browser editor",
        "A scheduler may have a smaller environment and a different directory",
        "Logs are not files"
      ],
      correct: 2,
      clue: "Compare an interactive terminal with a scheduled invocation."
    }
  ],
  lessons: [
    {
      id: "s11-l01",
      title: "Identify tools and prepare a private sandbox",
      minutes: 20,
      mode: "local",
      why: "Real permissions belong to the OS; practice them only on new files you own.",
      teach: [
        "This lesson is deliberately local, not browser-executable. command -v bash and command -v python3 show which installed tools your terminal finds. Bash runs a .sh file with bash filename.sh even if that file is not executable; chmod +x is a separate permission choice.",
        "Linux permission bits distinguish owner, group, and others. chmod 600 file means owner read/write and no group/other access. ls -l normally displays this as -rw-------. Change only your own exercise status file, never a system directory or a recursive tree.",
        'mkdir -p -- "$directory" creates a named directory and tolerates it already existing. The -- ends option parsing; quotes preserve spaces. A repeatable script can overwrite its own small status file, but must leave sibling files alone.',
        "The example below is illustrative local code; the browser does not execute it. Save the exercise-specific verifier locally and run it yourself. Checking this lesson complete is self-attestation after those tests, not a claim that the browser inspected your OS."
      ],
      terms: [
        {
          word: "permission bits",
          meaning: "OS rules for owner, group, and others."
        },
        {
          word: "sandbox directory",
          meaning: "A personal disposable folder used to limit the exercise\u2019s scope."
        },
        {
          word: "repeatable",
          meaning: "Running again leaves the intended result instead of duplicating it."
        }
      ],
      steps: [
        "Follow local.setup and identify Bash and Python before creating your script.",
        "Write prepare.sh in the new project folder; use its one directory argument as the only output location.",
        "Run the example local commands, then the downloaded verifier. Read failures before self-attesting."
      ],
      example: {
        title: "Illustrative local permission change",
        explanation: "Do not run this in the browser. These commands concern a different scratch note.",
        files: {},
        directories: [],
        cwd: "/home/learner",
        code: "printf 'draft\\n' > sample-note.txt\nchmod 600 sample-note.txt\nls -l sample-note.txt\n",
        stdout: "Illustrative only: the permission column would be -rw-------; owner and timestamp vary.\n",
        stderr: "",
        exitCode: 0
      },
      task: {
        goal: "Locally implement prepare.sh DIRECTORY; run it with Bash, not in the browser.",
        requirements: [
          "Create DIRECTORY if necessary, write exactly ready plus a newline to DIRECTORY/status.txt, and set only that file to mode 600.",
          "On success print Prepared sandbox with a newline and exit 0; handle spaces and repeat runs without changing sibling files.",
          "Without exactly one argument, print Usage: prepare.sh DIRECTORY to stderr with a newline, no stdout, and exit 2."
        ],
        files: {},
        directories: [],
        cwd: "/home/learner",
        editor: null,
        runCommand: null,
        checks: []
      },
      hints: [
        "Start by validating the number of arguments before using $1.",
        "Create the requested directory, then write one status file inside it; do not recursively chmod.",
        "Use an owner-only numeric mode on the newly written file, and let each repeat replace that one status line."
      ],
      resources: [
        {
          label: "Bash manual",
          url: "https://www.gnu.org/software/bash/manual/bash.html"
        },
        {
          label: "Python unittest documentation",
          url: "https://docs.python.org/3/library/unittest.html"
        }
      ],
      quiz: [
        {
          prompt: "What does chmod 600 status.txt allow?",
          options: [
            "Everyone may execute it",
            "Only the owner may read and write it",
            "Nobody may read it",
            "It makes the directory recursive"
          ],
          correct: 1,
          clue: "Decode the owner/group/other octal digits."
        },
        {
          prompt: "Why run bash prepare.sh instead of requiring ./prepare.sh immediately?",
          options: [
            "The former does not require executable permission on the script",
            "The former ignores all errors",
            "The former runs in the browser",
            "The former installs Bash"
          ],
          correct: 0,
          clue: "Separate invoking an interpreter from executing a file directly."
        }
      ],
      local: {
        setup: [
          "Local Linux only. Nothing in this lesson runs on your computer until you deliberately open a local terminal and follow these instructions. The browser is not a Linux VM.",
          "Use an existing Linux environment with Bash and Python 3 (3.9 or newer). On Windows choose a Linux environment you control, such as already-configured WSL. If either tool is absent, follow your operating-system provider\u2019s installation guide; these exercises require no sudo or paid tools.",
          'Create a new personal project folder, for example mkdir -p "$HOME/bash-trail-labs/s11a", then cd "$HOME/bash-trail-labs/s11a". Use command -v bash and command -v python3 to identify the tools; python3 --version shows the installed version.',
          "In your local editor create prepare.sh. Save the downloaded testFile as verify_lab.py beside it, not in a system folder. Read both before running them. Verifier fixtures are temporary; a subprocess timeout is not a security boundary for arbitrary code."
        ],
        commands: [
          {
            label: "Prepare an owned sandbox",
            command: 'bash prepare.sh "practice area"',
            expected: "Status 0; stdout Prepared sandbox followed by a newline; practice area/status.txt contains ready plus a newline, mode 600."
          },
          {
            label: "Inspect without changing permissions",
            command: 'ls -l "practice area/status.txt"',
            expected: "Status 0; permission column -rw------- (other columns depend on your OS)."
          },
          {
            label: "Run downloaded verifier",
            command: "python3 verify_lab.py -v",
            expected: "Status 0 with unittest OK after you implement the artifact; until then, failures identify the unmet behavior."
          }
        ],
        checks: [
          "Self-attested after local tests: I ran the verifier with status 0 and unittest OK.",
          "Self-attested after local tests: I inspected the private status file and changed no system permissions."
        ],
        testFile: `"""Run beside the learner artifact: python3 verify_lab.py -v.
Tests execute only the named local artifact in disposable test directories.
Review your script first: subprocess timeouts are not a security sandbox.
"""
import os
from pathlib import Path
import shutil
import signal
import subprocess
import sys
import tempfile
import time
import unittest


ARTIFACT = Path(__file__).resolve().parent / 'prepare.sh'
BASH = shutil.which("bash")

class LabTests(unittest.TestCase):
    def setUp(self):
        self.assertTrue(ARTIFACT.is_file(), f"Create {ARTIFACT.name} beside this verifier before running it.")
        self.tmp = tempfile.TemporaryDirectory(prefix="bash-trail-")
        self.addCleanup(self.tmp.cleanup)
        self.root = Path(self.tmp.name)

    def run_artifact(self, *args, env=None):
        prefix = [sys.executable] if ARTIFACT.suffix == ".py" else [BASH]
        if ARTIFACT.suffix != ".py":
            self.assertIsNotNone(BASH, "Bash is required for this Linux lab.")
        try:
            return subprocess.run(prefix + [str(ARTIFACT)] + list(args), cwd=self.root,
                                  env=env, text=True, capture_output=True, timeout=4)
        except subprocess.TimeoutExpired:
            self.fail("The learner artifact exceeded 4 seconds; check termination and child timeouts.")

    def result(self, got, status=0, out="", err=""):
        self.assertEqual(got.returncode, status, f"Unexpected status; stdout={got.stdout!r}, stderr={got.stderr!r}")
        self.assertEqual(got.stdout, out, "Useful output differs from the stated interface.")
        self.assertEqual(got.stderr, err, "Diagnostic output differs from the stated interface.")

    def test_creates_private_status_inside_named_sandbox(self):
        target = self.root / "practice area"
        outside = self.root / "leave-me.txt"
        outside.write_text("unchanged\\n", encoding="utf-8")
        got = self.run_artifact(str(target))
        self.result(got, out="Prepared sandbox\\n")
        status = target / "status.txt"
        self.assertTrue(status.is_file(), "Create status.txt inside the directory argument.")
        self.assertEqual(status.read_text(encoding="utf-8"), "ready\\n")
        self.assertEqual(status.stat().st_mode & 0o777, 0o600, "Only the owner should have read/write permission on status.txt.")
        self.assertEqual(outside.read_text(encoding="utf-8"), "unchanged\\n", "Do not change sibling files.")
        self.result(self.run_artifact(str(target)), out="Prepared sandbox\\n")
        self.assertEqual(status.read_text(encoding="utf-8"), "ready\\n", "Repeat runs must not append duplicate status lines.")

    def test_missing_argument_is_explained(self):
        self.result(self.run_artifact(), 2, err="Usage: prepare.sh DIRECTORY\\n")
        self.result(self.run_artifact("one", "two"), 2, err="Usage: prepare.sh DIRECTORY\\n")


if __name__ == "__main__":
    unittest.main()
`
      }
    },
    {
      id: "s11-l02",
      title: "Stop your own process with a trap",
      minutes: 20,
      mode: "local",
      why: "A real process can react to a stop request; the browser interpreter cannot teach this by pretending.",
      teach: [
        "A Linux process has a PID. In Bash, command & starts a background process and $! holds the PID of the most recently started one. Capture it immediately. Only signal a process you just started for this exercise; never guess a system PID.",
        'kill -TERM "$pid" sends a request to terminate, not a file deletion. A Bash trap runs a handler when a catchable signal such as TERM arrives. trap installs that handler before you announce readiness. A handler can print a final line and exit 0. KILL cannot be trapped.',
        'A watcher needs to remain alive to receive a signal. A small while :; do sleep 0.1; done loop avoids busy-spinning. Bash may wait for that short sleep before running its trap; do not start long-running children here. wait "$pid" collects your background process\u2019s final status.',
        "The verifier starts only your watcher, waits for Ready, sends TERM to that exact process, and imposes deadlines. This is a local process exercise and completion is self-attested only after the local verifier succeeds."
      ],
      terms: [
        {
          word: "PID",
          meaning: "A process identifier assigned by the OS."
        },
        {
          word: "signal",
          meaning: "A notification sent to a running process."
        },
        {
          word: "trap",
          meaning: "A Bash handler for a catchable signal or shell event."
        }
      ],
      steps: [
        "Create watch.sh locally with its handler installed before the Ready line.",
        "Keep it alive using a short, quiet wait loop; the TERM handler should print its final line and stop.",
        "Run the verifier first; then optionally try the background/kill/wait command sequence on your own watcher."
      ],
      example: {
        title: "Illustrative local EXIT cleanup",
        explanation: "This installs an EXIT handler, not the exercise\u2019s TERM handler; it is not executed in the browser.",
        files: {},
        directories: [],
        cwd: "/home/learner",
        code: `trap 'printf "Leaving demo\\n"' EXIT
printf 'Inside demo\\n'
`,
        stdout: "Inside demo\nLeaving demo\n",
        stderr: "",
        exitCode: 0
      },
      task: {
        goal: "Locally implement watch.sh, a process that can stop cleanly on TERM.",
        requirements: [
          "Install a TERM handler, print Ready with a newline to stdout, and stay alive with a quiet short sleep loop.",
          "On TERM, print Stopped with a newline exactly once, exit 0 within two seconds, and leave stderr empty.",
          "Use no network, persistent daemon, or unrelated processes; the verifier sends a real signal only to this watcher."
        ],
        files: {},
        directories: [],
        cwd: "/home/learner",
        editor: null,
        runCommand: null,
        checks: []
      },
      hints: [
        "Install the trap before printing Ready, so callers never signal an unprepared watcher.",
        "The trap handler needs an explicit exit; otherwise your infinite loop can resume.",
        "Use a short sleep in the loop so Bash can handle TERM promptly without wasting CPU."
      ],
      resources: [
        {
          label: "Bash manual",
          url: "https://www.gnu.org/software/bash/manual/bash.html"
        },
        {
          label: "Python unittest documentation",
          url: "https://docs.python.org/3/library/unittest.html"
        }
      ],
      quiz: [
        {
          prompt: "Which signal cannot be handled with a Bash trap?",
          options: [
            "TERM",
            "INT",
            "KILL",
            "A normal EXIT event"
          ],
          correct: 2,
          clue: "Distinguish a graceful request from a forced OS stop."
        },
        {
          prompt: "Why capture $! immediately after starting your watcher?",
          options: [
            "It stores the watcher\u2019s PID for a scoped stop",
            "It stores the JSON result",
            "It changes the sleep duration",
            "It makes stdout private"
          ],
          correct: 0,
          clue: "Think about another background command replacing that value."
        }
      ],
      local: {
        setup: [
          "Local Linux only. Nothing in this lesson runs on your computer until you deliberately open a local terminal and follow these instructions. The browser is not a Linux VM.",
          "Use an existing Linux environment with Bash and Python 3 (3.9 or newer). On Windows choose a Linux environment you control, such as already-configured WSL. If either tool is absent, follow your operating-system provider\u2019s installation guide; these exercises require no sudo or paid tools.",
          'Create a new personal project folder, for example mkdir -p "$HOME/bash-trail-labs/s11b", then cd "$HOME/bash-trail-labs/s11b". Use command -v bash and command -v python3 to identify the tools; python3 --version shows the installed version.',
          "In your local editor create watch.sh. Save the downloaded testFile as verify_lab.py beside it, not in a system folder. Read both before running them. Verifier fixtures are temporary; a subprocess timeout is not a security boundary for arbitrary code."
        ],
        commands: [
          {
            label: "Run signal verifier",
            command: "python3 verify_lab.py -v",
            expected: "Status 0 with unittest OK after implementation; the test observes Ready, sends TERM, observes Stopped, and checks status 0."
          },
          {
            label: "Optional manual owned-process test",
            command: 'bash watch.sh > watch.log 2>&1 &\npid=$!\nsleep 0.2\nkill -TERM "$pid"\nwait "$pid"\ncat watch.log',
            expected: "After the watcher has printed Ready, kill requests TERM and wait returns status 0; cat prints Ready then Stopped on separate lines. If Ready is not present yet, wait before sending TERM."
          }
        ],
        checks: [
          "Self-attested after local tests: I ran the verifier and saw a real TERM handled with status 0.",
          "Self-attested after local tests: I understand the browser did not execute this process or validate my local completion."
        ],
        testFile: `"""Run beside the learner artifact: python3 verify_lab.py -v.
Tests execute only the named local artifact in disposable test directories.
Review your script first: subprocess timeouts are not a security sandbox.
"""
import os
from pathlib import Path
import shutil
import signal
import subprocess
import sys
import tempfile
import time
import unittest


ARTIFACT = Path(__file__).resolve().parent / 'watch.sh'
BASH = shutil.which("bash")

class LabTests(unittest.TestCase):
    def setUp(self):
        self.assertTrue(ARTIFACT.is_file(), f"Create {ARTIFACT.name} beside this verifier before running it.")
        self.tmp = tempfile.TemporaryDirectory(prefix="bash-trail-")
        self.addCleanup(self.tmp.cleanup)
        self.root = Path(self.tmp.name)

    def run_artifact(self, *args, env=None):
        prefix = [sys.executable] if ARTIFACT.suffix == ".py" else [BASH]
        if ARTIFACT.suffix != ".py":
            self.assertIsNotNone(BASH, "Bash is required for this Linux lab.")
        try:
            return subprocess.run(prefix + [str(ARTIFACT)] + list(args), cwd=self.root,
                                  env=env, text=True, capture_output=True, timeout=4)
        except subprocess.TimeoutExpired:
            self.fail("The learner artifact exceeded 4 seconds; check termination and child timeouts.")

    def result(self, got, status=0, out="", err=""):
        self.assertEqual(got.returncode, status, f"Unexpected status; stdout={got.stdout!r}, stderr={got.stderr!r}")
        self.assertEqual(got.stdout, out, "Useful output differs from the stated interface.")
        self.assertEqual(got.stderr, err, "Diagnostic output differs from the stated interface.")

    def test_real_term_signal_runs_the_trap(self):
        self.assertIsNotNone(BASH, "Bash is required for this Linux lab.")
        log = self.root / "process-output.txt"
        with log.open("wb") as output:
            process = subprocess.Popen([BASH, str(ARTIFACT)], cwd=self.root,
                                       stdout=output, stderr=subprocess.PIPE)
            try:
                deadline = time.monotonic() + 2
                while time.monotonic() < deadline:
                    if log.read_bytes() == b"Ready\\n":
                        break
                    if process.poll() is not None:
                        self.fail("watch.sh ended before TERM; it must stay alive after printing Ready.")
                    time.sleep(0.02)
                else:
                    self.fail("Expected Ready followed by a newline within 2 seconds.")
                self.assertIsNone(process.poll(), "Keep the watcher alive until it receives TERM.")
                process.send_signal(signal.SIGTERM)
                try:
                    _, errors = process.communicate(timeout=2)
                except subprocess.TimeoutExpired:
                    self.fail("TERM did not stop the watcher within 2 seconds; check the trap and short wait loop.")
                self.assertEqual(process.returncode, 0, "A handled TERM should exit successfully, not with signal status.")
                self.assertEqual(log.read_text(encoding="utf-8"), "Ready\\nStopped\\n", "The TERM trap should print Stopped exactly once.")
                self.assertEqual(errors, b"", "The watcher should not produce diagnostics on a normal stop.")
            finally:
                if process.poll() is None:
                    process.kill()
                process.communicate(timeout=3)


if __name__ == "__main__":
    unittest.main()
`
      }
    },
    {
      id: "s11-l03",
      title: "Environment, logs, and a cron plan",
      minutes: 20,
      mode: "local",
      why: "Prepare a predictable script without installing or activating a scheduler.",
      teach: [
        'An environment variable is text inherited by a child process. TRAIL_LABEL="morning" bash script.sh sets it for that one invocation. In Bash, ${TRAIL_LABEL:-practice} supplies practice when the variable is unset or empty. Quote the expanded label so spaces remain data.',
        "Scheduled work may start with a minimal PATH, no terminal aliases, and a different working directory. Pass an absolute log path instead of relying on pwd. Append with >> so a second run keeps the first line. Our exercise deliberately omits timestamps so you can compare exact output.",
        "Cron is an optional Linux scheduler, not part of this lab\u2019s execution. A user crontab line has minute, hour, day-of-month, month, weekday, then a command. For example 0 9 * * * /bin/bash /ABSOLUTE/log-run.sh /ABSOLUTE/trail.log describes a daily 09:00 run in cron\u2019s configured timezone. Replace placeholders only when planning; do not install it for this exercise.",
        "You can optionally learn about ShellCheck, a static Bash linter: command -v shellcheck checks whether it is installed; shellcheck log-run.sh analyzes a script without scheduling it. Neither ShellCheck nor cron is required for the verifier. No crontab -e or service changes are requested."
      ],
      terms: [
        {
          word: "environment",
          meaning: "Text settings inherited by a program."
        },
        {
          word: "append",
          meaning: "Add at a file\u2019s end instead of replacing its old contents."
        },
        {
          word: "cron",
          meaning: "An optional OS scheduler with a deliberately small execution environment."
        }
      ],
      steps: [
        "Create log-run.sh locally and give it one output-path argument.",
        "Try a default-label run and an explicit label containing spaces against a disposable log.",
        "Run the verifier with its minimal environment, then self-attest; read the cron plan only, without installing it."
      ],
      example: {
        title: "Illustrative local environment default",
        explanation: "This different variable and output demonstrate quoting without solving the logging task.",
        files: {},
        directories: [],
        cwd: "/home/learner",
        code: `name=\${TRAIL_NAME:-visitor}
printf 'Hello, %s\\n' "$name"
`,
        stdout: "Hello, visitor\n",
        stderr: "",
        exitCode: 0
      },
      task: {
        goal: "Locally implement log-run.sh OUTPUT so it is ready for a small scheduled environment.",
        requirements: [
          "Append exactly label=VALUE plus a newline to OUTPUT, using TRAIL_LABEL or practice if it is unset/empty; preserve spaces.",
          "Success produces no stdout or stderr and exits 0; preserve earlier log content across repeated runs.",
          "Without exactly one output argument, print Usage: log-run.sh OUTPUT to stderr with a newline, no stdout, and exit 2."
        ],
        files: {},
        directories: [],
        cwd: "/home/learner",
        editor: null,
        runCommand: null,
        checks: []
      },
      hints: [
        "Validate the path argument before writing a log line.",
        "Bash parameter expansion with :- gives an explicit default for a missing label.",
        "Use a fixed printf format, quote the label, and choose append redirection instead of replacement."
      ],
      resources: [
        {
          label: "Bash manual",
          url: "https://www.gnu.org/software/bash/manual/bash.html"
        },
        {
          label: "Python unittest documentation",
          url: "https://docs.python.org/3/library/unittest.html"
        }
      ],
      quiz: [
        {
          prompt: "Why use >> for this log?",
          options: [
            "It changes the owner",
            "It preserves earlier runs\u2019 lines",
            "It runs cron",
            "It disables stderr"
          ],
          correct: 1,
          clue: "Contrast append and truncate."
        },
        {
          prompt: "Does reading a cron example install a scheduled job?",
          options: [
            "Yes, automatically in the browser",
            "Only if the quiz passes",
            "No; this lab does not install a scheduler entry",
            "Yes, through Python import"
          ],
          correct: 2,
          clue: "Distinguish a plan from an explicit scheduler write."
        }
      ],
      local: {
        setup: [
          "Local Linux only. Nothing in this lesson runs on your computer until you deliberately open a local terminal and follow these instructions. The browser is not a Linux VM.",
          "Use an existing Linux environment with Bash and Python 3 (3.9 or newer). On Windows choose a Linux environment you control, such as already-configured WSL. If either tool is absent, follow your operating-system provider\u2019s installation guide; these exercises require no sudo or paid tools.",
          'Create a new personal project folder, for example mkdir -p "$HOME/bash-trail-labs/s11c", then cd "$HOME/bash-trail-labs/s11c". Use command -v bash and command -v python3 to identify the tools; python3 --version shows the installed version.',
          "In your local editor create log-run.sh. Save the downloaded testFile as verify_lab.py beside it, not in a system folder. Read both before running them. Verifier fixtures are temporary; a subprocess timeout is not a security boundary for arbitrary code."
        ],
        commands: [
          {
            label: "Default label",
            command: 'bash log-run.sh "$PWD/trail.log"',
            expected: "Status 0; no output; appends label=practice followed by a newline."
          },
          {
            label: "Explicit label",
            command: 'TRAIL_LABEL="morning review" bash log-run.sh "$PWD/trail.log"',
            expected: "Status 0; no output; appends label=morning review followed by a newline, retaining the previous line."
          },
          {
            label: "Verify minimal environment",
            command: "python3 verify_lab.py -v",
            expected: "Status 0 with unittest OK after implementation; tests use a temporary log and no scheduler."
          }
        ],
        checks: [
          "Self-attested after local tests: I ran the verifier successfully with its minimal environment.",
          "Self-attested after local tests: I understand the cron example and installed no scheduler entry."
        ],
        testFile: `"""Run beside the learner artifact: python3 verify_lab.py -v.
Tests execute only the named local artifact in disposable test directories.
Review your script first: subprocess timeouts are not a security sandbox.
"""
import os
from pathlib import Path
import shutil
import signal
import subprocess
import sys
import tempfile
import time
import unittest


ARTIFACT = Path(__file__).resolve().parent / 'log-run.sh'
BASH = shutil.which("bash")

class LabTests(unittest.TestCase):
    def setUp(self):
        self.assertTrue(ARTIFACT.is_file(), f"Create {ARTIFACT.name} beside this verifier before running it.")
        self.tmp = tempfile.TemporaryDirectory(prefix="bash-trail-")
        self.addCleanup(self.tmp.cleanup)
        self.root = Path(self.tmp.name)

    def run_artifact(self, *args, env=None):
        prefix = [sys.executable] if ARTIFACT.suffix == ".py" else [BASH]
        if ARTIFACT.suffix != ".py":
            self.assertIsNotNone(BASH, "Bash is required for this Linux lab.")
        try:
            return subprocess.run(prefix + [str(ARTIFACT)] + list(args), cwd=self.root,
                                  env=env, text=True, capture_output=True, timeout=4)
        except subprocess.TimeoutExpired:
            self.fail("The learner artifact exceeded 4 seconds; check termination and child timeouts.")

    def result(self, got, status=0, out="", err=""):
        self.assertEqual(got.returncode, status, f"Unexpected status; stdout={got.stdout!r}, stderr={got.stderr!r}")
        self.assertEqual(got.stdout, out, "Useful output differs from the stated interface.")
        self.assertEqual(got.stderr, err, "Diagnostic output differs from the stated interface.")

    def test_default_and_explicit_environment_append_to_one_log(self):
        target = self.root / "daily log.txt"
        target.write_text("older\\n", encoding="utf-8")
        env = {"PATH": os.defpath, "HOME": str(self.root)}
        self.result(self.run_artifact(str(target), env=env))
        self.assertEqual(target.read_text(encoding="utf-8"), "older\\nlabel=practice\\n", "A minimal environment must still produce the default label.")
        env["TRAIL_LABEL"] = "morning review"
        self.result(self.run_artifact(str(target), env=env))
        self.assertEqual(target.read_text(encoding="utf-8"), "older\\nlabel=practice\\nlabel=morning review\\n", "Append instead of truncating and preserve spaces in the label.")
        env["TRAIL_LABEL"] = ""
        self.result(self.run_artifact(str(target), env=env))
        self.assertEqual(target.read_text(encoding="utf-8"), "older\\nlabel=practice\\nlabel=morning review\\nlabel=practice\\n", "An empty label uses the same default as an unset label.")

    def test_missing_path_is_explained(self):
        self.result(self.run_artifact(), 2, err="Usage: log-run.sh OUTPUT\\n")
        self.result(self.run_artifact("one", "two"), 2, err="Usage: log-run.sh OUTPUT\\n")


if __name__ == "__main__":
    unittest.main()
`
      }
    }
  ]
};

// curriculum/s12.json
var s12_default = {
  id: "s12",
  title: "Reliable local automation",
  summary: "Launch a real child safely, catch regressions, then make a tiny dry-run-first file report. Completion is self-attested after local tests.",
  level: "Real Linux labs",
  exam: [
    {
      prompt: "Why pass subprocess.run a list rather than a shell command string?",
      options: [
        "It keeps program arguments separate without asking a shell to interpret them",
        "It installs every needed program",
        "It makes timeouts unnecessary",
        "It prevents every possible filesystem change"
      ],
      correct: 0,
      clue: "Review how filenames containing spaces remain literal arguments."
    },
    {
      prompt: "What is a regression test for?",
      options: [
        "Checking only comments",
        "Proving all software is safe",
        "Replacing useful errors",
        "Catching behavior that used to work and now fails"
      ],
      correct: 3,
      clue: "Think about rerunning a small known case after a change."
    },
    {
      prompt: "What should a default dry run do?",
      options: [
        "Replace an existing report",
        "Describe the intended work without creating the output",
        "Delete the old source",
        "Start cron"
      ],
      correct: 1,
      clue: "Separate preview from explicitly applied changes."
    }
  ],
  lessons: [
    {
      id: "s12-l01",
      title: "Launch one real child process safely",
      minutes: 20,
      mode: "local",
      why: "Python subprocess is useful only where a real OS can start children: this lesson runs locally.",
      teach: [
        "subprocess is not supported as an OS-process interface inside the browser Python runtime. Locally, subprocess.run([program, argument], ...) starts a real child. Use sys.executable for the same Python interpreter you are already running. An argument list preserves spaces and punctuation without shell=True.",
        "capture_output=True keeps stdout and stderr in the result. text=True decodes them as text. With check=True, a nonzero child status raises subprocess.CalledProcessError. Decide what data to forward on success; do not accidentally print partial output from a failed child.",
        "timeout=0.3 limits this exercise\u2019s child to about three tenths of a second and raises subprocess.TimeoutExpired when it runs too long. Catch these two exceptions separately to explain failure versus timeout. A timeout on one child is not a complete security sandbox for arbitrary programs.",
        "The verifier creates tiny trusted child programs in a disposable folder: one succeeds, one exits with an error, and one sleeps for two seconds. Your wrapper does not need to run shell commands, install packages, or handle a general command language."
      ],
      terms: [
        {
          word: "child process",
          meaning: "A program started by another program."
        },
        {
          word: "argv list",
          meaning: "Separate program and argument strings passed directly to the OS."
        },
        {
          word: "timeout",
          meaning: "A deadline for how long a child may run."
        }
      ],
      steps: [
        "Create run_child.py locally; validate one child-path argument first.",
        "Run the child with a list, check=True, captured text output, and timeout=0.3.",
        "Catch the two expected exceptions and run the verifier before self-attesting."
      ],
      example: {
        title: "Illustrative local subprocess success",
        explanation: "This invokes a different tiny child directly; the browser does not execute it.",
        files: {},
        directories: [],
        cwd: "/home/learner",
        code: `import subprocess
import sys
result = subprocess.run([sys.executable, "-c", "print('demo child')"],
                        check=True, capture_output=True, text=True, timeout=1)
print(result.stdout, end="")
`,
        stdout: "demo child\n",
        stderr: "",
        exitCode: 0
      },
      task: {
        goal: "Locally implement run_child.py CHILD.py for a trusted Python child file.",
        requirements: [
          "For a successful child, forward its stdout exactly once, print no stderr, and exit 0; preserve a child path containing spaces or punctuation.",
          "Use an argument list with the current Python interpreter, check=True, capture_output=True, text=True, and timeout=0.3; a failed child gives only Child failed on stderr and status 1.",
          "A timed-out child gives only Child timed out on stderr and status 1. Both diagnostics end with a newline and produce no stdout.",
          "Without exactly one child-path argument, print Usage: run_child.py CHILD.py on stderr with a newline, no stdout, and exit 2."
        ],
        files: {},
        directories: [],
        cwd: "/home/learner",
        editor: null,
        runCommand: null,
        checks: []
      },
      hints: [
        "The argument list contains the interpreter and one child-file path, not one joined command string.",
        "Keep the subprocess call inside try and forward stdout only after it succeeds.",
        "Catch CalledProcessError and TimeoutExpired separately; the success output already has its own newline."
      ],
      resources: [
        {
          label: "subprocess.run reference",
          url: "https://docs.python.org/3/library/subprocess.html"
        }
      ],
      quiz: [
        {
          prompt: "What does check=True do when the child exits with status 4?",
          options: [
            "Silently changes it to 0",
            "Raises CalledProcessError",
            "Writes a cron entry",
            "Deletes the child file"
          ],
          correct: 1,
          clue: "Review the exception-based failure path."
        },
        {
          prompt: "Why use sys.executable in the argv list?",
          options: [
            "It locates the current Python interpreter",
            "It runs a shell parser",
            "It stores stdin",
            "It disables timeouts"
          ],
          correct: 0,
          clue: "Avoid assuming the interpreter has a fixed absolute path."
        }
      ],
      local: {
        setup: [
          "Local Linux only. Nothing in this lesson runs on your computer until you deliberately open a local terminal and follow these instructions. The browser is not a Linux VM.",
          "Use an existing Linux environment with Bash and Python 3 (3.9 or newer). On Windows choose a Linux environment you control, such as already-configured WSL. If either tool is absent, follow your operating-system provider\u2019s installation guide; these exercises require no sudo or paid tools.",
          'Create a new personal project folder, for example mkdir -p "$HOME/bash-trail-labs/s12a", then cd "$HOME/bash-trail-labs/s12a". Use command -v bash and command -v python3 to identify the tools; python3 --version shows the installed version.',
          "In your local editor create run_child.py. Save the downloaded testFile as verify_lab.py beside it, not in a system folder. Read both before running them. Verifier fixtures are temporary; a subprocess timeout is not a security boundary for arbitrary code."
        ],
        commands: [
          {
            label: "Create a trusted success child",
            command: 'In your editor, save demo_child.py containing: print("hello child")',
            expected: "Editor action only; no browser execution. The child will print hello child followed by a newline when deliberately run locally."
          },
          {
            label: "Run a real child",
            command: 'python3 run_child.py "$PWD/demo_child.py"',
            expected: "Status 0; stdout hello child followed by a newline; stderr empty."
          },
          {
            label: "Verify success, errors, and deadline",
            command: "python3 verify_lab.py -v",
            expected: "Status 0 with unittest OK after implementation; tests launch only local temporary child programs."
          }
        ],
        checks: [
          "Self-attested after local tests: I ran the verifier successfully, including a real failed child and a real timeout.",
          "Self-attested after local tests: I understand argument lists avoid shell parsing but do not make untrusted code safe."
        ],
        testFile: `"""Run beside the learner artifact: python3 verify_lab.py -v.
Tests execute only the named local artifact in disposable test directories.
Review your script first: subprocess timeouts are not a security sandbox.
"""
import os
from pathlib import Path
import shutil
import signal
import subprocess
import sys
import tempfile
import time
import unittest


ARTIFACT = Path(__file__).resolve().parent / 'run_child.py'
BASH = shutil.which("bash")

class LabTests(unittest.TestCase):
    def setUp(self):
        self.assertTrue(ARTIFACT.is_file(), f"Create {ARTIFACT.name} beside this verifier before running it.")
        self.tmp = tempfile.TemporaryDirectory(prefix="bash-trail-")
        self.addCleanup(self.tmp.cleanup)
        self.root = Path(self.tmp.name)

    def run_artifact(self, *args, env=None):
        prefix = [sys.executable] if ARTIFACT.suffix == ".py" else [BASH]
        if ARTIFACT.suffix != ".py":
            self.assertIsNotNone(BASH, "Bash is required for this Linux lab.")
        try:
            return subprocess.run(prefix + [str(ARTIFACT)] + list(args), cwd=self.root,
                                  env=env, text=True, capture_output=True, timeout=4)
        except subprocess.TimeoutExpired:
            self.fail("The learner artifact exceeded 4 seconds; check termination and child timeouts.")

    def result(self, got, status=0, out="", err=""):
        self.assertEqual(got.returncode, status, f"Unexpected status; stdout={got.stdout!r}, stderr={got.stderr!r}")
        self.assertEqual(got.stdout, out, "Useful output differs from the stated interface.")
        self.assertEqual(got.stderr, err, "Diagnostic output differs from the stated interface.")

    def child(self, name, source):
        path = self.root / name
        path.write_text(source, encoding="utf-8")
        return str(path)

    def test_success_preserves_stdout_and_literal_filename(self):
        path = self.child("child ; not a command.py", "print('child ready')\\n")
        self.result(self.run_artifact(path), out="child ready\\n")
        self.assertEqual(sorted(p.name for p in self.root.iterdir()), ["child ; not a command.py"], "The filename is data, not an extra shell command.")

    def test_failed_child_becomes_a_short_diagnostic(self):
        path = self.child("bad child.py", "import sys\\nprint('do not forward failed output')\\nprint('detail', file=sys.stderr)\\nsys.exit(4)\\n")
        self.result(self.run_artifact(path), 1, err="Child failed\\n")

    def test_slow_child_hits_timeout(self):
        path = self.child("slow child.py", "import time\\ntime.sleep(2)\\nprint('too late')\\n")
        started = time.monotonic()
        self.result(self.run_artifact(path), 1, err="Child timed out\\n")
        self.assertLess(time.monotonic() - started, 1.8, "Use a short subprocess timeout, not a full two-second wait.")

    def test_usage(self):
        self.result(self.run_artifact(), 2, err="Usage: run_child.py CHILD.py\\n")
        self.result(self.run_artifact("one.py", "two.py"), 2, err="Usage: run_child.py CHILD.py\\n")


if __name__ == "__main__":
    unittest.main()
`
      }
    },
    {
      id: "s12-l02",
      title: "Write a regression test suite",
      minutes: 20,
      mode: "local",
      why: "A repeatable test suite catches mistakes after a later edit, instead of relying on memory.",
      teach: [
        "Here the application is already supplied: counter.py prints how many lines contain non-whitespace text. Blank or whitespace-only lines do not count; an empty file prints 0. A missing file gives stderr Cannot read input with a newline, no stdout, and status 1. Do not rewrite this application; your artifact is its tests.",
        'unittest discovers methods named test_... inside unittest.TestCase subclasses. self.assertEqual(actual, expected) reports a useful failure. End your test file with if __name__ == "__main__": unittest.main() so running it actually executes the tests.',
        "Create each case with tempfile.TemporaryDirectory, write a small UTF-8 fixture, and call the counter with subprocess.run using a list, captured text, and a timeout. Assert status, stdout, and stderr, not the counter source text. Use a nonexistent path for the error case; do not delete a real file.",
        'Read the target path from os.environ["COUNTER_SCRIPT"]. This explicit seam lets the downloadable verifier run your tests against the correct supplied counter and three deliberately broken versions. A good suite passes the original and fails regressions. Optional shellcheck can inspect Bash scripts from earlier labs; it does not replace these runtime tests.'
      ],
      terms: [
        {
          word: "regression",
          meaning: "A previously working behavior broken by a change."
        },
        {
          word: "assertion",
          meaning: "A test condition that reports a failure when unmet."
        },
        {
          word: "fixture",
          meaning: "Small controlled input data used by a test."
        }
      ],
      steps: [
        "Copy the supplied counter.py fixture into your local project; create a separate test_counter.py.",
        "Build three tests: mixed blank/nonblank lines, empty input, and a missing path. Read COUNTER_SCRIPT for the executable target.",
        "Run your suite on the supplied counter, then the downloaded verifier to prove the suite catches the broken variants."
      ],
      example: {
        title: "Illustrative unittest assertion",
        explanation: "This tests a Python text operation, not the counter challenge.",
        files: {},
        directories: [],
        cwd: "/home/learner",
        code: 'import unittest\nclass TextTests(unittest.TestCase):\n    def test_trim(self):\n        self.assertEqual("  oak  ".strip(), "oak")\nif __name__ == "__main__":\n    unittest.main()\n',
        stdout: "",
        stderr: "Illustrative local unittest result: Ran 1 test; OK (timing varies).\n",
        exitCode: 0
      },
      task: {
        goal: "Locally implement test_counter.py, not counter.py: a real unittest regression suite.",
        requirements: [
          "Read the target counter path from environment variable COUNTER_SCRIPT and invoke it with the current Python interpreter, an argv list, captured text, and a timeout.",
          "Assert status 0, stdout 2 plus a newline, and empty stderr for a file containing oak, a blank line, a whitespace-only line, and elm on separate lines. Assert stdout 0 plus a newline for an empty file.",
          "For a missing input path, assert status 1, empty stdout, and stderr Cannot read input plus a newline. Use temporary files/directories; do not inspect source code.",
          "Run tests with unittest: pass the supplied counter, and fail informatively if any of these three behaviors regress."
        ],
        files: {
          "/home/learner/counter.py": `# Supplied application under test, not the learner's regression suite.
import sys
if len(sys.argv) != 2:
    print("Usage: counter.py INPUT", file=sys.stderr)
    sys.exit(2)
try:
    with open(sys.argv[1], encoding="utf-8") as handle:
        lines = handle.read().splitlines()
except (OSError, UnicodeError):
    print("Cannot read input", file=sys.stderr)
    sys.exit(1)
print(sum(bool(line.strip()) for line in lines))
`
        },
        directories: [],
        cwd: "/home/learner",
        editor: null,
        runCommand: null,
        checks: []
      },
      hints: [
        "Write one test method for one behavior; create input inside a TemporaryDirectory.",
        "The child command list starts with sys.executable, then the COUNTER_SCRIPT path, then the input path.",
        "Check all three observed result fields; the missing-file test should not accept a misleading status 0."
      ],
      resources: [
        {
          label: "unittest basics",
          url: "https://docs.python.org/3/library/unittest.html"
        },
        {
          label: "ShellCheck documentation (optional)",
          url: "https://www.shellcheck.net/"
        }
      ],
      quiz: [
        {
          prompt: "Which observation best proves a CLI error path works?",
          options: [
            "A comment containing error",
            "Its filename",
            "The actual status, stdout, and stderr",
            "A shellcheck badge alone"
          ],
          correct: 2,
          clue: "Prefer behavior over source inspection."
        },
        {
          prompt: "Why run your test suite on deliberately broken counters?",
          options: [
            "To confirm the tests can detect regressions",
            "To install those counters as system tools",
            "To avoid running tests",
            "To make every result green"
          ],
          correct: 0,
          clue: "A test that cannot fail may not protect the behavior."
        }
      ],
      local: {
        setup: [
          "Local Linux only. Nothing in this lesson runs on your computer until you deliberately open a local terminal and follow these instructions. The browser is not a Linux VM.",
          "Use an existing Linux environment with Bash and Python 3 (3.9 or newer). On Windows choose a Linux environment you control, such as already-configured WSL. If either tool is absent, follow your operating-system provider\u2019s installation guide; these exercises require no sudo or paid tools.",
          'Create a new personal project folder, for example mkdir -p "$HOME/bash-trail-labs/s12b", then cd "$HOME/bash-trail-labs/s12b". Use command -v bash and command -v python3 to identify the tools; python3 --version shows the installed version.',
          "In your local editor create test_counter.py. Save the downloaded testFile as verify_lab.py beside it, not in a system folder. Read both before running them. Verifier fixtures are temporary; a subprocess timeout is not a security boundary for arbitrary code."
        ],
        commands: [
          {
            label: "Supply the application fixture",
            command: "Copy the displayed task fixture counter.py into this project using your local editor.",
            expected: "Editor action only; keep the supplied application separate from test_counter.py."
          },
          {
            label: "Run your tests against the supplied app",
            command: 'COUNTER_SCRIPT="$PWD/counter.py" python3 test_counter.py -v',
            expected: "Status 0, unittest reports your test cases and OK. Until implemented, this may fail or report no useful tests."
          },
          {
            label: "Verify the regression suite itself",
            command: "python3 verify_lab.py -v",
            expected: "Status 0 with unittest OK after the suite passes the supplied app and rejects blank-line, empty-file, and missing-file regressions."
          }
        ],
        checks: [
          "Self-attested after local tests: I ran my unittest suite on the supplied counter successfully.",
          "Self-attested after local tests: I ran the verifier and confirmed that deliberately broken counter behavior is detected."
        ],
        testFile: `"""Run beside the learner artifact: python3 verify_lab.py -v.
Tests execute only the named local artifact in disposable test directories.
Review your script first: subprocess timeouts are not a security sandbox.
"""
import os
from pathlib import Path
import shutil
import signal
import subprocess
import sys
import tempfile
import time
import unittest

COUNTER_FIXTURE = '# Supplied application under test, not the learner\\'s regression suite.\\nimport sys\\nif len(sys.argv) != 2:\\n    print("Usage: counter.py INPUT", file=sys.stderr)\\n    sys.exit(2)\\ntry:\\n    with open(sys.argv[1], encoding="utf-8") as handle:\\n        lines = handle.read().splitlines()\\nexcept (OSError, UnicodeError):\\n    print("Cannot read input", file=sys.stderr)\\n    sys.exit(1)\\nprint(sum(bool(line.strip()) for line in lines))\\n'

ARTIFACT = Path(__file__).resolve().parent / 'test_counter.py'
BASH = shutil.which("bash")

class LabTests(unittest.TestCase):
    def setUp(self):
        self.assertTrue(ARTIFACT.is_file(), f"Create {ARTIFACT.name} beside this verifier before running it.")
        self.tmp = tempfile.TemporaryDirectory(prefix="bash-trail-")
        self.addCleanup(self.tmp.cleanup)
        self.root = Path(self.tmp.name)

    def run_artifact(self, *args, env=None):
        prefix = [sys.executable] if ARTIFACT.suffix == ".py" else [BASH]
        if ARTIFACT.suffix != ".py":
            self.assertIsNotNone(BASH, "Bash is required for this Linux lab.")
        try:
            return subprocess.run(prefix + [str(ARTIFACT)] + list(args), cwd=self.root,
                                  env=env, text=True, capture_output=True, timeout=4)
        except subprocess.TimeoutExpired:
            self.fail("The learner artifact exceeded 4 seconds; check termination and child timeouts.")

    def result(self, got, status=0, out="", err=""):
        self.assertEqual(got.returncode, status, f"Unexpected status; stdout={got.stdout!r}, stderr={got.stderr!r}")
        self.assertEqual(got.stdout, out, "Useful output differs from the stated interface.")
        self.assertEqual(got.stderr, err, "Diagnostic output differs from the stated interface.")

    def suite_against(self, source):
        target = self.root / "counter.py"
        target.write_text(source, encoding="utf-8")
        env = dict(os.environ)
        env["COUNTER_SCRIPT"] = str(target)
        return self.run_artifact("-v", env=env)

    def test_suite_accepts_the_supplied_correct_counter(self):
        got = self.suite_against(COUNTER_FIXTURE)
        self.assertEqual(got.returncode, 0, f"The suite rejected the supplied counter: {got.stdout} {got.stderr}")
        self.assertIn("Ran ", got.stderr, "Use unittest so its output reports actual tests, not just a successful empty file.")
        self.assertIn("OK", got.stderr, "The correct implementation should pass the unittest suite.")

    def test_suite_catches_blank_line_regression(self):
        bad = "import sys\\nfrom pathlib import Path\\ntry:\\n    print(len(Path(sys.argv[1]).read_text(encoding='utf-8').splitlines()))\\nexcept OSError:\\n    print('Cannot read input', file=sys.stderr)\\n    sys.exit(1)\\n"
        got = self.suite_against(bad)
        self.assertNotEqual(got.returncode, 0, "Your tests missed a counter that incorrectly counts blank lines.")
        self.assertIn("FAIL", got.stderr, "Report an assertion failure for the regression, not an unrelated startup error.")

    def test_suite_catches_empty_file_regression(self):
        bad = "import sys\\nfrom pathlib import Path\\ntry:\\n    text = Path(sys.argv[1]).read_text(encoding='utf-8')\\nexcept OSError:\\n    print('Cannot read input', file=sys.stderr)\\n    sys.exit(1)\\nprint(sum(bool(line.strip()) for line in text.splitlines()) if text else 1)\\n"
        got = self.suite_against(bad)
        self.assertNotEqual(got.returncode, 0, "Your tests missed a counter that reports 1 for an empty file.")
        self.assertIn("FAIL", got.stderr)

    def test_suite_catches_missing_file_regression(self):
        bad = "import sys\\nfrom pathlib import Path\\ntry:\\n    text = Path(sys.argv[1]).read_text(encoding='utf-8')\\nexcept OSError:\\n    print(0)\\nelse:\\n    print(sum(bool(line.strip()) for line in text.splitlines()))\\n"
        got = self.suite_against(bad)
        self.assertNotEqual(got.returncode, 0, "Your tests missed a counter that claims missing input is successful.")
        self.assertIn("FAIL", got.stderr)


if __name__ == "__main__":
    unittest.main()
`
      }
    },
    {
      id: "s12-l03",
      title: "A safe dry-run-first automation project",
      minutes: 20,
      mode: "local",
      why: "Preview a bounded file report, then write it only after a deliberate --apply.",
      teach: [
        "This final local tool lists filenames; despite its name archive_notes.py, it does not move, copy, delete, or compress notes. Its scope is the immediate children of one SOURCE directory. Include only regular .txt files, not subdirectories or symbolic links, and sort their basenames for stable output.",
        "pathlib.Path.iterdir() inspects direct children. Path.name gives a basename, suffix gives the extension, is_file() checks a regular file, and is_symlink() identifies a link that points elsewhere. Since is_file() can follow a link, exclude symlinks explicitly for this scoped exercise. A missing/non-directory source is an input error.",
        'Default behavior is dry run: calculate how many names would be written and print a preview, but create no output. Only an explicit third argument --apply enables a write. In apply mode, open OUTPUT with mode "x" and UTF-8: exclusive creation refuses an existing path, including a symlink. Do not use "w", which would truncate an existing report.',
        "Write sorted names with one newline per name; an empty source produces an empty report. Handle a write OSError with the taught diagnostic. These are small trusted local files, not a hardened concurrent filesystem service. Run the verifier before self-attesting; it checks actual files and both success and failure streams."
      ],
      terms: [
        {
          word: "dry run",
          meaning: "Preview intended work without applying a filesystem write."
        },
        {
          word: "exclusive creation",
          meaning: "Open with x so an existing destination is not replaced."
        },
        {
          word: "symbolic link",
          meaning: "A filesystem entry that refers to another path."
        }
      ],
      steps: [
        "Create archive_notes.py locally; validate SOURCE OUTPUT and the optional literal --apply.",
        "Build the sorted scoped name list and a default preview without opening the output.",
        "Add exclusive apply-mode creation and useful errors; run the downloaded verifier, then self-attest."
      ],
      example: {
        title: "Illustrative local exclusive write",
        explanation: "A different small example shows refusal to overwrite; it is not run in the browser.",
        files: {},
        directories: [],
        cwd: "/home/learner",
        code: 'from pathlib import Path\ntry:\n    with Path("new-receipt.txt").open("x", encoding="utf-8") as handle:\n        handle.write("Demo receipt\\n")\nexcept OSError:\n    print("Receipt not written")\n',
        stdout: "",
        stderr: "",
        exitCode: 0
      },
      task: {
        goal: "Locally implement archive_notes.py SOURCE OUTPUT [--apply], a filename report with no destructive actions.",
        requirements: [
          "Collect sorted basenames of direct regular, non-symlink .txt files in SOURCE; do not change any inputs. Without --apply print Would write N names plus a newline, exit 0, and do not create OUTPUT.",
          "With --apply create OUTPUT exclusively, write each selected name plus a newline, print Saved N names plus a newline, and exit 0. For an existing/unwritable output, preserve it, print Cannot write report on stderr with a newline, no stdout, and exit 1.",
          "If SOURCE is missing or not a directory, print Source must be a directory on stderr with a newline, no stdout, and exit 1; create no output.",
          "If arguments are not SOURCE OUTPUT with an optional final literal --apply, print Usage: archive_notes.py SOURCE OUTPUT [--apply] on stderr with a newline, no stdout, and exit 2."
        ],
        files: {},
        directories: [],
        cwd: "/home/learner",
        editor: null,
        runCommand: null,
        checks: []
      },
      hints: [
        "Separate discovering names, previewing, and writing so dry run never opens the output.",
        "Use iterdir rather than recursive traversal; filter files, suffix, and symlink status before sorting names.",
        "Mode x protects an existing destination in one operation. Put the success message after the write succeeds."
      ],
      resources: [
        {
          label: "pathlib file operations",
          url: "https://docs.python.org/3/library/pathlib.html"
        },
        {
          label: "open modes",
          url: "https://docs.python.org/3/library/functions.html#open"
        }
      ],
      quiz: [
        {
          prompt: "Which open mode helps prevent replacing an existing report?",
          options: [
            "w",
            "a",
            "x",
            "r+"
          ],
          correct: 2,
          clue: "Compare exclusive creation with truncation."
        },
        {
          prompt: "Why exclude symbolic links explicitly?",
          options: [
            "is_file may follow them outside the intended direct-file scope",
            "Links are always JSON",
            "They make filenames unsortable",
            "Cron requires it"
          ],
          correct: 0,
          clue: "Review the difference between a directory entry and its target."
        }
      ],
      local: {
        setup: [
          "Local Linux only. Nothing in this lesson runs on your computer until you deliberately open a local terminal and follow these instructions. The browser is not a Linux VM.",
          "Use an existing Linux environment with Bash and Python 3 (3.9 or newer). On Windows choose a Linux environment you control, such as already-configured WSL. If either tool is absent, follow your operating-system provider\u2019s installation guide; these exercises require no sudo or paid tools.",
          'Create a new personal project folder, for example mkdir -p "$HOME/bash-trail-labs/s12c", then cd "$HOME/bash-trail-labs/s12c". Use command -v bash and command -v python3 to identify the tools; python3 --version shows the installed version.',
          "In your local editor create archive_notes.py. Save the downloaded testFile as verify_lab.py beside it, not in a system folder. Read both before running them. Verifier fixtures are temporary; a subprocess timeout is not a security boundary for arbitrary code."
        ],
        commands: [
          {
            label: "Create only exercise input",
            command: `mkdir -p "source notes"
printf 'hello\\n' > "source notes/one.txt"`,
            expected: "Status 0; creates a tiny note inside this new project only."
          },
          {
            label: "Preview without changes",
            command: 'python3 archive_notes.py "source notes" names.txt',
            expected: "Status 0; stdout Would write 1 names followed by a newline; names.txt is not created."
          },
          {
            label: "Apply deliberately once",
            command: 'python3 archive_notes.py "source notes" names.txt --apply',
            expected: "Status 0 if names.txt does not exist; stdout Saved 1 names followed by a newline; names.txt contains one.txt plus a newline. A second apply must fail with status 1 and Cannot write report on stderr."
          },
          {
            label: "Verify safe behavior",
            command: "python3 verify_lab.py -v",
            expected: "Status 0 with unittest OK after implementation; temporary tests check dry run, apply, preservation, scoped inputs, and errors."
          }
        ],
        checks: [
          "Self-attested after local tests: I ran the verifier successfully, including dry-run no-write and refusal to overwrite.",
          "Self-attested after local tests: I understand this completion is self-attested after local execution, not browser verification."
        ],
        testFile: `"""Run beside the learner artifact: python3 verify_lab.py -v.
Tests execute only the named local artifact in disposable test directories.
Review your script first: subprocess timeouts are not a security sandbox.
"""
import os
from pathlib import Path
import shutil
import signal
import subprocess
import sys
import tempfile
import time
import unittest


ARTIFACT = Path(__file__).resolve().parent / 'archive_notes.py'
BASH = shutil.which("bash")

class LabTests(unittest.TestCase):
    def setUp(self):
        self.assertTrue(ARTIFACT.is_file(), f"Create {ARTIFACT.name} beside this verifier before running it.")
        self.tmp = tempfile.TemporaryDirectory(prefix="bash-trail-")
        self.addCleanup(self.tmp.cleanup)
        self.root = Path(self.tmp.name)

    def run_artifact(self, *args, env=None):
        prefix = [sys.executable] if ARTIFACT.suffix == ".py" else [BASH]
        if ARTIFACT.suffix != ".py":
            self.assertIsNotNone(BASH, "Bash is required for this Linux lab.")
        try:
            return subprocess.run(prefix + [str(ARTIFACT)] + list(args), cwd=self.root,
                                  env=env, text=True, capture_output=True, timeout=4)
        except subprocess.TimeoutExpired:
            self.fail("The learner artifact exceeded 4 seconds; check termination and child timeouts.")

    def result(self, got, status=0, out="", err=""):
        self.assertEqual(got.returncode, status, f"Unexpected status; stdout={got.stdout!r}, stderr={got.stderr!r}")
        self.assertEqual(got.stdout, out, "Useful output differs from the stated interface.")
        self.assertEqual(got.stderr, err, "Diagnostic output differs from the stated interface.")

    def source_dir(self):
        source = self.root / "source notes"
        source.mkdir()
        (source / "zeta.txt").write_text("z\\n", encoding="utf-8")
        (source / "alpha note.txt").write_text("a\\n", encoding="utf-8")
        (source / "skip.csv").write_text("ignore\\n", encoding="utf-8")
        nested = source / "nested.txt"
        nested.mkdir()
        (nested / "inside.txt").write_text("ignore nested\\n", encoding="utf-8")
        (source / "linked.txt").symlink_to(source / "zeta.txt")
        return source

    def snapshot(self, source):
        return sorted((str(p.relative_to(source)), "link:" + os.readlink(p) if p.is_symlink() else "dir" if p.is_dir() else p.read_text(encoding="utf-8")) for p in source.rglob("*"))

    def test_default_is_a_real_no_write_preview(self):
        source = self.source_dir()
        before = self.snapshot(source)
        target = self.root / "report.txt"
        self.result(self.run_artifact(str(source), str(target)), out="Would write 2 names\\n")
        self.assertFalse(target.exists(), "Dry run must not create an output file.")
        self.assertEqual(self.snapshot(source), before, "Dry run must not modify inputs.")

    def test_apply_writes_sorted_names_without_changing_inputs(self):
        source = self.source_dir()
        before = self.snapshot(source)
        target = self.root / "report with spaces.txt"
        self.result(self.run_artifact(str(source), str(target), "--apply"), out="Saved 2 names\\n")
        self.assertTrue(target.is_file(), "Apply must create the requested report.")
        self.assertEqual(target.read_text(encoding="utf-8"), "alpha note.txt\\nzeta.txt\\n", "List only direct regular non-symlink .txt files, sorted by name.")
        self.assertEqual(self.snapshot(source), before, "Apply must not edit input notes.")

    def test_existing_report_is_preserved(self):
        source = self.source_dir()
        target = self.root / "existing.txt"
        target.write_text("keep this\\n", encoding="utf-8")
        self.result(self.run_artifact(str(source), str(target), "--apply"), 1, err="Cannot write report\\n")
        self.assertEqual(target.read_text(encoding="utf-8"), "keep this\\n", "Never replace an existing report.")

    def test_apply_will_not_follow_existing_output_symlink(self):
        source = self.source_dir()
        keep = self.root / "keep.txt"
        keep.write_text("keep this\\n", encoding="utf-8")
        target = self.root / "linked-output.txt"
        target.symlink_to(keep)
        self.result(self.run_artifact(str(source), str(target), "--apply"), 1, err="Cannot write report\\n")
        self.assertEqual(keep.read_text(encoding="utf-8"), "keep this\\n")

    def test_missing_source_is_explained_without_writes(self):
        target = self.root / "report.txt"
        self.result(self.run_artifact(str(self.root / "missing"), str(target), "--apply"), 1, err="Source must be a directory\\n")
        self.assertFalse(target.exists())

    def test_non_directory_source_is_explained(self):
        source = self.root / "not-a-directory.txt"
        source.write_text("keep this\\n", encoding="utf-8")
        target = self.root / "report.txt"
        self.result(self.run_artifact(str(source), str(target)), 1, err="Source must be a directory\\n")
        self.assertFalse(target.exists())
        self.assertEqual(source.read_text(encoding="utf-8"), "keep this\\n")

    def test_empty_source_produces_an_empty_report(self):
        source = self.root / "empty"
        source.mkdir()
        target = self.root / "empty-report.txt"
        self.result(self.run_artifact(str(source), str(target), "--apply"), out="Saved 0 names\\n")
        self.assertTrue(target.is_file(), "Even a zero-name applied report is a real empty file.")
        self.assertEqual(target.read_bytes(), b"")

    def test_unwritable_path_parent_is_explained(self):
        source = self.source_dir()
        target = self.root / "missing-parent" / "report.txt"
        self.result(self.run_artifact(str(source), str(target), "--apply"), 1, err="Cannot write report\\n")
        self.assertFalse(target.exists())

    def test_usage(self):
        self.result(self.run_artifact(), 2, err="Usage: archive_notes.py SOURCE OUTPUT [--apply]\\n")
        self.result(self.run_artifact("source", "output", "--force"), 2, err="Usage: archive_notes.py SOURCE OUTPUT [--apply]\\n")
        self.result(self.run_artifact("source", "output", "--apply", "extra"), 2, err="Usage: archive_notes.py SOURCE OUTPUT [--apply]\\n")


if __name__ == "__main__":
    unittest.main()
`
      }
    }
  ]
};

// public-course:course:curriculum
var course_curriculum_default = [s01_default, s02_default, s03_default, s04_default, s05_default, s06_default, s07_default, s08_default, s09_default, s10_default, s11_default, s12_default];

// src/progress.mjs
var KEY = "bash-trail.progress.v2";
var MAX_BYTES = 16 * 1024 * 1024;
var MAX_TEXT = 65536;
var bytes = (value) => new TextEncoder().encode(value).length;
var plain = (v) => v !== null && typeof v === "object" && !Array.isArray(v) && Object.getPrototypeOf(v) === Object.prototype;
var exact = (v, keys) => plain(v) && Object.keys(v).length === keys.length && keys.every((k) => Object.hasOwn(v, k));
var text = (v) => typeof v === "string" && v.length <= MAX_TEXT;
var virtualPath = (v) => typeof v === "string" && v.startsWith("/") && !v.includes("\0") && (v === "/" || v.slice(1).split("/").every((x) => x !== "" && x !== ".." && x !== "."));
var path = (v) => virtualPath(v) && (v === "/home/learner" || v.startsWith("/home/learner/"));
var choices = (v, n) => Array.isArray(v) && v.length === n && v.every((x) => x === null || Number.isInteger(x) && x >= 0 && x <= 3);
function invalid() {
  throw new Error("Invalid v2 backup. Nothing was replaced.");
}
function emptyProgress() {
  return { schemaVersion: 2, lessons: {}, exams: {}, lastLesson: null };
}
function emptyLesson(lesson) {
  var _a, _b, _c;
  return { step: 0, notes: "", draft: (_b = (_a = lesson.task.editor) == null ? void 0 : _a.starter) != null ? _b : "", command: (_c = lesson.task.runCommand) != null ? _c : "", snapshot: null, lastRun: null, passed: false, badge: null, quiz: [null, null], hints: 0, localChecks: [] };
}
function validateProgress(v, lessonIds = null, sectionIds = null) {
  if (!exact(v, ["schemaVersion", "lessons", "exams", "lastLesson"]) || v.schemaVersion !== 2 || !plain(v.lessons) || !plain(v.exams) || !(v.lastLesson === null || typeof v.lastLesson === "string" && (!lessonIds || lessonIds.includes(v.lastLesson)))) invalid();
  for (const [id, l] of Object.entries(v.lessons)) {
    if (["__proto__", "constructor", "prototype"].includes(id) || lessonIds && !lessonIds.includes(id) || !exact(l, ["step", "notes", "draft", "command", "snapshot", "lastRun", "passed", "badge", "quiz", "hints", "localChecks"])) invalid();
    if (![0, 1, 2].includes(l.step) || !text(l.notes) || !text(l.draft) || !text(l.command) || typeof l.passed !== "boolean" || ![null, "browserVerified", "localSelfAttested"].includes(l.badge) || !choices(l.quiz, 2) || !Number.isInteger(l.hints) || l.hints < 0 || l.hints > 3 || !Array.isArray(l.localChecks) || l.localChecks.length > 32 || !l.localChecks.every((x) => typeof x === "boolean") || l.passed !== (l.badge !== null)) invalid();
    if (l.snapshot !== null) {
      if (!exact(l.snapshot, ["files", "directories", "cwd"]) || !plain(l.snapshot.files) || !Array.isArray(l.snapshot.directories) || !virtualPath(l.snapshot.cwd) || !l.snapshot.directories.every(path)) invalid();
      for (const [p, t] of Object.entries(l.snapshot.files)) if (!path(p) || typeof t !== "string") invalid();
    }
    if (l.lastRun !== null && (!exact(l.lastRun, ["stdout", "stderr", "exitCode", "cwd"]) || !text(l.lastRun.stdout) || !text(l.lastRun.stderr) || !Number.isInteger(l.lastRun.exitCode) || !virtualPath(l.lastRun.cwd))) invalid();
  }
  for (const [id, e] of Object.entries(v.exams)) if (["__proto__", "constructor", "prototype"].includes(id) || sectionIds && !sectionIds.includes(id) || !exact(e, ["answers", "passed"]) || !Array.isArray(e.answers) || e.answers.length < 3 || e.answers.length > 20 || !choices(e.answers, e.answers.length) || typeof e.passed !== "boolean") invalid();
  return v;
}
function encodeBackup(state) {
  validateProgress(state);
  const raw = JSON.stringify(state);
  if (bytes(raw) > MAX_BYTES) throw new Error("Backup exceeds 16 MiB. Remove or reduce files or notes before saving.");
  return raw;
}
function decodeBackup(raw, lessons, sections) {
  if (typeof raw !== "string" || bytes(raw) > MAX_BYTES) throw new Error("Backup exceeds 16 MiB. Nothing was replaced.");
  const value = JSON.parse(raw);
  if ((value == null ? void 0 : value.schemaVersion) !== 2) throw new Error("Legacy or unrecognized backup. Keep it as an original v1 backup; it cannot award v2 credit.");
  validateProgress(value, lessons, sections);
  encodeBackup(value);
  return value;
}
var _validState;
var ProgressStore = class {
  constructor(storage, lessons, sections) {
    __privateAdd(this, _validState);
    this.storage = storage;
    this.lessons = lessons;
    this.sections = sections;
    this.error = "";
    this.state = emptyProgress();
    try {
      const raw = storage.getItem(KEY);
      if (raw) this.state = decodeBackup(raw, lessons, sections);
    } catch (e) {
      this.error = `Saved progress could not be loaded: ${e.message} Export any original backup before replacing it.`;
    }
    __privateSet(this, _validState, structuredClone(this.state));
  }
  replace(value) {
    validateProgress(value, this.lessons, this.sections);
    const raw = encodeBackup(value);
    const next = structuredClone(value);
    try {
      this.storage.setItem(KEY, raw);
      this.error = "";
    } catch (e) {
      this.error = "Storage is unavailable or full. Work is in this tab only: export a backup now.";
      this.state = next;
      __privateSet(this, _validState, structuredClone(next));
      throw new Error(this.error);
    }
    this.state = next;
    __privateSet(this, _validState, structuredClone(next));
  }
  save() {
    try {
      validateProgress(this.state, this.lessons, this.sections);
      encodeBackup(this.state);
    } catch (e) {
      this.state = structuredClone(__privateGet(this, _validState));
      this.error = `Changes not saved: ${e.message} Previous valid progress retained; export it and repair/remove/reset before leaving.`;
      throw new Error(this.error);
    }
    this.replace(this.state);
  }
  import(raw) {
    const next = decodeBackup(raw, this.lessons, this.sections);
    this.replace(next);
  }
  export() {
    return encodeBackup(this.state);
  }
  legacy() {
    try {
      return this.storage.getItem("bash-trail.progress.v1");
    } catch (e) {
      return null;
    }
  }
};
_validState = new WeakMap();

// src/compatibility.mjs
function environmentDefault() {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  return {};
}
function getBrowserCapabilities(environment) {
  var env = environment || environmentDefault();
  return {
    worker: typeof env.Worker === "function",
    promise: typeof env.Promise === "function",
    map: typeof env.Map === "function",
    set: typeof env.Set === "function",
    url: typeof env.URL === "function",
    textEncoder: typeof env.TextEncoder === "function",
    textDecoder: typeof env.TextDecoder === "function",
    arrayAt: !!(env.Array && typeof env.Array.prototype.at === "function"),
    objectHasOwn: !!(env.Object && typeof env.Object.hasOwn === "function"),
    stringReplaceAll: !!(env.String && typeof env.String.prototype.replaceAll === "function"),
    structuredClone: typeof env.structuredClone === "function",
    webAssembly: !!(env.WebAssembly && typeof env.WebAssembly.instantiate === "function"),
    sharedArrayBuffer: typeof env.SharedArrayBuffer === "function",
    crossOriginIsolated: env.crossOriginIsolated === true,
    secureContext: env.isSecureContext === true,
    touch: !!(env.navigator && env.navigator.maxTouchPoints > 0),
    visualViewport: !!env.visualViewport
  };
}
function checkBrowserCompatibility(environment) {
  var env = environment || environmentDefault();
  var capabilities = getBrowserCapabilities(env);
  var ua = env.navigator && typeof env.navigator.userAgent === "string" ? env.navigator.userAgent.slice(0, 512) : "Unavailable";
  var ios = /(?:iPhone|iPad|iPod).*?OS (\d+(?:_\d+){0,2})/.exec(ua);
  var safari = /Version\/(\d+(?:\.\d+){0,2}).*Safari\//.exec(ua);
  var required = ["worker", "promise", "map", "set", "url", "textEncoder", "textDecoder", "arrayAt", "objectHasOwn", "stringReplaceAll"];
  var missing = required.filter(function(key) {
    return !capabilities[key];
  });
  var warnings = [];
  if (!capabilities.webAssembly) warnings.push("WebAssembly is unavailable. Shell checks may work, but real Python cannot start.");
  if (!capabilities.structuredClone) warnings.push("structuredClone is unavailable; the lesson app needs a newer browser even if the shell can start.");
  if (ios && parseFloat(ios[1].replace(/_/g, ".")) < 16.4) warnings.push("Pyodide 314.0.7 recommends Safari 16.4 or newer. This is a user-agent hint, not a device test.");
  return {
    capabilities,
    browser: { userAgent: ua, iosVersion: ios ? ios[1].replace(/_/g, ".") : null, safariVersion: safari ? safari[1] : null, versionSource: "user-agent; may be emulated", physicalDeviceVerified: false },
    shellSupported: missing.length === 0,
    pythonSupported: missing.length === 0 && capabilities.webAssembly,
    appSupported: missing.length === 0 && capabilities.structuredClone,
    missing,
    warnings,
    guidance: missing.length ? "Required browser features are missing: " + missing.join(", ") + ". Update Safari/iOS or try a current browser, then retry Browser check." : "Feature presence is not proof of compatibility. Run the real worker check; physical iPhone Safari remains unverified."
  };
}

// src/runtime-client.mjs
var SAFE_NAMES = ["Error", "SecurityError", "TypeError", "SyntaxError", "NetworkError", "DataCloneError", "NotSupportedError"];
var RuntimeError = class extends Error {
  constructor(message, code, details = {}) {
    super(message);
    this.name = "RuntimeError";
    this.code = code;
    this.details = details;
    this.retryable = true;
  }
};
var RuntimeClient = class {
  constructor({ factory, timeoutMs = 15e3, initTimeoutMs = 9e4, onError = () => {
  } } = {}) {
    this.factory = factory != null ? factory : (() => {
      const compatibility = checkBrowserCompatibility();
      if (!compatibility.shellSupported) throw new RuntimeError(compatibility.guidance, "BROWSER_UNSUPPORTED", { stage: "capabilities", missing: compatibility.missing });
      return new Worker(new URL("./runtime/worker.js", import.meta.url), { type: "module" });
    });
    this.onError = onError;
    this.timeoutMs = timeoutMs;
    this.initTimeoutMs = initTimeoutMs;
    this.sequence = 0;
    this.pending = /* @__PURE__ */ new Map();
    this.worker = null;
    this.generation = 0;
    this.pythonReady = false;
    this.pythonLoading = null;
  }
  ensure() {
    if (this.worker) return;
    const worker = this.factory();
    this.worker = worker;
    worker.onmessage = ({ data }) => {
      var _a, _b;
      if (this.worker !== worker) return;
      if (!data || !Number.isSafeInteger(data.id) || typeof data.ok !== "boolean") {
        this.fail(new RuntimeError("The runtime sent an unreadable response. Retry to start a fresh worker, or run Browser check.", "WORKER_PROTOCOL", { stage: "worker-message", asset: "runtime/worker.js" }));
        return;
      }
      const entry = this.pending.get(data.id);
      if (!entry) return;
      clearTimeout(entry.timer);
      this.pending.delete(data.id);
      if (data.ok) entry.resolve(data.result);
      else entry.reject(new RuntimeError(typeof data.error === "string" ? data.error : (_b = (_a = data.error) == null ? void 0 : _a.message) != null ? _b : "Runtime operation failed", "RUNTIME_OPERATION", { stage: "runtime-operation", operation: entry.op }));
    };
    worker.onerror = (event) => {
      if (this.worker !== worker) return;
      const details = { stage: "worker-load-or-execution", asset: "runtime/worker.js" };
      if (Number.isInteger(event.lineno) && event.lineno > 0) details.line = event.lineno;
      if (Number.isInteger(event.colno) && event.colno > 0) details.column = event.colno;
      this.fail(new RuntimeError("Runtime worker failed to load or execute. Retry; if this repeats, reload, check content blockers/network access, update Safari/iOS and run Browser check.", "WORKER_ERROR", details));
    };
    const onMessageError = () => {
      if (this.worker === worker) this.fail(new RuntimeError("The browser could not read a runtime message. Retry with a fresh worker; if this repeats, reload or run Browser check.", "WORKER_MESSAGE_ERROR", { stage: "worker-message", asset: "runtime/worker.js" }));
    };
    if (typeof worker.addEventListener === "function") worker.addEventListener("messageerror", onMessageError);
    else worker.onmessageerror = onMessageError;
  }
  request(op, payload = {}, { initialization = false } = {}) {
    try {
      this.ensure();
    } catch (cause) {
      const error = cause instanceof RuntimeError ? cause : new RuntimeError("Could not start the runtime worker. Reload or retry; check browser content restrictions and run Browser check.", "WORKER_CREATION", { stage: "worker-creation", asset: "runtime/worker.js", name: SAFE_NAMES.includes(cause == null ? void 0 : cause.name) ? cause.name : "Error" });
      this.onError(error);
      return Promise.reject(error);
    }
    const id = ++this.sequence;
    return new Promise((resolve, reject) => {
      const budgetMs = op === "init" || initialization ? this.initTimeoutMs : this.timeoutMs;
      const timer = setTimeout(() => this.fail(new RuntimeError(`${op} timed out after ${Math.ceil(budgetMs / 1e3)} seconds. Work since the last snapshot may be lost. Retry to restore saved work; run Browser check if loading keeps failing.`, "RUNTIME_TIMEOUT", { stage: initialization ? "python-warmup" : "runtime-request", operation: op, budgetMs })), budgetMs);
      this.pending.set(id, { resolve, reject, timer, op });
      try {
        this.worker.postMessage(__spreadProps(__spreadValues({}, payload), { id, op }));
      } catch (cause) {
        this.fail(new RuntimeError("The browser could not send work to the runtime worker. Retry, or reload and run Browser check.", "WORKER_POST_MESSAGE", { stage: "worker-send", operation: op, name: SAFE_NAMES.includes(cause.name) ? cause.name : "Error" }));
      }
    });
  }
  fail(error) {
    this.stop(error);
    this.onError(error);
  }
  stop(message = "Stopped. Last saved work is preserved; the worker will restart on your next action.") {
    var _a;
    const error = message instanceof Error ? message : new RuntimeError(message, "STOPPED", { stage: "stopped" });
    this.generation++;
    (_a = this.worker) == null ? void 0 : _a.terminate();
    this.worker = null;
    this.pythonReady = false;
    this.pythonLoading = null;
    for (const p of this.pending.values()) {
      clearTimeout(p.timer);
      p.reject(error);
    }
    this.pending.clear();
  }
  async init({ fixtures = {}, directories = [], cwd = "/home/learner" } = {}) {
    this.stop();
    const generation = this.generation;
    const result = await this.request("init", { fixtures, directories, cwd, pyodideURL: new URL("./vendor/pyodide/", import.meta.url).href });
    if (generation !== this.generation) throw new RuntimeError("Stopped before initialization completed. Retry to restore saved work.", "STOPPED", { stage: "stopped" });
    if (Object.keys(fixtures).some((path2) => path2.endsWith(".py"))) await this.preparePython();
    if (generation !== this.generation) throw new RuntimeError("Stopped before initialization completed. Retry to restore saved work.", "STOPPED", { stage: "stopped" });
    return result;
  }
  async preparePython() {
    if (this.pythonReady) return;
    if (!this.pythonLoading) {
      const generation = this.generation;
      const loading = this.request("exec", { command: 'python3 -c "pass"' }, { initialization: true }).then((result) => {
        if (generation !== this.generation) throw new RuntimeError("Stopped before Python initialization completed. Retry to restore saved work.", "STOPPED", { stage: "python-warmup" });
        if (result.exitCode !== 0) {
          const error = new RuntimeError("Python initialization failed. Retry; if it repeats, check the network, reload and run Browser check with Python enabled.", "PYTHON_INITIALIZATION", { stage: "python-warmup", asset: "vendor/pyodide/" });
          this.fail(error);
          throw error;
        }
        this.pythonReady = true;
      }).finally(() => {
        if (this.pythonLoading === loading) this.pythonLoading = null;
      });
      this.pythonLoading = loading;
    }
    await this.pythonLoading;
  }
  async exec(command) {
    const generation = this.generation;
    if (/\bpython(?:3)?\b/.test(command)) await this.preparePython();
    if (generation !== this.generation) throw new RuntimeError("Stopped before execution began. Retry to restore saved work.", "STOPPED", { stage: "stopped" });
    return this.request("exec", { command });
  }
  write(path2, text2) {
    return this.request("write", { path: path2, text: text2 });
  }
  read(path2) {
    return this.request("read", { path: path2 });
  }
  snapshot() {
    return this.request("snapshot");
  }
};

// src/browser-check.mjs
var CAPABILITIES = ["worker", "promise", "map", "set", "url", "textEncoder", "textDecoder", "arrayAt", "objectHasOwn", "stringReplaceAll", "structuredClone", "webAssembly", "sharedArrayBuffer", "crossOriginIsolated", "secureContext", "touch", "visualViewport"];
var STAGES = ["capabilities", "worker", "shell", "python-warmup", "python"];
var MESSAGES = {
  BROWSER_UNSUPPORTED: "Required browser features are missing. Update Safari/iOS or use a current browser, then retry.",
  WORKER_CREATION: "The browser could not create the same-origin worker. Retry; check browser restrictions or content blockers.",
  WORKER_ERROR: "The worker failed to load or execute. Retry; check network/content blockers, reload, and update Safari/iOS if needed.",
  WORKER_MESSAGE_ERROR: "The browser could not read a worker message. Retry with a fresh worker or reload.",
  WORKER_POST_MESSAGE: "The browser could not send a worker message. Retry or reload.",
  WORKER_PROTOCOL: "The worker returned an unreadable response. Retry or reload to replace stale assets.",
  RUNTIME_TIMEOUT: "The runtime exceeded its time budget. Retry on a stable connection; Python warmup may take up to 90 seconds.",
  RUNTIME_OPERATION: "The fixed runtime check failed. Retry; use the failing stage and capabilities to investigate.",
  PYTHON_INITIALIZATION: "Real Python failed to initialize. Retry; check network/content blockers and Safari/iOS version.",
  PYTHON_UNAVAILABLE: "WebAssembly is unavailable, so real Python cannot run in this browser.",
  CHECK_MISMATCH: "The actual interpreter result did not match the fixed browser-check output.",
  STOPPED: "Browser check stopped. Retry starts a fresh empty worker.",
  DIAGNOSTIC_FAILED: "Browser check could not complete. Reload and retry; use this report to describe the failing stage."
};
function safeError(error) {
  var code = error && Object.prototype.hasOwnProperty.call(MESSAGES, error.code) ? error.code : "DIAGNOSTIC_FAILED";
  var out = { code, message: MESSAGES[code], retryable: true };
  var source = error && error.details;
  var details = {};
  if (source) {
    if (["capabilities", "worker-creation", "worker-load-or-execution", "worker-message", "worker-send", "runtime-request", "runtime-operation", "python-warmup", "stopped"].indexOf(source.stage) !== -1) details.stage = source.stage;
    if (["init", "exec", "read", "write", "snapshot"].indexOf(source.operation) !== -1) details.operation = source.operation;
    if (["runtime/worker.js", "vendor/pyodide/"].indexOf(source.asset) !== -1) details.asset = source.asset;
    if (["Error", "SecurityError", "TypeError", "SyntaxError", "NetworkError", "DataCloneError", "NotSupportedError"].indexOf(source.name) !== -1) details.name = source.name;
    ["line", "column", "budgetMs"].forEach(function(key) {
      if (typeof source[key] === "number" && isFinite(source[key]) && source[key] >= 0) details[key] = source[key];
    });
    if (Array.isArray(source.missing)) details.missing = source.missing.filter(function(key) {
      return CAPABILITIES.indexOf(key) !== -1;
    });
  }
  out.details = details;
  return out;
}
function safeResult(result) {
  var out = { validated: !!(result && result.validated) };
  if (!result) return out;
  if (["", "browser-check", "browser-check\n"].indexOf(result.stdout) !== -1) out.stdout = result.stdout;
  if (result.stderr === "") out.stderr = "";
  out.stderrPresent = typeof result.stderr === "string" && result.stderr.length > 0;
  if (typeof result.exitCode === "number" && isFinite(result.exitCode)) out.exitCode = result.exitCode;
  return out;
}
function validate(result, expected) {
  if (!result || result.stdout !== expected || result.stderr !== "" || result.exitCode !== 0) throw new RuntimeError(MESSAGES.CHECK_MISMATCH, "CHECK_MISMATCH");
  return { stdout: result.stdout, stderr: result.stderr, exitCode: result.exitCode, validated: true };
}
function formatBrowserReport(report) {
  report = report || {};
  var browser = report.browser || {};
  var out = {
    schemaVersion: 1,
    kind: "bash-trail-browser-check",
    physicalDeviceVerified: false,
    passed: report.passed === true,
    pythonRequested: report.pythonRequested === true,
    browser: { userAgent: typeof browser.userAgent === "string" ? browser.userAgent.slice(0, 512) : "Unavailable", iosVersion: typeof browser.iosVersion === "string" && /^\d+(?:\.\d+){0,2}$/.test(browser.iosVersion) ? browser.iosVersion : null, safariVersion: typeof browser.safariVersion === "string" && /^\d+(?:\.\d+){0,2}$/.test(browser.safariVersion) ? browser.safariVersion : null, versionSource: "user-agent; may be emulated", physicalDeviceVerified: false },
    capabilities: {},
    stages: []
  };
  CAPABILITIES.forEach(function(key) {
    out.capabilities[key] = !!(report.capabilities && report.capabilities[key]);
  });
  if (Array.isArray(report.stages)) report.stages.forEach(function(stage) {
    if (!stage || STAGES.indexOf(stage.id) === -1) return;
    var clean = { id: stage.id, status: ["running", "passed", "failed", "skipped"].indexOf(stage.status) !== -1 ? stage.status : "failed" };
    if (typeof stage.durationMs === "number" && isFinite(stage.durationMs) && stage.durationMs >= 0) clean.durationMs = Math.round(stage.durationMs);
    if (stage.result) clean.result = safeResult(stage.result);
    if (stage.error) clean.error = safeError(stage.error);
    out.stages.push(clean);
  });
  if (report.error) out.error = safeError(report.error);
  return JSON.stringify(out, null, 2);
}
async function runBrowserCheck(options) {
  options = options || {};
  var compatibility = checkBrowserCompatibility();
  var report = { passed: false, pythonRequested: options.python === true, browser: compatibility.browser, capabilities: compatibility.capabilities, stages: [] };
  var client = new RuntimeClient({ timeoutMs: options.timeoutMs === void 0 ? 15e3 : options.timeoutMs, initTimeoutMs: options.initTimeoutMs === void 0 ? 9e4 : options.initTimeoutMs });
  var signal = options.signal;
  function abort() {
    client.stop();
  }
  function notify(stage2) {
    if (typeof options.onStage === "function") options.onStage(JSON.parse(JSON.stringify(stage2)));
  }
  async function stage(id, action) {
    var entry = { id, status: "running" };
    report.stages.push(entry);
    notify(entry);
    var started = Date.now();
    try {
      if (signal && signal.aborted) throw new RuntimeError(MESSAGES.STOPPED, "STOPPED");
      var result = await action();
      entry.status = "passed";
      if (result) entry.result = result;
    } catch (error) {
      entry.status = "failed";
      entry.error = safeError(error);
      throw error;
    } finally {
      entry.durationMs = Date.now() - started;
      notify(entry);
    }
  }
  if (signal && typeof signal.addEventListener === "function") signal.addEventListener("abort", abort);
  try {
    await stage("capabilities", async function() {
      if (!compatibility.shellSupported) throw new RuntimeError(compatibility.guidance, "BROWSER_UNSUPPORTED", { stage: "capabilities", missing: compatibility.missing });
    });
    await stage("worker", async function() {
      await client.init({ fixtures: {}, directories: [], cwd: "/home/learner" });
    });
    await stage("shell", async function() {
      return validate(await client.exec("printf browser-check"), "browser-check");
    });
    if (report.pythonRequested) {
      await stage("python-warmup", async function() {
        if (!compatibility.pythonSupported) throw new RuntimeError(MESSAGES.PYTHON_UNAVAILABLE, "PYTHON_UNAVAILABLE");
        await client.preparePython();
      });
      await stage("python", async function() {
        return validate(await client.exec(`python3 -c 'print("browser-check")'`), "browser-check\n");
      });
    } else {
      var skipped = { id: "python", status: "skipped" };
      report.stages.push(skipped);
      notify(skipped);
    }
    report.passed = true;
  } catch (error) {
    report.error = safeError(error);
  } finally {
    client.stop();
    if (signal && typeof signal.removeEventListener === "function") signal.removeEventListener("abort", abort);
  }
  return JSON.parse(formatBrowserReport(report));
}

// src/player-viewport.mjs
function installKeyboardViewport(window2, root) {
  const viewport = window2.visualViewport, doc = root.ownerDocument;
  const update = () => {
    var _a;
    const inset = viewport && (!viewport.scale || Math.abs(viewport.scale - 1) < 0.05) ? Math.max(0, window2.innerHeight - viewport.height - viewport.offsetTop) : 0;
    doc.documentElement.style.setProperty("--keyboard-inset", `${Math.round(inset)}px`);
    if (inset > 0) {
      const input = doc.activeElement;
      if (input && root.contains(input) && /^(INPUT|TEXTAREA)$/.test(input.tagName) && input.getBoundingClientRect) {
        const box = input.getBoundingClientRect(), bottom = viewport.height + viewport.offsetTop - 105;
        if (box.bottom > bottom) (_a = window2.scrollBy) == null ? void 0 : _a.call(window2, 0, box.bottom - bottom + 16);
      }
    }
  };
  viewport == null ? void 0 : viewport.addEventListener("resize", update);
  viewport == null ? void 0 : viewport.addEventListener("scroll", update);
  window2.addEventListener("resize", update);
  update();
  return () => {
    viewport == null ? void 0 : viewport.removeEventListener("resize", update);
    viewport == null ? void 0 : viewport.removeEventListener("scroll", update);
    window2.removeEventListener("resize", update);
    doc.documentElement.style.removeProperty("--keyboard-inset");
  };
}

// src/checks.mjs
async function evaluateChecks(client, checks, lastRun, factory = () => new RuntimeClient(), isCurrent = () => true) {
  var _a, _b, _c;
  const results = [];
  let snapshot;
  for (const check of checks) {
    if (!isCurrent()) return [];
    let actual, expected = check.expected, passed = false;
    try {
      switch (check.kind) {
        case "cwd":
          snapshot != null ? snapshot : snapshot = await client.request("snapshot");
          actual = snapshot.cwd;
          passed = actual === expected;
          break;
        case "file":
          actual = await client.request("read", { path: check.path });
          passed = actual === expected;
          break;
        case "directory": {
          const stat = await client.request("stat", { path: check.path });
          actual = stat.exists && stat.isDirectory ? 1 : 0;
          passed = actual === expected;
          break;
        }
        case "missing": {
          const stat = await client.request("stat", { path: check.path });
          actual = stat.exists ? 0 : 1;
          passed = actual === expected;
          break;
        }
        case "stdout":
          actual = (_a = lastRun == null ? void 0 : lastRun.stdout) != null ? _a : null;
          passed = lastRun !== null && actual === expected;
          break;
        case "stderr":
          actual = (_b = lastRun == null ? void 0 : lastRun.stderr) != null ? _b : null;
          passed = lastRun !== null && actual === expected;
          break;
        case "exit":
          actual = (_c = lastRun == null ? void 0 : lastRun.exitCode) != null ? _c : null;
          passed = lastRun !== null && actual === expected;
          break;
        case "run": {
          snapshot != null ? snapshot : snapshot = await client.request("snapshot");
          if (!isCurrent()) return [];
          const isolated = factory();
          try {
            await isolated.init({ fixtures: snapshot.files, directories: snapshot.directories, cwd: snapshot.cwd });
            if (!isCurrent()) return [];
            const r = await isolated.exec(check.command);
            actual = { stdout: r.stdout, stderr: r.stderr, exitCode: r.exitCode };
            expected = __spreadValues(__spreadValues({ stdout: check.expected }, check.stderr !== null && check.stderr !== void 0 ? { stderr: check.stderr } : {}), check.exitCode !== null && check.exitCode !== void 0 ? { exitCode: check.exitCode } : {});
            passed = Object.entries(expected).every(([k, v]) => actual[k] === v);
          } finally {
            isolated.stop();
          }
          break;
        }
        default:
          throw new Error("Unsupported check type");
      }
    } catch (e) {
      actual = `Could not check: ${e.message}`;
    }
    if (!isCurrent()) return [];
    results.push({ id: check.id, label: check.label, passed, expected, actual, clue: check.clue });
  }
  return results;
}
function canPass(lesson, state, results = []) {
  const quiz = lesson.quiz.length === 2 && lesson.quiz.every((q, i) => state.quiz[i] === q.correct);
  if (lesson.mode === "local") return quiz && lesson.local.checks.length > 0 && lesson.local.checks.every((_, i) => state.localChecks[i] === true);
  return quiz && results.length > 0 && results.every((r) => r.passed);
}
function examUnlocked(section, state) {
  return section.lessons.every((l) => {
    var _a;
    return (_a = state.lessons[l.id]) == null ? void 0 : _a.passed;
  });
}

// src/app.mjs
var CURSOR_KEY = "bash-trail.player.v3";
var shown = (value) => {
  const text2 = typeof value === "string" ? value : JSON.stringify(value, null, 2);
  return (text2 != null ? text2 : "No output").slice(0, 16e3);
};
function mountApp(root, sections, { window: window2 = globalThis.window, storage, clientFactory = () => new RuntimeClient(), browserCheck = runBrowserCheck } = {}) {
  if (storage === void 0) {
    try {
      storage = window2.localStorage;
    } catch (error) {
      storage = { getItem() {
        throw error;
      }, setItem() {
        throw error;
      } };
    }
  }
  const doc = root.ownerDocument, lessons = sections.flatMap((s) => s.lessons), store = new ProgressStore(storage, lessons.map((l) => l.id), sections.map((s) => s.id));
  let route, card = 0, sheet = null, notice = store.error, practice = null, ready = false, busy = false, generation = 0, revision = 0, results = [], example = null, exampleResult = null;
  const activeChecks = /* @__PURE__ */ new Set(), snapshotWarnings = /* @__PURE__ */ new Map(), downloaded = /* @__PURE__ */ new Set();
  let localCard = 0, diagnostic = null, diagnosticAbort = null;
  const practical = () => results.length > 0 && results.every((r) => r.passed);
  const state = () => (route == null ? void 0 : route.lesson) ? store.state.lessons[route.lesson.id] : null;
  function el(tag, text2, attrs = {}) {
    const n = doc.createElement(tag);
    if (text2 !== void 0 && text2 !== null) n.textContent = text2;
    for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
    return n;
  }
  function add(parent, ...nodes) {
    for (const n of nodes) if (n) parent.appendChild(n);
    return parent;
  }
  function p(text2) {
    return el("p", text2);
  }
  function button(text2, fn, primary = false) {
    const b = el("button", text2, { type: "button", class: primary ? "primary" : "quiet" });
    b.addEventListener("click", fn);
    return b;
  }
  function save() {
    try {
      store.save();
    } catch (e) {
      notice = e.message;
    }
    announce();
  }
  function status() {
    return [...new Set([notice, store.error, ...snapshotWarnings.values()].filter(Boolean))].join(" ");
  }
  function announce() {
    const n = root.querySelector("#status");
    if (n) n.textContent = status();
  }
  function retire() {
    diagnosticAbort == null ? void 0 : diagnosticAbort.abort();
    diagnosticAbort = null;
    generation++;
    for (const c of activeChecks) c.stop();
    activeChecks.clear();
    practice == null ? void 0 : practice.stop();
    example == null ? void 0 : example.stop();
    practice = null;
    example = null;
    ready = false;
    busy = false;
    results = [];
    exampleResult = null;
  }
  function stop() {
    retire();
    notice = "Stopped. Worker terminated. Last saved files and drafts are preserved. Run again to recover.";
    render();
  }
  async function ensurePractice() {
    var _a, _b, _c;
    if (!practice) practice = clientFactory();
    const client = practice, token = generation;
    if (!ready) {
      const l = route.lesson, s = state(), snap = s.snapshot;
      await client.init({ fixtures: (_a = snap == null ? void 0 : snap.files) != null ? _a : l.task.files, directories: (_b = snap == null ? void 0 : snap.directories) != null ? _b : l.task.directories, cwd: (_c = snap == null ? void 0 : snap.cwd) != null ? _c : l.task.cwd });
      if (token !== generation || client !== practice) {
        client.stop();
        return;
      }
      ready = true;
    }
  }
  async function capture(token = generation, updates = {}) {
    if (!practice || !ready) return false;
    const id = route.lesson.id;
    let candidate;
    try {
      const snapshot = await practice.snapshot();
      if (token !== generation) return false;
      candidate = structuredClone(store.state);
      Object.assign(candidate.lessons[id], updates, { snapshot });
      encodeBackup(candidate);
    } catch (e) {
      if (token === generation) {
        snapshotWarnings.set(id, `Latest files not saved: ${e.message} Previous valid snapshot retained. Export the last valid backup; repair/remove files or reset practice before leaving. Live worker files are not in that backup.`);
        announce();
      }
      return false;
    }
    snapshotWarnings.delete(id);
    try {
      store.replace(candidate);
    } catch (e) {
      notice = e.message;
      announce();
    }
    return true;
  }
  function revealFeedback() {
    var _a;
    if (sheet) return;
    const target = root.querySelector("#status"), footer2 = root.querySelector(".actionbar");
    if (!(target == null ? void 0 : target.getBoundingClientRect) || !(footer2 == null ? void 0 : footer2.getBoundingClientRect)) return;
    const bottom = target.getBoundingClientRect().bottom, edge = footer2.getBoundingClientRect().top - 20;
    if (bottom > edge) (_a = window2.scrollBy) == null ? void 0 : _a.call(window2, 0, bottom - edge);
  }
  async function action(fn, { python = false } = {}) {
    if (busy) return;
    const token = generation;
    busy = true;
    notice = python ? "Loading real Python if needed. First use may download about 13 MiB and take up to 90 seconds. Stop is available." : "Running\u2026 Stop is available.";
    render();
    try {
      await fn(token);
    } catch (e) {
      if (token === generation) {
        notice = `Run could not finish: ${e.message} Use Run to retry.`;
        practice == null ? void 0 : practice.stop();
        practice = null;
        ready = false;
      }
    } finally {
      if (token === generation) {
        busy = false;
        render();
        revealFeedback();
      }
    }
  }
  function invalidate() {
    revision++;
    results = [];
    if (!busy) notice = "";
    save();
    const primary = root.querySelector(".actionbar .primary");
    if (primary && card === route.lesson.teach.length + 1) primary.textContent = "Run";
    const feedback = root.querySelector("#feedback");
    if (feedback) feedback.textContent = "";
  }
  function run() {
    const l = route.lesson, command = state().command;
    if (!(command == null ? void 0 : command.trim())) {
      notice = "Type a command, then choose Run.";
      announce();
      return;
    }
    const checkingRevision = revision;
    results = [];
    action(async (token) => {
      await ensurePractice();
      if (token !== generation) return;
      if (l.task.editor) await practice.write(l.task.editor.path, state().draft);
      if (token !== generation) return;
      const r = await practice.exec(command);
      if (token !== generation) return;
      const lastRun = { stdout: r.stdout.slice(0, MAX_TEXT), stderr: r.stderr.slice(0, MAX_TEXT), exitCode: r.exitCode, cwd: r.cwd };
      const saved = await capture(token, { lastRun });
      if (token !== generation) return;
      if (!saved) {
        notice = `${r.exitCode === 0 ? "Run succeeded" : "Run finished"}, but latest files not saved.`;
        return;
      }
      const checked = await evaluateChecks(practice, l.task.checks, lastRun, () => {
        const c = clientFactory(), oldStop = c.stop.bind(c);
        activeChecks.add(c);
        c.stop = (...args) => {
          activeChecks.delete(c);
          oldStop(...args);
        };
        return c;
      }, () => token === generation && checkingRevision === revision);
      if (token !== generation) return;
      if (checkingRevision !== revision) {
        results = [];
        notice = "Your input changed while running. Run again to check the current draft.";
        return;
      }
      results = checked;
      notice = practical() ? "Practical checks passed. Continue when ready." : "Run complete. Not yet \u2014 use the clue beside your code.";
    }, { python: l.mode === "python" || command.includes("python") });
  }
  function transcript(parent, result) {
    var _a;
    if (!result) return;
    add(parent, el("h3", "Terminal output"), el("pre", shown(((_a = result.stdout) != null ? _a : "") + (result.stderr ? `${result.stdout ? "\n[stderr]\n" : ""}${result.stderr}` : "") || "(no output)"), { "aria-label": "Terminal output", class: "terminal" }), button("Run details", () => {
      sheet = "run";
      render();
    }));
  }
  function exampleUI(content, l) {
    add(content, el("h2", l.example.title), p(l.example.explanation));
    for (const [path2, source] of Object.entries(l.example.files)) if (/\.(py|sh)$/.test(path2)) {
      const label = `Example source \xB7 ${path2}`;
      add(content, add(el("section", null, { "aria-label": label }), el("h3", label), el("pre", source)));
    }
    add(content, el("h3", "Run this example"), el("pre", l.example.code));
    if (l.mode === "local") add(content, p("Real Linux required. This source is for reading; this browser does not run it."));
    else {
      add(content, p("Separate example space. Your practice files stay unchanged; examples earn no credit."), button("Run example", () => action(async (token) => {
        const client = clientFactory();
        example = client;
        try {
          await client.init({ fixtures: l.example.files, directories: l.example.directories, cwd: l.example.cwd });
          if (token !== generation) return;
          const r = await client.exec(l.example.code);
          if (token === generation) {
            exampleResult = r;
            notice = "Example complete. Your practice work is unchanged.";
          }
        } finally {
          client.stop();
          if (example === client) example = null;
        }
      }, { python: l.mode === "python" || l.example.code.includes("python") })));
      transcript(content, exampleResult);
      if (busy) add(content, el("p", "Running example\u2026", { "data-busy": "" }));
    }
    footer("Continue", () => move(card + 1));
    if (busy) root.querySelector(".actionbar .primary").disabled = true;
  }
  function localUI(content, l) {
    var _a;
    const setup = l.local.setup.length, commands = l.local.commands.length, downloadAt = setup + commands + 1;
    add(content, el("p", "Real Linux required", { class: "badge" }), p("Run this lab on Linux you control. Completion is self-attested, never browser-verified."));
    const next = () => {
      localCard++;
      cursor();
      render();
    };
    if (localCard < setup) {
      add(content, el("h2", `Local setup \xB7 ${localCard + 1} of ${setup}`), p(l.local.setup[localCard]));
      footer("Continue", next);
    } else if (localCard === setup) {
      add(content, el("h2", "Your local task"), p(l.task.goal));
      const requirements = el("ul");
      l.task.requirements.forEach((t) => add(requirements, el("li", t)));
      add(content, requirements);
      for (const [path2, source] of Object.entries(l.task.files)) add(content, el("h3", path2), el("pre", source));
      if (l.task.editor) add(content, el("h3", l.task.editor.path), el("pre", l.task.editor.starter));
      footer("Continue", next);
    } else if (localCard < downloadAt) {
      const command = l.local.commands[localCard - setup - 1];
      add(content, el("h2", command.label), el("pre", command.command), p(command.expected));
      footer("Continue", next);
    } else if (localCard === downloadAt || !downloaded.has(l.id)) {
      add(content, el("h2", "Verify on your Linux machine"), p("Save verify_lab.py beside your artifact. Read it, then run it locally. Only attest after it reports status 0 and unittest OK."), el("pre", "python3 verify_lab.py -v"));
      footer(downloaded.has(l.id) ? "Continue" : "Download local verifier", () => {
        if (downloaded.has(l.id)) {
          next();
          return;
        }
        download("verify_lab.py", l.local.testFile, "text/x-python");
        downloaded.add(l.id);
        notice = "Verifier downloaded. Run it locally before attesting.";
        render();
      });
    } else {
      const index = localCard - downloadAt - 1;
      add(content, el("h2", "Local self-attestation"));
      const check = el("input", null, { type: "checkbox" });
      check.checked = (_a = state().localChecks[index]) != null ? _a : false;
      check.addEventListener("change", () => {
        state().localChecks[index] = check.checked;
        save();
      });
      add(content, add(el("label", null, { class: "choice" }), check, doc.createTextNode(l.local.checks[index])));
      footer("Continue", () => {
        if (!state().localChecks[index]) {
          notice = "Confirm this only after running your local tests.";
          announce();
          return;
        }
        if (index + 1 < l.local.checks.length) next();
        else move(card + 1);
      });
    }
    const back = root.querySelector(".actionbar .quiet");
    if (back) {
      back.replaceWith(button("Back", () => {
        if (localCard > 0) {
          localCard--;
          cursor();
          render();
        } else move(card - 1);
      }));
    }
  }
  function practiceUI(content, l) {
    if (l.mode === "local") {
      localUI(content, l);
      return;
    }
    add(content, el("h2", "Practice"), p(l.task.goal));
    const req = el("ul", null, { class: "criteria" });
    l.task.requirements.forEach((t) => add(req, el("li", t)));
    add(content, req);
    if (l.task.editor) {
      const editor = el("textarea", null, { "aria-label": `Code editor: ${l.task.editor.path}`, rows: 9, spellcheck: "false", autocorrect: "off", autocapitalize: "off", autocomplete: "off", maxlength: MAX_TEXT, class: "code-editor" });
      editor.value = state().draft;
      editor.addEventListener("input", () => {
        state().draft = editor.value;
        invalidate();
      });
      if (state().passed) editor.setAttribute("readonly", "");
      add(content, el("label", l.task.editor.path), editor);
    }
    const input = el("input", null, { type: "text", "aria-label": "Your command", spellcheck: "false", autocorrect: "off", autocapitalize: "off", autocomplete: "off", maxlength: MAX_TEXT, placeholder: l.task.editor ? "Command and arguments" : "Type a command, then Run", enterkeyhint: "go" });
    input.value = state().command;
    if (state().passed) input.setAttribute("readonly", "");
    input.addEventListener("input", () => {
      state().command = input.value;
      invalidate();
    });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (!busy && !state().passed) run();
      }
    });
    add(content, el("label", l.task.editor ? "Run command \xB7 edit arguments as needed" : "Your command"), input);
    transcript(content, state().lastRun);
    const feedback = el("div", null, { id: "feedback", class: "feedback", "aria-live": "polite" });
    const failed = results.find((r) => !r.passed);
    if (failed) add(feedback, p(failed.clue), button("Compare expected and actual", () => {
      sheet = "check";
      render();
    }));
    add(content, feedback);
    if (busy) add(content, el("p", "Working\u2026", { "data-busy": "", class: "busy" }));
    const passed = practical() || state().passed;
    footer(busy ? "Running\u2026" : passed ? "Continue" : "Run", () => {
      if (busy) return;
      if (practical() || state().passed) move(card + 1);
      else run();
    });
    if (busy) root.querySelector(".actionbar .primary").disabled = true;
  }
  function cursor() {
    var _a, _b, _c;
    try {
      storage.setItem(CURSOR_KEY, JSON.stringify({ version: 1, id: (_c = (_a = route.lesson) == null ? void 0 : _a.id) != null ? _c : (_b = route.exam) == null ? void 0 : _b.id, card, localCard }));
    } catch (e) {
    }
  }
  function move(next) {
    var _a;
    card = next;
    if (state()) {
      state().step = card < route.lesson.teach.length + 1 ? 0 : card === route.lesson.teach.length + 1 ? 1 : 2;
      save();
    }
    cursor();
    render();
    (_a = window2.scrollTo) == null ? void 0 : _a.call(window2, 0, 0);
  }
  function footer(label, fn, back = true) {
    const foot = el("footer", null, { class: "actionbar" });
    if (busy) add(foot, button("Stop", stop));
    else if (back) add(foot, button("Back", () => move(Math.max(0, card - 1))));
    const primary = button(label, fn, true);
    primary.disabled = busy;
    add(foot, primary);
    add(root, foot);
  }
  function readCursor() {
    try {
      const value = JSON.parse(storage.getItem(CURSOR_KEY));
      if ((value == null ? void 0 : value.version) === 1 && Number.isInteger(value.card) && value.card >= 0) return value;
    } catch (e) {
    }
    return null;
  }
  function initialCard(l) {
    const s = state(), n = l.teach.length, remembered = readCursor();
    localCard = 0;
    if (s.passed) return n + 4;
    if ((remembered == null ? void 0 : remembered.id) === l.id) {
      if (l.mode === "local" && Number.isInteger(remembered.localCard)) localCard = Math.max(0, Math.min(remembered.localCard, l.local.setup.length + l.local.commands.length + 1));
      const max = s.lastRun && s.snapshot ? n + 2 + Number(s.quiz[0] === l.quiz[0].correct) : n + 1;
      return Math.min(remembered.card, max);
    }
    return s.step === 0 ? 0 : n + 1;
  }
  function activate(next) {
    var _a, _b, _c, _d, _e, _f;
    route = next != null ? next : { lesson: (_a = lessons.find((l) => l.id === store.state.lastLesson)) != null ? _a : lessons[0] };
    sheet = null;
    if (route.lesson) {
      const l = route.lesson;
      (_d = (_b = store.state.lessons)[_c = l.id]) != null ? _d : _b[_c] = emptyLesson(l);
      store.state.lastLesson = l.id;
      card = initialCard(l);
      (_e = window2.history) == null ? void 0 : _e.replaceState(null, "", `#lesson=${encodeURIComponent(l.id)}`);
      save();
    } else {
      const remembered = readCursor(), s = route.exam;
      let max = 0;
      while (max < s.exam.length - 1 && examEntry().answers[max] === s.exam[max].correct) max++;
      card = (remembered == null ? void 0 : remembered.id) === s.id ? Math.min(remembered.card, max) : 0;
      (_f = window2.history) == null ? void 0 : _f.replaceState(null, "", `#exam=${s.id}`);
    }
    render();
  }
  async function navigate(next) {
    const token = generation;
    if (!busy) await capture(token);
    if (token !== generation) return;
    retire();
    activate(next);
  }
  function questionUI(content, q, index, answers, onChange, onContinue) {
    const field = el("fieldset");
    add(field, el("legend", q.prompt));
    const readOnly = route.exam ? examEntry().passed : state().passed;
    let correct = readOnly;
    const feedback = el("p", readOnly ? "Completed concept \xB7 read-only" : "", { "aria-live": "polite", class: "quiz-feedback" });
    q.options.forEach((option, i) => {
      const radio = el("input", null, { type: "radio", name: "current-question", value: i });
      radio.checked = answers[index] === i;
      radio.disabled = readOnly;
      radio.addEventListener("change", () => {
        onChange(i);
        correct = false;
        feedback.textContent = "";
        const b = root.querySelector(".actionbar .primary");
        b.textContent = "Check answer";
      });
      add(field, add(el("label", null, { class: "choice" }), radio, doc.createTextNode(option)));
    });
    add(content, field, feedback);
    footer(readOnly ? "Continue" : "Check answer", () => {
      if (correct) {
        onContinue();
        return;
      }
      const answer = route.exam ? examEntry().answers[index] : state().quiz[index];
      if (answer === null) {
        feedback.textContent = "Choose an answer first.";
        return;
      }
      correct = answer === q.correct;
      feedback.textContent = correct ? "Correct. Continue when ready." : q.clue;
      if (correct) root.querySelector(".actionbar .primary").textContent = "Continue";
    });
  }
  async function finishLesson(l) {
    if (state().passed) {
      move(l.teach.length + 4);
      return;
    }
    const grant = () => {
      if (canPass(l, state(), results)) {
        state().passed = true;
        state().badge = l.mode === "local" ? "localSelfAttested" : "browserVerified";
        save();
        notice = "";
        move(l.teach.length + 4);
      } else {
        notice = "Not yet. Practical checks and both concept answers must pass.";
        move(l.teach.length + 1);
      }
    };
    if (l.mode === "local" || practical()) {
      grant();
      return;
    }
    action(async (token) => {
      await ensurePractice();
      if (token !== generation) return;
      results = await evaluateChecks(practice, l.task.checks, state().lastRun, clientFactory, () => token === generation);
      if (token === generation) grant();
    }, { python: l.mode === "python" });
  }
  function nextLesson(l) {
    var _a;
    const section = sections.find((s) => s.lessons.some((x) => x.id === l.id));
    if (section.lessons.at(-1).id === l.id && examUnlocked(section, store.state) && !((_a = store.state.exams[section.id]) == null ? void 0 : _a.passed)) return navigate({ exam: section });
    const next = lessons[lessons.findIndex((x) => x.id === l.id) + 1];
    if (next) return navigate({ lesson: next });
  }
  function summaryUI(content, l) {
    var _a;
    if (!state().passed) {
      move(l.teach.length + 1);
      return;
    }
    add(content, el("h2", l.mode === "local" ? "Lab complete" : "Lesson complete"), el("p", l.mode === "local" ? "Local self-attested \xB7 not browser verified" : "Browser verified", { class: "badge" }), p(l.task.goal), p("Your work and notes are saved on this device."));
    const next = lessons[lessons.findIndex((x) => x.id === l.id) + 1], section = sections.find((s) => s.lessons.some((x) => x.id === l.id));
    if (next || !((_a = store.state.exams[section.id]) == null ? void 0 : _a.passed)) footer("Continue", () => nextLesson(l));
    else footer("Review this lesson", () => move(0), false);
  }
  function lesson(l) {
    const n = l.teach.length;
    add(root, el("p", `Learn \xB7 Activity ${Math.min(card + 1, n + 5)} of ${n + 5}`, { class: "activity" }), el("h1", l.title));
    const content = el("section", null, { class: "activity-card", "aria-label": "Current activity" });
    add(root, content);
    if (card < n) {
      add(content, el("h2", "One idea"), p(l.teach[card]));
      footer("Continue", () => move(card + 1), card > 0);
    } else if (card === n) exampleUI(content, l);
    else if (card === n + 1) practiceUI(content, l);
    else if (card === n + 2 || card === n + 3) {
      const index = card - n - 2;
      add(content, el("h2", `Concept ${index + 1} of 2`));
      questionUI(content, l.quiz[index], index, state().quiz, (value) => {
        state().quiz[index] = value;
        save();
      }, () => index === 0 ? move(card + 1) : finishLesson(l));
    } else summaryUI(content, l);
  }
  function examEntry() {
    var _a, _b, _c;
    return (_c = (_a = store.state.exams)[_b = route.exam.id]) != null ? _c : _a[_b] = { answers: route.exam.exam.map(() => null), passed: false };
  }
  function examUI(section) {
    add(root, el("p", `Review \xB7 Question ${Math.min(card + 1, section.exam.length)} of ${section.exam.length}`, { class: "activity" }), el("h1", `${section.title} \xB7 Section review`));
    const content = el("section", null, { class: "activity-card", "aria-label": "Current activity" });
    add(root, content);
    if (!examUnlocked(section, store.state)) {
      add(content, p("Finish the current section\u2019s practical lessons before this review."));
      footer("Return to lesson", () => {
        var _a;
        return navigate({ lesson: (_a = section.lessons.find((l) => {
          var _a2;
          return !((_a2 = store.state.lessons[l.id]) == null ? void 0 : _a2.passed);
        })) != null ? _a : section.lessons[0] });
      }, false);
      return;
    }
    if (examEntry().passed) {
      add(content, el("h2", "Section review complete"), p("Practical work and concepts completed."));
      const next = lessons[lessons.findIndex((l) => l.id === section.lessons.at(-1).id) + 1];
      footer(next ? "Continue" : "Review current lesson", () => navigate({ lesson: next != null ? next : section.lessons.at(-1) }), false);
      return;
    }
    add(content, el("h2", "Section review"), p("One concept at a time. This review does not replace practical work."));
    const index = Math.min(card, section.exam.length - 1);
    questionUI(content, section.exam[index], index, examEntry().answers, (value) => {
      examEntry().answers[index] = value;
      save();
    }, () => {
      if (index < section.exam.length - 1) move(index + 1);
      else {
        examEntry().passed = section.exam.every((q, i) => examEntry().answers[i] === q.correct);
        save();
        if (!examEntry().passed) {
          notice = "Review each concept before finishing.";
          move(section.exam.findIndex((q, i) => examEntry().answers[i] !== q.correct));
        } else {
          notice = "";
          render();
        }
      }
    });
  }
  function download(name, text2, type = "application/json") {
    const url = window2.URL.createObjectURL(new window2.Blob([text2], { type })), a = el("a", null, { href: url, download: name });
    doc.body.appendChild(a);
    a.click();
    a.remove();
    window2.setTimeout(() => window2.URL.revokeObjectURL(url), 1e3);
  }
  function closeSheet() {
    var _a, _b;
    diagnosticAbort == null ? void 0 : diagnosticAbort.abort();
    diagnosticAbort = null;
    sheet = null;
    render();
    (_b = (_a = root.querySelector("header button")) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
  }
  function openSheet(name) {
    var _a, _b;
    sheet = name;
    render();
    (_b = (_a = root.querySelector('[role="dialog"] button')) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
  }
  function backupsUI(panel) {
    add(panel, p("Progress is stored only in this browser. Backups include saved files, drafts, notes and earned badges. Maximum 16 MiB. They do not sync devices."), button("Export v2 backup", () => {
      try {
        download("bash-trail-v2-backup.json", store.export());
      } catch (e) {
        notice = e.message;
        announce();
      }
    }));
    const file = el("input", null, { type: "file", accept: ".json,application/json", "aria-label": "Import progress backup" });
    file.addEventListener("change", async () => {
      var _a;
      const f = (_a = file.files) == null ? void 0 : _a[0];
      if (!f) return;
      try {
        if (f.size > MAX_BYTES) throw Error("Backup exceeds 16 MiB.");
        const raw = await f.text();
        decodeBackup(raw, lessons.map((l) => l.id), sections.map((s) => s.id));
        if (!window2.confirm("Replace all v2 progress, saved files, drafts and notes? Original v1 stays untouched.")) return;
        retire();
        store.import(raw);
        snapshotWarnings.clear();
        notice = "Backup restored.";
        activate();
      } catch (e) {
        notice = `${e.message} Nothing was replaced.`;
        announce();
      } finally {
        file.value = "";
      }
    });
    add(panel, el("label", "Import a v2 backup"), file);
    if (store.legacy() !== null) add(panel, p("Original v1 work stays untouched and grants no new credit."), button("Export original v1 progress", () => download("bash-trail-v1-original.json", store.legacy())));
    add(panel, button("Reset all v2 progress", () => {
      if (!window2.confirm("Delete all v2 progress, files, drafts and notes? Export a backup first. Original v1 stays unchanged.")) return;
      retire();
      try {
        store.replace(emptyProgress());
      } catch (e) {
        notice = e.message;
      }
      snapshotWarnings.clear();
      notice = "V2 progress reset. Original v1 is unchanged.";
      activate({ lesson: lessons[0] });
    }));
  }
  function sheetUI() {
    var _a, _b, _c, _d, _e;
    const titles = { menu: "Current lesson", help: "Lesson help", notes: "Your notes", backups: "Backups", files: "Practice files", run: "Run details", check: "Expected and actual", browser: "Browser check" };
    const panel = el("section", null, { class: "sheet", role: "dialog", "aria-modal": "true", "aria-labelledby": "sheet-title" });
    add(root, p((_b = (_a = route.lesson) == null ? void 0 : _a.title) != null ? _b : route.exam.title), panel);
    add(panel, el("h1", (_c = titles[sheet]) != null ? _c : "Current activity", { id: "sheet-title" }), button("Done", closeSheet));
    panel.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeSheet();
      }
      if (event.key === "Tab") {
        const nodes = [...panel.querySelectorAll("button,input,textarea,a[href]")].filter((n) => !n.disabled), first = nodes[0], last = nodes.at(-1);
        if (event.shiftKey && doc.activeElement === first) {
          event.preventDefault();
          last == null ? void 0 : last.focus();
        } else if (!event.shiftKey && doc.activeElement === last) {
          event.preventDefault();
          first == null ? void 0 : first.focus();
        }
      }
    });
    const l = route.lesson;
    if (sheet === "menu") {
      if (l) add(panel, button("Help & resources", () => openSheet("help")), button("Notes", () => openSheet("notes")), button("Practice files", () => openSheet("files")), button("Restart this lesson", () => {
        if (!window2.confirm("Reset this lesson\u2019s work and earned badge? Your notes remain.")) return;
        const notes = state().notes;
        retire();
        store.state.lessons[l.id] = emptyLesson(l);
        state().notes = notes;
        snapshotWarnings.delete(l.id);
        notice = "Practice reset. Notes kept.";
        save();
        card = 0;
        sheet = null;
        cursor();
        render();
      }));
      add(panel, button("Backups", () => openSheet("backups")), button("Browser check", () => openSheet("browser")));
    }
    if (sheet === "notes" && l) {
      add(panel, p("Saved on this device. Included in your progress backup."));
      const box = el("textarea", null, { "aria-label": "Your notes", rows: 8, maxlength: MAX_TEXT });
      box.value = state().notes;
      box.addEventListener("input", () => {
        state().notes = box.value;
        save();
      });
      add(panel, box);
    }
    if (sheet === "help" && l) {
      add(panel, p(l.why));
      const terms = el("dl");
      l.terms.forEach((t) => add(terms, el("dt", t.word), el("dd", t.meaning)));
      add(panel, terms);
      for (let i = 0; i < state().hints; i++) add(panel, p(l.hints[i]));
      if (state().hints < l.hints.length) add(panel, button("Show one clue", () => {
        state().hints++;
        save();
        render();
      }));
      l.resources.forEach((r) => add(panel, el("a", r.label, { href: r.url, target: "_blank", rel: "noopener noreferrer" })));
      add(panel, p("Training sandbox, not Linux. Python is CPython WASM without OS processes. Network shell commands are disabled. Related commands should stay together in one script: snapshots restore files and cwd, not shell variables."), p("Workers keep this page responsive but are not a security boundary. Never paste untrusted code, secrets or credentials. Use one active tab."));
    }
    if (sheet === "backups") backupsUI(panel);
    if (sheet === "files" && l) {
      const snap = (_d = state().snapshot) != null ? _d : { cwd: l.task.cwd, files: l.task.files, directories: l.task.directories };
      add(panel, p(`Current directory: ${snap.cwd}`));
      snap.directories.forEach((path2) => add(panel, p(`${path2}/`)));
      for (const [path2, text2] of Object.entries(snap.files)) add(panel, el("h2", path2), el("pre", shown(text2)));
      if (!Object.keys(snap.files).length) add(panel, p("No files yet."));
    }
    if (sheet === "run") {
      const r = card === (l == null ? void 0 : l.teach.length) ? exampleResult : (_e = state()) == null ? void 0 : _e.lastRun;
      if (r) for (const [name, value] of Object.entries(r)) add(panel, el("h2", name), el("pre", shown(value)));
      else add(panel, p("No run yet."));
    }
    if (sheet === "check") {
      const failed = results.find((r) => !r.passed);
      if (failed) add(panel, p(failed.label), el("h2", "Expected"), el("pre", shown(failed.expected)), el("h2", "Actual"), el("pre", shown(failed.actual)), p(failed.clue));
    }
    if (sheet === "browser") {
      add(panel, p("Optional check of worker and interpreter support, in a separate empty space. No learner files, notes or code are uploaded. This does not certify physical iPhone Safari."));
      const python = el("input", null, { type: "checkbox", "aria-label": "Include Python check" });
      add(panel, add(el("label", null, { class: "choice" }), python, doc.createTextNode("Include real Python (first use downloads runtime assets)")));
      const stage = el("p", "", { "aria-live": "polite" }), output = el("pre", diagnostic != null ? diagnostic : "No check run yet.");
      const runButton = button("Run browser check", async () => {
        if (diagnosticAbort) return;
        const controller = new AbortController();
        diagnosticAbort = controller;
        runButton.disabled = true;
        stage.textContent = "Checking\u2026";
        try {
          const result = await browserCheck({ python: python.checked, signal: controller.signal, onStage: (s) => {
            if (sheet === "browser") stage.textContent = `${s.id}: ${s.status}`;
          } });
          if (diagnosticAbort !== controller) return;
          diagnostic = formatBrowserReport(result);
          output.textContent = diagnostic;
          stage.textContent = result.passed ? "Browser check passed." : "Browser check found an issue. Read or download the report.";
        } catch (e) {
          stage.textContent = `Browser check failed: ${e.message}`;
        } finally {
          if (diagnosticAbort === controller) diagnosticAbort = null;
          runButton.disabled = false;
        }
      });
      add(panel, runButton, button("Stop browser check", () => {
        diagnosticAbort == null ? void 0 : diagnosticAbort.abort();
        diagnosticAbort = null;
        runButton.disabled = false;
        stage.textContent = "Browser check stopped. Retry starts a new empty worker.";
      }), stage, output, button("Download browser report", () => {
        if (diagnostic) download("bash-trail-browser-check.json", diagnostic);
        else {
          stage.textContent = "Run the browser check first.";
        }
      }));
    }
  }
  function render() {
    while (root.firstChild) root.removeChild(root.firstChild);
    const top = el("header");
    add(top, el("span", "Bash Trail", { class: "wordmark" }), button("More", () => sheet ? closeSheet() : openSheet("menu")));
    top.querySelector("button").disabled = busy;
    add(root, top);
    if (sheet) sheetUI();
    else if (route == null ? void 0 : route.lesson) lesson(route.lesson);
    else if (route == null ? void 0 : route.exam) examUI(route.exam);
    const statusNode = el("p", status(), { id: "status", role: "status", "aria-live": "polite" });
    const content = root.querySelector(".activity-card");
    if (content) {
      if (busy && !root.querySelector("[data-busy]")) add(content, el("p", "Checking saved work\u2026", { "data-busy": "" }));
      content.appendChild(statusNode);
    } else add(root, statusNode);
    announce();
  }
  function fromHash(initial = false) {
    let next;
    try {
      const [kind, id] = window2.location.hash.slice(1).split("=");
      if (kind === "lesson") {
        const l = lessons.find((l2) => l2.id === decodeURIComponent(id));
        if (l) next = { lesson: l };
      }
      if (kind === "exam") {
        const s = sections.find((s2) => s2.id === id);
        if (s) next = { exam: s };
      }
    } catch (e) {
    }
    if (initial) activate(next);
    else navigate(next);
  }
  function onBrowserError(event) {
    var _a;
    if (((_a = event.detail) == null ? void 0 : _a.code) !== "BROWSER_SCRIPT_ERROR") return;
    retire();
    sheet = null;
    notice = "A browser script error interrupted this activity. Saved work stays on this device. Retry or open More \u2192 Browser check.";
    render();
    revealFeedback();
  }
  const onHash = () => fromHash();
  window2.addEventListener("hashchange", onHash);
  window2.addEventListener("pagehide", save);
  window2.addEventListener("bash-trail-browser-error", onBrowserError);
  fromHash(true);
  const cleanupViewport = installKeyboardViewport(window2, root);
  return { store, navigate, destroy() {
    retire();
    cleanupViewport();
    window2.removeEventListener("hashchange", onHash);
    window2.removeEventListener("pagehide", save);
    window2.removeEventListener("bash-trail-browser-error", onBrowserError);
  } };
}

// src/main.mjs
mountApp(document.querySelector("#app"), course_curriculum_default);
window.__BASH_TRAIL_READY__ = true;
window.dispatchEvent(new Event("bash-trail-ready"));
