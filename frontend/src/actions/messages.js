import { CREATE_MESSAGE, GET_ERRORS } from "./types";
//create a message

export const createMessage = msg => {
  return {
    type: CREATE_MESSAGE,
    payload: msg
  };
};
