import React, {useEffect, useState} from 'react'
import "./home.css"
import Search from "../search/search-bar";
import TopNavBar from "../top-navbar/top-navbar";
import SmallAnimeCard from "../small-anime-card/small-anime-card";
import SearchBar from "../search/search-bar";
import {connect} from "react-redux";
import displayService from "../../services/display-service"
import userService from '../../services/user-service'
import Footer from "../footer/footer";
import {Link} from "react-router-dom";

const Home = ({loggedInUser}) => {

  const [displayList, setDisplayList] = useState([])
  const [uid, setUid] = useState(loggedInUser ? loggedInUser._id : null)
  const [privateList, setPrivateList] = useState(null)


  useEffect(() => {
    if (loggedInUser && uid) {
      userService.findUserById(uid).then(user => setPrivateList(user.animeList))
    }

    displayService.findDisplayList().then(actualList => setDisplayList(actualList))
  }, [uid])



  return(
      <div>
      <div className="wrapper container pl-3 pr-3">
        <TopNavBar/>
        <SearchBar/>

        {
          loggedInUser && loggedInUser.userType === "admin" &&
          <div className={"container-fluid mb-3 text-center"}>
            {/*<p>*/}
            {/*  Welcome! Admin user*/}
            {/*</p>*/}
            <Link
                to={"/profile"}
                className={""}>
            <span className={"text-danger"}>
              Go to admin page and manage your picks>>
            </span>

            </Link>
          </div>
        }



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

            loggedInUser && true && (loggedInUser.userType === "webuser") &&
                <div className={"container-fluid mb-3"}>
                  <h4 className={"mb-1 wbdv-home-block-title"}>
                                <span>
                                 Your Hope List
                                </span>
                  </h4>
                  <div
                      className={"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6\""}>

                    {
                      privateList &&
                      privateList.map((anime) =>
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
            loggedInUser && loggedInUser.userType === "webuser" &&
            privateList &&
          !privateList.filter(anime => {return anime.status === "want to watch"}).length &&
          <div className={"container-fluid mb-3"}>
            <span>Your Hope List is empty </span>
          </div>


        }
        {/*watching list*/}
        {
            loggedInUser && true && (loggedInUser.userType === "webuser") &&
          <div className={"container-fluid mb-3"}>
            <h4 className={"mb-1 wbdv-home-block-title"}>
                                <span>
                                  Your Watching List
                                </span>
            </h4>
            <div
                className={"mt-2 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6\""}>
              {
                  loggedInUser && true && privateList &&
                  privateList.map((anime) =>
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
            loggedInUser && loggedInUser.userType === "webuser" &&
            privateList &&
          !privateList.filter(anime => {return anime.status === "watching"}).length &&
          <div className={"container-fluid mb-3"}>
            <span>Your Watching is empty </span>
          </div>


        }
        {/*watched list*/}
        {
            loggedInUser && true && (loggedInUser.userType === "webuser") &&
          <div className={"container-fluid mb-2"}>
            <h4 className={"mb-2 wbdv-home-block-title"}>
                                <span>
                                  Your Watched List
                                </span>
            </h4>
            <div
                className={"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6\""}>
              {
                  loggedInUser && true &&
                  privateList &&
                  privateList.map((anime) =>
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
            loggedInUser && loggedInUser.userType === "webuser" &&
          privateList &&
          !privateList.filter(anime => {return anime.status === "watched"}).length &&
          <div className={"container-fluid"}>
            <span>Your Watched List is empty </span>
          </div>
        }

        <Footer/>




          {/*<div className={"container"}*/}
          {/*     id="fixed-bottom"*/}
          {/*>*/}
          {/*    <hr/>*/}
          {/*    <footer className={"page-footer"}>*/}
          {/*    <center>*/}
          {/*        <div className={"col-10 text-danger font-italic"}>*/}
          {/*            <p6 class={"font-italic"}>---- All rights reserved ----</p6>*/}
          {/*        </div>*/}
          {/*        <div className={"col-2 text-danger"}>*/}
          {/*            <Link to={"/admin/login"}>*/}
          {/*                <p6 className={"text-danger"}>Admin   </p6>*/}
          {/*                <i className="fas text-danger float-right fa-users-cog"></i>*/}
          {/*            </Link>*/}
          {/*        </div>*/}
          {/*    </center>*/}
          {/*    </footer>*/}
          {/*</div>*/}

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