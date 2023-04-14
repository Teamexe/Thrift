import React from "react";
import { useFirebase } from "../context/Firebase";

const Delete = ({ orderId }) => {
    const firebase = useFirebase();

    const handleDeleteClick = () => {
        firebase.deleteOrder(orderId)
            .then(() => console.log("Order deleted successfully"))
            .catch((error) => console.log(error));
    };

    return (
        <button className="button-71" role="button" variant="danger" onClick={handleDeleteClick}>
            Delete
        </button>
    );
};

export default Delete;
