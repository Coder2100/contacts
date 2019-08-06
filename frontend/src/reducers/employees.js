import { GET_EMPLOYEES } from "../actions/types.js";
//creating inital state
const initialState = {
  //what we fetching from the backend
  employees: [] //empty array
};

export default function(state = initialState, action) {
  //use switch to evaluate type state
  switch (action.type) {
    case GET_EMPLOYEES:
      return {
        //user spread operator to include evrything tint teh dstate
        ...state,
        employees: action.payload
      };
    default:
      return state;
  }
}
