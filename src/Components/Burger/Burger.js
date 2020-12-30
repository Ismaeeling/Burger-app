import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) =>{
    let transformedeIngredients = Object.keys(props.ingredients)
    .map(ingredient => {
        return [...Array(props.ingredients[ingredient])].map((_, i) =>{
            return <BurgerIngredient key={ingredient + i} type={ingredient}/>
        })
    }).reduce((arr, el)=>{
        return arr.concat(el)
    },[]);

    if(transformedeIngredients.length === 0){
        transformedeIngredients = <p>Please add ingredient</p>
    }
    
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedeIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default burger;