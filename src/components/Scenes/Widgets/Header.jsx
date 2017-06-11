import React, {Component} from "react";
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

export default class Header extends Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }



    render(){
        return(
            <div>
                <AppBar
                    title="Medium Editor"
                />
            </div>
        );
    }

    static childContextTypes = {
        muiTheme: React.PropTypes.object
    };

    getChildContext(){
        return {
            muiTheme: getMuiTheme(baseTheme)
        }
    }
}

