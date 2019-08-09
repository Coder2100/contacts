import axios from "axios";
import { tokenConfig } from "./auth";
import { createMessage, returnErrors } from "./messages";
import {
  GET_EMPLOYEES,
  DELETE_EMPLOYEE,
  ADD_EMPLOYEE
  //GET_ERRORS
} from "./types";

//GET EMPLOYEELIST

//get leads methods
//gettting employee list from data backend servers

export const getEmployees = () => (dispatch, getState) => {
  axios
    .get("/api/employees/ tokenConfig(getState)")
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
export const deleteEmployee = id => (dispatch, getState) => {
  axios
    .delete(`/api/employees/${id}/`, tokenConfig(getState))
    .then(res => {
      //create mesage before deispatching messages
      dispatch(
        createMessage({
          deleteEmployee: "Employee has been succesfully removed!"
        })
      );

      dispatch({
        type: DELETE_EMPLOYEE,
        payload: id
      });
    }) //outputing the actual error from backend
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//ADD EMPLOYEE/ ONBOARDING PROCESS

export const addEmployee = employee => (dispatch, getState) => {
  axios
    .post("/api/employees/", employee, tokenConfig(getState))
    .then(res => {
      //success message after adding employee
      dispatch(
        createMessage({
          addEmployee: "Employee successfully onboarded.Welcome!"
        })
      );
      dispatch({
        type: ADD_EMPLOYEE,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
  /**
   *  rewrite as above
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
     */
};
