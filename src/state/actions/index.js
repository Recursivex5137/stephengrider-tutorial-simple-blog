import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';

const rootUrl = 'http://reduxblog.herokuapp.com';
const apiKey = 'TestingJesting3242'

const request = `${rootUrl}/api/posts?key=${apiKey}`;

export const fetchPosts = () =>  {
  return {
    type: FETCH_POSTS,
    payload: axios.get(request),
  };
};

export const createPosts = (values, callback) =>  {
  const request = axios.post(`${rootUrl}/api/posts?key=${apiKey}`, values)
    .then(() => callback());
  return {
    type: CREATE_POST,
    payload: request,
  }
};

