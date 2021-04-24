import {LOGIN, LOGOUT, SIGNUP, UPDATE_PROFILE} from "../actions/user-actions"

// Resource: https://bezkoder.com/react-hooks-redux-login-registration-example/


const loggedInUser = JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
  user: loggedInUser || null,
  isLoggedIn: false,
};

const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.response,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        // isLoggedIn: true,
        user: action.newUser
      };
    case SIGNUP:
      return {
        ...state,
        user: action.user,
        isLoggedIn: true,
      };

    default:
      return state;
  }
}

export default userReducer