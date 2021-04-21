import userService from '../../services/user-service'

export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
// export const UPDATE_WIDGET = "UPDATE_WIDGET"
// export const FIND_ALL_WIDGETS_FOR_TOPIC = "FIND_ALL_WIDGETS_FOR_TOPIC"

export const login = (dispatch, credentials) => {
  userService.login(credentials)
  .then(response => {
    dispatch({
      type: LOGIN,
      payload: response
    })
  })
}

export const logout = (dispatch) => {
  localStorage.clear()
  dispatch({
    type: LOGOUT,
  });
}



export const userActions = {
  login, logout

}

export default userActions