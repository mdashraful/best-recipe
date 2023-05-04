import React, { useEffect, useState } from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const SingleChef = () => {
    const chefData = useLoaderData();
    const [recipes, setRecipes] = useState([]);
    const { id, description, experience, numberOfRecipe, likes, image } = chefData;
    // console.log(chefData);
    useEffect(() => {
        fetch(`https://best-recipe-server-mdashraful.vercel.app/recipes/${id}`)
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);
    console.log(recipes);
    return (
        <div>
            <Row xs={1} md={2} className="g-4 my-3">
                <Col>
                    <Card>
                        <Card.Body className="border-0">
                            <Card.Title className="fs-3 text-danger text-decoration-underline">{name}</Card.Title>
                            <Card.Text>{description}</Card.Text>
                            <p className="fw-semibold">
                                Experience: {experience}
                                <br />
                                Popular Recipe: {numberOfRecipe}
                                <br />
                                <span className="d-flex align-items-center">
                                    Likes: {likes}
                                </span>
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card.Img variant="top" src={image} />
                </Col>
            </Row>
            <Row xs={1} md={2} lg={3} className="g-4 my-3">
                {
                    recipes.map(recipe =>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={recipe.recipeImg} />
                                <Card.Body>
                                    <Card.Title>{recipe.recipeName}</Card.Title>
                                    <Card.Text>
                                        <ol className='ms-0'>
                                            {
                                                recipe.ingredients.map(ingredient =>
                                                    <>
                                                        <li>{ingredient}</li>
                                                    </>
                                                )
                                            }
                                        </ol>
                                        {recipe.cooking}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </div>
    );
};

export default SingleChef;