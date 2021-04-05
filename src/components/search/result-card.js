import React, {useState} from 'react'
import {Link} from "react-router-dom";

const ResultCard = ({anime, updateCourse, deleteCourse}) => {
  // const [editing, setEditing] = useState(false)
  // const [newTitle, setNewTitle] = useState(course.title)
  //
  // const saveTitle = () => {
  //   setEditing(false)
  //   const newCourse = {
  //     ...course,
  //     title: newTitle,
  //     lastModified: new Date().toLocaleDateString()
  //   }
  //   updateCourse(newCourse)
  // }

  return (

      <div className="card p-3 mb-3 ms-2 me-2 shadow wbdv-search-result-card">
        <div className="d-flex align-items-center">
          <div className="image">
            <img src={anime.attributes.posterImage.tiny}
                 alt="..."/>
          </div>
          <div className="ms-3 w-100">
            <h5 className="mb-0 mt-0 wbdv-result-title">{anime.attributes.titles.en || anime.attributes.canonicalTitle}</h5>
            <h6 className="card-text text-truncate">{anime.attributes.endDate}</h6>
            <div>
              <div className={"badge bg-danger text-light mr-2"}>
                {anime.attributes.ageRating}
              </div>
              {/*<span>*/}
              {/*  {anime.attributes.ageRatingGuide}*/}
              {/*</span>*/}

            </div>
            <div
                className="mt-2 d-flex justify-content-between rounded">
              <div>
                <span className={"badge bg-success text-light"}>
                  {anime.attributes.showType || anime.attributes.subtype}
                </span>
              </div>
              <div>
                  {
                    anime.attributes.averageRating &&
                        <>
                          <i className="fab fa-gratipay me-1 text-danger"></i>
                          <span>{anime.attributes.averageRating}%</span>
                        </>

                  }
              </div>

            </div>
            <div className="button mt-2 d-flex flex-row align-items-center">
              <Link to={`/details/${anime.id}`}
                    className="text-danger">
                Detail&nbsp;
                <i className="fa fa-angle-right"></i>
              </Link>

              {/*<button className="btn btn-sm btn-outline-primary w-100">Chat*/}
              {/*</button>*/}
              {/*<button className="btn btn-sm btn-primary w-100 ml-2">Follow*/}
              {/*</button>*/}
            </div>
          </div>
        </div>
      </div>



  )
}







export default ResultCard