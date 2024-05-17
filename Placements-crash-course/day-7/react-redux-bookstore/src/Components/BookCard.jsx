import React from "react";
import { Link } from "react-router-dom";

export const BookCard = ({ bookDetails }) => {
  const {
    id,
    book_name,
    no_of_chapters,
    author,
    cover_photo,
    category,
    release_year,
  } = bookDetails;
  return (
    <div className="book-card">
      {/* ``` - Show Image in image tag with class `book-image` - Show Book name
      with class `book-name` - Show Author with class `book-author` - Show
      Category with class `book-category` - Show Release year with class
      `book-year` - Show Number of chapters with class `book-chapter` * Do not
      add any extra text, See the Image provided to know what needs to be
      displayed * ``` */}
      <img src={cover_photo} alt="" className="book-image" />
      <b className="book-name">{book_name}</b>
      <br /><br />
      <b className="book-author">{author}</b>
      <p className="book-category">{category}</p>
      <p className="book-year">{release_year}</p>
      <p className="book-chapter">Chapters: {no_of_chapters}</p>
      <button className="edit-book">
        <Link to={`/edit-book/${id}`}>Edit</Link>
      </button>
    </div>
  );
};
