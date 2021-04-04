import React, {useState, useEffect} from 'react'
import AnimeService from '../services/anime-service'
import {Link, useParams, useHistory} from "react-router-dom";
import AnimeCard from "./anime-grid/anime-card";

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
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto">
            <div className="bg-white p-3">

              <form action="">
                <div
                    className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
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


      {/*<div class="table-responsive">*/}
      {/*  <table class="table table-hover">*/}
      {/*    <tbody>*/}
      {/*    {*/}
      {/*      results.data.map(anime =>*/}
      {/*          <AnimeCard*/}
      {/*              anime={anime}*/}
      {/*          />*/}

      {/*      )*/}
      {/*    }*/}
      {/*    </tbody></table>*/}
      {/*</div>*/}

        <div className="container mt-5 d-flex justify-content-center">
          <div className="row d-flex justify-content-center">
            {
              results.data.map(anime =>
                  <AnimeCard
                    anime={anime}
                  />

              )
            }

          </div>
        </div>


        {/*<ul className="list-group">*/}
        {/*  {*/}
        {/*    results.data.map(anime =>*/}
        {/*        <li className="list-group-item" key={anime.id}>*/}
        {/*          <Link to={`/details/${anime.id}`}>*/}
        {/*            {anime.attributes.titles.en || anime.attributes.canonicalTitle}*/}
        {/*          </Link>*/}
        {/*        </li>*/}
        {/*    )*/}
        {/*  }*/}
        {/*</ul>*/}
      </div>
  )
}

export default Search