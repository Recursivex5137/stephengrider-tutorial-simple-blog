import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';

const rootUrl = 'http://reduxblog.herokuapp.com';
const apiKey = 'TestingJesting3242';


export const fetchPosts = () =>  {
  const request = `${rootUrl}/api/posts?key=${apiKey}`;
  return {
    type: FETCH_POSTS,
    payload: axios.get(request),
  };
};

export const fetchPost = (id) =>  {
  const request = axios.get(`${rootUrl}/api/posts/${id}?key=${apiKey}`);
  return {
    type: FETCH_POST,
    payload: request,
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


export const deletePost = (id, callback) =>  {
  const request = axios.delete(`${rootUrl}/api/posts/${id}?key=${apiKey}`)
    .then(() => callback());
  return {
    type: DELETE_POST,
    payload: id,
  };
};

