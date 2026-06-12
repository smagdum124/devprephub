export const htmlQuestions = [
  {
    id: 501,
    slug: "what-is-html5",
    title: "What is HTML5 and how does it differ from HTML4?",
    category: "HTML",
    answer: "HTML5 is the latest version of HyperText Markup Language. Unlike HTML4, it introduces native multimedia support (<video>, <audio>), semantic tags (<header>, <article>), structural layout elements, and powerful APIs like Web Storage and Geolocation without needing plugins."
  },
  {
    id: 502,
    slug: "what-are-semantic-elements",
    title: "What are semantic elements in HTML?",
    category: "HTML",
    answer: "Semantic elements clearly describe their meaning to both the browser and the developer (e.g., <form>, <table>, <article>). Non-semantic elements tell nothing about their content (e.g., <div> and <span>). They improve SEO and accessibility."
  },
  {
    id: 503,
    slug: "difference-between-div-and-span",
    title: "What is the difference between <div> and <span>?",
    category: "HTML",
    answer: "<div> is a block-level element used to group larger sections of code and starts on a new line, taking up the full width available. <span> is an inline element used to wrap small text strings or inline components and only takes up as much width as necessary."
  },
  {
    id: 504,
    slug: "what-is-the-purpose-of-doctype",
    title: "What is the purpose of the <!DOCTYPE html> declaration?",
    category: "HTML",
    answer: "The <!DOCTYPE html> declaration is an instruction to the web browser about what version of HTML the page is written in. It ensures the browser renders the page in 'Standards Mode' rather than 'Quirks Mode'."
  },
  {
    id: 505,
    slug: "difference-between-localstorage-and-sessionstorage",
    title: "Difference between localStorage, sessionStorage, and Cookies?",
    category: "HTML",
    answer: "localStorage stores data with no expiration date. sessionStorage stores data only for the duration of the page session (cleared when the tab closes). Cookies store data that is sent back to the server with every HTTP request and have smaller storage limits (~4KB vs ~5MB for Web Storage)."
  },
  {
    id: 506,
    slug: "what-are-data-attributes",
    title: "What are data-* attributes used for?",
    category: "HTML",
    answer: "Data attributes (data-*) allow developers to store custom extra information on standard HTML elements without using non-standard attributes. This data can easily be accessed via JavaScript using the element's `dataset` property."
  },
  {
    id: 507,
    slug: "what-is-the-alt-attribute",
    title: "Why is the 'alt' attribute important in <img> tags?",
    category: "HTML",
    answer: "The 'alt' attribute provides alternative text for an image if it cannot be displayed (due to slow internet or broken links). It is crucial for web accessibility, allowing screen readers to describe the image to visually impaired users, and it helps with SEO."
  },
  {
    id: 508,
    slug: "difference-between-id-and-class",
    title: "What is the difference between id and class attributes?",
    category: "HTML",
    answer: "An 'id' must be unique within an HTML document and can only be assigned to a single element. A 'class' can be reused across multiple elements on the same page. In CSS, ids are targeted with '#' and classes with '.'."
  },
  {
    id: 509,
    slug: "what-is-the-purpose-of-the-meta-viewport-tag",
    title: "What is the purpose of the <meta name='viewport'> tag?",
    category: "HTML",
    answer: "The viewport meta tag gives the browser instructions on how to control the page's dimensions and scaling on different screens. Setting `width=device-width, initial-scale=1.0` is essential for building responsive websites."
  },
  {
    id: 510,
    slug: "what-is-an-iframe",
    title: "What is an iframe and how does it work?",
    category: "HTML",
    answer: "An iframe (Inline Frame) is an HTML document embedded inside another HTML document on a website. It is commonly used to insert third-party content like YouTube videos, Google Maps, or external advertisements."
  },
  {
    id: 511,
    slug: "difference-between-script-async-and-defer",
    title: "Difference between <script>, <script async>, and <script defer>?",
    category: "HTML",
    answer: "Plain <script> blocks HTML parsing while fetching and executing. `async` downloads the script in the background and executes it immediately when ready, blocking HTML parsing at that moment. `defer` downloads the script in the background and executes it only after HTML parsing is completely finished."
  },
  {
    id: 512,
    slug: "what-are-self-closing-tags",
    title: "What are self-closing or void tags in HTML?",
    category: "HTML",
    answer: "Void elements are tags that do not have a closing tag and cannot contain any child content. Examples include <img>, <br>, <hr>, <input>, and <meta>."
  },
  {
    id: 513,
    slug: "what-is-svg-in-html",
    title: "What is SVG and why is it used in HTML?",
    category: "HTML",
    answer: "SVG stands for Scalable Vector Graphics. It is an XML-based format used to describe two-dimensional vector graphics. Unlike raster images (JPEG/PNG), SVGs are resolution-independent and maintain perfect crispness at any zoom level or screen resolution."
  },
  {
    id: 514,
    slug: "what-is-the-canvas-element",
    title: "What is the <canvas> element in HTML5?",
    category: "HTML",
    answer: "The <canvas> element is used to draw graphics, animations, or manipulate images on the fly via JavaScript scripts. It acts only as a container container; you must use JS to actually render shapes or lines inside it."
  },
  {
    id: 515,
    slug: "how-to-create-a-hyperlink-that-opens-in-a-new-tab",
    title: "How do you make a hyperlink open in a new tab?",
    category: "HTML",
    answer: "To open a link in a new tab, add the `target='_blank'` attribute to the anchor (<a>) tag. For security reasons, it is highly recommended to also include `rel='noopener noreferrer'` alongside it."
  },
  {
    id: 516,
    slug: "what-is-web-accessibility-a11y",
    title: "What is Web Accessibility (A11y) in HTML?",
    category: "HTML",
    answer: "Web accessibility means designing web content so that people with disabilities can use it. In HTML, this involves using semantic markup, providing proper alt text, ensuring keyboard navigability, and using ARIA (Accessible Rich Internet Applications) roles when necessary."
  },
  {
    id: 517,
    slug: "what-are-aria-attributes",
    title: "What are ARIA attributes?",
    category: "HTML",
    answer: "ARIA (Accessible Rich Internet Applications) is a set of special attributes (like `aria-label`, `aria-hidden`, `role`) added to HTML elements to make web content and applications more accessible to users who rely on screen readers and assistive technologies."
  },
  {
    id: 518,
    slug: "what-is-the-purpose-of-fieldset-and-legend",
    title: "What is the purpose of <fieldset> and <legend> tags?",
    category: "HTML",
    answer: "<fieldset> is used to group logically related controls and labels within a web form. The <legend> element is used to define a caption or a title for that specific grouped <fieldset>."
  },
  {
    id: 519,
    slug: "what-is-html-entity",
    title: "What are HTML Entities?",
    category: "HTML",
    answer: "HTML entities are reserved characters or invisible symbols that cannot be typed directly into HTML code because the browser might misinterpret them (e.g., `<` or `>`). They start with an ampersand (`&`) and end with a semicolon, like `&lt;` for `<` or `&nbsp;` for a non-breaking space."
  },
  {
    id: 520,
    slug: "difference-between-block-and-inline-elements",
    title: "Difference between block-level and inline elements?",
    category: "HTML",
    answer: "Block elements always start on a new line and take up the full width available (e.g., <p>, <div>, <h1>). Inline elements do not start on a new line and only take up as much width as their content needs (e.g., <a>, <strong>, <span>)."
  },
  {
    id: 521,
    slug: "what-is-the-progress-tag",
    title: "What is the <progress> tag in HTML5?",
    category: "HTML",
    answer: "The <progress> element represents the completion progress of a task, typically displayed as a progress bar. It requires `value` (current progress) and `max` (total work required) attributes."
  },
  {
    id: 522,
    slug: "what-is-a-datalist-element",
    title: "What is the purpose of the <datalist> tag?",
    category: "HTML",
    answer: "The <datalist> tag provides an 'autocomplete' feature for <input> elements. It contains a list of pre-defined <option> values that users will see as a dropdown selection list while typing into the input box."
  },
  {
    id: 523,
    slug: "importance-of-html-head-section",
    title: "What is the purpose of the <head> element?",
    category: "HTML",
    answer: "The <head> element is a container for metadata (data about data) and is placed between the <html> tag and <body> tag. It holds details like the document title, character sets, styles, scripts, and other meta configurations that aren't visible to users."
  },
  {
    id: 524,
    slug: "what-is-the-noscript-tag",
    title: "What is the <noscript> tag used for?",
    category: "HTML",
    answer: "The <noscript> tag is used to provide alternative content for users who have disabled JavaScript in their browser or are using a browser that does not support JavaScript entirely."
  },
  {
    id: 525,
    slug: "how-can-you-optimize-html-for-seo",
    title: "How can you optimize HTML structure for better SEO?",
    category: "HTML",
    answer: "HTML can be optimized by using descriptive title tags, meta descriptions, semantic HTML elements (<main>, <nav>), clean heading hierarchies (only one <h1> per page), configuring clear alt attributes on images, and using canonical links."
  }
];