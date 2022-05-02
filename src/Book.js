import React from "react";

const Book = (props) => {
  const { img, title, author } = props;
  const clickHandler = () => {
    alert(`You select ${title}`);
  };
  const complexHandler = (author) => {
    alert(author);
  };
  return (
    <article
      className={"book"}
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Example
      </button>
      <button type="button" onClick={() => complexHandler(author)}>
        Complex Example
      </button>
    </article>
  );
};

export default Book;
