import * as actionTypes from './actionTypes';

const dummyPosts = [
  { id: 1, name: 'post1' },
  { id: 3, name: 'post2' },
];

export function fetchPosts() {
  return {
    type: actionTypes.FETCH_POSTS,
    payload: dummyPosts,
  };
}

