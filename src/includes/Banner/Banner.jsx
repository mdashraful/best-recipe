import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../assets/banner_img/banner-1.jpg';
import banner2 from '../../assets/banner_img/banner2.jpg';
import banner3 from '../../assets/banner_img/banner3.jpg';


const Banner = () => {
    return (
        <Carousel className='banner'>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-fluid"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='display-4'>World Best Chefs</h3>
                    <p>The recipes introduced by the world's famous chefs. Delicious, testy and healthy</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-fluid"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='display-4'>World Best Chefs</h3>
                    <p>The recipes introduced by the world's famous chefs. Delicious, testy and healthy</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-fluid"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='display-4'>World Best Chefs</h3>
                    <p>The recipes introduced by the world's famous chefs. Delicious, testy and healthy</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;