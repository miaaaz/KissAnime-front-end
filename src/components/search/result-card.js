import React, {useState} from 'react'
import {Link} from "react-router-dom";

const AnimeCard = ({anime, updateCourse, deleteCourse}) => {
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
      // <tr>
      //   <td className="number text-center">1</td>
      //   <td className="image">
      //     <img src={anime.attributes.posterImage.tiny}
      //                 alt="..."/>
      //   </td>
      //   <td class="product">
      //     <strong>{anime.attributes.titles.en || anime.attributes.canonicalTitle}</strong>
      //
      //   </td>
      //   <td className="rate text-right"><span><i className="fa fa-star"></i><i
      //       // className="fa fa-star"></i><i className="fa fa-star"></i><i
      //       className="fa fa-star"></i><i
      //       className="fa fa-star-half-o"></i></span></td>
      //   <td className="price text-right">$350</td>
      // </tr>


      // <div className="col-md-4 mb-3">
      //   <div className="card p-3">
      //     <div className="d-flex flex-row mb-3"><img
      //         src={anime.attributes.posterImage.small} width="70"/>
      //       <div className="d-flex flex-column ml-2">
      //         <span>{anime.attributes.titles.en || anime.attributes.canonicalTitle}</span>
      //         <span className="text-black-50">
      //           Average Rating: {anime.attributes.averageRating}%
      //         </span>
      //       </div>
      //     </div>
      //     <span className={"text-truncate"}>{anime.attributes.description}</span>
      //     <div className="d-flex justify-content-between mt-3">
      //       {/*<span>Installed 172 times</span>*/}
      //       <Link to={`/details/${anime.id}`}
      //         className="text-primary">
      //         View&nbsp;
      //         <i className="fa fa-angle-right"></i>
      //       </Link>
      //     </div>
      //   </div>
      // </div>

      // <div className="card w-100">
      //   <div className="row">
      //     <div className="col-sm-3">
      //       <img src={anime.attributes.posterImage.tiny}
      //            alt="..."/>
      //     </div>
      //     <div className="col-sm-9">
      //       <div className="card-body">
      //         <h5 className="card-title">{anime.attributes.titles.en || anime.attributes.canonicalTitle}</h5>
      //         <p className="card-text text-truncate">{anime.attributes.description}</p>
      //         <a href="#" className="btn btn-primary stretched-link">View
      //           Profile</a>
      //       </div>
      //     </div>
      //   </div>
      // </div>

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


  // <div className="card mb-3">
  //   <div className="row g-0">
  //     <div className="col-md-4">
  //       <img src={anime.attributes.posterImage.tiny}
  //            alt="..."/>
  //     </div>
  //     <div className="col-md-8">
  //       <div className="card-body">
  //         <h5 className="card-title">
  //
  //           {anime.attributes.titles.en || anime.attributes.canonicalTitle}
  //         </h5>
  //         <p className="card-text text-truncate">{anime.attributes.description}</p>
  //         <p className="card-text"><small className="text-muted">Last updated 3
  //           mins ago</small></p>
  //       </div>
  //     </div>
  //   </div>
  // </div>




      // <div className="col mb-4">
      //   <div className="card">
      //     <img src="https://st2.depositphotos.com/1009634/7235/v/600/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg"
      //          className="card-img-top" alt="..."/>
      //     <div className="card-body">
      //       {
      //         // !editing &&
      //         <Link
      //             to={`/courses/grid/edit/${course._id}`}
      //             className="card-title">{course.title}
      //         </Link>
      //       }
      //
      //       {/*{*/}
      //       {/*  // editing &&*/}
      //       {/*  <input*/}
      //       {/*      onChange={(event) => setNewTitle(event.target.value)}*/}
      //       {/*      value={newTitle}*/}
      //       {/*      className="form-control mb-2"/>*/}
      //       {/*}*/}
      //
      //       <p className="card-text">Some description</p>
      //       <Link
      //           to={"#"}
      //           className="btn wbdv-button">{course.title}
      //       </Link>
      //     </div>
      //     <div className="card-footer">
      //       {/*<div className="float-right">*/}
      //       {/*  {editing && <i onClick={() => saveTitle()} className="fas fa-check wbdv-icons"></i>}*/}
      //       {/*  {editing && <i onClick={() => {setEditing(false); deleteCourse(course)}} className="far fa-trash-alt wbdv-icons"></i>}*/}
      //       {/*  {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit wbdv-icons"></i>}*/}
      //       {/*</div>*/}
      //     </div>
      //   </div>
      // </div>
  )
}







export default AnimeCard