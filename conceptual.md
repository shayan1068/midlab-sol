### Conceptual Exercise

Answer the following questions below:

What is React? When and why would you use it?
**Answer:**  
React is a JavaScript library for building user interfaces, primarily for single-page applications where data dynamically changes over time. It's used for creating reusable UI components, managing state efficiently, and improving performance through its virtual DOM mechanism.

What is Babel?

**Answer:**  
Babel is a JavaScript compiler that allows developers to use next-generation JavaScript features (ES6+) that may not yet be supported in all browsers. It converts modern JavaScript code into a backward-compatible version that can run in older environments.

What is JSX?

**Answer:**  
JSX is a syntax extension for JavaScript that looks similar to HTML and is used in React to describe what the UI should look like. It allows embedding HTML-like syntax within JavaScript code and makes it easier to visualize the structure of a component.


How is a Component created in React?

**Answer:**  
A component in React can be created either as a function or a class. Function components are more common in modern React development:
```javascript
function MyComponent() {
  return <div>Hello, World!</div>;
}
```
Class components were used in older versions of React:

```js
class MyComponent extends React.Component {
  render() {
    return <div>Hello, World!</div>;
  }
}
```
What are some difference between state and props?

**Answer**

- **State**: Managed within the component and can change over time. It's used for data that changes and is owned by the component.
- **Props**: Short for "properties," props are read-only data passed from a parent component to a child component. Props are immutable and used for passing data and event handlers.

What does "downward data flow" refer to in React?

**Answer:**

In React, "downward data flow" means that data is passed from parent components to child components through props. This one-way data flow ensures that changes to data in a parent component automatically update the child components that depend on it.

What is a controlled component?

**Answer:**

A controlled component in React is a form element (like an input, textarea, or select) that is controlled by React state. The component's value is driven by the state, and updates to the state result in updates to the displayed value.

What is an uncontrolled component?

**Answer:**

An uncontrolled component in React manages its own state internally without relying on React. You interact with it using a `ref` to get its value, rather than binding the value to React state.

What is the purpose of the `key` prop when rendering a list of components?

**Answer:**

The `key` prop is used to help React identify which items have changed, been added, or removed when rendering a list. It helps improve the efficiency of rendering updates.

Why is using an array index a poor choice for a `key` prop when rendering a list of components?

**Answer:**

Using an array index as a `key` can lead to issues with performance and bugs when the list order changes. If items are reordered or deleted, React may confuse components, leading to incorrect rendering or state issues.

Describe useEffect.  What use cases is it used for in React components?

**Answer:**

`useEffect` is a React hook that runs side effects in function components. It is used for tasks like fetching data, subscribing to events, or manually updating the DOM. The hook runs after the component renders and can be configured to run only when certain dependencies change.

What does useRef do?  Does a change to a ref value cause a rerender of a component?

**Answer:**

`useRef` is a hook that returns a mutable object which persists across renders. Unlike state, updating a ref does not trigger a rerender. It’s commonly used to reference DOM elements or persist values that don’t require rerenders.

When would you use a ref? When wouldn't you use one?

**Answer:**

**Use a ref:** When you need to directly access a DOM element, manage focus, or store non-reactive data across renders.

**Avoid using refs:** For handling dynamic data or triggering UI updates—state is better suited for those tasks since it drives reactivity in React.

What is a custom hook in React? When would you want to write one?

**Answer:**

A custom hook in React is a function that encapsulates reusable logic using React hooks. You write a custom hook when you have logic that needs to be shared across multiple components, such as fetching data, managing timers, or handling form state.

```js
import { useState } from 'react';

/**
 * useForm hook for managing form inputs
 * @param {object} initialValues - An object containing the initial values for the form inputs
 * @returns {object} - Returns an object containing the current form values, a change handler, and a reset function
 */
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  // Handles form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // Resets the form to its initial values
  const resetForm = () => {
    setValues(initialValues);
  };

  return {
    values,
    handleChange,
    resetForm,
  };
}

export default useForm;
```