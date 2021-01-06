import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import OrderSummary from  '../../Components/Burger/OrderSummary/OrderSummary';
import Modal from '../../Components/Modal/Modal';
import axios from '../../axios-order';
import Spinner from '../../Components/UI/Spinner/Spinner';

const AdditionalPrice = {
    salad: 0.4,
    cheese: 0.1,
    meat: 0.5,
    bacon: 0.2
}


class BurgerBuilder extends Component{
    state = {
        ingredients : null,
        totalPrice: 4,
        orderStatus: false,
        purchasingStatus: false,
        loading: false
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
        this.setState({loading: true})
        const order ={
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer:{
                name:'Ismaeel',
                address: '23423423',
                contact: '12343454'
            }
        };
        axios.post('/orders.json', order)
        .then(res =>{
            this.setState({loading: false ,purchasingStatus:false})
        }).catch(err =>{
            this.setState({loading: false ,purchasingStatus:false})
        })
    }

    componentDidMount(){
        axios.get('/ingredients.json')
        .then(res =>{
            this.setState({ingredients:res.data})
        });
    }

    render(){
        let orderSummary = null;
        const valueCond = {...this.state.ingredients};
        for (let key in valueCond){
            valueCond[key] = valueCond[key] <= 0
        }
        let burger = <Spinner />
        if (this.state.ingredients){
            burger = (
                <Auxiliary>
                    <Burger ingredients= {this.state.ingredients}/>
                    <BuildControls 
                    adding={this.addIng} 
                    removing={this.removeIng}
                    disableInfo={valueCond}
                    odrderStat={this.state.orderStatus}
                    clicked={this.orderSummaryHandler}/>
                </Auxiliary>
            );
            orderSummary = <OrderSummary 
            ingredients={this.state.ingredients}
            cancelled={this.cancelledButtonHandler}
            continued={this.continueButtonHandler}
            price={this.state.totalPrice}
            />;
        }
        if (this.state.loading){
            orderSummary = <Spinner/>
        }
        return(
            <Auxiliary>
                <Modal show={this.state.purchasingStatus} backClicked={this.cancelledButtonHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Auxiliary>
        )
    }
}

export default BurgerBuilder;