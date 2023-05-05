import React, { useEffect, useState } from 'react';
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import toast from 'react-hot-toast';
import RecipeCard from '../../includes/RecipeCard/RecipeCard';

const SingleChef = () => {
    const chefData = useLoaderData();
    const [recipes, setRecipes] = useState([]);
    const { id, name, description, experience, numberOfRecipe, likes, image } = chefData;
    // const [favorite, setFavorite] = useState(false);

    // console.log(chefData);
    useEffect(() => {
        fetch(`https://best-recipe-server-mdashraful.vercel.app/recipes/${id}`)
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);
    // console.log(recipes);

    const handleFavorite = (id) => {
        const favArray = [];
        const stored = JSON.parse(localStorage.getItem('favoriteId'));
        if (stored) {
            const newStored = [...stored, id];
            // stored.push(id);
            localStorage.setItem('favoriteId', JSON.stringify(newStored))
        } else {
            favArray.push(id);
            localStorage.setItem('favoriteId', JSON.stringify(favArray));
        }
        toast('The Recipe is Your Favorite');
        // setFavorite(true);
    }

    return (
        <div>
            <Row xs={1} md={2} className="g-4 my-3">
                <Col >
                    <Card className='rounded-0 h-100'>
                        <Card.Body className="border-0">
                            <Card.Title className="fs-3 text-danger text-decoration-underline">{name}</Card.Title>
                            <Card.Text>{description}</Card.Text>
                            <Card.Text className="fw-semibold">
                                Experience: {experience}
                                <br />
                                Popular Recipe: {numberOfRecipe}
                                <br />
                                <span className="d-flex align-items-center">
                                    Likes: {likes}
                                </span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='h-100'>
                    <Card.Img variant="top" src={image} className='h-100' />
                </Col>
            </Row>
            <Row xs={1} md={2} lg={3} className="g-4 my-3">
                {
                    recipes.map((recipe, index) =>
                        <RecipeCard key={index} recipe={recipe} handleFavorite={handleFavorite}></RecipeCard>
                    )
                }
            </Row>
        </div>
    );
};

export default SingleChef;