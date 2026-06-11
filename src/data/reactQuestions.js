export const reactQuestions = [
  {
    id: 1,
    slug: "what-is-react",
    title: "What is React?",
    category: "React",
    answer:
      "React is a JavaScript library developed by Meta for building user interfaces. It uses reusable components and a virtual DOM to create fast and interactive web applications.",
  },
  {
    id: 2,
    slug: "what-is-jsx",
    title: "What is JSX?",
    category: "React",
    answer:
      "JSX stands for JavaScript XML. It allows developers to write HTML-like code inside JavaScript. React converts JSX into regular JavaScript using Babel before rendering it in the browser.",
  },
  {
    id: 3,
    slug: "what-is-virtual-dom",
    title: "What is Virtual DOM?",
    category: "React",
    answer:
      "Virtual DOM is a lightweight copy of the real DOM. React updates the Virtual DOM first, compares changes with the previous version, and updates only the necessary parts of the real DOM for better performance.",
  },
  {
    id: 4,
    slug: "what-are-react-hooks",
    title: "What are React Hooks?",
    category: "React",
    answer:
      "React Hooks are functions that allow developers to use state and lifecycle features inside functional components. Common hooks include useState, useEffect, useContext, useMemo, and useRef.",
  },
  {
    id: 5,
    slug: "difference-between-state-and-props",
    title: "Difference Between State and Props?",
    category: "React",
    answer:
      "Props are read-only data passed from a parent component to a child component. State is managed within a component and can change over time. Props make components reusable, while state makes them interactive.",
  },
  {
    id: 6,
    slug: "what-is-the-purpose-of-useeffect",
    title: "What is the purpose of useEffect?",
    category: "React",
    answer:
      "useEffect is a hook used to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM. It serves a similar purpose to componentDidMount, componentDidUpdate, and componentWillUnmount combined.",
  },
  {
    id: 7,
    slug: "what-are-keys-in-react",
    title: "What are keys in React?",
    category: "React",
    answer:
      "Keys are unique identifiers used in React to track which items in a list have changed, been added, or been removed. They give stable identities to elements, helping React optimize rendering performance during reconciliation.",
  },
  {
    id: 8,
    slug: "what-is-react-context-api",
    title: "What is React Context API?",
    category: "React",
    answer:
      "The Context API is a built-in feature in React that allows sharing global data (like themes or user authentication) across components without manually passing props down through every level, solving the problem of prop drilling.",
  },
  {
    id: 9,
    slug: "difference-between-usememo-and-usecallback",
    title: "Difference between useMemo and useCallback?",
    category: "React",
    answer:
      "useMemo caches the result of a calculated value to avoid expensive recalculations on every render. useCallback caches the actual function instance itself to prevent unnecessary re-renders of child components that depend on function references.",
  },
  {
    id: 10,
    slug: "what-is-the-difference-between-controlled-and-uncontrolled-components",
    title: "What is the difference between Controlled and Uncontrolled components?",
    category: "React",
    answer:
      "In a controlled component, form data is handled by the React component state. In an uncontrolled component, form data is handled by the DOM itself, typically accessed using a React ref.",
  },
  {
    id: 11,
    slug: "what-is-react-reconciliation",
    title: "What is React Reconciliation?",
    category: "React",
    answer:
      "Reconciliation is the process and algorithm React uses to diff one virtual DOM tree with another. It determines which parts of the real DOM need to be updated to match the new UI tree efficiently.",
  },
  {
    id: 12,
    slug: "what-is-strictmode-in-react",
    title: "What is StrictMode in React?",
    category: "React",
    answer:
      "StrictMode is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants, such as identifying unsafe lifecycles, warning about legacy API usage, and detecting unexpected side effects by double-rendering components in development mode.",
  },
  {
    id: 13,
    slug: "what-are-higher-order-components-hoc",
    title: "What are Higher-Order Components (HOC)?",
    category: "React",
    answer:
      "A Higher-Order Component is an advanced pattern in React where a function takes a component as an argument and returns a new, enhanced component. It is used for reusing component logic.",
  },
  {
    id: 14,
    slug: "what-is-the-purpose-of-useref",
    title: "What is the purpose of useRef?",
    category: "React",
    answer:
      "useRef is a hook that returns a mutable ref object whose `.current` property persists across renders. It is commonly used to directly access DOM elements or to store mutable values that do not trigger a re-render when changed.",
  },
  {
    id: 15,
    slug: "what-is-lazy-loading-and-suspense-in-react",
    title: "What is Lazy Loading and Suspense in React?",
    category: "React",
    answer:
      "Lazy loading is an optimization technique where components are loaded dynamically only when they are needed, reducing bundle size. React.lazy() is used to define a dynamically imported component, and Suspense provides a fallback UI (like a spinner) while the lazy component is loading.",
  },
  {
    id: 16,
    slug: "what-are-pure-components",
    title: "What are Pure Components?",
    category: "React",
    answer:
      "In class components, a PureComponent handles shouldComponentUpdate automatically by performing a shallow comparison of props and state. In functional components, React.memo serves a similar purpose to prevent unnecessary re-renders.",
  },
  {
    id: 17,
    slug: "what-is-prop-drilling",
    title: "What is Prop Drilling?",
    category: "React",
    answer:
      "Prop drilling is the process of passing data from a high-level parent component down through multiple layers of intermediate child components to reach a deeply nested component that actually requires the data.",
  },
  {
    id: 18,
    slug: "what-are-error-boundaries",
    title: "What are Error Boundaries?",
    category: "React",
    answer:
      "Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the whole application component tree.",
  },
  {
    id: 19,
    slug: "what-are-the-rules-of-hooks",
    title: "What are the rules of Hooks?",
    category: "React",
    answer:
      "There are two main rules: 1) Only call Hooks at the top level—don't call them inside loops, conditions, or nested functions. 2) Only call Hooks from React function components or custom Hooks.",
  },
  {
    id: 20,
    slug: "what-is-the-purpose-of-usereducer",
    title: "What is the purpose of useReducer?",
    category: "React",
    answer:
      "useReducer is a hook used for state management, serving as an alternative to useState. It is preferred when you have complex state logic involving multiple sub-values or when the next state depends on the previous one, utilizing a dispatch-action pattern.",
  },
  {
    id: 21,
    slug: "what-are-custom-hooks",
    title: "What are Custom Hooks?",
    category: "React",
    answer:
      "Custom Hooks are JavaScript functions whose names start with 'use' and that can call other Hooks. They allow you to extract and reuse stateful component logic across multiple components without duplicating code.",
  },
  {
    id: 22,
    slug: "what-is-the-difference-between-shadow-dom-and-virtual-dom",
    title: "What is the difference between Shadow DOM and Virtual DOM?",
    category: "React",
    answer:
      "Shadow DOM is a browser technology designed for scoping variables and CSS in web components. Virtual DOM is a concept implemented by libraries like React in JavaScript memory to optimize rendering performance.",
  },
  {
    id: 23,
    slug: "what-is-synthetic-event-in-react",
    title: "What is a SyntheticEvent in React?",
    category: "React",
    answer:
      "A SyntheticEvent is a cross-browser wrapper around the browser’s native event. It has the same interface as the native event, including stopPropagation() and preventDefault(), but works identically across all browsers.",
  },
  {
    id: 24,
    slug: "what-is-the-purpose-of-uselayouteffect",
    title: "What is the purpose of useLayoutEffect?",
    category: "React",
    answer:
      "useLayoutEffect is identical to useEffect, but it fires synchronously after all DOM mutations but before the browser paints. It is used to read layout measurements from the DOM and synchronously re-render before the user sees the change.",
  },
  {
    id: 25,
    slug: "what-is-react-fragment",
    title: "What is React Fragment?",
    category: "React",
    answer:
      "React Fragment is a built-in feature that allows you to group a list of children elements without adding an extra node/wrapper (like a `<div>`) to the DOM, keeping the HTML structure clean.",
  },
  {
    id: 26,
    slug: "what-is-state-batching-in-react",
    title: "What is state batching in React?",
    category: "React",
    answer:
      "State batching is when React groups multiple state updates into a single re-render for better performance. In modern React, batching happens automatically for all updates, whether they are in event handlers, promises, or setTimeout blocks.",
  },
  {
    id: 27,
    slug: "what-is-the-difference-between-react-and-react-dom",
    title: "What is the difference between react and react-dom?",
    category: "React",
    answer:
      "The `react` package contains core functionalities like component lifecycle, hooks, and state management logic. The `react-dom` package provides the entry points and methods necessary to render these components onto a physical web browser DOM.",
  },
  {
    id: 28,
    slug: "what-is-conditional-rendering",
    title: "What is Conditional Rendering?",
    category: "React",
    answer:
      "Conditional rendering is the practice of rendering different UI elements or components based on certain conditions. It is achieved using standard JavaScript operators like `if`, logical `&&`, or ternary operators `condition ? true : false`.",
  },
  {
    id: 29,
    slug: "how-do-you-pass-data-from-child-to-parent",
    title: "How do you pass data from child to parent?",
    category: "React",
    answer:
      "Data can be passed from a child to a parent component by passing a callback function as a prop from the parent to the child. The child component can then execute this function and supply the data as an argument.",
  },
  {
    id: 30,
    slug: "what-is-the-purpose-of-useimperativehandle",
    title: "What is the purpose of useImperativeHandle?",
    category: "React",
    answer:
      "useImperativeHandle is a hook used to customize the instance value that is exposed to parent components when using a `ref`. It should be used in conjunction with `forwardRef` and is generally avoided for standard data flow.",
  },
  {
    id: 31,
    slug: "what-is-the-flashing-or-flickering-issue-with-useeffect",
    title: "What causes UI flickering when using useEffect?",
    category: "React",
    answer:
      "Flickering happens when a component renders with initial data, the browser paints the screen, and then an asynchronous `useEffect` updates the state based on DOM measurements, causing a second immediate render. Switching to `useLayoutEffect` blocks the paint until the state updates, preventing the flicker.",
  },
  {
    id: 32,
    slug: "what-is-the-purpose-of-forwardref",
    title: "What is the purpose of forwardRef?",
    category: "React",
    answer:
      "forwardRef is a utility function that allows a component to intercept a `ref` passed to it and forward it down to one of its nested child DOM elements or components, enabling parents to interact with inner DOM leaves.",
  },
  {
    id: 33,
    slug: "what-is-the-difference-between-server-components-and-client-components",
    title: "What is the difference between Server Components and Client Components?",
    category: "React",
    answer:
      "Server Components are rendered ahead of time on the server, resulting in zero client-side JavaScript overhead for those files. Client Components are traditional components that are hydrated on the client side, allowing the use of interactivity, state, and hooks.",
  },
  {
    id: 34,
    slug: "what-is-the-purpose-of-usetransition",
    title: "What is the purpose of useTransition?",
    category: "React",
    answer:
      "useTransition is a concurrent feature hook that lets you mark state updates as non-blocking transitions. This tells React that a heavy UI transition (like filtering a long list) can be interrupted by more urgent user events, like typing or clicking.",
  },
  {
    id: 35,
    slug: "what-are-stale-closures-in-react-hooks",
    title: "What are stale closures in React Hooks?",
    category: "React",
    answer:
      "A stale closure occurs when a function (like an event handler or an effect callback) captures variables from an older render scope instead of the current one. This usually happens when a hook dependency array is missing updated values, causing it to read outdated state values."
  }
];