import React from 'react'
import "./profile.css"
import AnimeList from "../anime-list/anime-list";
import TopNavBar from "../top-navbar/top-navbar";

const Profile = () => {
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
                  Username
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
                      My Anime List
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
                    <form className="row mt-2 g-3">
                      {/*Username*/}
                      <div className="col-md-6">
                        <label htmlFor="usernameFld"
                               className="form-label">Username</label>
                        <input type="text" className="form-control"
                               id="usernameFld"/>
                      </div>

                      {/*Password*/}
                      <div className="col-md-6">
                        <label htmlFor="inputPassword4"
                               className="form-label">Password</label>
                        <input type="password" className="form-control"
                               id="inputPassword4"/>
                      </div>

                      {/*Email*/}
                      <div className="col-md-12">
                        <label htmlFor="inputEmail4"
                               className="form-label">Email</label>
                        <input type="email" className="form-control"
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
                            <option value="Faculty">User</option>
                            <option disabled value="Admin">Editor/Admin</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="inputAddress"
                               className="form-label">Address</label>
                        <input type="text" className="form-control"
                               id="inputAddress" placeholder="1234 Main St"/>
                      </div>

                      {/*Save changes*/}
                      <div className="col-12 text-end text-uppercase">
                        <button type="submit" className="btn btn-danger text-uppercase">
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