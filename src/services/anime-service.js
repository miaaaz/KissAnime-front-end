const API_URL = "https://kitsu.io/api/edge/anime"
const ANIME_URL = "http://localhost:4000/api/animes"

export const findAnimeByTitle = (title) => {
  return fetch(`${API_URL}/?filter[text]=${title}`)
    .then(res => res.json())
}

export const findAnimeById = (id) => {
  return fetch(`${API_URL}/${id}`)
  .then(res => res.json())
}

const createAnime = (anime) => {
  return fetch(`${ANIME_URL}/create`, {
    method: "POST",
    body: JSON.stringify(anime),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())
}

export const findLocalAnimeById = (id) => {
  return fetch(`${ANIME_URL}/${id}`)
  .then(res => res.json())
}

export const updateAnime = (aid, anime) => {
  return fetch(`${ANIME_URL}/${aid}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(anime)
  }).then(res => res.json())
}

const api = {
  findAnimeByTitle,
  findAnimeById,
  createAnime,
  findLocalAnimeById,
  updateAnime
}

export default api