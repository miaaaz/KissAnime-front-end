import React, {useState, useEffect} from 'react'
import AnimeService from '../../services/anime-service'
import {Link, useParams, useHistory} from "react-router-dom";
import ResultCard from "./result-card";

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
      console.log(results.data.length)
    }
  }, [keyWord])

  return(
      <div>
        <div className="row mb-2">
          <div className="col-lg-8 mx-auto">
            <div className="bg-white p-3">

              <form action="">
                <div
                    className="p-1 bg-light rounded rounded-pill shadow-sm">
                  <div className="input-group">
                    <input
                        type="search"
                        placeholder="Search..."
                        aria-describedby="search-input-field"
                        className="form-control border-0 bg-light"
                        onChange={(event) => {
                          setSearchKeyWord(event.target.value)
                        }}
                        value={searchKeyWord || ""}/>
                    <div className="wbdv-search-btn">
                      <button id="home-search-btn" type="submit"
                              onClick={() => {history.push(`/search/${searchKeyWord}`)}}
                              className="btn btn-link text-danger"><i
                          className="fa fa-search"></i></button>
                    </div>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
        {/*Search results*/}




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

          </div>
        </div>

      </div>
  )
}

export default Search