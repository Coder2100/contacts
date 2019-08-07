import React, { Component, Fragment } from "react";
//implement react alert

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import ReactDOM from "react-dom";

//import React, { Component } from "react";
import Header from "./layout/Header";
import Dashboard from "./employees/Dashboard";
//BRING ALERTS COMPOENTS
import Alerts from "./layout/Alerts";

//import prover from react reux
import { Provider } from "react-redux";
import store from "../store";

//alert options
const alertOptions = {
  timeout: 3000,
  position: "top center"
};
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Fragment>
            <div className="container">
              <Header />
              <Alerts />
              <Dashboard />
            </div>
          </Fragment>
        </AlertProvider>
      </Provider>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
