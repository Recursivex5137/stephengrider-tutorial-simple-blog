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
  const htmlToTestAgainst = ( 
    <ul className="list-group">
      <li className="list-group-item">{props.posts["1"].title}</li>
      <li className="list-group-item">{props.posts["2"].title}</li>
    </ul>);

  it('Should render PostIndex component.', () => {
    const postIndex = shallow(ShallowMock(<PostsIndex />, props));
    expect(postIndex).toBeTruthy();
  });
  it('Should render htmlToTestAgainst', () => {
    const postIndex = shallow(<PostsIndex {...props}/>);
    expect(postIndex.contains(htmlToTestAgainst)).toBeTruthy();
    /* can't properly test li tags within the ul <- That was a mistake in the actual code
      because I had implemented the component wrongly. I had forgotten to return the _.map 
      on line 13 of posts-index.js therefore I didn't have any li elements 
      and I forgot to hook up mapStateToProps. Just commenting about this as this is 
      the first time a test has helped or would have had I been more observant.
    */
  });
});
