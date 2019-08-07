import { CREATE_MESSAGE, GET_ERRORS } from "./types";
//create a message

export const createMessage = msg => {
  return {
    type: CREATE_MESSAGE,
    payload: msg
  };
};

//create action to returne rrors
export const returnErrors = (msg, status) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status }
  };
};
