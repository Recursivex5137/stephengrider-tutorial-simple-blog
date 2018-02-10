import React, { Component } from 'react'
import { Router, Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPosts } from '../state/actions/';  

class PostsNew extends Component {

  renderField(field) {
    const { meta: { touched, error }} = field;
    field.type ? '' : 'text';

    const wrappingCss = `form-group ${ touched && error ? 'has-error' : '' }`;
    return (
      <div className={wrappingCss}> 
        <label htmlFor={field.id} className="control-label">{field.label}</label>
        <input 
          className="form-control"
          type={field.type} 
          id={field.id}
          {...field.input}
        />
        <span className="help-block">
          {touched ? error : ''}
        </span>
      </div>
    );
  }

  onSubmit(values) {
    console.log('onSubmit:');
    console.log(values);
    this.props.createPosts(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <div>
          PostsNew 
        </div>
        <div className="col-md-offset-2 col-md-4">
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              label="Title"
              name="title"
              component={this.renderField}
            ></Field>
            <Field
              label="Categories"
              name="categories"
              component={this.renderField}
            ></Field>
            <Field
              label="Post Content"
              name="content"
              component={this.renderField}
            ></Field>
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to="/" className="btn btn-danger">Cancel</Link>
          </form>
        </div>
      </div>
    )
  }
}


function validate(values) {
  const errors = {};
  // validate the inputs from 'values
  if (!values.title) {
    errors.title = 'Enter a title!';
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories!';
  }
  if (!values.content) {
    errors.content = 'Enter some content!';
  }
  // if errors is empty, the form is fine to submit
  //if errors has any properties, redux form asssums form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, { createPosts })(PostsNew)
);