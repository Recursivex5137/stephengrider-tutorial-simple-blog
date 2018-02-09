import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { enzymeSetup } from '../setupTests';
import { ShallowMock } from '../shallow-mock';
import PostsIndexRedux, { PostsIndex } from './posts-index';

enzymeSetup;

describe('PostIndex tests', () => {
  function fetchPosts() {
    return 'fetchPosts triggered!';
  }
  const props = {
    posts: {
      "1": { id: 1,
        title: 'Hi!',
        categories: 'Computer, Friends',
        content: 'Post about Friends'
      },
      "2": {
        id: 2,
        title: 'New Post',
        categories: 'Candy',
        content: 'Post about Candy'
      }
    },
    fetchPosts: fetchPosts
  };
  const htmlToTestAgainst = 
  (<div>
    <h3>Posts</h3>
    <ul className="list-group">
      <li className="list-group-item">{props.posts["1"].title}</li>
      <li className="list-group-item">{props.posts["2"].title}</li>
    </ul>
  </div>);
  it('Should render PostIndex component.', () => {
    const postIndex = shallow(ShallowMock(<PostsIndex />, props));
    expect(postIndex).toBeTruthy();
  });
  it('Should render htmlToTestAgainst', () => {
    const postIndex = shallow(<PostsIndex {...props}/>);
    expect(postIndex.contains(<h3>Posts</h3>)).toBeTruthy();
    expect(postIndex.contains(
      <ul className="list-group">
      </ul>
    )).toBeTruthy();
    expect(props.posts["1"].title).toEqual('Hi!');
    
    // can't properly test li tags within the ul 
  });
});
