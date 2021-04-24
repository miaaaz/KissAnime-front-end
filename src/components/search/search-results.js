import {useHistory, useParams} from "react-router-dom";
import AnimeService from "../../services/anime-service";
import React, {useState, useEffect} from 'react'
import ResultCard from "./result-card";
import Search from "./search-bar";
import TopNavBar from "../top-navbar/top-navbar";
import Footer from "../footer/footer";

const SearchResults = () => {
  const {keyWord} = useParams()
  const [results, setResults] = useState({data:[]})
  const [showResults, setShowResults] = useState(true)

  useEffect(() => {
    if(keyWord) {
      AnimeService.findAnimeByTitle(keyWord)
      .then(results => {
        setResults(results)
        if (results.data.length > 0) {
          setShowResults(true)
        } else {
          setShowResults(false)
        }
      })
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
              !showResults &&
              <p>No results were found</p>
            }

          </div>
        </div>
        <Footer/>
      </div>


  )

}

export default SearchResults