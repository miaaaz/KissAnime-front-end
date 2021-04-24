// const USER_API = "http://localhost:4000/api";
// const USER_API = "https://kissanime-backend.herokuapp.com/api";
const USER_API = process.env.REACT_APP_API

const profile = () => {
  return fetch(`${USER_API}/profile`, {
    method: "POST",
    credentials: "include"
  }).then(response => response.json())
}

const login = (credentials) => {
  return fetch(`${USER_API}/login`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(credentials),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())

}

const register = (credentials) => {
  return fetch(`${USER_API}/register`, {
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
  return fetch(`${USER_API}/users/${id}`)
  .then(response => response.json())
}

const updateUser = (id, user) => {
  return fetch(`${USER_API}/users/${id}`, {
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