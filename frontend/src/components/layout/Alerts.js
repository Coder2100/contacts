import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Alerts extends Component {
  //create staic object
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };
  //create life cycle event...on when get new update
  componentDidUpdate(prevProps) {
    //this.props.alert.show("It show off");
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      //alert.error("There is an error");
      if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
      if (error.msg.email) alert.error(`email: ${error.msg.email.join()}`);
      if (error.msg.email) alert.error(`quote: ${error.msg.quote.join()}`);
    }
    //check if employee deleted
    if (message !== prevProps.message) {
      if (message.deleteEmployee) alert.success(message.deleteEmployee);
    }
    //check if employee added successfully
    if (message !== prevProps.message) {
      if (message.addEmployee) alert.success(message.addEmployee);
    }
  }
  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
