import React ,{Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class layout extends Component{
    render(props){
        return(
            <Auxiliary>
                <div className={classes.content}>
                    <Toolbar/>
                    <SideDrawer/>
                </div>
                <main>
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }
}

export default layout;