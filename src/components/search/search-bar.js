import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";

const SearchBar = () => {
  const {keyWord} = useParams()
  const [searchKeyWord, setSearchKeyWord] = useState(keyWord)
  const history = useHistory()

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
                              onClick={() =>
                                {
                                  if (searchKeyWord === undefined) {
                                    history.push(`/search`)
                                  } else {
                                    history.push(`/search/${searchKeyWord}`)
                                  }

                                }
                              }
                              className="btn btn-link text-danger"><i
                          className="fa fa-search"></i></button>
                    </div>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>

      </div>
  )
}

export default SearchBar