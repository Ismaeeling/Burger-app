import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

const AdditionalPrice = {
    salad: 0.4,
    cheese: 0.1,
    meat: 0.7,
    bacon: 0.2
}

class BurgerBuilder extends Component{
    state = {
        ingredients : {
            salad: 0,
            cheese: 0,
            meat: 0,
            bacon:0
        },
        totalPrice: 4
    }

    addIng = (type) =>{
        const oldIng = this.state.ingredients[type];
        const newIng = oldIng + 1;
        const copyIng = {...this.state.ingredients};
        copyIng[type] = newIng;
        const addPrice = AdditionalPrice[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + addPrice;
        console.log(this.state.totalPrice);
        this.setState({totalPrice: newPrice, ingredients: copyIng});
    }

    

    render(){
        return(
            <Auxiliary>
                <Burger ingredients= {this.state.ingredients}/>
                <BuildControls addeding={this.addIng}/>
                <h2>totalPrice = {this.state.totalPrice}</h2>
            </Auxiliary>
        )
    }
}

export default BurgerBuilder;