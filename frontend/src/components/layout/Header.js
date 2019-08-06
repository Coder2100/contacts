import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Employees List
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Leave Days
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Training
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Staff Loans
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
