import React from "react";
import { useSelector } from "react-redux";
import BookCard from "./BookCard";

function MyBooks() {
    const user = useSelector(state => state.user.data)
    let bookCards;

    if (user && user.books && user.books.length > 0) {
        bookCards = user.books.map(book => (
          <BookCard id={book.id} title={book.title} author={book.author} img={book.img} />
        ));
      } else {
        bookCards = <p style={{ marginLeft: '48%', marginTop: '10rem' }}>No books available</p>;
      }

    return (
        <div className="ui cards" style={{ marginTop: '3vh' }}>{bookCards}</div>
      );

}

export default MyBooks;