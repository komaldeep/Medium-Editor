import React, {Component} from "react";

export default class Comments extends Component{

    render(){
        return(
            <div>
                <div className="reply-header">
                    <b>Response</b>
                </div>

                <div className="nav-reply">
                    <div className="reply-sample-template">
                        <img src={require('./../../../../Images/profile.png')}/>
                        <span className="response"> Komaldeep Chahal </span> <br/>

                        <div className="reply-text"
                            dangerouslySetInnerHTML={{ __html: this.props.item}}
                        />

                    </div>
                </div>
            </div>
        );
    }
}

