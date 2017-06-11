import React, {Component} from "react";
import {Link} from "react-router";
import Editor from 'react-medium-editor';

export default class ReplyTemplate extends Component{

    constructor(props){
        super(props);
        this.state = {
            text:'',
            showtemplate:false,
        }
    }


    handleChange=(text, medium)=>{
        this.setState({text: text});
    }

    replyonfocus=()=>{
        this.setState({
            showtemplate:true
        })
    }

    onReplyblur=() => {
        this.setState({
            showtemplate:false
        })
    }



    render(){
        return(
            <div>
                <div className="reply-header">
                <b>Response</b>
                </div>
                <div className="nav-reply">

                    {this.state.showtemplate == false ?
                        <div onClick={this.replyonfocus.bind(this)}
                             className="reply-sample">
                            <img src={require('./../../../../Images/profile.png')} />
                        </div>

                        :
                        <div className="reply-sample-template"
                             onBlur={this.onReplyblur.bind(this)}
                        >

                            <Editor
                                style={{ outline: '0px', marginLeft:'10px', marginRight:'10px' }}
                                text={this.state.text}
                                onChange={this.handleChange}
                                options={{toolbar: {buttons: ['bold',
                                    'italic',
                                    'underline',
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
                                }}}
                            />
                        </div>
                    }

                </div>
            </div>
        );
    }
}

