export const nodeQuestions = [
  {
    id: 201,
    slug: "what-is-nodejs",
    title: "What is Node.js?",
    category: "Node.js",
    answer: "Node.js is an open-source, cross-platform JavaScript runtime environment built on Google Chrome's V8 JavaScript engine. It allows developers to run JavaScript code on the server side."
  },
  {
    id: 202,
    slug: "why-is-nodejs-single-threaded",
    title: "Why is Node.js single-threaded?",
    category: "Node.js",
    answer: "Node.js uses a single-threaded model with event looping to handle asynchronous I/O operations. This architecture allows it to handle thousands of concurrent connections efficiently without the overhead of thread context switching."
  },
  {
    id: 203,
    slug: "what-is-libuv",
    title: "What is libuv?",
    category: "Node.js",
    answer: "libuv is a multi-platform support library written in C that focuses on asynchronous I/O. It provides the event loop, thread pool, and file system handling mechanisms that power Node.js under the hood."
  },
  {
    id: 204,
    slug: "explain-the-node-js-event-loop-phases",
    title: "Explain the Node.js Event Loop phases?",
    category: "Node.js",
    answer: "The event loop has distinct phases: timers (setTimeout/setInterval), pending callbacks, idle/prepare, poll (retrieves new I/O events), check (setImmediate), and close callbacks. It runs continuously to execute asynchronous callbacks."
  },
  {
    id: 205,
    slug: "difference-between-setimmediate-and-settimeout",
    title: "Difference between setImmediate() and setTimeout()?",
    category: "Node.js",
    answer: "setImmediate() is designed to execute a script once the current event loop poll phase completes. setTimeout() schedules a script to be run after a minimum threshold of milliseconds has elapsed."
  },
  {
    id: 206,
    slug: "what-is-process-nexttick",
    title: "What is process.nextTick()?",
    category: "Node.js",
    answer: "process.nextTick() defers the execution of a callback function until the next pass around the event loop. It fires immediately after the current operation completes, before the event loop continues to any other phase."
  },
  {
    id: 207,
    slug: "what-is-the-purpose-of-the-thread-pool",
    title: "What is the purpose of the thread pool in Node.js?",
    category: "Node.js",
    answer: "Node.js uses a background thread pool (provided by libuv) to handle heavy, blocking tasks that cannot be done asynchronously at the OS level, such as file system operations (fs), crypto functions, and zlib compression."
  },
  {
    id: 208,
    slug: "how-do-you-manage-environment-variables",
    title: "How do you manage environment variables in Node.js?",
    category: "Node.js",
    answer: "Environment variables are accessed via the global `process.env` object. In production, they are injected by the hosting environment, while in development, packages like `dotenv` are typically used to load them from a `.env` file."
  },
  {
    id: 209,
    slug: "difference-between-package-json-and-package-lock-json",
    title: "Difference between package.json and package-lock.json?",
    category: "Node.js",
    answer: "package.json lists the metadata and direct dependencies with semantic versioning ranges. package-lock.json locks down the exact version of every single package and dependency installed, ensuring identical installations across environments."
  },
  {
    id: 210,
    slug: "what-are-streams-in-node-js",
    title: "What are streams in Node.js?",
    category: "Node.js",
    answer: "Streams are collections of data—like arrays or strings—but instead of being available all at once, they are processed chunk by chunk. They are highly efficient for reading or writing massive files or network payloads."
  },
  {
    id: 211,
    slug: "types-of-streams-in-nodejs",
    title: "What are the types of streams in Node.js?",
    category: "Node.js",
    answer: "There are four primary types of streams: Readable (to read data), Writable (to write data), Duplex (both readable and writable, like a net socket), and Transform (a duplex stream that can modify data as it is written and read)."
  },
  {
    id: 212,
    slug: "what-is-stream-piping",
    title: "What is stream piping in Node.js?",
    category: "Node.js",
    answer: "Piping is a mechanism that connects the output of a Readable stream directly into the input of a Writable stream using the `.pipe()` method. It manages backpressure automatically so memory consumption stays low."
  },
  {
    id: 213,
    slug: "what-is-backpressure-in-streams",
    title: "What is backpressure in streams?",
    category: "Node.js",
    answer: "Backpressure occurs when data is being read from a readable stream faster than the writable stream can process it. Node.js handles this by pausing the readable stream buffer until the writable stream catches up."
  },
  {
    id: 214,
    slug: "what-is-the-buffers-class",
    title: "What is the Buffer class in Node.js?",
    category: "Node.js",
    answer: "The Buffer class is a global memory allocation utility designed to handle raw binary data outside of the V8 heap. Buffers represent a fixed-size sequence of bytes and are heavily used in file system and network streams."
  },
  {
    id: 215,
    slug: "difference-between-readFile-and-createReadStream",
    title: "Difference between fs.readFile and fs.createReadStream?",
    category: "Node.js",
    answer: "fs.readFile reads the entire contents of a file into memory asynchronously before passing it to the callback. fs.createReadStream reads the file split into smaller sequential chunks, consuming significantly less RAM for large files."
  },
  {
    id: 216,
    slug: "what-is-the-eventemitter-class",
    title: "What is the EventEmitter class?",
    category: "Node.js",
    answer: "EventEmitter is a core module class that facilitates communication between objects in Node.js. Many built-in modules inherit from EventEmitter, allowing objects to emit named events that trigger registered callback listeners."
  },
  {
    id: 217,
    slug: "what-is-callback-hell-and-how-do-you-avoid-it",
    title: "What is Callback Hell and how do you avoid it?",
    category: "Node.js",
    answer: "Callback hell refers to heavily nested, unreadable callback structures resulting from poor asynchronous code design. It can be avoided by modularizing functions, using Promises, or utilizing modern async/await syntax."
  },
  {
    id: 218,
    slug: "what-is-npm-and-npx",
    title: "What is the difference between npm and npx?",
    category: "Node.js",
    answer: "npm is a package manager used to install, update, and manage dependencies. npx is a package runner tool that comes with npm, used to execute binaries directly from the npm registry without globally installing them first."
  },
  {
    id: 219,
    slug: "what-are-middleware-functions-in-express",
    title: "What are middleware functions in Express?",
    category: "Node.js",
    answer: "Middleware functions are methods that have access to the request object (req), response object (res), and the next middleware function in the application’s request-response cycle. They can execute code, modify req/res, or end cycles."
  },
  {
    id: 220,
    slug: "how-does-node-js-handle-uncaught-exceptions",
    title: "How does Node.js handle uncaught exceptions?",
    category: "Node.js",
    answer: "Uncaught exceptions can be caught by listening to the global process event `process.on('uncaughtException')`. However, it is highly recommended to log the error and gracefully shut down the app, as the process is in an undefined state."
  },
  {
    id: 221,
    slug: "what-is-the-purpose-of-the-cluster-module",
    title: "What is the purpose of the Cluster module?",
    category: "Node.js",
    answer: "The Cluster module allows you to easily scale a single Node.js application across multi-core systems by creating multiple child processes (worker threads) that share the exact same server ports, maximizing CPU utilization."
  },
  {
    id: 222,
    slug: "what-are-worker-threads",
    title: "What are Worker Threads in Node.js?",
    category: "Node.js",
    answer: "Worker Threads allow execution of JavaScript in parallel threads within a single process. Unlike the Cluster module which duplicates the whole application instance, worker threads share application memory, making them ideal for heavy computation."
  },
  {
    id: 223,
    slug: "difference-between-fork-and-spawn",
    title: "Difference between child_process.spawn() and child_process.fork()?",
    category: "Node.js",
    answer: "spawn() launches a new process to run a command and streams its output. fork() is a special instance of spawn() specifically designed to spin up new V8 instances running a JavaScript module, establishing an IPC communication channel between parent and child."
  },
  {
    id: 224,
    slug: "what-is-the-repl-in-node-js",
    title: "What is the REPL in Node.js?",
    category: "Node.js",
    answer: "REPL stands for Read, Eval, Print, and Loop. It is an interactive computer environment or shell that captures local JavaScript expressions, evaluates their values, outputs the results, and loops back to wait for new commands."
  },
  {
    id: 225,
    slug: "what-are-stub-functions",
    title: "What are Stubs in Node.js testing?",
    category: "Node.js",
    answer: "Stubs are mock functions or programs used during testing to simulate the behavior of real module dependencies. They provide canned answers to function calls made during test cases, ensuring external APIs or databases aren't touched."
  },
  {
    id: 226,
    slug: "what-is-the-difference-between-operational-and-programmer-errors",
    title: "Difference between Operational and Programmer errors?",
    category: "Node.js",
    answer: "Operational errors are runtime problems where the cause is understood (e.g., database timeout or invalid user input). Programmer errors are bugs introduced by poor code logic (e.g., syntax errors, reading properties of undefined)."
  },
  {
    id: 227,
    slug: "what-is-cross-origin-resource-sharing-cors",
    title: "What is CORS?",
    category: "Node.js",
    answer: "CORS is a browser security feature that restricts cross-origin HTTP requests. In a Node.js server, you must configure response headers explicitly (or use the `cors` middleware) to allow client applications hosted on other domains to access APIs."
  },
  {
    id: 228,
    slug: "explain-chunky-encoding-or-transfer-encoding-chunked",
    title: "Explain Transfer-Encoding: chunked?",
    category: "Node.js",
    answer: "Chunked transfer encoding is a data transfer mechanism in HTTP where data is broken into a series of non-empty chunks. It is used when the server doesn't know the total length of the content ahead of time, allowing data to stream instantly."
  },
  {
    id: 229,
    slug: "what-is-the-global-object-in-nodejs",
    title: "What is the global object in Node.js?",
    category: "Node.js",
    answer: "In Node.js, `global` is the top-level global namespace object, analogous to `window` in web browsers. Variables and methods appended to `global` are accessible everywhere across the local application context."
  },
  {
    id: 230,
    slug: "what-are-the-differences-between-require-and-import",
    title: "Difference between require() and import?",
    category: "Node.js",
    answer: "require() is synchronous and is the standard module loading system for CommonJS. import is the modern standard for ES Modules (ESM), which supports static analysis and is loaded asynchronously before runtime evaluation."
  },
  {
    id: 231,
    slug: "what-is-the-purpose-of-the-crypto-module",
    title: "What is the purpose of the Crypto module?",
    category: "Node.js",
    answer: "The built-in crypto module provides cryptographic functionality that includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify methods, making data encryption straightforward."
  },
  {
    id: 232,
    slug: "what-is-the-difference-between-monolithic-and-microservices-architecture",
    title: "Difference between Monolithic and Microservices architecture?",
    category: "Node.js",
    answer: "A monolith is a single unified deployment unit containing all application business layers. Microservices split the application into separate independent services that communicate via lightweight APIs, allowing isolated scaling."
  },
  {
    id: 233,
    slug: "how-can-you-prevent-npm-packages-vulnerabilities",
    title: "How can you prevent security vulnerabilities in npm dependencies?",
    category: "Node.js",
    answer: "You can use `npm audit` to check for security vulnerabilities across installed package trees. Regular automated updates using dependency management systems like Dependabot also keep modules patch-secured."
  },
  {
    id: 234,
    slug: "what-is-helmet-js-in-express",
    title: "What is Helmet.js in an Express/Node setup?",
    category: "Node.js",
    answer: "Helmet.js is a secure middleware module that sets various HTTP response headers (like X-Content-Type-Options, Content-Security-Policy) to shield Node.js applications from well-known web vulnerabilities."
  },
  {
    id: 235,
    slug: "what-is-the-purpose-of-the-path-module",
    title: "What is the purpose of the Path module?",
    category: "Node.js",
    answer: "The path module provides helpful utilities for working with file and directory paths. Methods like `path.join()` and `path.resolve()` normalize path strings automatically across different operating systems (Windows vs macOS/Linux)."
  },
  {
    id: 236,
    slug: "what-is-the-difference-between-join-and-resolve-in-path-module",
    title: "Difference between path.join() and path.resolve()?",
    category: "Node.js",
    answer: "path.join() simply concatenates all given path segments together using the platform-specific delimiter. path.resolve() processes the segments from right to left, prepending them until an absolute path is formed."
  },
  {
    id: 237,
    slug: "what-are-memory-leaks-in-node-js",
    title: "What causes memory leaks in Node.js?",
    category: "Node.js",
    answer: "Memory leaks occur when the V8 garbage collector fails to release memory references that are no longer needed. Common causes include accidental global variables, uncleared timers (setInterval), and lingering event listeners."
  },
  {
    id: 238,
    slug: "what-is-the-purpose-of-util-promisify",
    title: "What is the purpose of util.promisify()?",
    category: "Node.js",
    answer: "util.promisify() is a built-in utility that takes a standard error-first callback function style and transforms it into a clean function that returns an ES6 Promise, allowing it to be used with async/await."
  },
  {
    id: 239,
    slug: "what-is-the-dns-module-used-for",
    title: "What is the DNS module used for?",
    category: "Node.js",
    answer: "The dns module provides functions to look up domain name resolutions (IP addresses) using underlying operating system facilities, as well as executing direct network queries using DNS servers without routing via the OS."
  },
  {
    id: 240,
    slug: "what-is-pm2-in-nodejs",
    title: "What is PM2 and why is it used?",
    category: "Node.js",
    answer: "PM2 is a production process manager for Node.js applications. It keeps processes running infinitely, reloads scripts without downtime, handles automatic application clustering, and simplifies log management."
  }
];