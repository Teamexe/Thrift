import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form"
import { useParams } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import '../css/Details.css';



const BookDetailPage = () => {
    const params = useParams();
    const firebase = useFirebase();

    const [qty, setQty] = useState(1);
    const [data, setData] = useState(null);
    const [url, setURL] = useState(null);

    const [showText, setShowText] = useState(false);

    function handleClick() {
        setShowText(true);
        alert("Order Placed!")
      }
    

    // console.log(data);
    useEffect(() => {
        firebase.getBookById(params.bookID).then(value => setData(value.data()))
    }, []);

    useEffect(() => {
        if (data) {
            const imageURL = data.imageURL;
            firebase.getImageURL(imageURL).then((url) => setURL(url));
        }
    }, [data]);

    const placeOrder = async () => {
        if (qty > 0) {
            const result = await firebase.placeOrder(params.bookID, qty)
            console.log("Order Placed", result);
        }
        else if (qty < 0) {
            setQty(1);
        }
    };
    

    if (data == null) return <h1>Loading...</h1>;

    return (
        <div id="details">
        <div className="container mt-5 flex justify-center items-center"><img src={url} width="50%" style={{ borderRadius: "10px" }} /></div>
        <div className="container mt-5 " >
            <h1>{data.name}</h1>
            <h3>Details:</h3>
            <p>Price: Rs.{data.price}</p>
            <p>ISBN Number: {data.isbn}</p>
            <h3>Owner Details: </h3>
            <p>Name: {data.displayName}</p>
            <p>Email: {data.userEmail}</p>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                    onChange={(e) => setQty(e.target.value)}
                    value={qty}
                    type="number"
                    placeholder="Enter Quantity"
                    required
                />
            </Form.Group>
            <button onClick={() => {placeOrder(); handleClick();}} className="button-71" role="button" variant="success">Buy Now</button>
        </div>
        </div>
    );
};

export default BookDetailPage;