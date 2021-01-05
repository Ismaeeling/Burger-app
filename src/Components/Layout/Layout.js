import React ,{Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class layout extends Component{
    state = {
        showSideDrawer: false
    }

    closeSideDrawerHandler = () =>{
        this.setState({showSideDrawer: false})
    }

    toggleSideDrawerHandler = () =>{
        this.setState((prevState) =>{
           return {showSideDrawer: !prevState.showSideDrawer}})
    }

    render(){
        return(
            <Auxiliary>
                <div className={classes.content}>
                    <Toolbar drawerToggleClicked={this.toggleSideDrawerHandler}/>
                    <SideDrawer open={this.state.showSideDrawer} closed={this.closeSideDrawerHandler}/>
                </div>
                <main>
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }
}

export default layout;