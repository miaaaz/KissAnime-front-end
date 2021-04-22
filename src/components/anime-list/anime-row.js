import React, { useState }from 'react';
import {Link} from "react-router-dom";


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
        <th scope="row">
          <Link to={`/details/${anime.id}`}>
            {anime.title}
          </Link>
        </th>
        <td className="d-none d-md-table-cell">
          {anime.created}
        </td>
          {
            editing &&
            <td>
              <select
                  onChange={
                    (e) => {
                      setNewStatus(e.target.value)
                      // setCurWidget(preWidget => ({
                      //   ...preWidget,
                      //   size: parseInt(e.target.value)
                      // }))
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
            <td className={"badge bg-success rounded-pill w-100"}>
              <span>{anime.status}</span>
            </td>
          }
          {

              !editing && anime.status === "watching" &&
              <td className={"badge bg-danger rounded-pill w-100"}>
                  <span>{anime.status}</span>
              </td>
          }
          {

              !editing && anime.status === "watched" &&
              <td className={"badge bg-primary rounded-pill w-100"}>
                  <span>{anime.status}</span>
              </td>
          }

        <td >

            {editing && <i onClick={() => saveStatus()} className="fas fa-check wbdv-icons"></i>}
            {editing && <i onClick={() => {setEditing(false); deleteAnime(anime.id)}} className="far fa-trash-alt wbdv-icons"></i>}
            {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit wbdv-icons"></i>}


        </td>
      </tr>

      // <tr>
      //   <td>
      //     {
      //       !editing &&
      //       <Link to={`/courses/table/edit/${course._id}`}>
      //         <i className="far fa-file-alt wbdv-file-icon fa-fw"></i>
      //         <span> {course.title}</span>
      //       </Link>
      //     }
      //
      //     {
      //       editing &&
      //       <input
      //           onChange={(event) => setNewTitle(event.target.value)}
      //           value={newTitle}
      //           className="form-control"/>
      //     }
      //
      //   </td>
      //   <td className="d-none d-sm-table-cell">{owner}</td>
      //   <td className="d-none d-lg-table-cell">{lastModified}</td>
      //   <td>
      //     {editing && <i onClick={() => saveTitle()} className="fas fa-check wbdv-icons"></i>}
      //     {editing && <i onClick={() => {setEditing(false); deleteCourse(course)}} className="far fa-trash-alt wbdv-icons"></i>}
      //     {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit wbdv-icons"></i>}
      //   </td>
      // </tr>
  )
}





export default AnimeRow