import React, { Fragment } from "react";
import Form from "./Form";
import EmployeeList from "./EmployeeList";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <EmployeeList />
    </Fragment>
  );
}
