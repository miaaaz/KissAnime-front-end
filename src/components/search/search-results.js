import {useHistory, useParams} from "react-router-dom";
import AnimeService from "../../services/anime-service";
import React, {useState, useEffect} from 'react'
import ResultCard from "./result-card";
import Search from "./search-bar";
import TopNavBar from "../top-navbar/top-navbar";

const SearchResults = () => {
  const {keyWord} = useParams()
  const [results, setResults] = useState({data:[]})

  useEffect(() => {
    if(keyWord) {
      AnimeService.findAnimeByTitle(keyWord)
      .then(results => setResults(results))
    }
  }, [keyWord])

  return (
      <div className={"container"}>
        <div className={"mb-3"}>
          <TopNavBar/>
        </div>
        <Search/>
        <div className="container mt-5 d-flex justify-content-center">
          <div className="row d-flex justify-content-center">
            {
              results.data.map(anime =>
                  <ResultCard
                      key={anime.id}
                      anime={anime}
                  />

              )
            }
            {
              !results.data.length &&
              <p>No results were found</p>
            }

          </div>
        </div>
      </div>


  )

}

export default SearchResults