import React, {useState} from 'react';
import {Link} from "react-router-dom";
import displayService from "../../services/display-service"

const AnimeRow = ({user, anime, updateUser, index, deleteAnime}) => {

  const [editing, setEditing] = useState(false)
  const [newStatus, setNewStatus] = useState(anime.status)

  const saveStatus = () => {
    setEditing(false)
    const newUser = {
      ...user,
      animeList: [...user.animeList]
    }
    newUser.animeList[index].status = newStatus
    updateUser(newUser)
  }



  return (

      <tr>
        <th scope="row ">
          <Link
              className={"wbdv-list-text"}
              to={`/details/${anime.id || anime._id}`}>
            {anime.title}
          </Link>
        </th>
        {
          (user && user.userType === "webuser") &&
          <td className="d-none d-lg-table-cell wbdv-list-text">
            {anime.created}
          </td>
        }

        {
          // (user && user.userType === "webuser") &&
          <>
            {
              editing && (user && user.userType === "webuser") &&
              <td>
                <select
                    onChange={
                      (e) => {
                        setNewStatus(e.target.value)

                      }

                    }
                    value={newStatus}
                    className="form-select-sm">
                  <option value={"want to watch"}>Want to watch</option>
                  <option value={"watching"}>Watching</option>
                  <option value={"watched"}>Watched</option>
                </select>
              </td>

            }
            {

              !editing && anime.status === "want to watch" &&
              <td >
                <div className={"badge bg-success rounded-pill w-100"}>
                  <span>{anime.status}</span>
                </div>

              </td>
            }
            {

              !editing && anime.status === "watching" &&
              <td >
                <div className={"badge bg-danger rounded-pill w-100"}>
                  <span>{anime.status}</span>
                </div>

              </td>
            }
            {

              !editing && anime.status === "watched" &&
              <td >
                <div className={"badge bg-dark rounded-pill w-100"}>
                  <span>{anime.status}</span>
                </div>

              </td>
            }
          </>

        }


        {
          (user && user.userType === "webuser") &&
          <td className={"text-center"}>

            {editing && <i onClick={() => saveStatus()}
                           className="fas fa-check wbdv-icons pe-3 wbdv-list-icons"></i>}
            {editing && <i onClick={() => {
              setEditing(false);
              deleteAnime(anime.id);
              // handleDeleteDisplayAnime(anime.id)
            }} className="fas fa-trash-alt wbdv-icons wbdv-list-icons"></i>}
            {!editing && <i onClick={() => setEditing(true)}
                            className="fas fa-edit wbdv-icons wbdv-list-icons"></i>}


          </td>
        }
        {
          user && user.userType === "admin" &&
          <td className={"text-center"}>

            <i onClick={() => {
              setEditing(false);
              deleteAnime(anime.id || anime._id);
              // handleDeleteDisplayAnime(anime.id || anime._id)
            }} className="fas fa-trash-alt wbdv-icons wbdv-list-icons"></i>



          </td>
        }

      </tr>

  )
}

export default AnimeRow