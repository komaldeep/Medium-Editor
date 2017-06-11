import React, { Component, PropTypes } from 'react';
import * as postActions from '../actions/postActions';
import { connect } from 'react-redux';

class Posts extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  getPostLists() {
    return this.props.posts.map(
      post => (
        <li key={post.id}>{post.name}</li>
      )
    );
  }

  render() {
    return ( 
      <ul>
        {this.getPostLists()}
      </ul>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array,
  fetchPosts: PropTypes.func,
};

function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(mapStateToProps, postActions)(Posts);
