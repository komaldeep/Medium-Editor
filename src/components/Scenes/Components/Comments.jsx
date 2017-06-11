import React, {Component} from "react";

export default class Comments extends Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }



    render(){
        return(
            <div className="nav-reply">
                <div className="reply-sample-template">
                    <img src={require('./../../../../Images/profile.png')}/>
                    <span className="response"> Komaldeep Chahal </span> <br/>

                    <div
                         dangerouslySetInnerHTML={{ __html: this.props.item}}
                    />

                </div>
            </div>
        );
    }
}

