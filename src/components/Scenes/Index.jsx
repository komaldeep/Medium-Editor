import React, {Component} from "react";
import {Link} from "react-router";
import Header from './Components/Header';
import ReplyTemplate from './Components/ReplyTemplate';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import Comments from './Components/Comments';
import Blog from './Components/Blog';

class Index extends Component{

    constructor(props){
        super(props);
        this.state = {
            text:'',
        }
    }

    render(){



        const {replies} = this.props.Reducers;
        console.log(replies, 'replies')
        return(
            <div>
                 <Header/>
                  <Blog/>

                {
                    replies == false ?
                        <ReplyTemplate/>
                        :
                        replies.dummyreply.map((details, i)=>{
                            return (<Comments key={i} item={details}/>)
                        })

                }



            </div>
        );
    }
}

function mapStateToProps(store) {
    return { Reducers: store.Reducers};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch);
}


const MediumEditor = connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)

export default MediumEditor;

