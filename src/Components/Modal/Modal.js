import React from 'react';
import classes from './Modal.css';
import Auxiliary from '../../hoc/Auxiliary';
import Backdrop from '../UI/Backdrop/Backdrop';

const modal = (props) =>{
    return(
        <Auxiliary>
            <div className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
                {props.children}
            </div>
            <Backdrop show={props.show}/>
        </Auxiliary>
    )
}

export default modal;