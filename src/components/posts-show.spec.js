import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { shallow, mount, render } from 'enzyme';
import { enzymeSetup } from '../setupTests';
import { ShallowMock } from '../shallow-mock';
import PostsShowConnected, { PostsShow } from './posts-show';

enzymeSetup;

describe('PostsShow tests', () => {
  
  const match = {
    params: {
      id: 1
    }
  };
  const post = {
    "1": { id: 1,
      title: 'Hi!',
      categories: 'Computer, Friends',
      content: 'Post about Friends'
    }
  };
  const mockEmptyFn = jest.fn();
  const mockFetchPost = jest.fn();
  const mockDeletePost = jest.fn();
  const store = { getState: () => {} };

  const propsWithoutPost = { store, match: match, fetchPost: mockFetchPost, deletePost: mockDeletePost };
  const props = { ...propsWithoutPost, post: post };

  const htmlToTestAgainst = (
    <div>
      <h3>{post["1"].title}</h3>
      <h6>Categories: {post["1"].categories}</h6>
      <p>{post["1"].content}</p>
    </div>
  );
  
  const postsShow = mount(
    <Router>
      <PostsShow {...props}/>
    </Router>
  );

  it('Should successfully create a PostsShow component.', () => {
    expect(postsShow).toBeTruthy();
  });
  it('Should render div with text Loading... if there is no post in props.', () => {
    const postsShowWithoutPost = shallow(<PostsShow {...propsWithoutPost} />);
    expect(postsShowWithoutPost.find('div').text()).toEqual('Loading ...');
  });
  it('Should should call fetch posts with an id from match.params.id when component calls componentDidMount.', 
    () => {
    expect(mockFetchPost.mock.calls[0][0]).toBe(match.params.id);
  });
  it('button with id of delete-button should be rendered', () => {
    const button = postsShow.find('button').filter('#delete-button');
    expect(button).toBeDefined();
  });
  it('Should test the delete button to call deletePost action.', () => {
    const button = postsShow.find('#delete-button');
    button.simulate('click');
    expect(mockDeletePost.mock.calls.length).toBe(1);
  });
});
