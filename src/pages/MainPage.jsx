import React, { useEffect, useMemo, useState } from "react";
import BookList from "../components/BookList";
import MySelect from "../components/UI/MySelect/MySelect";
import FakeBookApi from "../data/FakeBookApi";

const MainPage = () => {
  const [books, setBooks] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const fetchBooks = () => {
    FakeBookApi.fetchBooks().then(function (data) {
      setBooks(data);
    });
  };

  const sortedBooks = useMemo(
    (sort) => {
      if (books.length) {
        return [...books].filter((obj) => obj.department === sort);
      } else {
        return books;
      }
    },
    [books]
  );

  const sortBooks = (sort) => {
    setBooks(
      [...books].filter((a) =>
        a.author.toLowerCase().includes(sort.toLowerCase())
      )
    );
  };

  useEffect(() => {
    fetchBooks();
  });

  return (
    <div>
      <div className="App">
        <BookList books={books} />
        <MySelect
          value={selectedSort}
          defaultValue="Sort books"
          onChange={sortBooks}
          options={[
            { value: "author", name: "By Author" },
            { value: "publishingHouse", name: "By publishing house" },
            { value: "Administration", name: "By Administraton" },
            { value: "", name: "Clear" },
          ]}
        />
      </div>
    </div>
  );
};

export default MainPage;
