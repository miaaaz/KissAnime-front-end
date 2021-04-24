import React from 'react';
import {Link} from "react-router-dom";
import AnimeRow from "./anime-row";
import "./anime-list.css"

const AnimeList = ({animeList, user, updateUser, deleteAnime}) => {





    return(
          <div className="wbdv-table-wrapper">
            <table
                className="table table-borderless responsive">

              <thead className="wbdv-thead">
              <tr>
                <th>Anime</th>
                {
                  (user && user.userType === "webuser") &&
                  <th className="d-none d-lg-table-cell">Created</th>
                }
                {
                  (!user || user.userType === "webuser") &&
                  <th className={"text-center"}>Status</th>
                }
                

                {
                  user &&
                  <th >
                    Actions
                  </th>
                }


              </tr>
              </thead>

              <tbody>
              {animeList &&
                  animeList.map((anime, index) =>
                  <AnimeRow
                      key={index}
                      user={user}
                      index={index}
                      anime={anime}
                      updateUser={updateUser}
                      deleteAnime={deleteAnime}
              />)}

              </tbody>
            </table>
          </div>

    )
}

export default AnimeList