import { async } from "@firebase/util";
import { verifyPasswordResetCode } from "firebase/auth";
import React, { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//hook
import { useFirebase } from "../context/Firebase";
import '../css/Button.css';
import '../css/Logout.css';

const RegisterPage = () => {
    const firebase = useFirebase();
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (firebase.isLoggedIn) {
            //navigate to home
            navigate("/");
            alert("You are already LoggedIn!")
        }
    }, [firebase, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("signup a user...")
        const result = await firebase.signupUserWithWmailAndPassword(email, password);
         console.log("successfull", result);
         alert("You are successfully registered!")
    };

    // console.log(firebase);  //for ispecting what we get from  the hook
   return (
        <div id="form" className="container mt-5">
            <Form onSubmit={handleSubmit}>
            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Display Name</Form.Label>
                    <Form.Control
                        onChange={(e) => setName(e.target.value)}
                        value={displayName}
                        type="text"
                        placeholder="Enter your name"
                        required
                    />
                </Form.Group> */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="Enter email"
                        required
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder="Password"
                        required
                    />
                </Form.Group>
                <div id="button-group">
                <button className="button-71" role="button" variant="primary" type="submit" >
                    Create Account
                </button>
            <h1 className="m-3">OR</h1>
            <button onClick={firebase.signinWithGoogle} variant="danger" className="button-71" role="button">SignUp with Google</button>
            </div>
            </Form>
        </div>
    );
};

export default RegisterPage;

