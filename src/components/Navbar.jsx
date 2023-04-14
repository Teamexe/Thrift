import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import '../css/Navbar.css';

const MyNavbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };

    const handleDropdownClick = (event) => {
        event.stopPropagation();
    };

    return (
        <Navbar bg="muted" variant="black" className="glassmorphism sticky-top" expand="md">
            <Container fluid className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <Navbar.Brand href="#home" className="mx-2 mb-0"> <Link to="/"><img src="/mainlogo.png" alt='logo' className="w-30 h-16"/></Link></Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav" className="justify-content-end">
                    <Nav style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        <Nav.Link href="/" className="mx-3">Home</Nav.Link>
                        {/* <Nav.Link href="/book/list" className="mx-3">Add Listing</Nav.Link> */}
                        <Nav.Link href="/book/orders" className="mx-3">Orders</Nav.Link>
                        <Nav.Link className="mx-3" onClick={handleDropdownToggle}>
                            Account
                            {showDropdown && (
                                <Nav className="dropdown-menu my-dropdown-menu menu-list" style={{ fontSize: '20px', fontWeight: 'bold'}} onClick={handleDropdownClick}>
                                    <div id="box" className="glassmorphism">
                                    <div className="row">
                                        <div className="col">
                                            <Nav.Link href="/login" className="dropdown-item">Login</Nav.Link>
                                        </div>
                                        <div className="col">
                                            <Nav.Link href="/register" className="dropdown-item">Register</Nav.Link>
                                        </div>
                                        <div className="col">
                                            <Nav.Link href="/logout" className="dropdown-item">Log Out</Nav.Link>
                                        </div>
                                    </div>
                                    </div>
                                </Nav>
                            )}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
