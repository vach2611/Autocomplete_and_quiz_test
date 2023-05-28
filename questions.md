1. What is the difference between Component and PureComponent? give an
example where it might break my app.

In React, Component and PureComponent are base classes that can be used to create reusable UI components.
The PureComponent class, on the other hand, is an optimized version of Component. It implements a shallow comparison of props and state in the shouldComponentUpdate method. 
If the new props and state are shallowly equal to the previous ones, it prevents the component from re-rendering.
This can improve performance by reducing unnecessary re-renders



2. Context + ShouldComponentUpdate might be dangerous. Can think of why is
   that?

ShouldComponentUpdate can't detect changes inside the Context, and ShouldComponentUpdate won't prevent re-renders when the context updates.
This can impact the performance of your application.

3. Describe 3 ways to pass information from a component to its PARENT.
   1) Callback function - The child component can communicate with its parent by using callback functions. The parent passes a function as a prop to the child, and the child component calls that function with the necessary data as arguments.
   2) Context API - We can create the context and wrap parent component, and manipulate with context value from the child component, at that time parent component allowed to read updated values which are triggered by his child
   3) Global State management (Redux/Recoil/MobX) - creating separate state, they are available from every where, and after doing some manipulation inside the children, we can get the corresponding data from parent
   4) Custom Hook - creating hook, which will have the dependency to value which comes from the child component, and returning the callback for updating this date for passing it to the child component from the parent, so we can trigger the data change from child component, and useEffect will run inside parent


4. Give 2 ways to prevent components from re-rendering.
   1) React.memo() - higher-order component to wrap functional components. It helps optimize performance by memoizing the component and preventing re-rendering if the component's props haven't changed.
   2) React.PureComponent (for class components) - automatically implements a shallow comparison of props and state in the shouldComponentUpdate method. It prevents re-renders if the props and state haven't changed


5. What is a fragment and why do we need it? Give an example where it might
   break my app.

It gives us possibility to group multiple elements together without adding an extra DOM node. It's represented by the <React.Fragment> or shorthand syntax <>

When we don't want to add extra dom node just for wrapping the child components, so we can use Fragment, but if we write such component without fragment, it will throw an error

```
const MyComponent = () => (
   <h1>Title</h1>
   <p>Paragraph 1</p>
   <p>Paragraph 2</p>
);
```


6. Give 3 examples of the HOC pattern.
   1) For authentication functionality - HOC checks It checks if the user is authenticated and redirects them to the corresponding page depends on status
   2) for tracking/catching - we can use HOC for collecting information about user clicks, or can use HOC for collecting error cases and send it to the logger server (error boundary)
   3) for sharing data from server - we can fetch the data from the server inside the HOC and share with components who is expanded with this HOC.


7. what's the difference in handling exceptions in promises, callbacks and
   async...await.


Promises - Promises use the `catch()` method to handle error cases, Multiple promises can be chained using .then() and the errors can be caught using a single .catch() at the end of the chain.
Callbacks - Callbacks are a traditional way of handling asynchronous operations in JavaScript. But for avoiding callback hell we should not use this variant
Async/await - Async/await is a more modern and syntactically convenient way to handle asynchronous operations, it's syntactic sugar for Promises, here we should use the `try` and `catch`  to handle errors

8. How many arguments does setState take and why is it async.

The setState method takes two arguments: an object that represents the updated state and an optional callback function that will be executed after the state is updated.
When you call setState, React doesn't immediately update the state object. Instead, it schedules the update and performs it asynchronously during the next rendering phase. This allows React to optimize the rendering process by batching multiple state updates into a single update.

9. List the steps needed to migrate a Class to Function Component.

remove the class definition and replace it with function declaration, remove lifecycle methods, use useEffect, change state to hook approach with useState, remove `this` keyword, remove all bindings from class, and replace calss methods to regular functions, after test the component.

10. List a few ways styles can be used with components.

Inline styles, modular styles, global styles, styled-components


11. How to render an HTML string coming from the server.
   
we can do it by using `dangerouslySetInnerHTML`, by this way we are giving access to react to render it as html