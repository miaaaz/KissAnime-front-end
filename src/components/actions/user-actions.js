import userService from '../../services/user-service'

export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const TEST = "TEST"
export const UPDATE_PROFILE = "UPDATE_PROFILE"
// export const FIND_ALL_WIDGETS_FOR_TOPIC = "FIND_ALL_WIDGETS_FOR_TOPIC"

export const login = (dispatch, credentials) => {
  // dispatch({
  //   type: LOGIN
  // })
  userService.login(credentials)
  .then(response => {
    if (response === 0) {
      alert("Invalid username or password")
    } else {
      console.log(response)
      console.log(JSON.stringify(response))
      localStorage.setItem("user", JSON.stringify(response))
      dispatch({
        type: LOGIN,
        response
      })
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



export const userActions = {
  login, logout, update

}

export default userActions