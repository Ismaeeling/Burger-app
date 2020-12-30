import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';


const Control = [
    {label : 'Salad', type:'salad'},
    {label : 'Meat', type:'meat'},
    {label : 'Bacon', type:'bacon'},
    {label : 'Cheese', type:'cheese'}
]

const buildControls = (props) =>{
    return(
        <div className={classes.BuildControls}>
            {Control.map(control =>{ 
                return <BuildControl 
                key={control.label} 
                label={control.label} 
                added={()=> props.addeding(control.type)}/>
            })}
        </div>

    )
}

export default buildControls;