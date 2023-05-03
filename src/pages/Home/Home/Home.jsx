import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../assets/banner_img/johnathan-macedo-4NQEvxW2_4w-unsplash.jpg';
import banner2 from '../../../assets/banner_img/sebastian-coman-photography-cQbOSRpElxw-unsplash.jpg';
import banner3 from '../../../assets/banner_img/thomas-marban-EHK-EH1SRzQ-unsplash.jpg';
import './Home.css';

const Home = () => {
    return (

        <Carousel className='banner'>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-fluid"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-fluid"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-fluid"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Home;