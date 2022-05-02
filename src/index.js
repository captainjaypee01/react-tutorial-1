import React from "react";
import ReactDOM from "react-dom/client";

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
function Greeting() {
  return (
    <>
      <div className="test">
        <h4>I'm Jaypee!</h4>
        <ul>
          <li>
            <a href="#">Click Me!</a>
          </li>
        </ul>
      </div>
    </>
  );
}

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Hi I'm Jaypee")
//   );
// };

// Always remember the closing tag for self closing tag if there is no closing tag.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />);
