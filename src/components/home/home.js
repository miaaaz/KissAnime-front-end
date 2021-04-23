import React from 'react'
import "./home.css"
import Search from "../search/search-bar";
import TopNavBar from "../top-navbar/top-navbar";
import SmallAnimeCard from "../small-anime-card/small-anime-card";
import SearchBar from "../search/search-bar";
import {Link, useParams} from "react-router-dom";

const Home = () => {
  return(
      <div className="container pl-3 pr-3">
        <TopNavBar/>
        <SearchBar/>

        {/*Editor's Picks*/}
        <div className={"container-fluid mb-5"}>
          <h4 className={"mb-3 wbdv-home-block-title"}>
            <span>
              Editor's Picks
            </span>
          </h4>
          <div className={"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6"}>
              <SmallAnimeCard/>
              <SmallAnimeCard/>
              <SmallAnimeCard/>
              <SmallAnimeCard/>
              <SmallAnimeCard/>
          </div>
        </div>

        {/*Recently viewed*/}
          {<div className={"container-fluid mb-3"}>
              <h4 className={"mb-3 wbdv-home-block-title"}>
            <span>
              Recently watched
            </span>

              </h4>
              <div className={"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6\""}>
                  <SmallAnimeCard/>
                  <SmallAnimeCard/>
                  <SmallAnimeCard/>
                  <SmallAnimeCard/>
                  <SmallAnimeCard/>

              </div>
          </div>}

          <div className={"row"}>
              <hr/>
              <center>
                  <div className={"col-10 text-danger font-italic"}>
                      <p6 class={"font-italic"}>---- All rights reserved ----</p6>
                  </div>

                  <div className={"col-2 text-danger"}>

                      <Link to={"/admin/login"}>
                          <p6 className={"text-danger"}>Admin   </p6>
                          <i className="fas text-danger float-right fa-users-cog"></i>
                      </Link>

                  </div>
              </center>
          </div>
      </div>

        )
}

export default Home