import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Rating } from '@smastrom/react-rating'
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import toast from 'react-hot-toast';

const RecipeCard = ({ recipe, handleFavorite }) => {
    const [favorite, setFavorite] = useState(false);
    const disableButton = () => {
        setFavorite(true);
    }
    return (
        <div>
            <Col>
                <Card className='rounded-0'>
                    <Card.Img variant="top" src={recipe.recipeImg} className='rounded-0' />
                    <Card.Body>
                        <Card.Title>
                            <div className='fs-4'>
                                {recipe.recipeName}
                            </div>
                        </Card.Title>
                        <div className='mb-3 d-flex justify-content-between'>
                            <Rating style={{ maxWidth: 150 }} value={recipe.rating} readOnly />
                            <div onClick={() => handleFavorite(recipe.id)}>
                                <Button onClick={disableButton} disabled={favorite} className='btn btn-danger'><BsFillBookmarkHeartFill /></Button>
                            </div>
                        </div>
                        <Card.Text>
                            {
                                recipe.ingredients.map((ingredient, index) =>
                                    <div key={index}>
                                        <li>{ingredient}</li>
                                    </div>
                                )
                            }
                            <div className='mt-3 mb-2'>
                                {recipe.cooking}
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default RecipeCard;