import React, { Component } from "react";
//importing for for redux implementation of adding form to employees
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addEmployee } from "../../actions/employees";

class Form extends Component {
  state = {
    name: "",
    email: "",
    quote: ""
  };
  //static method
  static propTypes = { addEmployee: PropTypes.func.isRequired };
  //creating on chnage event
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  //create on submit event
  onSubmit = e => {
    e.preventDefault();
    const { name, email, quote } = this.state;
    const employee = { name, email, quote };
    this.props.addEmployee(employee);
  };
  render() {
    //creating a values to fire in onChange events
    const { name, email, quote } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>On Board New Employees</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Favourite Quote</label>
            <textarea
              className="form-control"
              type="text"
              name="quote"
              onChange={this.onChange}
              value={quote}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-warning">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addEmployee }
)(Form);
