import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const ChefCards = ({ chefs }) => {
    const { id, name, image, experience, numberOfRecipe, likes, description } = chefs;

    return (
        <Col>
            <Card className='rounded-0'>
                <Card.Img variant="top" src={image} style={{ height: "250px" }} className='rounded-0' />
                <Card.Body>
                    <Card.Title className='fs-3 mb-3'>{name}</Card.Title>
                    <Card.Text>
                        <p className='fw-semibold'>Experience: <span className='fw-normal'>{experience}</span></p>
                        <p className='fw-semibold'>Recipes: <span className='fw-normal'>{numberOfRecipe}</span></p>
                        <p className='fw-semibold'>Likes: <span className='fw-normal'>{likes}</span></p>
                    </Card.Text>
                    <div className='text-center'>
                        <Button className='btn btn-secondary'>View Recipe</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ChefCards;