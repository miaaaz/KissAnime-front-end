import React, {useEffect, useState} from 'react'
import "./home.css"
import Search from "../search/search-bar";
import TopNavBar from "../top-navbar/top-navbar";
import SmallAnimeCard from "../small-anime-card/small-anime-card";
import SearchBar from "../search/search-bar";
import {Link, useParams} from "react-router-dom";
import {connect} from "react-redux";
import displayService from "../../services/display-service"

const Home = ({loggedInUser}) => {

  const [displayList, setDisplayList] = useState([])


  useEffect(() => {
    displayService.findDisplayList().then(actualList => setDisplayList(actualList))
  }, [])



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
            {
              displayList &&
                  displayList.map((res) => {
                    return (
                        <SmallAnimeCard
                            postUrl={res.anime.postUrl}
                            title={res.anime.title}
                            id={res.anime._id}
                        />
                    )
                  })
            }


          </div>
        </div>

        {/*User list*/}
        {/*hope to watch list*/}
        {
          loggedInUser && (loggedInUser.userType === "webuser") &&
                <div className={"container-fluid mb-3"}>
                  <h4 className={"mb-1 wbdv-home-block-title"}>
                                <span>
                                 Your Hope List
                                </span>
                  </h4>
                  <div
                      className={"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6\""}>
                    {
                      loggedInUser.animeList &&
                      loggedInUser.animeList.map((anime) =>
                          <>
                            {/*{anime.src}*/}
                            {anime.status === "want to watch" &&
                            <SmallAnimeCard
                                postUrl={anime.src}
                                title={anime.title}
                                id={anime.id}
                            />}
                          </>
                      )
                    }
                  </div>
                </div>
        }
        {
          loggedInUser.animeList &&
          !loggedInUser.animeList.filter(anime => {return anime.status === "want to watch"}).length &&
          <div className={"container-fluid mb-3"}>
            <span>Your Hope List is empty </span>
          </div>


        }
        {/*watching list*/}
        {
          loggedInUser && (loggedInUser.userType === "webuser") &&
          <div className={"container-fluid mb-3"}>
            <h4 className={"mb-1 wbdv-home-block-title"}>
                                <span>
                                  Your Watching List
                                </span>
            </h4>
            <div
                className={"mt-2 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6\""}>
              {
                loggedInUser.animeList &&
                loggedInUser.animeList.map((anime) =>
                    <>
                      {/*{anime.src}*/}
                      {anime.status === "watching" &&
                      <SmallAnimeCard
                          postUrl={anime.src}
                          title={anime.title}
                          id={anime.id}
                      />}
                    </>
                )
              }


            </div>

          </div>
        }
        {
          loggedInUser.animeList &&
          !loggedInUser.animeList.filter(anime => {return anime.status === "watching"}).length &&
          <div className={"container-fluid mb-3"}>
            <span>Your Watching is empty </span>
          </div>


        }
        {/*watched list*/}
        {
          loggedInUser && (loggedInUser.userType === "webuser") &&
          <div className={"container-fluid mb-2"}>
            <h4 className={"mb-2 wbdv-home-block-title"}>
                                <span>
                                  Your Watched List
                                </span>
            </h4>
            <div
                className={"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6\""}>
              {
                loggedInUser.animeList &&
                loggedInUser.animeList.map((anime) =>
                    <>
                      {/*{anime.src}*/}
                      {anime.status === "watched" &&
                      <SmallAnimeCard
                          postUrl={anime.src}
                          title={anime.title}
                          id={anime.id}
                      />}
                    </>
                )
              }



            </div>
          </div>
        }
        {
          loggedInUser.animeList &&
          !loggedInUser.animeList.filter(anime => {return anime.status === "watched"}).length &&
          <div className={"container-fluid"}>
            <span>Your Watched List is empty </span>
          </div>


        }

        {/*/!*display list*!/*/}
        {/*{*/}
        {/*  loggedInUser.userType === "admin" &&*/}
        {/*  <div className={"container-fluid mb-3"}>*/}
        {/*    <h4 className={"mb-3 wbdv-home-block-title"}>*/}
        {/*                        <span>*/}
        {/*                          Display List*/}
        {/*                        </span>*/}
        {/*    </h4>*/}
        {/*    <div*/}
        {/*        className={"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6\""}>*/}
        {/*      {*/}
        {/*        loggedInUser.animeList &&*/}
        {/*        loggedInUser.animeList.map((anime) =>*/}
        {/*            <>*/}
        {/*              /!*{anime.src}*!/*/}
        {/*              {anime.status === "watched" &&*/}
        {/*              <SmallAnimeCard*/}
        {/*                  postUrl={anime.src}*/}
        {/*                  title={anime.title}*/}
        {/*              />}*/}
        {/*            </>*/}
        {/*        )*/}
        {/*      }*/}
        {/*      /!*<>*!/*/}
        {/*      /!*  <div>*!/*/}
        {/*      /!*    <a href={"http://localhost:3000/"}>*!/*/}
        {/*      /!*      <i*!/*/}
        {/*      /!*          className="fas fa-plus-circle fa-2x"*!/*/}
        {/*      /!*          style={{color: '#d9534f'}}*!/*/}
        {/*      /!*      ></i>*!/*/}
        {/*      /!*    </a>*!/*/}
        {/*      /!*  </div>*!/*/}
        {/*      /!*</>*!/*/}
        {/*    </div>*/}
        {/*  </div>}*/}
        {/*  /!* {*!/*/}
        {/*  /!*  <div className={"container-fluid mb-3"}>*!/*/}
        {/*  /!*    <h4 className={"mb-3 wbdv-home-block-title"}>*!/*/}
        {/*  /!*  <span>*!/*/}
        {/*  /!*    Recently watched*!/*/}
        {/*  /!*  </span>*!/*/}

        {/*  /!*    </h4>*!/*/}
        {/*  /!*    <div className={"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6\""}>*!/*/}
        {/*  /!*        <SmallAnimeCard/>*!/*/}
        {/*  /!*        <SmallAnimeCard/>*!/*/}
        {/*  /!*        <SmallAnimeCard/>*!/*/}
        {/*  /!*        <SmallAnimeCard/>*!/*/}
        {/*  /!*        <SmallAnimeCard/>*!/*/}

        {/*  /!*    </div>*!/*/}
        {/*  /!*</div>*!/*/}
        {/*  /!*}*!/*/}


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

const mapStateToProps = state => {
  return {
    isLoggedIn: state.userReducer.isLoggedIn,
    loggedInUser: state.userReducer.user,
  }
}

export default connect(mapStateToProps)(Home)