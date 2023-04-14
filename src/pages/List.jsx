import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { useFirebase } from "../context/Firebase";
import '../css/Button.css';
import '../css/Glassmorphism.css';

const ListingPage = () => {

    const firebase = useFirebase();

    const [name, setName] = useState("");
    const [isbnNumber, setIsbnNumber] = useState("");
    const [price, setPrice] = useState("");
    const [coverPic, setCoverPic] = useState("");

    const handleSubmit = async(e) => {
e.preventDefault();
await firebase.handleCreateNewListing(name, isbnNumber, price, coverPic ) //
alert("Your listing has been created Successfully!")
    };
    return (
        <>
        <div className="glass-container"> 
        <div className="container">
  <h1 className="heading">List Your Book</h1>
</div>

        <div className="container mt-5 ">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Book Name</Form.Label>
                    <Form.Control
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                        placeholder="Book name"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>ISBN </Form.Label>
                    <Form.Control
                        onChange={(e) => setIsbnNumber(e.target.value)}
                        value={isbnNumber}
                        type="text"
                        placeholder="ISBN Number"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        type="number"
                        placeholder="Enter Price (For Donation: Set Price= Rs.0)"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Cover Picture</Form.Label>
                    <Form.Control
                        onChange={(e) => setCoverPic(e.target.files[0])}
                        type="file"
                        width="200" height="200"
                        required
                    />
                </Form.Group>

                <button className="button-71" role="button" variant="primary" type="submit">
                    Create
                </button>
            </Form>
        </div>
        </div>
        </>
    );
};

export default ListingPage;