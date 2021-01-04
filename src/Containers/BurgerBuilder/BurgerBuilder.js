import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import OrderSummary from  '../../Components/Burger/OrderSummary/OrderSummary';
import Modal from '../../Components/Modal/Modal';


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
        totalPrice: 4,
        orderStatus: false,
        purchasingStatus: false
    }

    updateOrderStatus (ingredients) {
        const sum = Object.keys(ingredients)
        .map(ing =>{
            return ingredients[ing];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({orderStatus: sum > 0});
    }

    addIng = (type) =>{
        const oldIng = this.state.ingredients[type];
        const newIng = oldIng + 1;
        const updateIng = {...this.state.ingredients};
        updateIng[type]= newIng;
        const oldPrice = this.state.totalPrice;
        const addedPrice = AdditionalPrice[type];
        const newPrice = oldPrice + addedPrice;
        this.setState({totalPrice: newPrice, ingredients: updateIng});
        this.updateOrderStatus(updateIng);
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
        this.updateOrderStatus(updateIng);
    }
    
    orderSummaryHandler = () =>{
        this.setState({purchasingStatus: true});
    }

    cancelledButtonHandler = () =>{
        this.setState({purchasingStatus: false});
    }

    continueButtonHandler = () =>{
        alert('Continued Clicked');
    }

    render(){
        const valueCond = {...this.state.ingredients};
        for (let key in valueCond){
            valueCond[key] = valueCond[key] <= 0
        }
        return(
            <Auxiliary>
                <Modal show={this.state.purchasingStatus}>
                    <OrderSummary 
                    ingredients={this.state.ingredients}
                    cancelled={this.cancelledButtonHandler}
                    continued={this.continueButtonHandler}/>
                </Modal>
                <Burger ingredients= {this.state.ingredients}/>
                <BuildControls 
                adding={this.addIng} 
                removing={this.removeIng}
                disableInfo={valueCond}
                price={this.state.totalPrice}
                odrderStat={this.state.orderStatus}
                clicked={this.orderSummaryHandler}/>
            </Auxiliary>
        )
    }
}

export default BurgerBuilder;