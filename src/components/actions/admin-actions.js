import adminService from '../../services/admin-service'
import userService from "../../services/user-service";

export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
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