import React, {Component} from "react";
import {Link} from "react-router";
import Editor from 'react-medium-editor';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { all_replies } from './../../actions/postActions';

class ReplyBox extends Component{

    constructor(props){
        super(props);
        this.state = {
            text:'',
            showtemplate:false,
        }
    }


    handleChange=(text)=>{
        this.setState({text: text});
    }

    replyonfocus=()=>{
        this.setState({
            showtemplate:true
        })
    }

    publishbutton=()=>{
        this.props.all_replies(this.state.text);
        // this.Editor.destroy();
        this.setState({
            text: ''
        });
    }


    render(){

        return(
            <div>
                <div className="reply-header">
                <b>Response</b>
                </div>
                <div className="nav-reply">

                    {this.state.showtemplate == false ?
                        <div onClick={this.replyonfocus}
                             className="reply-sample">
                            <img src={require('./../../../../Images/profile.png')}/>
                            <span className="response">Write your Response</span>
                        </div>

                        :
                        <div className="reply-sample-template">
                            <div className="reply-sample-template">
                                <img src={require('./../../../../Images/profile.png')}/>
                                <span className="response"> Komaldeep Chahal </span> <br/>

                                <Editor
                                    style={{ outline: '0px', marginLeft:'10px', marginRight:'10px', marginTop:'5px'}}
                                    text={this.state.text}
                                    onChange={this.handleChange}
                                    options={{
                                     placeholder: {text: "Write your response here"},
                                        toolbar: {buttons: ['bold', 'italic', 'underline',
                                        {
                                            name: 'h2',
                                            action: 'append-h2',
                                            aria: 'header type 1',
                                            tagNames: ['h2'],
                                            contentDefault: '<H4>T</H4>',
                                            classList: ['custom-class-h1'],
                                        },
                                        {
                                            name: 'h3',
                                            action: 'append-h3',
                                            aria: 'header type 1',
                                            tagNames: ['h3'],
                                            contentDefault: '<H5>T</H5>',
                                        },
                                        {
                                            name:"anchor",
                                            customClassOption: null,
                                            customClassOptionText: 'Button',
                                            linkValidation: true,
                                            placeholderText: 'Write or Paste link',
                                        }
                                    ],
                                    }
                                    }}
                                />



                            </div>
                            <div className="reply-footer">
                                <RaisedButton onClick={this.publishbutton} label="Publish" primary={true} />
                            </div>
                        </div>
                    }

                </div>
            </div>
        );
    }
}


function mapStateToProps(store) {
    return { Reducers: store.Reducers};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        all_replies
    }, dispatch);
}


const ReplyTemplate = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReplyBox)

export default ReplyTemplate;

