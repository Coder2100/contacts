import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
//redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth"; //login function

class Login extends Component {
  //application level state...not redux
  state = {
    username: "",
    password: ""
  };
  //static
  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes
  };
  //create events for submit and onclick the button]
  onSubmit = e => {
    e.preventDefault();
    //console.log("submit");
    //fire function
    this.props.login(this.state.username, this.state.password);
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    //redirect
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    //use distructuring to get the form fields from the state
    const { username, password } = this.state;
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Login</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.onChange}
                value={username}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
