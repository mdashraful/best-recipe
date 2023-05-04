import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleChef = () => {
    const chefData = useLoaderData();
    console.log(chefData);
    return (
        <div>
            <h2>hello</h2>
        </div>
    );
};

export default SingleChef;