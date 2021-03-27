const API_URL = "https://kitsu.io/api/edge/anime"

export const findAnimeByTitle = (title) => {
  return fetch(`${API_URL}/?filter[text]=${title}`)
    .then(res => res.json())
}

export const findAnimeById = (id) => {
  return fetch(`${API_URL}/${id}`)
  .then(res => res.json())
}

const api = {
  findAnimeByTitle,
  findAnimeById
}

export default api