import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

import PostsIndex from './posts-index';
import PostsNew from './posts-new';
import PostsShow from './posts-show';

export default class AppRoutes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew}></Route>
          <Route path="/posts/:id" component={PostsShow}></Route>
          <Route path="/" component={PostsIndex}></Route>
        </Switch>
      </div>
    )
  }
}
