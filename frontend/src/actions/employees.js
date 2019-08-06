import axios from "axios";

import { GET_EMPLOYEES, DELETE_EMPLOYEE, ADD_EMPLOYEE } from "./types";

//GET EMPLOYEELIST

//get leads methods
//gettting employee list from data backend servers

export const getEmployees = () => dispatch => {
  axios
    .get("/api/employees/")
    .then(res => {
      dispatch({
        type: GET_EMPLOYEES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
//DELETE EMPLOYEE

//delete employees from DB that has been dismissed
//pass in id for specific employee
export const deleteEmployee = id => dispatch => {
  axios
    .delete(`/api/employees/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_EMPLOYEE,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

//ADD EMPLOYEE/ ONBOARDING PROCESS

export const addEmployee = employee => dispatch => {
  axios
    .post("/api/employees/", employee)
    .then(res => {
      dispatch({
        type: ADD_EMPLOYEE,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
