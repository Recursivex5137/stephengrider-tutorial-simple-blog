import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { enzymeSetup } from '../setupTests';
import { ShallowMock } from '../shallow-mock';
import PostsNew from './posts-new';

enzymeSetup;

describe('PostsNew tests', () => {
  const props = {};
  
  it('Should successfully create a PostsNew component.', () => {
    const postsNew = shallow(<PostsNew {...props}/>);
    expect(postsNew).toBeTruthy();
  });
  it('Should render PostsNew text', () => {
    const postsNew = shallow(<PostsNew {...props}/>);
    expect(postsNew.contains(<div>PostsNew</div>)).toBeTruthy();
    
    // can't properly test li tags within the ul 
  });
});
