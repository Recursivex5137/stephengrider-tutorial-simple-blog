import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const rootUrl = 'https://reduxblog.herokuapp.com';
const apiKey = 'TestingJesting3242'

const request = `${rootUrl}/api/posts?key=${apiKey}`;

export const fetchPosts = () =>  {
  return {
    type: FETCH_POSTS,
    payload: axios.get(request),
  };
};
