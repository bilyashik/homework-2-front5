import { types } from "../types";

const initialState = {
  value: [],
  users: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.VALUE:
      return { ...state, value: [action.payload] };
    case types.ADD_USER:
      return { ...state, users: [...state.users, action.payload] }; 
    default:
      return state;
  }
}
