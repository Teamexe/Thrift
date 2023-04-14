import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { ChakraProvider} from "@chakra-ui/react";
import '../css/Card.css';


import { useFirebase } from "../context/Firebase";

const BookCard = (props) => {
    const firebase = useFirebase();
    const navigate = useNavigate();


    const [url, setURL] = useState(null);
    useEffect(() => {
        firebase.getImageURL(props.imageURL).then((url) => setURL(url));
    }, []);

    // console.log(props);

    return (

        <ChakraProvider>
        <div id="card" className="glassmorphism-card" style={{ width: '18rem', margin: '25px', textAlign: 'center' }}>
            <Card.Img variant="top" src={url} />
            <Card.Body >
                <br></br>
                <Card.Title><strong>{props.name}</strong></Card.Title>
                <div className="text_inside">
                    {/* Title: {props.name} <br />
                    Seller: {props.displayName} <br /> */}
                    Price: Rs.{props.price}
                </div>
                <button onClick={e => navigate(props.link)}
                    variant="primary" className="button-71" role="button">View</button>
            </Card.Body>
           
        </div>
        </ChakraProvider>
       
    );
};
export default BookCard;
