import React, { Component } from 'react'
import { Route } from 'react-router-dom';

import PostsIndex from './posts-index';

export default class AppRoutes extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={PostsIndex}></Route>
      </div>
    )
  }
}
