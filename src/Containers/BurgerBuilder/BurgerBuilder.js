import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

const AdditionalPrice = {
    salad: 0.4,
    cheese: 0.1,
    meat: 0.5,
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

    // addIng = (type) =>{
    //     const oldIng = this.state.ingredients[type];
    //     const newIng = oldIng + 1;
    //     const copyIng = {...this.state.ingredients};
    //     copyIng[type] = newIng;
    //     const addPrice = AdditionalPrice[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice + addPrice;
    //     console.log(this.state.totalPrice);
    //     this.setState({totalPrice: newPrice, ingredients: copyIng});
    // }

    addIng = (type) =>{
        const oldIng = this.state.ingredients[type];
        const newIng = oldIng + 1;
        const updateIng = {...this.state.ingredients};
        updateIng[type]= newIng;
        const oldPrice = this.state.totalPrice;
        const addedPrice = AdditionalPrice[type];
        const newPrice = oldPrice + addedPrice;
        this.setState({totalPrice: newPrice, ingredients: updateIng});
    }

    removeIng = (type) => {
        const oldIng = this.state.ingredients[type];
        if (oldIng <= 0){
            return;
        }
        const newIng= oldIng - 1;
        const updateIng = {...this.state.ingredients};
        updateIng[type] = newIng;
        const oldPrice = this.state.totalPrice;
        const addedPrice = AdditionalPrice[type];
        const newPrice = oldPrice - addedPrice;
        this.setState({totalPrice: newPrice, ingredients: updateIng});
    }

    

    render(){
        const valueCond = {...this.state.ingredients};
        for (let key in valueCond){
            valueCond[key] = valueCond[key] <= 0
        }
        return(
            <Auxiliary>
                <Burger ingredients= {this.state.ingredients}/>
                <BuildControls 
                adding={this.addIng} 
                removing={this.removeIng}
                disableInfo={valueCond}/>
                <h2>totalPrice = {this.state.totalPrice}</h2>
            </Auxiliary>
        )
    }
}

export default BurgerBuilder;