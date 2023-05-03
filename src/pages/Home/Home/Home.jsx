import React from 'react';
import './Home.css';
import Banner from '../../../includes/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import ChefCards from '../../../includes/ChefCards/ChefCards';
import { Row } from 'react-bootstrap';

const Home = () => {
    const chefsData = useLoaderData();
    console.log(chefsData);
    return (
        <div>
            <Banner></Banner>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    chefsData.map(chefs =>
                        <ChefCards key={chefs.id} chefs={chefs}>

                        </ChefCards>
                    )
                }
            </Row>
        </div>
    );
};

export default Home;