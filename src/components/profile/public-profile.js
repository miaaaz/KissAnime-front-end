import React, {useState, useEffect} from 'react'
import "./profile.css"
import AnimeList from "../anime-list/anime-list";
import TopNavBar from "../top-navbar/top-navbar";
import {useParams} from "react-router-dom";
import userService from '../../services/user-service'

const PublicProfile = () => {

  const {userId} = useParams()

  const [curUser, setCurUser] = useState({})

  useEffect(() => {
      userService.findUserById(userId).then(actualUser => {
        setCurUser(actualUser)
      })
  }, [])


  return(
      <>
        {/*{curUser.userName}*/}
        {
          <div className={"container"}>

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
                  </div>
                </div>
              </div>

              {/*Profile detail*/}
              <div className={"col-md-8"}>
                <div className={"card"}>
                  <div className={"card-body p-5"}>
                    {/*Nav Tabs*/}
                    <ul className="nav nav-pills" id="myTab" role="tablist">
                      <li className="nav-item card-title h5 " role="presentation">
                        <button className="nav-link active" id="my-list-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#my-list" type="button" role="tab"
                                aria-controls="my-list" aria-selected="false">
                          Anime List
                        </button>
                      </li>



                    </ul>


                      {/*My Anime List*/}
                      <div className="tab-pane fade show active" id="my-list"
                           role="tabpanel"
                           aria-labelledby="my-list-tab">
                        <AnimeList/>
                      </div>

                    </div>


                  </div>
                </div>
              </div>

          </div>
        }
      </>

  )
}

export default PublicProfile