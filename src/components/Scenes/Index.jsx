import React, {Component} from "react";
import Header from './Widgets/Header';
import ReplyTemplate from './Widgets/ReplyTemplate';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import Comments from './Widgets/Comments';
import Blog from './Widgets/Blog';

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

