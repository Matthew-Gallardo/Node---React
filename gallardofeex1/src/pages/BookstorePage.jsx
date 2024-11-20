import React, { useState } from 'react';
import { BookstoreForm } from '../components/bookstore/BookstoreForm';
import { BookstoreResult } from '../components/bookstore/BookstoreResult';

export const BookstorePage = () => {
    const [bookstoreTbl, setBookstoreTbl] = useState([]);

    const addBookToTable = (book) => {
        setBookstoreTbl((prevBookstoreTbl) => [...prevBookstoreTbl, book]);
    };

    return (
        <div>
            <BookstoreForm onSubmit={addBookToTable} />
            <BookstoreResult bookstoreTbl={bookstoreTbl} />
        </div>
    );
};
