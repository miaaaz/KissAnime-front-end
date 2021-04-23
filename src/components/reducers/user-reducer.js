import {LOGIN, LOGOUT, UPDATE_PROFILE} from "../actions/user-actions"

// Resource: https://bezkoder.com/react-hooks-redux-login-registration-example/


const loggedInUser = JSON.parse(localStorage.getItem("user")) || null;

// const initialState = loggedInUser ? { isLoggedIn: true, loggedInUser } : { isLoggedIn: false, user: {} };
const initialState = {
  user: loggedInUser || null,
  isLoggedIn: false,
};

const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOGIN:
      console.log(LOGIN)
      return {
        ...state,
        user: action.response,
        isLoggedIn: true,
      };
    case LOGOUT:
      console.log(LOGOUT)
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
      }

    default:
      return state;
  }
}

export default userReducer