import {Link, useParams, useHistory} from "react-router-dom";
import React, {useState, useEffect} from 'react'
import "./top-navbar.css"

const TopNavBar = () => {

  const [curUser, setCurUser] = useState(null)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setCurUser(foundUser)

    }
  }, [])

  const logout = () => {
    localStorage.clear()
    setCurUser(null)
  }

  return (
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">

            <a href="/" className="navbar-brand wbdv-brand">KissAnime</a>
            <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03" aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className="">
                <i className={"fas fa-bars"}></i>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              </ul>
              {
                !curUser &&
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link
                        className="nav-link wbdv-signup-btn"
                        to="/login">Sign up</Link>
                  </li>
                  <li className="nav-item">
                    <Link
                        className="nav-link wbdv-login-btn text-white btn btn-danger ml-3 pe-3 ps-3"
                        to="/login">Log in</Link>
                  </li>

                </ul>
              }

              {
                curUser &&
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <button
                        onClick={logout}
                        className="nav-link btn wbdv-signup-btn">
                      <span className={"btn"}>Log out</span>

                    </button>
                  </li>
                  <li className="nav-item">
                    <Link
                        className="nav-link ml-3 pe-3 ps-3"
                        to="/profile">
                      <img
                          src={curUser.profilePicUrl}
                          className="card-img-top wbdv-navbar-img"
                          alt="..."/>
                      <span>{curUser.userName}</span>

                    </Link>
                  </li>

                </ul>
              }

            </div>
          </div>
        </nav>
  )
}

export default TopNavBar