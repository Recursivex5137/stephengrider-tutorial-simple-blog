import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

import PostsIndex from './posts-index';
import PostsNew from './posts-new';

export default class AppRoutes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew}></Route>
          <Route path="/" component={PostsIndex}></Route>
        </Switch>
      </div>
    )
  }
}
