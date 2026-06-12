export const cssQuestions = [
  {
    id: 401,
    slug: "what-is-the-css-box-model",
    title: "What is the CSS Box Model?",
    category: "CSS",
    answer: "The CSS Box Model is a structural rule that wraps around every single HTML element. It consists of four distinct layers from inside out: Content (the actual text or image), Padding (space around content), Border (a line surrounding padding), and Margin (space outside the border separating elements)."
  },
  {
    id: 402,
    slug: "difference-between-content-box-and-border-box",
    title: "Difference between content-box and border-box sizing?",
    category: "CSS",
    answer: "Under `box-sizing: content-box` (default), the final element width is calculated as width + padding + border. Under `box-sizing: border-box`, the padding and border are included inside the width you specify, making sizing layout math much easier to predict."
  },
  {
    id: 403,
    slug: "what-is-css-specificity",
    title: "What is CSS Specificity and how is it calculated?",
    category: "CSS",
    answer: "Specificity is the weight or ranking system browsers use to determine which CSS rule applies to an element when multiple rules conflict. It is calculated based on weights: Inline styles (highest), IDs, Classes/attributes/pseudo-classes, and Elements/pseudo-elements (lowest)."
  },
  {
    id: 404,
    slug: "difference-between-flexbox-and-grid",
    title: "What is the main difference between Flexbox and CSS Grid?",
    category: "CSS",
    answer: "Flexbox is fundamentally a one-dimensional layout system designed to align items in either a single row or a single column. CSS Grid is a powerful two-dimensional system capable of handling both rows and columns simultaneously."
  },
  {
    id: 405,
    slug: "explain-css-position-properties",
    title: "Explain the differences between static, relative, absolute, fixed, and sticky positions?",
    category: "CSS",
    answer: "Static is the default normal flow. Relative positions an item relative to its normal spot. Absolute takes an item out of normal flow, positioning it relative to its closest positioned ancestor. Fixed pins an item relative to the browser viewport. Sticky toggles between relative and fixed depending on scroll position."
  },
  {
    id: 406,
    slug: "what-are-pseudo-classes-and-pseudo-elements",
    title: "What is the difference between pseudo-classes and pseudo-elements?",
    category: "CSS",
    answer: "A pseudo-class targets a specific special state of an element (e.g., `:hover`, `:focus`, `:nth-child()`). A pseudo-element is used to style a specific block or part of an element (e.g., `::before`, `::after`, `::first-letter`)."
  },
  {
    id: 407,
    slug: "difference-between-display-none-and-visibility-hidden",
    title: "Difference between display: none and visibility: hidden?",
    category: "CSS",
    answer: "`display: none` completely removes the element from the document layout flow, taking up zero space. `visibility: hidden` hides the element visually, but it still maintains its structure, physical space, and affects layout calculations just like normal."
  },
  {
    id: 408,
    slug: "what-are-css-preprocessors",
    title: "What are CSS Preprocessors and give examples?",
    category: "CSS",
    answer: "CSS Preprocessors extend standard CSS capabilities by adding advanced programming logic features like variables, nested nesting selectors, mixins, and mathematical operations. Popular examples include SASS, SCSS, and LESS, which then compile down into native browser-readable CSS."
  },
  {
    id: 409,
    slug: "difference-between-px-em-rem-units",
    title: "What is the difference between px, em, and rem units?",
    category: "CSS",
    answer: "`px` is an absolute fixed pixel unit. `em` is a relative unit calculated based on the font size of its immediate parent element. `rem` is a relative unit calculated based on the font size configured on the root `<html>` element (usually defaults to 16px)."
  },
  {
    id: 410,
    slug: "what-is-the-purpose-of-z-index",
    title: "What is z-index and how does it work?",
    category: "CSS",
    answer: "The `z-index` property controls the vertical stack ordering of overlapping elements along the Z-axis. It only works on elements that have an explicit `position` value configured (like relative, absolute, fixed, or sticky) and relies heavily on stacking contexts."
  },
  {
    id: 411,
    slug: "what-is-a-stacking-context",
    title: "What is a Stacking Context in CSS?",
    category: "CSS",
    answer: "A Stacking Context is a three-dimensional conceptual grouping of HTML elements relative to the user. Elements inside a stacking context move together up or down the stack, and their `z-index` values cannot be compared against elements in an entirely different stacking context."
  },
  {
    id: 412,
    slug: "how-do-media-queries-work",
    title: "What are Media Queries and how are they used?",
    category: "CSS",
    answer: "Media Queries are a core CSS component that lets you apply different block styles based on specific device conditions, such as screen viewport width, height, resolution, or orientation, making responsive design possible via `@media` block logic."
  },
  {
    id: 413,
    slug: "what-is-css-flexbox-justify-content-vs-align-items",
    title: "Difference between justify-content and align-items in Flexbox?",
    category: "CSS",
    answer: "`justify-content` aligns flex items along the primary horizontal main axis (e.g., start, center, space-between). `align-items` aligns the individual flex items along the perpendicular cross axis (e.g., center, stretch, flex-end)."
  },
  {
    id: 414,
    slug: "what-are-css-custom-properties",
    title: "What are CSS Custom Properties (Variables)?",
    category: "CSS",
    answer: "CSS Custom Properties are native variables defined by developers that store reusable design values (like colors or sizes). They are declared using a double-dash prefix (e.g., `--main-color: #ff0000`) and accessed using the `var(--main-color)` function."
  },
  {
    id: 415,
    slug: "how-to-center-a-div",
    title: "What are the most common ways to center a <div>?",
    category: "CSS",
    answer: "You can center a div using Flexbox on the parent: `display: flex; justify-content: center; align-items: center;`. Alternatively, using CSS Grid: `display: grid; place-items: center;`. Or using absolute positioning combined with `transform: translate(-50%, -50%);`."
  },
  {
    id: 416,
    slug: "what-is-the-purpose-of-important",
    title: "What does the !important rule do in CSS?",
    category: "CSS",
    answer: "The `!important` rule overrides any and all standard specificity calculations for a particular CSS property declaration. It forces the browser to apply that specific value regardless of where the selector sits, though it should be used sparingly as it makes debugging code difficult."
  },
  {
    id: 417,
    slug: "explain-the-before-and-after-pseudo-elements",
    title: "What do the ::before and ::after pseudo-elements do?",
    category: "CSS",
    answer: "They allow you to insert decorative content or layout structural items from CSS directly before or after an element's actual content without modifying the real HTML markup. They require a `content` property to render properly."
  },
  {
    id: 418,
    slug: "what-is-bref-or-css-sprites",
    title: "What are CSS Sprites?",
    category: "CSS",
    answer: "CSS Sprites combine multiple independent small images into a single larger composite image asset. By utilizing `background-image` and shifting `background-position`, you display targeted pieces, reducing individual server HTTP asset request counts."
  },
  {
    id: 419,
    slug: "what-is-the-vh-and-vw-units",
    title: "What are vh and vw units in CSS?",
    category: "CSS",
    answer: "`vh` stands for Viewport Height and `vw` stands for Viewport Width. `1vh` is equal to exactly 1% of the current browser window's height, and `1vw` is exactly 1% of the browser window's full width."
  },
  {
    id: 420,
    slug: "what-causes-css-margin-collapse",
    title: "What is CSS Margin Collapsing?",
    category: "CSS",
    answer: "Margin collapsing occurs when the top and bottom margins of adjacent block elements combine or collapse into a single margin value that equals the maximum of the two margins, rather than summing them together."
  },
  {
    id: 421,
    slug: "difference-between-inline-and-inline-block",
    title: "What is the difference between inline and inline-block display?",
    category: "CSS",
    answer: "`inline` items flow horizontally and ignore top/bottom custom width, height, and vertical margin values. `inline-block` elements flow inline inside paragraphs normally, but allow you to explicitly configure custom width, height, padding, and margins."
  },
  {
    id: 422,
    slug: "what-is-the-grid-gap-property",
    title: "What is the gap property used for?",
    category: "CSS",
    answer: "The `gap` property (formerly grid-gap) defines the structural spacing or gutters explicitly between grid rows/columns or flexbox items without needing to hack complex outer margin structures on individual child components."
  },
  {
    id: 423,
    slug: "what-is-the-purpose-of-object-fit",
    title: "What does the object-fit property do?",
    category: "CSS",
    answer: "The `object-fit` property specifies how the content of a replaced element, like an <img> or <video>, should be resized or scaled to fit its established layout container frame (values include fill, contain, cover, scale-down)."
  },
  {
    id: 424,
    slug: "how-do-transitions-differ-from-animations",
    title: "Difference between CSS Transitions and Animations?",
    category: "CSS",
    answer: "Transitions smoothly animate a property change triggered by an event (like `:hover`) strictly from an implicit start state to a final end state. Animations are more complex, use custom `@keyframes`, and can run infinitely or cycle through multiple stages completely independent of state triggers."
  },
  {
    id: 425,
    slug: "what-is-the-purpose-of-will-change",
    title: "What is the purpose of the will-change CSS property?",
    category: "CSS",
    answer: "The `will-change` property hints to the browser's rendering engine ahead of time about what properties are expected to change on an element. This allows the browser to pre-optimize graphics rendering operations and hardware acceleration ahead of time for smoother performance."
  }
];