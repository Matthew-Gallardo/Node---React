import React from 'react';
import './Bookstore.css';


export const BookstoreResult = ({ bookstoreTbl }) => {
    return (
        <table>
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
    );
};
