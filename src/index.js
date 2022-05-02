import React from "react";
import ReactDOM from "react-dom/client";

// Importing CSS file
import "./index.css";

import { bookList } from "./BookList";
import Book from "./Book";

// Since in the index.html the id is root, we must get the reference from the id which is root
// Now We need to import the ReactDom to render the component inside the element in index.html by root id

// Always use capital case

// we must return html in index js

// JSX Rules
// - return single element
// - div / section / article or Fragment
// - use camelCase for html attribute
// - className instead of class
// - close every element
// - formatting
// - Follow semantics for better practice

// Nested Compnents, React Tools

function Greeting() {
  return (
    <>
      <div className="test">
        <Person />
        <Message />
      </div>
    </>
  );
}

const Person = () => <h2>John Paul</h2>;
const Message = () => {
  return <p>This is sample paragraph</p>;
};

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Hi I'm Jaypee")
//   );
// };

// Creating a Mini Book Project
// - Used nested components
// - Used external and inline CSS in React component
// - Used class name css inside the html tag
// - Inline css will always be stronger than the external css.
//    It will always overwrite the styles if internal css used.
// - Setup Javascript in JSX
// - Passing data in function
// - Learning how props work with the component
// - Using Props destructuring with the component
// - Refactor the static data into structured object
// - Used loop to fill the data in each book Object to the component with the used of destructuring
// - ## Children Prop
//    - it is used to display whatever data you include between the opening and closing tags when invoking a component. You can access the children prop as "children" inside the invoked component.
// - Bonus tip: You can display array of string but you can't just display an array of objects.
// - Mapping arrays into modified values/object.
// - Pass the object book and destructured it inside the invoked Component which is Book
// - Developer preference if you want to use a spread operator, but for me I prefer to use it.
// - Also, remember to have a unique in array of element.

// - ## Basic Events
//   - onClick, onMouseOver;
//   - Difference used of events but still having same result
//   - Passingg an argument into the fuunction, it will run the function when it was invoked.
//    - You must use the n line to prevent on running the function when it was invoked, so it will run only when the event was happened.

// - ## Import and Export Statements
//   - Create a new file to experiment on how the Import works with the React JS structure
//   - Create a components to separate the components you used in the index.js
//   - Export the book list array in BookList.js and after that, import it to index.js to be used.
//   - Transfer the Book component to the Book.js and export it, then import the Book.js component in index.js so you can re-use it and will show the same result.
//   - The difference of export { variable as default} it exports the reference to the exported variable, while export default variable, the importing modules do not receive the reference to the exported variable.
//   - Default export if you want to export only one object ( function, variable or class) from the file(module)
//   - Export or Named Export, it is used to export multiple objects from one file

// bookList.reverse();
// bookList.push(firstBook, secondBook);

// Example of mapping array
const names = ["test1", "test2", "test3"];
const newNames = names.map((n, index) => <h1 key={index}>{n}</h1>);
console.log(newNames);
// End example

function BookList() {
  return (
    <section className={"booklist"}>
      {bookList.map((book) => (
        // // used destructure
        // const { img, title, author } = book;
        // Pass the object book and destructured it inside
        // the invoked Component which is Book
        <Book {...book} key={book.id}>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </Book>
      ))}
    </section>
  );
}

{
  /* <p>{ let x = 6}</p> */
}
{
  /* Setup Javascript in JSX */
}
{
  /* <p>{6 + 6}</p> */
}
const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg"
    alt=""
  />
);
const Title = () => <h1>I Love You to the Moon and Back</h1>;
const Author = () => <h4>Amelia Hepworth</h4>;

// Always remember the closing tag for self closing tag if there is no closing tag.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
