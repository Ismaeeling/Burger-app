import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) =>{
    return(
        <div className={classes.BuildControl}>
            <h2 className={classes.Label}>{props.label}</h2>
            <button className={classes.Moe} onClick={props.added}>More</button>
            <button 
            className={classes.Less} 
            onClick={props.removed}
            disabled={props.disable}>Less</button>
        </div>
    )
}

export default buildControl;