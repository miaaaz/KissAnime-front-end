
//const DISPLAY_URL = "http://localhost:4000/api/displayLists"
const DISPLAY_URL = "https://kissanime-backend.herokuapp.com/api/displayLists"

const createDisplayAnime = (aid) => {
  return fetch(`${DISPLAY_URL}/create`, {
    method: "POST",
    body: JSON.stringify(aid),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())
}

const findDisplayList = () => {
  return fetch(`${DISPLAY_URL}`)
  .then(res => res.json())
}

const findAnimeById = (aid) => {
  return fetch(`${DISPLAY_URL}/${aid}`)
  .then(res => res.json())
}

const deleteDisplayAnime = (aid) => {
  return fetch(`${DISPLAY_URL}/${aid}`, {
    method: 'DELETE'
  })
  .then(response => response.json());
}

const api = {
  createDisplayAnime,
  findDisplayList,
  findAnimeById,
  deleteDisplayAnime,
}

export default api