import React, { useContext, useEffect, useState, lazy, Suspense } from 'react';
import './Home.css';
import Banner from '../../../includes/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
// import ChefCards from '../../../includes/ChefCards/ChefCards';
import { Col, Row } from 'react-bootstrap';
import { AuthContext } from '../../../providers/AuthProvider';
import AdSection from '../../../includes/AdSection/AdSection';
import Marquee from "react-fast-marquee";
import PopularSection from '../../../includes/PopularSection/PopularSection';

const ChefCards = lazy(() => import('../../../includes/ChefCards/ChefCards'));

const Home = () => {
    const chefsData = useLoaderData();
    const [popularRecipes, setPopularRecipes] = useState([]);

    useEffect(() => {
        fetch('https://best-recipe-server-mdashraful.vercel.app/most-popular-recipe')
            .then(res => res.json())
            .then(data => setPopularRecipes(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <Banner></Banner>
            <div className='my-5'>
                <div className=''>
                    <p className='fs-1 fw-semibold text-center'><u>Top Chefs in The World</u></p>
                </div>
                <Suspense fallback={<div className='text-center'>Loading...</div>}>
                    <Row xs={1} md={2} lg={3} className="g-4 my-1">
                        {
                            chefsData.map(chefs =>
                                <ChefCards key={chefs.id} chefs={chefs}>
                                </ChefCards>
                            )
                        }
                    </Row>
                </Suspense>
            </div>
            <AdSection></AdSection>
            <div>
                <p className='fs-2 fw-semibold text-center mt-5'><u>Popular Recipes</u></p>
                <div className='my-3'>
                    <Marquee>
                        {
                            popularRecipes.map(recipe =>
                                <PopularSection key={recipe.id} recipe={recipe}></PopularSection>
                            )
                        }
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Home;