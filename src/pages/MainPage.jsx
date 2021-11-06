import React, { useEffect, useMemo, useState } from "react";
import BookList from "../components/BookList";
import MySelect from "../components/UI/MySelect/MySelect";
import NotFound from "../components/UI/NotFound/NotFound";
import FakeBookApi from "../data/FakeBookApi";

const MainPage = () => {
  const [books, setBooks] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const fetchBooks = () => {
    FakeBookApi.fetchBooks().then(function (data) {
      setBooks(data);
    });
  };

  const sortedBooks = useMemo(() => {
    if (selectedSort) {
      const sortedData = [...books].filter((item) =>
        selectedSort ? (
          [...books].some((key) => item[selectedSort])
        ) : (
          <NotFound />
        )
      );

      console.log(sortedData);
      return sortedData;
    }
    return books;
  }, [books, selectedSort]);

  const sortBooks = (sort) => {
    setSelectedSort(
      sort.map((s) => {
        return s.value;
      })
    );
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <div className="mainpage_container">
        <BookList books={sortedBooks} />
        <MySelect
          value={selectedSort}
          defaultValue="Sort books"
          onChangeVal={sortBooks}
          options={[
            { value: "title", label: "Title" },
            { value: "author", label: "Author" },
            { value: "publishingHouse", label: "Publishing house" },
            { value: "pages", label: "Pages" },
          ]}
        />
      </div>
    </div>
  );
};

export default MainPage;
