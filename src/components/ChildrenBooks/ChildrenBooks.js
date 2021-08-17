import React from "react";
import Book from "./Book/Book";
import { books } from "../../utils/reducer";
import "./ChildrenBooks.css";

const ChildrenBooks = () => {
  return (
    <div className="childrenBooks">
      <div className="childrenBooks__header">
        <h2>Books</h2>
      </div>
      <div className="childrenBooks__container">
        {books.map(({ id, title, publisher, price = "free", image }) => (
          <Book
            id={id}
            key={Math.random()}
            title={title}
            price={price}
            rating={publisher}
            image={image}
          />
        ))}
      </div>
    </div>
  );
};

export default ChildrenBooks;
