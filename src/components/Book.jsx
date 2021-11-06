import React, { useState } from "react";
import FakeBookApi from "../data/FakeBookApi";
import MyButton from "./UI/MyButton/MyButton";

const Book = (props) => {
  const [click, setClick] = useState(false);

  const styles = {
    border: "2px solid #fff",
    background: "#ffffff50",
    boxShadow: "0 0 10px #719ece",
  };

  const onClick = () => {
    setClick(!click);
  };

  return (
    <div className="book" style={click ? styles : null} onClick={onClick}>
      <strong># {props.book.title}</strong>
      <div>{props.book.author}</div>
      <div>{props.book.publishingHouse}</div>
      <div>Pages:{props.book.pages}</div>
      <MyButton
        onClick={() => {
          FakeBookApi.removeBook(props.book.id);
        }}
      >
        Delete
      </MyButton>
    </div>
  );
};
export default Book;
