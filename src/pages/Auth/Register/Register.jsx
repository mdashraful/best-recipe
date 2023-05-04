import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';


const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleRegister = (event) => {
        event.preventDefault()
        setError('')
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 8) {
            setError('Your password has at least 8 character');
            return;
        }
        if (/(?=.*[0-9])/.test(password)) {
            setError('Your password has at least 1 number');
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                updateUserProfile(name, photo)
                    .then(result => {
                        form.reset()
                    })
                    .catch(error => setError(error.message))
                console.log(loggedUser)
            })
            .catch(error => {
                setError(error.message)
            })

    }

    return (
        <Container style={{ maxWidth: '500px' }}>
            <h3 className="text-center my-5"> Please Register!</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Your Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhotoURL">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Enter Your Photo URL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <p className='text-danger'>{error}</p>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <p className="mt-3"><small>Already have an account <Link to='/login'>Please Login</Link></small></p>
            </Form>
        </Container>
    );
};

export default Register