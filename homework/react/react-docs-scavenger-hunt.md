# React Documentation Scavenger Hunt

[React Docs](https://facebook.github.io/react/docs/hello-world.html)

### Post answers (and links to where you found them) for each of the questions below:

1. Can we use `npm` with React or do we have to use `yarn`?

We can use 'npm' only, 'yarn' is optional.

2. We are using JSX to write HTML inside of our React. Are we required to use JSX with React? Are there any alternatives?

We could instead use "React.createElement" to create each individual element, if we wanted to. But JSX is syntactical sugar that makes creating elements feel more like writing HTML.

3. Does React re-render the entire component when one part of it changes?

It only renders the element that has been changed and only when it gets changed. 

4. Should we ever change `props` (or parameters) inside of a component? 

No, props are passed into a component when it is called.

5. Are all components classes? 

No, some components are functions, these are "functional components." Components that are classes are turned into complex objects that can store variables inside a property called state. Functional components simply return JSX and nothing more.

6. List five "Synthetic Events" provided by React:

Focus Events, Form Events, Mouse Events, Selection Events, Touch Events

7. Do we have to use ES6 syntax with React?

It's recommended that we use ES6 and JSX to access modern features, and Babel to make sure that code still works on older browser. ES6 syntax is used to create objects, but you don't need it for functional components. It seems like not using ES6 would make everything a lot harder tho.

8. Where can I go to check out React's built-in Accessibility features?

https://reactjs.org/docs/accessibility.html

9. List five React Component Lifecycle Methods:

constructor(), componentWillMount(), shouldComponentUpdate(), render(), componentWillUnmount()

10. Where would I go to check out React's built-in testing tools?

https://reactjs.org/docs/test-utils.html

### Turning in:

* Post a link to this file on Github to Schoology.
