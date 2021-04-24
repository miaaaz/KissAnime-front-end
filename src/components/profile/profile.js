import React, {useState, useEffect} from 'react'
import "./profile.css"
import AnimeList from "../anime-list/anime-list";
import TopNavBar from "../top-navbar/top-navbar";
import {Link, useParams} from "react-router-dom";
import userService from '../../services/user-service'
import EditingProfile from "./editing-profile";
import SmallAnimeCard from "../small-anime-card/small-anime-card";
import {connect} from "react-redux";
import userActions from "../actions/user-actions";
import adminService from '../../services/admin-service'


const Profile = ({isLoggedIn = {}, loggedInUser = {}, update}) => {

    // const {userId} = useParams()
    const [uid, setUid] = useState("")

    const [curUser, setCurUser] = useState(loggedInUser || JSON.parse(localStorage.getItem("user")))
    const [editingProfile, setEditingProfile] = useState(false)
    // const [name, setName] = useState("")


    useEffect(() => {
        if (curUser) {
            setUid(curUser._id)
        }
        console.log(curUser)
        if (uid) {
            userService.findUserById(uid).then(actualUser => {
                setCurUser(actualUser)
            })
        }
        console.log(curUser)
        // if (!uid) {
        //     adminService.findUserById(uid).then(actualUser => setCurUser(actualUser))
        // }

        // } else {
        //     const loggedInUser = localStorage.getItem("user");
        //     if (loggedInUser) {
        //         const foundUser = JSON.parse(loggedInUser);
        //         userService.findUserById(foundUser._id).then(actualUser => setCurUser(actualUser))
        //
        //         // setName(foundUser.userName)
        //
        //     }
        // }


    }, [uid])


    const updateUser = (newUser) => {
        // e.preventDefault();
        // userService.updateUser(newUser._id, newUser)
        //     .then(r => {
        //         localStorage.clear()
        //         localStorage.setItem("user", JSON.stringify(r))
        //         setEditingProfile(false)
        //     })
        update(newUser)
    }

    const deleteAnime = (id) => {

        console.log(curUser)
        const newList = curUser.animeList.filter((anime) => {

            return anime.id !== id
        })
        console.log(newList)
        const newUser = {
            ...curUser,
            animeList: newList
        }


        setCurUser(newUser)
        update(newUser)

    }

    const handleEdit = (e) => {
        setEditingProfile(true)
    }


    return (
        <body>
            {
                (isLoggedIn || loggedInUser) &&

                <div class={"wrapper container"}
                >

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
                                            curUser.userName
                                        }
                                    </div>
                                    {/*Image*/}
                                    <div className={"text-center mb-3"}>
                                        <img
                                            src={curUser.profilePicUrl}
                                            className="card-img-top wbdv-profile-img"
                                            alt="..."/>
                                    </div>
                                    {/*Change image*/}
                                    {/*<div className="col-12 text-center">*/}
                                    {/*    <button type="submit"*/}
                                    {/*            className="btn btn-danger text-uppercase">*/}
                                    {/*        Change image*/}
                                    {/*    </button>*/}
                                    {/*</div>*/}
                                    {/*Find anime*/}
                                    <div className="col-12 text-center">
                                        <button type="submit"
                                                className="btn btn-danger text-uppercase"
                                        >
                                            <a
                                                href={"https://kissanime-frontend.herokuapp.com/"}
                                                style={{color: "white"}}
                                            >
                                                Find Your Anime
                                            </a>
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
                                    <ul className="nav nav-pills" id="myTab" role="tablist">
                                        {
                                            curUser &&
                                            <li className="nav-item card-title h5"
                                                role="presentation">
                                                <button className="nav-link active me-3"
                                                        id="profile-detail-tab"
                                                        data-bs-toggle="tab"
                                                        data-bs-target="#profile-detail" type="button"
                                                        role="tab" aria-controls="profile-detail"
                                                        aria-selected="true">
                                                    Profile Details
                                                </button>
                                            </li>
                                        }
                                        <li className="nav-item card-title h5" role="presentation">
                                            <button className="nav-link" id="my-list-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#my-list" type="button" role="tab"
                                                    aria-controls="my-list" aria-selected="false">
                                                Anime List
                                            </button>
                                        </li>
                                    </ul>

                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="profile-detail"
                                             role="tabpanel"
                                             aria-labelledby="profile-detail-tab">
                                            {
                                                editingProfile &&
                                                <div>
                                                    <EditingProfile
                                                        user={curUser}
                                                        setEditingProfile={setEditingProfile}
                                                        updateUser={updateUser}
                                                    />
                                                </div>

                                            }
                                            {
                                                !editingProfile &&
                                                <div
                                                    className="row mt-2 g-3">
                                                    <div className="col-md-6">
                                                        <div className="h6 wbdv-profile-detail-header">Username</div>
                                                        <div>{curUser.userName}</div>
                                                    </div>

                                                    {/*<div className="col-md-6">*/}
                                                    {/*    <div className="h6 wbdv-profile-detail-header">Password</div>*/}
                                                    {/*    <div>*****</div>*/}
                                                    {/*</div>*/}

                                                    <div className="col-md-12">
                                                        <div className="h6 wbdv-profile-detail-header">Email</div>
                                                        <div>{curUser.email || ""}</div>
                                                    </div>

                                                    {/*<div className="col-6">*/}
                                                    {/*    <div className="h6 wbdv-profile-detail-header">Role</div>*/}
                                                    {/*    <div>{curUser.userType || ""}</div>*/}
                                                    {/*</div>*/}

                                                    <div className="col-12 text-end text-uppercase">
                                                        <button
                                                            onClick={handleEdit}
                                                            className="btn btn-danger text-uppercase">
                                                            Edit
                                                        </button>
                                                    </div>
                                                </div>

                                            }
                                        </div>

                                        {/*My Anime List*/}
                                        <div className="tab-pane fade" id="my-list"
                                             role="tabpanel"
                                             aria-labelledby="my-list-tab">
                                            <AnimeList
                                                user={curUser}
                                                animeList={curUser.animeList}
                                                updateUser={updateUser}
                                                deleteAnime={deleteAnime}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/*id="fixed-bottom-profile"*/}

                    <div className={"container"}
                         >

                        <hr/>
                        <footer className={"page-footer"}>
                        <center>
                            <div className={"col-10 text-danger font-italic"}>
                                <p6 className={"font-italic"}>---- All rights reserved ----</p6>
                            </div>
                            <div className={"col-2 text-danger"}>
                                <Link className={"text-danger"} to={""}>
                                    <p6>KissAnime</p6>
                                    <i className="far fa-kiss-wink-heart"></i>
                                </Link>
                            </div>
                        </center>
                        </footer>
                    </div>

                </div>
            }
        </body>
    )
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.userReducer.isLoggedIn,
        loggedInUser: state.userReducer.user,
    }
}

const mapDispatchToProps = (dispatch) => ({

    logout: () => {
        userActions.logout(dispatch)
    },

    update: (newUser) => {
        userActions.update(dispatch, newUser)
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)