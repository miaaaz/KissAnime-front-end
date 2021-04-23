import React, {useState, Component, useEffect} from 'react'
import "./login.css"
import {Link, useHistory} from "react-router-dom";
import userService from '../../services/user-service'
import {connect} from "react-redux";

import userReducer from "../reducers/user-reducer";
import userActions, {LOGIN, TEST} from "../actions/user-actions";


const Login = ({isLoggedIn = {}, curUser = {}, login}) => {

    const [credentials, setCredentials] = useState({username: '', password: ''})
    const [signupInfo, setSignupInfo] = useState({
        userName: "",
        password: "",
        email: "",
        profileName: "",
        profilePicUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfpAw_3VIQ1dwcM2Jw3WCQOMmS024jAV_zmQ&usqp=CAU",
        userType: "webuser",
        animeList: []
    })
    const [confirmPassword, setConfirmPassword] = useState("")

    const history = useHistory()


    const handleSignUp = (e) => {
        const {id, value} = e.target
        setSignupInfo(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const register = (e) => {
        e.preventDefault();
        if (signupInfo.password === confirmPassword) {
            userService.register(signupInfo).then(user => {
                localStorage.setItem("user", JSON.stringify(user))
                history.push("/profile")
            })
        } else {
            alert("Passwords don't match. Please try again.")
        }

    }

    const handleSignin = (e) => {
        e.preventDefault()
        login(credentials)
        if (curUser) {
            history.push("/profile")
        }
    }

    return (
        <div className={"wbdv-login-wrapper h-100"}>
            <div className={"container"}>

                <div className={"wbdv-login-box "}>
                    <div className={"text-center mb-3"}>
                        <Link to="/" className="navbar-brand wbdv-brand">KissAnime</Link>
                    </div>


                    {/*Nav tabs*/}
                    <ul className="nav nav-pills mb-3" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="login-tab"
                                    data-bs-toggle="tab" data-bs-target="#login" type="button"
                                    role="tab" aria-controls="login" aria-selected="true">
                                Sign in
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link ms-3" id="signup-tab" data-bs-toggle="tab"
                                    data-bs-target="#signup" type="button" role="tab"
                                    aria-controls="signup" aria-selected="false">
                                Register
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
                            <form onSubmit={(e) => {
                                handleSignin(e)
                            }}>
                                <div className="mb-2">
                                    <label htmlFor="username"
                                           className="form-label">Username</label>
                                    <input
                                        id="username"
                                        className="form-control"
                                        value={credentials.username}
                                        onChange={(e) => {
                                            setCredentials({...credentials, username: e.target.value})
                                        }}
                                        type="text"
                                        placeholder="Username"/>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="password"
                                           className="form-label ">Password</label>
                                    <input
                                        id="signin-password"
                                        className="form-control"
                                        value={credentials.password}
                                        onChange={(e) => {
                                            setCredentials({...credentials, password: e.target.value})
                                        }}
                                        type="password"
                                        placeholder="Password"/>
                                </div>

                                <div className="mb-3">
                                    <button
                                        type={"submit"}
                                        className="btn btn-block btn-danger text-white w-100"
                                        id="wbdv-login">
                                        Sign in
                                    </button>
                                </div>

                                {/*<div className="mb-3 text-center">*/}
                                {/*  <a href="#">Forgot Password?</a>*/}
                                {/*</div>*/}
                            </form>
                        </div>


                        {/*Register content*/}
                        <div className="tab-pane fade" id="signup" role="tabpanel"
                             aria-labelledby="signup-tab">
                            <form onSubmit={register}>
                                <div className="mb-2">
                                    <label htmlFor="username"
                                           className="form-label">Username</label>
                                    <input
                                        id="userName"
                                        className="form-control"
                                        type="text"
                                        value={signupInfo.userName}
                                        onChange={handleSignUp}
                                        placeholder="Username"/>
                                </div>

                                <div className="mb-2">
                                    <label htmlFor="email"
                                           className="form-label">Email</label>
                                    <input
                                        id="email"
                                        className="form-control"
                                        type="email"
                                        value={signupInfo.email}
                                        onChange={handleSignUp}
                                        placeholder="Email"/>
                                </div>

                                <div className="mb-2">
                                    <label htmlFor="password"
                                           className="form-label ">Password</label>
                                    <input id="password"
                                           value={signupInfo.password}
                                           onChange={handleSignUp}
                                           className="form-control"
                                           type="password"
                                           placeholder="Password"/>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="verifyPassword" className="form-label">Verify
                                        Password</label>
                                    <input id="verifyPassword"
                                           className="form-control"
                                           placeholder="Verify password"
                                           value={confirmPassword}
                                           onChange={(e) => setConfirmPassword(e.target.value)}
                                           type="password"/>
                                </div>

                                <div className="mb-3">
                                    <button type={"submit"} className="btn btn-block btn-danger text-white w-100"
                                            id="wbdv-login">
                                        Sign Up
                                    </button>
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
                <div className={"row"}
                     id="fixed-bottom-profile"
                >
                    <center>
                        <div className={"col-10 text-danger font-italic"}>
                            <p6 className={"font-italic"}>---- All rights reserved ----</p6>
                        </div>

                        <Link className={"text-danger"} to={""}>
                            <p6>KissAnime</p6>
                            <i className="far fa-kiss-wink-heart"></i>
                        </Link>
                    </center>
                </div>

            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.userReducer.isLoggedIn,
        curUser: state.userReducer.user,
    }
}

const mapDispatchToProps = (dispatch) => ({
    login: (credentials) => {
        userActions.login(dispatch, credentials)
    },
    logout: () => {
        userActions.logout(dispatch)
    },

})


export default connect(mapStateToProps, mapDispatchToProps)(Login)