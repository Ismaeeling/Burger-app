import React ,{Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css';

class layout extends Component{
    render(){
        return(
            <Auxiliary>
                <div className={classes.content}>Toolbar, Side Drawer, Back Drop</div>
                <main>

                </main>
            </Auxiliary>
        )
    }
}

export default layout;