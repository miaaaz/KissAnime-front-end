const USER_API = "http://localhost:4000/api";

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
  })
  // .then((res) => alert(res))
  .then(response => response.json())
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

const logout = () => {}

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
  register, login, logout, profile, updateUser
}

export default api