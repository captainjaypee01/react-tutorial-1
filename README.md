## Setup

I learned how to setup the react js library, and gain some knowledge on how to improve my dev environment by using some tools and extensions.

## First Component

Different usage of rendering the components using functional or arrow function components

## JSX Rules

- return single element
- div / section / article or Fragment
- use camelCase for html attribute
- className instead of class
- close every element
- formatting
- follow semantics for better practice

## Nested Components, React Tools

Learn on how to use different child components inside the Parent Component/

## Created a mini book project

- Used nested components
- Used external and inline CSS in React component
- Inline css will always be stronger than the external css. It will always overwrite the styles if internal css used.
- Setup Javascript in JSX
- Passing data in function
- Learning how props work with the component
- Using Props destructuring with the component
- Refactor the static data into structured object
- Used loop to fill the data in each book Object to the component with the used of destructuring
- ## Children Prop

  - it is used to display whatever data you include between the opening and closing tags when invoking a component. You can access the children prop as "children" inside the invoked component.

- Bonus tip: You can display array of string but you can't just display an array of objects.
- Mapping arrays into modified values/object.
- Pass the object book and destructured it inside the invoked Component which is Book
- Developer preference if you want to use a spread operator, but for me I prefer to use it.
- Also, remember to have a unique in array of element.
- ## Basic Events

  - onClick, onMouseOver
  - Difference used of events but still having same result
  - Passingg an argument into the fuunction, it will run the function when it was invoked.- You must use the n line to prevent on running the function when it was invoked, so it will run only when the event was happened.

- ## Import and Export Statements
  - Create a new file to experiment on how the Import works with the React JS structure
  - Create a components to separate the components you used in the index.js
  - Export the book list array in BookList.js and after that, import it to index.js to be used.
  - Transfer the Book component to the Book.js and export it, then import the Book.js component in index.js so you can re-use it and will show the same result.
  - The difference of export { variable as default} it exports the reference to the exported variable, while export default variable, the importing modules do not receive the reference to the exported variable.
  - Default export if you want to export only one object ( function, variable or class) from the file(module)
  - Export or Named Export, it is used to export multiple objects from one file
