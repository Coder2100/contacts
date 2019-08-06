import axios from "axios";

import { GET_EMPLOYEES } from "./types";
//get leads methods

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