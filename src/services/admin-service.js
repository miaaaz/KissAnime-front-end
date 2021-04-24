// const USER_API = "http://localhost:4000/api";
// const USER_API = "https://kissanime-backend.herokuapp.com/api";
const USER_API = process.env.REACT_APP_API

const profile = () => {
    return fetch(`${USER_API}/admin/profile`, {
        method: "POST",
        credentials: "include"
    }).then(response => response.json())
}


const login = (credentials) => {
    return fetch(`${USER_API}/admin/login`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json())
    // .then(response => {
    //   if(response === 0) {
    //     alert("login failed, try again")
    //   } else {
    //     localStorage.setItem("user", JSON.stringify(response))
    //     return response.json()
    //   }
    // })
}

const register = (credentials) => {
    return fetch(`${USER_API}/admin/register`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

const findUserById = (id) => {
    return fetch(`${USER_API}/admin/${id}`)
        .then(response => response.json())
}

const updateUser = (id, user) => {
    return fetch(`${USER_API}/admin/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(res => res.json())
}

const api = {
    register, login, findUserById, profile, updateUser
}

export default api