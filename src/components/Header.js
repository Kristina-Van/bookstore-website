import React from 'react';
import logo from './Book-logo.png';
import Home from "../pages/Home";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Photos from "../pages/Photos";
import {Container, Form, FormControl, Nav, Navbar, NavbarBrand} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import Button from "react-bootstrap/Button";
import {Route, Routes, Link} from "react-router-dom";


const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <NavbarBrand href="/">
                        <img src={logo}
                             height="30"
                             width="30"
                             className="d-inline-block align-top"
                             alt=""/>
                    </NavbarBrand>

                    <NavbarToggle area-controls="responsive-navbar-nav"/>
                    <NavbarCollapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to={`/`}>Home</Link>
                            <Link to={`/about`}>About</Link>
                            <Link to={`/contacts`}>Contacts</Link>
                            <Link to={`/photos`}>Photos</Link>
                        </Nav>
                        <Form inline="true">
                            <FormControl
                                inlist="true"
                                type="text"
                                className="me-sm-2"
                            />
                        </Form>
                        <Button variant="outline-info">Search</Button>
                    </NavbarCollapse>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/photos" element={<Photos/>}/>
            </Routes>
        </>
    );
};

export default Header;
