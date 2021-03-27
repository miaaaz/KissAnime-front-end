import React, {useState, useEffect} from 'react'
import AnimeService from '../services/anime-service'
import {Link, useParams, useHistory} from "react-router-dom";

const Search = () => {
  const {keyWord} = useParams()
  const [searchKeyWord, setSearchKeyWord] = useState("")
  const [results, setResults] = useState({data:[]})
  const history = useHistory()

  useEffect(() => {
    setSearchKeyWord(keyWord)
    if(keyWord) {
      AnimeService.findAnimeByTitle(keyWord)
      .then(results => setResults(results))
    }
  }, [keyWord])

  return(
      <div>
        <h1>Search</h1>
        <input
            type={"text"}
            onChange={(event) => {
              setSearchKeyWord(event.target.value)
            }}
            className="form-control"
            value={searchKeyWord || ""}/>
        <button
            onClick={() => {history.push(`/search/${searchKeyWord}`)}}
            className="mt-3 mb-3 btn btn-primary btn-block">
          Search
        </button>


        <ul className="list-group">
          {
            results.data.map(anime =>
                <li className="list-group-item" key={anime.id}>
                  <Link to={`/details/${anime.id}`}>
                    {anime.attributes.titles.en || anime.attributes.canonicalTitle}
                  </Link>
                </li>
            )
          }
        </ul>
      </div>
  )
}

export default Search