import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import BookCard from "../components/Card";
import CardGroup from 'react-bootstrap/CardGroup';

const OrdersPage = () => {
    const firebase = useFirebase();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        if (firebase.isLoggedIn)
            firebase.fetchMyBooks(firebase.user.uid).then((books) => setBooks(books.docs));
    }, [firebase]);

    console.log(books)
    if (!firebase.isLoggedIn) return <h1 className="text-light">Please wait OR LogIn if not...!</h1>
    return (
        <div className="container mt-5">
        <div className="card-group-container">
                {
                    books.map(book => <BookCard link={`/books/orders/${book.id}`} key={book.id} id={book.id} {...book.data()} />)
                }
        </div>
        </div>
    );
};
export default OrdersPage;