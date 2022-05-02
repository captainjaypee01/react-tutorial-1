import React from "react";
import ReactDOM from "react-dom";

// Since in the index.html the id is root, we must get the reference from the id which is root
// Now We need to import the ReactDom to render the component inside the element in index.html by root id

// Always use capital case

// we must return html in index js
// function Greeting() {
//   return (
//     <div>
//       <h4>I'm Jaypee!</h4>
//     </div>
//   );
// }

const Greeting = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hi I'm Jaypee")
  );
};

// Always remember the closing tag for self closing tag if there is no closing tag.
ReactDOM.render(<Greeting />, document.getElementById("root"));
