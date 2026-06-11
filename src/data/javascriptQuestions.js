export const javascriptQuestions = [
  {
    id: 101,
    slug: "what-is-javascript",
    title: "What is JavaScript?",
    category: "JavaScript",
    answer: "JavaScript is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions, primarily known as the scripting language for Web pages."
  },
  {
    id: 102,
    slug: "difference-between-var-let-and-const",
    title: "Difference between var, let, and const?",
    category: "JavaScript",
    answer: "var is function-scoped, hoisted, and allows re-declaration. let and const are block-scoped, not initialized until their definition is evaluated (Temporal Dead Zone), and do not allow re-declaration. const additionally prevents variable re-assignment."
  },
  {
    id: 103,
    slug: "what-is-hoisting",
    title: "What is Hoisting?",
    category: "JavaScript",
    answer: "Hoisting is JavaScript's default behavior of moving variable and function declarations to the top of their containing scope during the compilation phase, before code execution."
  },
  {
    id: 104,
    slug: "what-is-a-closure",
    title: "What is a Closure?",
    category: "JavaScript",
    answer: "A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment). It allows an inner function to access the scope of an outer function even after the outer function has returned."
  },
  {
    id: 105,
    slug: "difference-between-double-and-triple-equals",
    title: "Difference between == and ===?",
    category: "JavaScript",
    answer: "== (loose equality) compares two values for equality after performing type coercion if their types differ. === (strict equality) compares both the value and the type without performing coercion."
  },
  {
    id: 106,
    slug: "what-is-the-temporal-dead-zone",
    title: "What is the Temporal Dead Zone (TDZ)?",
    category: "JavaScript",
    answer: "The TDZ is the period of time between the entering of a block scope and the actual line where a let or const variable is declared. Accessing the variable within this zone triggers a ReferenceError."
  },
  {
    id: 107,
    slug: "what-are-prototypes-in-javascript",
    title: "What are Prototypes in JavaScript?",
    category: "JavaScript",
    answer: "Prototypes are the mechanism by which JavaScript objects inherit features from one another. Every JavaScript object has a built-in property pointing to another prototype object, forming a prototype chain."
  },
  {
    id: 108,
    slug: "explain-the-javascript-event-loop",
    title: "Explain the JavaScript Event Loop?",
    category: "JavaScript",
    answer: "The Event Loop is a mechanism that allows JavaScript to perform non-blocking I/O operations despite being single-threaded. It constantly monitors the Call Stack and Callback Queue, pushing tasks onto the stack when it is empty."
  },
  {
    id: 109,
    slug: "difference-between-null-and-undefined",
    title: "Difference between null and undefined?",
    category: "JavaScript",
    answer: "undefined means a variable has been declared but has not yet been assigned a value. null is an assignment value that represents the intentional absence of any object value."
  },
  {
    id: 110,
    slug: "what-is-the-this-keyword",
    title: "What is the 'this' keyword?",
    category: "JavaScript",
    answer: "'this' refers to the object that is executing the current piece of JavaScript code. Its value is determined dynamically by how a function is called (implicit, explicit, default, or new binding)."
  },
  {
    id: 111,
    slug: "difference-between-call-apply-and-bind",
    title: "Difference between call, apply, and bind?",
    category: "JavaScript",
    answer: "call invokes a function immediately with a specified 'this' value and arguments passed individually. apply invokes it immediately with arguments passed as an array. bind returns a new function with 'this' permanently tied to the provided value, to be executed later."
  },
  {
    id: 112,
    slug: "what-is-a-promise",
    title: "What is a Promise?",
    category: "JavaScript",
    answer: "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It can be in one of three states: pending, fulfilled, or rejected."
  },
  {
    id: 113,
    slug: "explain-async-await",
    title: "Explain async/await?",
    category: "JavaScript",
    answer: "async/await is syntactic sugar built on top of Promises. Marking a function with 'async' makes it return a promise, and 'await' pauses the execution code block synchronously until the targeted promise settles, improving readability."
  },
  {
    id: 114,
    slug: "difference-between-arrow-functions-and-regular-functions",
    title: "Difference between Arrow functions and Regular functions?",
    category: "JavaScript",
    answer: "Arrow functions do not have their own 'this' context (they inherit it lexically), do not have the 'arguments' object, cannot be used as constructors with 'new', and do not have a prototype property."
  },
  {
    id: 115,
    slug: "what-is-event-bubbling-and-capturing",
    title: "What is Event Bubbling and Capturing?",
    category: "JavaScript",
    answer: "They are phases of event propagation in the DOM tree. Capturing starts from the window root traveling down to the target element. Bubbling is the default phase where the event travels back up from the target element to the root."
  },
  {
    id: 116,
    slug: "what-is-currying-in-javascript",
    title: "What is Currying in JavaScript?",
    category: "JavaScript",
    answer: "Currying is a functional programming technique where a function that takes multiple arguments is transformed into a sequence of nesting functions, each taking a single argument."
  },
  {
    id: 117,
    slug: "what-is-higher-order-function",
    title: "What is a Higher-Order Function?",
    category: "JavaScript",
    answer: "A Higher-Order Function is a function that receives another function as an argument, returns a function as its output, or both. Examples include map(), filter(), and reduce()."
  },
  {
    id: 118,
    slug: "difference-between-map-and-foreach",
    title: "Difference between map() and forEach()?",
    category: "JavaScript",
    answer: "map() executes a callback on every element of an array and returns a brand-new array containing the results. forEach() simply iterates and executes a callback on each element without returning anything (returns undefined)."
  },
  {
    id: 119,
    slug: "what-is-the-purpose-of-the-set-object",
    title: "What is the purpose of the Set object?",
    category: "JavaScript",
    answer: "A Set is a built-in collection object that allows you to store unique values of any type, whether primitive values or object references. Duplicate values are automatically excluded."
  },
  {
    id: 120,
    slug: "what-is-the-purpose-of-the-map-object",
    title: "What is the purpose of the Map object?",
    category: "JavaScript",
    answer: "A Map object holds key-value pairs and remembers the original insertion order of the keys. Unlike standard objects, any value (including functions and objects) can be used as either a key or a value."
  },
  {
    id: 121,
    slug: "what-is-weakmap-and-how-does-it-differ-from-map",
    title: "What is WeakMap and how does it differ from Map?",
    category: "JavaScript",
    answer: "In a WeakMap, keys must strictly be objects (or unique symbols), and they are held weakly. This means if there are no other references to the key object, it can be automatically garbage collected, preventing memory leaks."
  },
  {
    id: 122,
    slug: "what-is-iife",
    title: "What is an IIFE (Immediately Invoked Function Expression)?",
    category: "JavaScript",
    answer: "An IIFE is a JavaScript function that runs as soon as it is defined. It prevents polluting the global scope by introducing a localized block scope for variables declared within it."
  },
  {
    id: 123,
    slug: "what-is-typeof-operator-quirk-with-null",
    title: "What is the 'typeof' operator quirk with null?",
    category: "JavaScript",
    answer: "Executing 'typeof null' returns 'object'. This is a well-known legacy bug from the first version of JavaScript, where values were stored in 32-bit units with type tags, and null shared the object tag reference."
  },
  {
    id: 124,
    slug: "explain-coercion-in-javascript",
    title: "Explain Coercion in JavaScript?",
    category: "JavaScript",
    answer: "Type coercion is the automatic or implicit conversion of values from one data type to another (e.g., adding a string and a number results in a concatenated string). Explicit coercion is when developers do this manually via functions like Number()."
  },
  {
    id: 125,
    slug: "what-is-the-difference-between-shallow-copy-and-deep-copy",
    title: "What is the difference between Shallow Copy and Deep Copy?",
    category: "JavaScript",
    answer: "A shallow copy copies top-level properties, but nested objects still point to the same references as the source object. A deep copy recursively copies all levels, creating an entirely independent clone in memory."
  },
  {
    id: 126,
    slug: "what-is-debouncing",
    title: "What is Debouncing?",
    category: "JavaScript",
    answer: "Debouncing is an optimization technique used to limit the rate at which a function gets executed. It ensures that a task will only trigger after a specific amount of delay time has elapsed since its last invocation."
  },
  {
    id: 127,
    slug: "what-is-throttling",
    title: "What is Throttling?",
    category: "JavaScript",
    answer: "Throttling enforces a maximum number of times a function can be called over time. Unlike debouncing, it guarantees that the target function is executed at regular, structured intervals during a continuous sequence of events."
  },
  {
    id: 128,
    slug: "what-is-nan-and-how-do-you-check-for-it",
    title: "What is NaN and how do you check for it?",
    category: "JavaScript",
    answer: "NaN stands for 'Not-a-Number', but its data type is actually 'number'. Since NaN is uniquely not equal to itself, you should verify its identity using the specialized 'Number.isNaN()' method."
  },
  {
    id: 129,
    slug: "what-are-generators-in-javascript",
    title: "What are Generators in JavaScript?",
    category: "JavaScript",
    answer: "Generators are functions that can be exited and later re-entered, keeping their context and variable bindings intact across executions. They use 'function*' syntax and return an iterator that yields values sequentially via 'yield'."
  },
  {
    id: 130,
    slug: "what-is-the-difference-between-microtasks-and-macrotasks",
    title: "What is the difference between Microtasks and Macrotasks?",
    category: "JavaScript",
    answer: "Microtasks (e.g., Promise callbacks, mutation observers) have a higher execution priority than macrotasks (e.g., setTimeout, setInterval). The event loop processes the entire microtask queue before moving on to the next macrotask."
  },
  {
    id: 131,
    slug: "what-is-object-destructuring",
    title: "What is Object Destructuring?",
    category: "JavaScript",
    answer: "Object destructuring is an ES6 expression syntax that makes it possible to unpack properties from objects, or items from arrays, directly into distinct, clean variables."
  },
  {
    id: 132,
    slug: "what-is-the-purpose-of-the-rest-parameter",
    title: "What is the purpose of the Rest Parameter?",
    category: "JavaScript",
    answer: "The rest parameter syntax (...) allows a function to accept an indefinite number of arguments as a single, formal array. It must always appear as the last parameter in the function signature."
  },
  {
    id: 133,
    slug: "what-is-the-difference-between-the-rest-parameter-and-spread-operator",
    title: "What is the difference between the Rest Parameter and Spread Operator?",
    category: "JavaScript",
    answer: "The rest parameter condenses multiple individual arguments into a single structured array block inside function parameters. The spread operator does the opposite: it expands an array or object into individual values or properties."
  },
  {
    id: 134,
    slug: "what-is-strict-mode-in-javascript",
    title: "What is Strict Mode in JavaScript?",
    category: "JavaScript",
    answer: "Strict Mode ('use strict') is an operational feature that opts code into a stricter evaluation variant of JavaScript. It catches silent errors, prevents assignments to global variables, and bans legacy features."
  },
  {
    id: 135,
    slug: "what-is-event-delegation",
    title: "What is Event Delegation?",
    category: "JavaScript",
    answer: "Event delegation is a design pattern where a single event listener is attached to a parent element rather than mapping separate event listeners to every individual child node, leveraging event bubbling."
  },
  {
    id: 136,
    slug: "what-is-the-purpose-of-object-freeze",
    title: "What is the purpose of Object.freeze()?",
    category: "JavaScript",
    answer: "Object.freeze() completely freezes an object. It prevents new properties from being added, existing properties from being removed or modified, and updates its structural prototype reference configuration."
  },
  {
    id: 137,
    slug: "difference-between-object-freeze-and-object-seal",
    title: "Difference between Object.freeze() and Object.seal()?",
    category: "JavaScript",
    answer: "Object.freeze() makes an object entirely read-only. Object.seal() prevents adding or removing properties, but it still allows modifying the values of existing properties that are configured as writable."
  },
  {
    id: 138,
    slug: "what-are-symbols-in-javascript",
    title: "What are Symbols in JavaScript?",
    category: "JavaScript",
    answer: "Introduced in ES6, a Symbol is a primitive data type that guarantees a completely unique and immutable value. Symbols are commonly utilized to add non-clashing, private keys to objects."
  },
  {
    id: 139,
    slug: "what-is-memoization",
    title: "What is Memoization?",
    category: "JavaScript",
    answer: "Memoization is an optimization technique where you speed up programs by caching the output results of expensive function calls, returning the cached result when the exact same inputs recur."
  },
  {
    id: 140,
    slug: "what-is-the-prototype-chain",
    title: "What is the Prototype Chain?",
    category: "JavaScript",
    answer: "When a property is accessed on an object, JavaScript looks for it on that object first. If not found, it travels up its internal prototype reference recursively until it either finds the property or hits null at the end of the chain."
  },
  {
    id: 141,
    slug: "explain-the-concept-of-dead-code-elimination-or-tree-shaking",
    title: "Explain Tree Shaking?",
    category: "JavaScript",
    answer: "Tree shaking is a term commonly used in JavaScript build tools (like Webpack or Rollup) for dead-code elimination. It relies on the static structure of ES6 module syntax (import/export) to discard unused code bundles."
  },
  {
    id: 142,
    slug: "what-is-the-difference-between-monothreaded-and-multithreaded-execution-in-js",
    title: "Is JavaScript multithreaded?",
    category: "JavaScript",
    answer: "JavaScript engine runtimes are inherently single-threaded (one call stack, one main thread). However, concurrent multi-threading environments can be spun up using Web Workers to run heavy scripts in the background."
  },
  {
    id: 143,
    slug: "what-are-web-workers",
    title: "What are Web Workers?",
    category: "JavaScript",
    answer: "Web Workers are browser APIs that let scripts run on separate background execution threads, entirely independent from the main user interface layout stream, enabling high-performance processing without page freezing."
  },
  {
    id: 144,
    slug: "what-is-optional-chaining",
    title: "What is Optional Chaining?",
    category: "JavaScript",
    answer: "Optional chaining (?.) allows you to safely read properties deeply nested within a chain of connected objects without explicitly verifying that each reference link in the chain is valid or non-null."
  },
  {
    id: 145,
    slug: "what-is-the-nullish-coalescing-operator",
    title: "What is the Nullish Coalescing Operator?",
    category: "JavaScript",
    answer: "The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is either null or undefined. Unlike the OR (||) operator, it respects empty strings ('') and 0 as valid values."
  },
  {
    id: 146,
    slug: "what-is-the-difference-between-executing-scripts-with-async-vs-defer",
    title: "Difference between async and defer attributes in script tags?",
    category: "JavaScript",
    answer: "Both download scripts asynchronously. 'async' executes the script immediately after downloading finishes, pausing HTML parsing. 'defer' waits until HTML parsing is entirely complete before executing the script in structural DOM order."
  },
  {
    id: 147,
    slug: "what-are-javascript-modules-esm",
    title: "What are ES Modules (ESM)?",
    category: "JavaScript",
    answer: "ES Modules are the official standard format for packaging JavaScript code for reuse. They use explicit 'import' and 'export' statements, are parsed statically, and implicitly run in strict mode."
  },
  {
    id: 148,
    slug: "what-is-the-difference-between-commonjs-and-esm",
    title: "Difference between CommonJS and ES Modules?",
    category: "JavaScript",
    answer: "CommonJS uses 'require()' and 'module.exports', loading modules synchronously at runtime (traditionally Node.js). ES Modules use 'import' and 'export', parsing modules statically at compile-time."
  },
  {
    id: 149,
    slug: "what-is-object-is-method",
    title: "What is the purpose of Object.is()?",
    category: "JavaScript",
    answer: "Object.is() determines whether two values are the exact same value. It behaves similarly to the '===' operator, but correctly handles boundary cases: it treats NaN as equal to NaN, and differentiates +0 from -0."
  },
  {
    id: 150,
    slug: "what-is-the-purpose-of-proxy-object",
    title: "What is a Proxy object in JavaScript?",
    category: "JavaScript",
    answer: "A Proxy object wraps another target object and allows you to intercept and customize fundamental operations on it, such as property lookups, assignments, enumerations, and function invocations via custom traps."
  }
];