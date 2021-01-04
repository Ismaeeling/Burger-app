import React ,{Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class layout extends Component{
    state = {
        showSideDrawer: true
    }

    closeSideDrawerHandler = () =>{
        this.setState({showSideDrawer: false})
    }
    render(props){
        return(
            <Auxiliary>
                <div className={classes.content}>
                    <Toolbar/>
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