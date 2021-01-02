import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary'

const orderSummary = (props) =>{
    const orderSummaryObjects = Object.keys(props.ingredients)
    .map(ing => {
        return <li key={ing}>{ing} : {props.ingredients[ing]}</li>
    });
    return(
        <Auxiliary>
            {orderSummaryObjects}
        </Auxiliary>
    )
}

export default orderSummary;