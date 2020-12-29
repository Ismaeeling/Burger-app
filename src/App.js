import React, { Component } from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
     <div>
       <Layout/>
       <BurgerBuilder/>
     </div>  
    );
  }
}

export default App;
