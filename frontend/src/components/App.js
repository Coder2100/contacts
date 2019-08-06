import React, { Component, Fragment } from "react";

import ReactDOM from "react-dom";

//import React, { Component } from "react";
import Header from "./layout/Header";
import Dashboard from "./employees/Dashboard";

//import prover from react reux
import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <div className="container">
            <Header />
            <Dashboard />
          </div>
        </Fragment>
      </Provider>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
