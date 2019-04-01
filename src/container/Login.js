import React, { Component } from 'react';
import { Form, Button, Col, Grid } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { authenticate } from '../actions/authActions';
import TextFieldGroup from '../components/common/formFields';

import { isAuthenticated, authFailure } from '../selectors/authSelectors';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
      e.preventDefault();
      this.props.authenticate(this.state).then();
  }

  render() {
    if (this.props.isAuthenticated)
        return <Redirect to="/user_profile" />;

    return (
      <main>
        <Form onSubmit={this.handleSubmit}>
          <h1 className="page-title">Login</h1>
          <TextFieldGroup
            label="Email"
            id="formControlsEmail"
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <TextFieldGroup
            label="Password"
            id="formControlsPassword"
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            error={this.props.authFailure ? "Incorrect email / password." : null}
          />
         <div className="submissionFields">
            <Button type="submit" value="Login" bsStyle="primary">Log In</Button>
         </div>
         <div className="alternativeAccess">
           <p>New to SelfCare? <a href="/signup">Sign Up</a></p>
         </div>
        </Form>
      </main>
    )
  }
}

const mapStatesToProps = (state) => {
  return ({
    isAuthenticated: isAuthenticated(state),
    authFailure: authFailure(state)
  });
};

export default Login = withRouter(connect(mapStatesToProps, {authenticate})(Login));
