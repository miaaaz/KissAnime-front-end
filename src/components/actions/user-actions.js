import userService from '../../services/user-service'

export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const SIGNUP = "SIGNUP"
export const UPDATE_PROFILE = "UPDATE_PROFILE"


export const login = (dispatch, credentials, history) => {

  userService.login(credentials)
  .then(response => {
    if (response === 0) {
      alert("Invalid username or password")
    } else {
      localStorage.setItem("user", JSON.stringify(response))
      dispatch({
        type: LOGIN,
        response
      })
      history.push("/profile")
    }

  })
}

export const logout = (dispatch) => {
  localStorage.clear()
  dispatch({
    type: LOGOUT,
  });
}

export const update = (dispatch, newUser) => {
  userService.updateUser(newUser._id, newUser)
  .then(r => {
    localStorage.setItem("user", JSON.stringify(r))
        dispatch({
          type: UPDATE_PROFILE,
          newUser
        })
      }
  )

}


export const signup = (dispatch, signupInfo, history) => {

  userService.register(signupInfo)
  .then(user => {
      localStorage.setItem("user", JSON.stringify(user))
      dispatch({
        type: SIGNUP,
        user
      })
      history.push("/profile")
  })
}


export const userActions = {
  login, logout, update, signup

}

export default userActions