import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import BookCard from "../components/Card";
import '../css/Home.css';
import '../css/Card.css';
import '../pages/Login.jsx';

const HomePage = () => {
    const firebase = useFirebase();

    const [books, setBooks] = useState([]);

    useEffect(() => {
        firebase.listAllBooks().then((books) => setBooks(books.docs));
    }, []);

    return (
        <div className="container mt-5">
            <div className="card-group-container">

                {books.map((book) => (
                    <BookCard
                        link={`/book/view/${book.id}`}
                        key={book.id}
                        id={book.id}
                        {...book.data()}
                    />
                ))}

            </div>
        </div>
    );
};

export default HomePage;
