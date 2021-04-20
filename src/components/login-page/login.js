import React, {useState} from 'react'
import "./login.css"
import {Link, useHistory} from "react-router-dom";
import userService from '../../services/user-service'


const Login = () => {

  const [credentials, setCredentials] = useState({username: '', password: ''})

  const history = useHistory()

  const login = (e) => {
    e.preventDefault();

    userService.login(credentials)
    .then((user) => {

      if(user === 0) {
        alert("login failed, try again")
      } else {
        localStorage.setItem("user", JSON.stringify(user))
        history.push("/profile")
      }
    })

  }

  return (
      <div className={"wbdv-login-wrapper h-100"}>
        <div className={"container"}>
          <div className={"wbdv-login-box " }>
            {/*Nav tabs*/}
            <ul className="nav nav-pills mb-3" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="login-tab"
                        data-bs-toggle="tab" data-bs-target="#login" type="button"
                        role="tab" aria-controls="login" aria-selected="true">Sign in
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link ms-3" id="signup-tab" data-bs-toggle="tab"
                        data-bs-target="#signup" type="button" role="tab"
                        aria-controls="signup" aria-selected="false">Register
                </button>
              </li>

            </ul>
            {/*<h3 className="wbdv-header mb-3 mx-auto text-uppercase">*/}
            {/*  Sign In*/}
            {/*</h3>*/}

            <div className="tab-content" id="myTabContent">
              {/*Sign in content*/}
              <div className="tab-pane fade show active" id="login" role="tabpanel"
                   aria-labelledby="login-tab">
                <form>
                  <div className="mb-2">
                    <label htmlFor="username"
                           className="form-label">Username</label>
                    <input
                        id="username"
                        className="form-control"
                        value={credentials.username}
                        onChange={(e) => {setCredentials({...credentials, username: e.target.value})}}
                        type="text"
                        placeholder="Username"/>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="password"
                           className="form-label ">Password</label>
                    <input
                        id="password"
                        className="form-control"
                        value={credentials.password}
                        onChange={(e) => {setCredentials({...credentials, password: e.target.value})}}
                        type="password"
                        placeholder="Password"/>
                  </div>

                  <div className="mb-3">
                    <button
                        onClick={login}
                        className="btn btn-block btn-danger text-white w-100"
                        id="wbdv-login">
                      Sign in
                    </button>
                  </div>

                  <div className="mb-3 text-center">
                    <a href="#">Forgot Password?</a>
                  </div>
                </form>
              </div>

              {/*Register content*/}
              <div className="tab-pane fade" id="signup" role="tabpanel"
                   aria-labelledby="signup-tab">
                <form>
                  <div className="mb-2">
                    <label htmlFor="username"
                           className="form-label">Username</label>
                    <input
                        id="signup-username"
                        className="form-control"
                        type="text"
                        placeholder="Username"/>
                  </div>

                  <div className="mb-2">
                    <label htmlFor="email"
                           className="form-label">Email</label>
                    <input
                        id="email"
                        className="form-control"
                        type="email"
                        placeholder="Email"/>
                  </div>

                  <div className="mb-2">
                    <label htmlFor="password"
                           className="form-label ">Password</label>
                    <input id="signup-password" className="form-control" type="password" placeholder="Password"/>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="verifyPassword" className="form-label">Verify
                      Password</label>
                    <input id="verifyPassword"
                           className="form-control"
                           placeholder="Verify password"
                           type="password"/>
                  </div>

                  <div className="mb-3">
                    <Link to="/profile" className="btn btn-block btn-danger text-white w-100" id="wbdv-login">
                      Sign Up
                    </Link>
                  </div>

                </form>
              </div>

            </div>




              {/*<div className="form-group mb-3 text-center">*/}
              {/*  <a href="../register/register.template.client.html">Sign*/}
              {/*    up</a>*/}
              {/*</div>*/}


              {/*<div className="row justify-content-between">*/}
              {/*  <div className="col-6">*/}

              {/*  </div>*/}

              {/*  */}
              {/*</div>*/}
          </div>


        </div>
      </div>
  )
}

export default Login