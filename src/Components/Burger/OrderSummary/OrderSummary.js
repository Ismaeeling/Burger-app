import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) =>{
    const orderSummaryObjects = Object.keys(props.ingredients)
    .map(ing => {
        return <li key={ing}>{ing} : {props.ingredients[ing]}</li>
    });
    return(
        <Auxiliary>
            {orderSummaryObjects}
            <p>Total Price: <b>{props.price.toFixed(2)}</b></p>
            <Button btnType="Danger" clicked={props.cancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.continued}>Continue</Button>
        </Auxiliary>
    )
}

export default orderSummary;