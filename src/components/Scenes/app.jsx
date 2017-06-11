import React, {Component} from "react";
import {Link} from "react-router";
import Editor from 'react-medium-editor';
import Header from './Components/Header';
import ReplyTemplate from './Components/ReplyTemplate';

export default class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            text:'',
        }
    }




    render(){
        return(
            <div>
                 <Header/>
                 <ReplyTemplate/>
            </div>
        );
    }
}

