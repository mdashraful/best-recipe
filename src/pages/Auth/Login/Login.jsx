import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const Login = () => {
    const { loginUser, googleLogin, githubLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from)
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                navigate(from)
            })
            .catch((error) => console.log(error.message));
    };
    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                navigate(from)
            })
            .catch((error) => console.log(error.message));
    };
    return (
        <Container style={{ maxWidth: "500px" }}>
            <h3 className="text-center my-5"> Please Login!</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <div className="d-flex gap-2 mt-4">
                <button
                    onClick={handleGoogleLogin}
                    className="btn btn-outline-primary w-100"
                >
                    Login with Google
                </button>
                <button
                    onClick={handleGithubLogin}
                    className="btn btn-outline-primary w-100"
                >
                    Login with Github
                </button>
            </div>
            <p className="mt-3">
                <small>
                    Don't have an account <Link to="/register">Please Register</Link>
                </small>
            </p>
        </Container>
    );
};

export default Login;