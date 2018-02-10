import React, { Component } from 'react'
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchPosts } from '../state/actions';
import { Link } from 'react-router-dom';

export class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    const data = this.props.posts;
    console.log('this is the data the renders the posts');
    console.log(data);
    _.map(data, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="col-md-offset-8 col-md-4">
          <Link className="btn btn-primary" to="/">Home</Link>
          <Link className="btn btn-primary" to="/posts/new">New Post</Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts};
}

export default connect(null, { fetchPosts })(PostsIndex);