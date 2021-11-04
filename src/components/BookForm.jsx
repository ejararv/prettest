import React, { useState } from "react";
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";
import FakeBookApi from "../data/FakeBookApi";
import { useHistory } from "react-router";

const emptyForm = {
  title: "",
  author: "",
  pages: null,
  publishingHouse: "",
};

const BookForm = () => {
  const [newBook, setNewBook] = useState(emptyForm);

  const history = useHistory();
  const addBook = (e) => {
    e.preventDefault();
    FakeBookApi.addNewBook(newBook);
    history.push("./home");
    setNewBook(emptyForm);
  };

  return (
    <div className="container">
      <form>
        <MyInput
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          type="text"
          placeholder="Book title"
        />
        <MyInput
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          type="text"
          placeholder="Author"
        />
        <MyInput
          value={newBook.pages}
          onChange={(e) => setNewBook({ ...newBook, pages: e.target.value })}
          type="number"
          placeholder="Nomber of pages"
        />
        <MyInput
          value={newBook.publishingHouse}
          onChange={(e) =>
            setNewBook({ ...newBook, publishingHouse: e.target.value })
          }
          type="text"
          placeholder="Publishing house"
        />

        <MyButton onClick={addBook}>Add book</MyButton>
      </form>
    </div>
  );
};

export default BookForm;
