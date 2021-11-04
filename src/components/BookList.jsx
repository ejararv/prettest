import React from "react";
import Book from "./Book";
import "./../App.css";

const BookList = ({ books, title }) => {
  if (!books.length) {
    return (
      <div>
        <h1>Books not found</h1>
      </div>
    );
  }

  return (
    <div className="books_container">
      <h1 style={{ textAlign: "center" }}>{title}</h1>

      {books.map((b, index) => (
        <Book key={b.id} number={index + 1} book={b} />
      ))}
    </div>
  );
};

export default BookList;
