import React, {useState, useEffect} from 'react'
import "./profile.css"
import AnimeList from "../anime-list/anime-list";
import TopNavBar from "../top-navbar/top-navbar";
import {Link} from "react-router-dom";
import userService from '../../services/user-service'
import EditingProfile from "./editing-profile";
import {connect} from "react-redux";
import userActions from "../actions/user-actions";
import adminService from '../../services/admin-service'
import Footer from "../footer/footer";
import displayService from "../../services/display-service"
import AdminDisplayList from "../anime-list/admin-display-list";

const Profile = ({isLoggedIn = {}, loggedInUser = {}, update}) => {

  const [uid, setUid] = useState("")

  const [curUser, setCurUser] = useState(
      loggedInUser || JSON.parse(localStorage.getItem("user")))
  const [editingProfile, setEditingProfile] = useState(false)
  const [adminList, setAdminList] = useState(null)
  const [refreshFlag, setRefreshFlag] = useState(null)

  useEffect(() => {
    if (curUser) {
      setUid(curUser._id)
    }

    if (loggedInUser && loggedInUser.userType === "admin") {
      displayService.findDisplayList().then(list => {
        setAdminList(list)
      })
    }

    if (uid) {
      userService.findUserById(uid).then(actualUser => {
        setCurUser(actualUser)

      })
    }

  }, [uid, refreshFlag])

  const updateUser = (newUser) => {
    update(newUser)
  }

  const deleteAnime = (id) => {

    const newList = curUser.animeList.filter((anime) => {

      return anime.id !== id
    })
    const newUser = {
      ...curUser,
      animeList: newList
    }

    setCurUser(newUser)
    update(newUser)

  }

  const handleDeleteDisplayAnime = (aid) => {
    if (curUser && curUser.userType === "admin") {
      displayService.deleteDisplayAnime(aid).then(res => setRefreshFlag(res))
    }

  }

  const handleEdit = (e) => {
    setEditingProfile(true)
  }

  return (
      <div>
        {
          (isLoggedIn || loggedInUser) &&

          <div className={"wrapper container"}
          >

            <div className={"mb-3"}>
              <TopNavBar/>
            </div>

            {/*Profile content*/}
            <div className={"row"}>
              {/*Profile img card*/}
              <div className={"col-md-4  wbdv-profile-img-card"}>
                <div className={"card"}>
                  <div className={"card-body p-5"}>
                    <div className={"card-title h5 text-center"}>
                      {
                        curUser.userName
                      }
                    </div>
                    {/*Image*/}
                    <div className={"text-center mb-3"}>
                      <img
                          src={curUser.profilePicUrl}
                          className="card-img-top wbdv-profile-img"
                          alt="..."/>
                    </div>

                    {/*Find anime*/}
                    <div className="col-12 text-center">
                      <button type="submit"
                              className="btn btn-danger text-uppercase"
                      >
                        <a
                            href={"https://kissanime-frontend.herokuapp.com/"}
                            style={{color: "white"}}
                        >
                          Find Your Anime
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/*Profile detail*/}
              <div className={"col-md-8"}>
                <div className={"card"}>
                  <div className={"card-body p-5"}>
                    {/*Nav Tabs*/}
                    <ul className="nav nav-pills" id="myTab" role="tablist">

                      <li className="nav-item card-title h5"
                          role="presentation">
                        <button className="nav-link active me-4" id="my-list-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#my-list" type="button"
                                role="tab"
                                aria-controls="my-list" aria-selected="false">
                          {
                            loggedInUser && loggedInUser.userType === "admin" &&
                            <span>Manage Display List</span>
                          }
                          {
                            (!loggedInUser || loggedInUser.userType
                                === "webuser") &&
                            <span>Anime List</span>
                          }


                        </button>
                      </li>
                      {
                        curUser &&
                        <li className="nav-item card-title h5"
                            role="presentation">
                          <button className="nav-link"
                                  id="profile-detail-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#profile-detail" type="button"
                                  role="tab" aria-controls="profile-detail"
                                  aria-selected="true">
                            Profile Details
                          </button>
                        </li>
                      }
                    </ul>

                    <div className="tab-content" id="myTabContent">
                      <div className="tab-pane fade"
                           id="profile-detail"
                           role="tabpanel"
                           aria-labelledby="profile-detail-tab">
                        {
                          editingProfile &&
                          <div>
                            <EditingProfile
                                user={curUser}
                                setEditingProfile={setEditingProfile}
                                updateUser={updateUser}
                            />
                          </div>

                        }
                        {
                          !editingProfile &&
                          <div
                              className="row mt-2 g-3">
                            <div className="col-md-6">
                              <div
                                  className="h6 wbdv-profile-detail-header">Username
                              </div>
                              <div>{curUser.userName}</div>
                            </div>

                            <div className="col-md-12">
                              <div
                                  className="h6 wbdv-profile-detail-header">Email
                              </div>
                              <div>{curUser.email || ""}</div>
                            </div>

                            {/*<div className="col-6">*/}
                            {/*    <div className="h6 wbdv-profile-detail-header">Role</div>*/}
                            {/*    <div>{curUser.userType || ""}</div>*/}
                            {/*</div>*/}

                            <div className="col-12 text-end text-uppercase">
                              <button
                                  onClick={handleEdit}
                                  className="btn btn-danger text-uppercase">
                                Edit
                              </button>
                            </div>
                          </div>

                        }
                      </div>

                      {/*My Anime List*/}
                      <div className="tab-pane fade show active" id="my-list"
                           role="tabpanel"
                           aria-labelledby="my-list-tab">
                        {
                          (!loggedInUser || loggedInUser.userType === "webuser")
                          &&
                          <AnimeList
                              user={curUser}
                              animeList={curUser.animeList}
                              updateUser={updateUser}
                              deleteAnime={deleteAnime}
                          />
                        }
                        {
                          loggedInUser.userType === "admin" &&
                          <AdminDisplayList
                              user={curUser}
                              animeList={adminList}
                              deleteAnime={handleDeleteDisplayAnime}

                          />
                        }

                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>

            {/*id="fixed-bottom-profile"*/}

            <Footer/>

          </div>
        }
      </div>
  )
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.userReducer.isLoggedIn,
    loggedInUser: state.userReducer.user,
  }
}

const mapDispatchToProps = (dispatch) => ({

  logout: () => {
    userActions.logout(dispatch)
  },

  update: (newUser) => {
    userActions.update(dispatch, newUser)
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)