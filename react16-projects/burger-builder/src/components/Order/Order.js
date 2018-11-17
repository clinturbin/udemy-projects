import React from 'react';

import classes from './Order.module.css';

const order = (props) => {
    // Turn ingredients into an array of ingredients
    // let transformedIngredients = Object.keys( props.ingredients )
    //     .map( igKey => {
    //         return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
    //             return <BurgerIngredient key={igKey + i} type={igKey} />;
    //         } );
    //     } )
    //     .reduce((arr, el) => {
    //         return arr.concat(el)
    //     }, []);

    //  Alternative
    const ingredients = [];
    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    }

    const ingredientOutput = ingredients.map(ingredient => {
        return (
            <span 
                style={{
                    textTransform: 'capitalize',
                    display: 'inline-block',
                    margin: '0 8px',
                    border: '1px solid #ccc',
                    padding: '5px'
                }}
                key={ingredient.name}
            >{ingredient.name} ({ingredient.amount})</span>
        );
    });

    return (
        <div className={classes.Order}>
            <p>Ingedients: {ingredientOutput}</p>
            <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    );
};

export default order;