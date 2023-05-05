import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Form, Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    return (
        <Navbar bg="dark" expand="lg" className='px-2 py-3 '>
            <Container fluid>
                <Navbar.Brand href="#" className='text-secondary fw-bold fs-2'>Best Recipe</Navbar.Brand>
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
                                isActive ? "fw-bold me-3 text-danger text-decoration-none" : "text-decoration-none me-3 text-white"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                isActive ? "fw-bold me-3 text-danger text-decoration-none" : "text-decoration-none me-3 text-white"
                            }
                        >
                            Blog
                        </NavLink>
                    </Nav>
                    {
                        user ? <>
                            <div className='me-3'>
                                <Image src={user.photoURL} title={user.displayName} style={{ height: "50px" }} alt="" roundedCircle />
                            </div>
                            <Link>
                                <Button onClick={logout} variant="outline-secondary">
                                    Logout
                                </Button>
                            </Link>
                        </> : <Link to='/login'>
                            <Button variant="outline-secondary">
                                Login
                            </Button>
                        </Link>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;