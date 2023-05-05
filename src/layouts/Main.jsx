import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './Main.css';

const Main = () => {
    return (
        <Container className='app'>
            <header>
                <Header></Header>
            </header>
            <main>
                <div className='min-vh-100'>
                    <Outlet></Outlet>
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </Container>
    );
};

export default Main;