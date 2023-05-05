import React, { useContext } from 'react';
import './Home.css';
import Banner from '../../../includes/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import ChefCards from '../../../includes/ChefCards/ChefCards';
import { Row } from 'react-bootstrap';
import { AuthContext } from '../../../providers/AuthProvider';
import AdSection from '../../../includes/AdSection/AdSection';

const Home = () => {
    const chefsData = useLoaderData();
    // console.log(chefsData);
    const name = useContext(AuthContext)
    return (
        <div>
            <Banner></Banner>
            <div className='my-5'>
                <div className=''>
                    <p className='fs-1 fw-semibold text-center'><u>Top Chefs in The World</u></p>
                </div>
                <Row xs={1} md={2} lg={3} className="g-4 my-1">
                    {
                        chefsData.map(chefs =>
                            <ChefCards key={chefs.id} chefs={chefs}>
                            </ChefCards>
                        )
                    }
                </Row>
            </div>
            <AdSection></AdSection>
        </div>
    );
};

export default Home;