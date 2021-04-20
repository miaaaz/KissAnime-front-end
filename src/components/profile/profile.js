import React, {useState, useEffect} from 'react'
import "./profile.css"
import AnimeList from "../anime-list/anime-list";
import TopNavBar from "../top-navbar/top-navbar";
import {useParams} from "react-router-dom";
import userService from '../../services/user-service'

const Profile = () => {

  const {userId} = useParams()

  const [alert, setAlert] = useState(false)
  const [curUser, setCurUser] = useState({})
  // const [name, setName] = useState("")

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setCurUser(foundUser)
      // setName(foundUser.userName)

    }
  }, [])

  const updateUser = (e) => {
    userService.updateUser(curUser._id, curUser)
    .then(r => {
      setAlert(true)
      localStorage.setItem("user", JSON.stringify(r))
    })
    e.preventDefault();
  }

  const setUserName = (username) => {
    const newUser = {
      ...curUser,
      userName: username
    }
    setCurUser(newUser)
  }

  return(
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
                    userId || curUser.userName
                  }

                </div>
                {/*Image*/}
                <div className={"text-center mb-3"}>
                  <img
                      src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfpAw_3VIQ1dwcM2Jw3WCQOMmS024jAV_zmQ&usqp=CAU"}
                      className="card-img-top wbdv-profile-img"
                      alt="..."/>
                </div>
                {/*Change image*/}
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-danger text-uppercase">
                    Change image
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
                <ul className="nav nav-pills mb-3" id="myTab" role="tablist">
                  <li className="nav-item card-title h5" role="presentation">
                    <button className="nav-link  active" id="my-list-tab" data-bs-toggle="tab"
                            data-bs-target="#my-list" type="button" role="tab"
                            aria-controls="my-list" aria-selected="false">
                      Anime List
                    </button>
                  </li>
                  <li className="nav-item card-title h5" role="presentation">
                    <button className="nav-link ms-3" id="profile-detail-tab"
                            data-bs-toggle="tab" data-bs-target="#profile-detail" type="button"
                            role="tab" aria-controls="profile-detail" aria-selected="true">
                      Profile Details
                    </button>
                  </li>


                </ul>





                <div className="tab-content" id="myTabContent">
                  {/*Profile Detail Content*/}
                  <div className="tab-pane fade" id="profile-detail" role="tabpanel"
                       aria-labelledby="profile-detail-tab">
                    {/*Alert*/}
                    {
                      alert &&
                      <div className="alert alert-success" role="alert">
                        Update successfully!
                      </div>
                    }
                    {/*Form*/}
                    <form onSubmit={updateUser}
                        className="row mt-2 g-3">
                      {/*Username*/}
                      <div className="col-md-6">
                        <label htmlFor="usernameFld"
                               className="form-label">Username</label>
                        <input type="text"
                               onChange={(e) => setUserName(e.target.value)}
                               value={curUser.userName}
                               className="form-control"
                               id="usernameFld"/>
                      </div>

                      {/*Password*/}
                      <div className="col-md-6">
                        <label htmlFor="inputPassword4"
                               className="form-label">Password</label>
                        <input type="password"
                               value={curUser.password}
                               className="form-control"
                               id="inputPassword4"/>
                      </div>

                      {/*Email*/}
                      <div className="col-md-12">
                        <label htmlFor="inputEmail4"
                               className="form-label">Email</label>
                        <input type="email"
                               value={curUser.email}
                               className="form-control"
                               id="inputEmail4"/>
                      </div>

                      {/*DOB*/}
                      <div className="col-6">
                        <label htmlFor="dobFld" className="form-label">
                          Date of Birth</label>
                        <input type="date" className="form-control" id="dobFld"/>

                      </div>

                      {/*Role*/}
                      <div className="col-6">
                        <label htmlFor="roleFld"
                               className="form-label">Role</label>
                        <div>
                          <select className="form-select" id="roleFld">
                            <option value="webuser">User</option>
                            <option disabled value="admin">Editor/Admin</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="inputAddress"
                               className="form-label">Address</label>
                        <input type="text"
                               className="form-control"
                               value={curUser.address || ""}
                               id="inputAddress" placeholder="1234 Main St"/>
                      </div>

                      {/*Save changes*/}
                      <div className="col-12 text-end text-uppercase">
                        <button

                            type="submit"
                            className="btn btn-danger text-uppercase">
                          Save
                        </button>
                      </div>
                    </form>

                  </div>

                  {/*My Anime List*/}
                  <div className="tab-pane fade show active" id="my-list" role="tabpanel"
                       aria-labelledby="my-list-tab">
                    <AnimeList/>
                  </div>

                </div>



              </div>
            </div>
          </div>
        </div>
      </div>

  )
}

export default Profile