import React from 'react';

const PopularSection = ({ recipe }) => {
    return (
        <div className="card bg-dark text-white me-4 my-3 rounded-0" style={{ width: "250px" }}>
            <img className="card-img rounded-0" src={recipe.recipeImg} alt="Card image" />
            <div className="card-img-overlay">
                <h5 className="card-title">{recipe.recipeName}</h5>
            </div>
            <button className='btn btn-secondary rounded-0'>View</button>
        </div>
    );
};

export default PopularSection;