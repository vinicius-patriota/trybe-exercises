import { USER_LOGIN } from '../actions';

const initialState = {};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return action.value;
    default:
      return state;
  };
}

export default loginReducer;
