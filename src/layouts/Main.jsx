import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Main = () => {
    return (
        <Container>
            <Header></Header>
            <div className='min-vh-100'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </Container>
    );
};

export default Main;