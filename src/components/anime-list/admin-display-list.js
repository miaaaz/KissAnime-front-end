import React from 'react';
import {Link} from "react-router-dom";
import AnimeRow from "./anime-row";
import "./anime-list.css"

const AdminDisplayList = ({animeList, user, deleteAnime}) => {

  return(
      <div className="wbdv-table-wrapper">
        <table
            className="table table-borderless responsive">

          <thead className="wbdv-thead">
          <tr>
            <th>Anime</th>

            {
              user &&
              <th className={"text-center"}>
                Actions
              </th>
            }


          </tr>
          </thead>

          <tbody>
          {animeList &&
          animeList.map((res, index) =>
              <AnimeRow
                  key={index}
                  user={user}
                  index={index}
                  anime={res.anime}
                  deleteAnime={deleteAnime}
              />)}

          </tbody>
        </table>
      </div>

  )
}

export default AdminDisplayList