import {LOGIN, LOGOUT} from "../actions/user-actions"

// Resource: https://bezkoder.com/react-hooks-redux-login-registration-example/

const loggedInUser = JSON.parse(localStorage.getItem("user"));

const initialState = loggedInUser ? { isLoggedIn: true, loggedInUser } : { isLoggedIn: false, user: {} };

const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };

    default:
      return state;
  }
}

export default userReducer