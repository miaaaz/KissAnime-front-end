const LIST_URL = "http://localhost:4000/api";

const findWatchingListByUser = (uid) => {
  return fetch(`${LIST_URL}watchingLists/users/${uid}/animes`)
    .then(r => r.json())
}

const api = {

}

export default api