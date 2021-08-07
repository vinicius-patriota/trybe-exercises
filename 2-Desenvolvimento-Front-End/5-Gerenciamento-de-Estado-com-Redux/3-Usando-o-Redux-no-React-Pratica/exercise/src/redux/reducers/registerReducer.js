import { USER_REGISTER } from '../actions';

const initialState = [];

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER:
      return [...state, action.value];
    default:
      return state;
  };
};

export default registerReducer;
