import React, { Component, Fragment } from "react";

import ReactDOM from "react-dom";

//import React, { Component } from "react";
import Header from "./layout/Header";
import Dashboard from "./employees/Dashboard";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <Header />
          <Dashboard />
        </div>
      </Fragment>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
