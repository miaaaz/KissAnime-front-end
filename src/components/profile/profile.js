import React from 'react'
import "./profile.css"
import AnimeList from "../anime-list/anime-list";

const Profile = () => {
  return(

      <div className="container d-flex align-items-stretch w-100 vh-100">
          {/*Side bar*/}
          <div className="wbdv-profile-side-nav d-flex flex-column bg-light  p-5">
            <div >
              <div className="wbdv-profile-user-brand round text-center mb-5">
                <a href="#">
                  <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                       alt=""
                       width={100}
                       height={100}
                  />
                </a>
                <h6 className={"mt-2"}>Mfsdglsdf</h6>
              </div>

              {/*Pills*/}
              <ul className="nav nav-pills list-unstyled flex-column mb-auto">
                <li className="nav-item active">
                  <a className={"nav-link"} href="#">
                    <i className="fa fa-user me-2"></i>
                    <span>
                      Edit Profile
                    </span>
                    </a></li>
                <li className={"nav-item"}>
                  <a href="#" className={"nav-link"}>
                    <i className="fa fa-calendar me-2"></i>
                    <span>
                      Watching List
                    </span>

                    </a>
                </li>
                <li className={"nav-item"}>
                  <a href="#" className={"nav-link"}>
                    <i className="fa fa-calendar me-2"></i>
                    <span>
                      Watched List
                    </span>

                  </a>
                </li>
                <li className={"nav-item"}>
                  <a href="#" className={"nav-link"}>
                    <i className="fa fa-calendar me-2"></i>
                    <span>
                      Wish List
                    </span>

                  </a>
                </li>
              </ul>
            </div>
          </div>
        {/*Detail component*/}
        <div className="profile-info p-4 p-md-5 w-100">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    fip@jukmuh.al
                  </div>
                </div>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      fip@jukmuh.al
                    </div>
                  </div>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Phone</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        (239) 816-9029
                      </div>
                    </div>
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Mobile</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          (320) 380-4539
                        </div>
                      </div>
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Address</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            Bay Area, San Francisco, CA
                          </div>
                        </div>
              </div>
          </div>

          <AnimeList/>

        </div>

      </div>




  )
}

export default Profile