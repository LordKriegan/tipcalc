import React from 'react';
import { Navbar } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa'; 
const CalcNav = () => {
    return (
        <Navbar style={{marginBottom: '10px'}} bg="primary" className="navbar-dark" expand="lg">
            <Navbar.Brand className="mx-auto" href="#home">Show the Waiter/Waittress some <FaHeart style={{color: "red"}} /></Navbar.Brand>
        </Navbar>
    )
}

export default CalcNav;