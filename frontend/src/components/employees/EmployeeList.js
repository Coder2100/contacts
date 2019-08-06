import React, { Component, Fragment } from "react";
//to use reduc from a compont , use connect
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getEmployees } from "../../actions/employees";

export class EmployeeList extends Component {
  //object
  static PropTypes = {
    employees: PropTypes.array.isRequired
  };
  //call when its load
  componentDidMount() {
    this.props.getEmployees();
  }
  render() {
    return (
      <Fragment>
        <h1>Employee List</h1>
        <table className="table table-striped">
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th />
          </thead>
          <tbody>
            {this.props.employees.map(employee => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.quote}</td>
                <td>
                  <button className="btn btn-danger btn-sm">Dismissal</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  //employeeReducer from .reducers/index.js
  employees: state.employees.employees
});

export default connect(
  mapStateToProps,
  { getEmployees }
)(EmployeeList);
