import React from 'react';
import { useLoaderData } from 'react-router';
import Recipe from '../Recipe/recipe';

const AllRecipes = () => {
    const data = useLoaderData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-8 md:mt-12'>
            {
                data.map(recipe => <Recipe key={recipe._id} recipe={recipe}></Recipe>)
            }
        </div>
    );
};

export default AllRecipes;