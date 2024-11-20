import React, { useState, useRef } from "react";
import { Bookstore } from "../../models/bookstore";
import "./Bookstore.css";

export const BookstoreForm = () => {
  const [bookstore, setBookstore] = useState(new Bookstore());
  const [bookstoreTbl, setBookstoreTbl] = useState([]);

  const idRef = useRef(null);
  const isbnRef = useRef(null);
  const titleRef = useRef(null);
  const authorRef = useRef(null);
  const priceRef = useRef(null);
  const quantityRef = useRef(null);

  const submitForm = (event) => {
    event.preventDefault();

    const isbnValue = isbnRef.current.value.trim();
    if (isbnValue.length > 20) {
      alert("ISBN must be up to 20 characters only.");
      return;
    }

    const newBookstore = new Bookstore();
    newBookstore.Id = idRef.current.value;
    newBookstore.Isbn = isbnValue;
    newBookstore.Title = titleRef.current.value;
    newBookstore.Author = authorRef.current.value;
    newBookstore.Price = parseFloat(priceRef.current.value);
    newBookstore.Quantity = parseInt(quantityRef.current.value, 10);

    setBookstoreTbl((prevBookstoreTbl) => [...prevBookstoreTbl, newBookstore]);
    setBookstore(new Bookstore());
  };

  return (
    <>
      <h1>Bookstore Form</h1>
      <form id="bookstoreForm" onSubmit={submitForm}>
        ID: <input type="text" ref={idRef} required />
        <br />
        ISBN:
        <input
          type="text"
          ref={isbnRef}
          required
          onInvalid={(e) =>
            e.target.setCustomValidity("ISBN must be up to 20 characters.")
          }
          onInput={(e) => e.target.setCustomValidity("")}
        />
        <br />
        Title: <input type="text" ref={titleRef} required />
        <br />
        Author: <input type="text" ref={authorRef} required />
        <br />
        Price:
        <input
          type="number"
          ref={priceRef}
          required
          step="0.01"
          min="0"
        />
        <br />
        Quantity: <input type="number" ref={quantityRef} required />
        <br />
        <input type="submit" value="ADD BOOK" />
      </form>

      <br />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>ISBN</th>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {bookstoreTbl.map((book, index) => (
            <tr key={index}>
              <td>{book.Id}</td>
              <td>{book.Isbn}</td>
              <td>{book.Title}</td>
              <td>{book.Author}</td>
              <td>{book.Price}</td>
              <td>{book.Quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
