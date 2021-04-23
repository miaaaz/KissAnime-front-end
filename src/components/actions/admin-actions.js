import adminService from '../../services/admin-service'

export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const TEST = "TEST"
export const UPDATE_PROFILE = "UPDATE_PROFILE"
// export const FIND_ALL_WIDGETS_FOR_TOPIC = "FIND_ALL_WIDGETS_FOR_TOPIC"

export const login = (dispatch, credentials) => {
    // dispatch({
    //   type: LOGIN
    // })
    adminService.login(credentials)
        .then(response => {
            if (response === 0) {
                alert("Invalid username or password")
            } else {
                localStorage.setItem("user", JSON.stringify(response))
                dispatch({
                    type: LOGIN,
                    response
                })
            }

        })
}

// export const logout = (dispatch) => {
//     localStorage.clear()
//     dispatch({
//         type: LOGOUT,
//     });
// }

export const update = (dispatch, newUser) => {
    adminService.updateUser(newUser._id, newUser)
        .then(r => {
                localStorage.setItem("user", JSON.stringify(r))
                dispatch({
                    type: UPDATE_PROFILE,
                    newUser
                })
            }
        )

}



export const adminActions = {
    login, update

}

export default adminActions