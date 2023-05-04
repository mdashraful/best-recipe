import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefCards = ({ chefs }) => {
    const { id, name, image, experience, numberOfRecipe, likes, description } = chefs;

    return (
        <Col>
            <Card className='rounded-0'>
                <Card.Img variant="top" src={image} style={{ height: "250px" }} className='rounded-0' />
                <Card.Body>
                    <Card.Title className='fs-3 mb-3'>{name}</Card.Title>
                    <Card.Text>
                        <span className='fw-semibold d-block'>Experience: <span className='fw-normal'>{experience}</span></span>
                        <span className='fw-semibold d-block'>Recipes: <span className='fw-normal'>{numberOfRecipe}</span></span>
                        <span className='fw-semibold d-block'>Likes: <span className='fw-normal'>{likes}</span></span>
                    </Card.Text>
                    <div className='text-center'>
                        <Link to={`/chef/${id}`}>
                            <Button className='btn btn-secondary w-100 fw-semibold rounded-0'>View Recipe</Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ChefCards;