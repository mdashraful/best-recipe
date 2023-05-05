import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { Button, Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();

    if (loader) {
        return (
            <div className="text-center mt-5 pt-5">
                <Button variant="dark" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </Button>
            </div>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;