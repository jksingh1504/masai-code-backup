import React from "react";
import { BookCard } from "./BookCard";
import { useSelector } from "react-redux";

export const BookList = () => {
  const bookList = useSelector((state) => state.bookReducer.books);
  return (
    <div data-testid="book-list" className="book-list">
      {/* Map through books using BookCard component */}
      {bookList.map((book) => (
        <BookCard key={book.id} bookDetails={book} />
      ))}
    </div>
  );
};
