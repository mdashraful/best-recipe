import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Form, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#" className='text-success fw-bold fs-4'>Best Recipe</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "fw-bold me-3 text-success text-decoration-none" : "text-decoration-none text-black"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                isActive ? "fw-bold text-success text-decoration-none" : "text-decoration-none text-black"
                            }
                        >
                            Blog
                        </NavLink>
                    </Nav>
                    <Button variant="outline-success">Login</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;