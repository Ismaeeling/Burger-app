import React from 'react';
import BurgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css'

const logo = () =>{
    return(
        <div className={classes.Logo}>
            <img src={BurgerLogo} alt=""/>
        </div>
    )
}

export default logo;