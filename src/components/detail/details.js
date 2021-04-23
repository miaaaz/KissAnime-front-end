import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import animeService from '../../services/anime-service'
import TopNavBar from "../top-navbar/top-navbar";
import "./detail.css"
import SmallAnimeCard from "../small-anime-card/small-anime-card";
import UserCard from "../user-card/user-card";
import userService from '../../services/user-service'
import {connect} from "react-redux";
import userActions from "../actions/user-actions";
import {min} from "@popperjs/core/lib/utils/math";

const Details = ({isLoggedIn={}, loggedInUser={}, update}) => {
    const [anime, setAnime] = useState({})
    const {animeId} = useParams()

    const {keyWord} = useParams()
    const [searchKeyWord, setSearchKeyWord] = useState(keyWord)
    const [results, setResults] = useState({data:[]})

    const [showButtons, setShowButtons] = useState(true)
    const [curUser, setCurUser] = useState(loggedInUser || JSON.parse(localStorage.getItem("user")))

    const [relatedUsers, setRelatedUsers] = useState([]);

    const [admin, setAdmin] = useState(false)

    useEffect(() => {

        if (curUser.animeList) {
            const index = curUser.animeList.findIndex(elm => elm.id === animeId)
            if (index !== -1) {
                setShowButtons(false)
            } else {
                setShowButtons(true)
            }
        }
        if (curUser.userType === 'admin') {
            console.log(admin)
            setAdmin(true)
        }

        if (loggedInUser) {
            userService.findUserById(loggedInUser._id).then(actualUser => setCurUser(actualUser))
            if (loggedInUser.animeList) {
                const index = loggedInUser.animeList.findIndex(elm => elm.id === animeId)
                if (index !== -1) {
                    setShowButtons(false)
                } else {
                    setShowButtons(true)
                }
            }
        }

        animeService.findAnimeById(animeId)
        .then(anime => {
                setAnime(anime)
                setSearchKeyWord(anime.data.attributes.canonicalTitle)

            }
        )

        animeService.findAnimeByTitle(searchKeyWord)
        .then(results => setResults(results))

        animeService.findLocalAnimeById(animeId)
        .then(anime => {
            if (anime !== null) {
                setRelatedUsers(anime.watchedUsers)
            } else {
                setRelatedUsers([])
            }

        })
    }, [animeId, searchKeyWord])




    const addToList = (status) => {
        if (!loggedInUser) {
            alert("Please log in first.")
        } else if (curUser.animeList) {
            // Check duplicate anime
            const oldAnimes = loggedInUser.animeList
            const index = oldAnimes.findIndex(elm => elm.id === animeId)
            if (index === -1) {
                // Update user
                const newAnimes = [
                    ...loggedInUser.animeList,
                    {
                        id: animeId,
                        title: anime.data.attributes.canonicalTitle,
                        // store anime poster url
                        src: anime.data.attributes.posterImage.tiny,
                        created: new Date().toLocaleDateString(),
                        status: status
                    }
                ]
                const updatedUser = {
                    ...curUser,
                    animeList: newAnimes
                }

                update(updatedUser)
            } else {
                alert("The anime has been in your list")
            }

            animeService.findLocalAnimeById(animeId)
            .then(actualAnime => {
                if (actualAnime) {
                    const newAnime = {
                        _id: animeId,
                        title: anime.data.attributes.canonicalTitle,
                        postUrl: anime.data.attributes.posterImage.tiny,
                        watchedUsers: [
                            ...actualAnime.watchedUsers,
                            curUser
                        ]
                    }
                    animeService.updateAnime(animeId, newAnime).then(updatedAnime => {
                        setRelatedUsers(updatedAnime.watchedUsers)
                    })

                } else {
                    // Create anime
                    const newAnime = {
                        _id: animeId,
                        title: anime.data.attributes.canonicalTitle,
                        postUrl: anime.data.attributes.posterImage.tiny,
                        watchedUsers: [curUser]
                    }
                    animeService.createAnime(newAnime).then(updatedAnime => {
                        setRelatedUsers(updatedAnime.watchedUsers)
                    })
            }
            })


        }
    }



    return (
        <>
            {anime.data &&

            <div>

                <div className={"container"}>
                    <div className={"mb-3"}>
                        <TopNavBar/>
                    </div>
                    <div className={"wbdv-detail-main-info d-flex flex-column flex-sm-row"}>
                        <div className={"ps-3 pe-3"}>
                            <img src={anime.data.attributes.posterImage.small}/>
                        </div>

                        <div className={"wbdv-detail-attributes ps-3 flex-fill"}>
                            <h2 className={"flex-grow-1 "}>{anime.data.attributes.canonicalTitle}</h2>
                            <p>
                                {anime.data.attributes.startDate}
                            </p>

                            <p>
                                {anime.data.attributes.ageRating} | {anime.data.attributes.ageRatingGuide}
                            </p>

                            {/*Add to hope list*/}
                            {
                                showButtons &&

                                <div className={"container"}>
                                    <div className={"row"}>
                                        {
                                            !admin &&
                                            <div className="col-sm-2">

                                            <button
                                                onClick={() => addToList("want to watch")}
                                                className={"btn btn-success"}>
                                                <i className="fas fa-heart me-2"></i>
                                                <span>Hope</span>
                                            </button>
                                        </div>}
                                        {/*Add to watching list*/}

                                        {
                                            !admin &&
                                            <div className="col-sm-2">

                                            <button
                                                onClick={() => addToList("watching")}
                                                className={"btn btn-danger w-100"}>
                                                <i className="fas fa-heart me-2"></i>
                                                <span>Watching</span>
                                            </button>
                                        </div>}
                                        {/*Add to watched list*/}

                                        {
                                            !admin &&
                                            <div className="col-sm-2">


                                            <button
                                                onClick={() => addToList("watched")}
                                                className={"btn btn-primary w-100"}>
                                                <i className="fas fa-heart me-2"></i>
                                                <span>Watched</span>
                                            </button>
                                        </div>}
                                        {/*Add to watched list*/}
                                        {
                                            admin &&
                                            <div className="col-sm-2">
                                            <button
                                            onClick={() => addToList("watched")}
                                            className={"btn btn-secondary w-100"}>
                                            <i className="fas fa-heart me-2"></i>
                                            <span>Display</span>
                                            </button>
                                            </div>}
                                    </div>
                                </div>
                            }
                            {
                                !showButtons &&
                                <div>
                                    {
                                        !admin &&
                                        <div className="alert alert-success"
                                          role="alert">
                                        This anime is in your list
                                    </div>}
                                    {
                                        admin &&
                                        <div className="alert alert-success"
                                             role="alert">
                                            This anime is in the display list
                                        </div>}
                                </div>
                            }



                            <p className={"pt-3 pb-2"}>
                                {anime.data.attributes.description}
                            </p>


                            <table className="wbdv-detail-rating-table table table-borderless text-center">
                                <thead>
                                <tr>
                                    <th>{anime.data.attributes.averageRating}%</th>
                                    <th>{anime.data.attributes.popularityRank}</th>
                                    <th>{anime.data.attributes.ratingRank}</th>
                                </tr>

                                </thead>
                                <tbody>
                                <tr>
                                    <td scope="col">Rating</td>
                                    <td scope="col">Popularity Rank</td>
                                    <td scope="col">Rating Rank</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/*Related Anime*/}
                    <div className={"d-flex flex-column flex-sm-row mt-5"}>
                        <div className={"ps-3 d-flex flex-column"}>
                            <h5>Similar Animes</h5>
                            <div className={"d-flex flex-row d-flex flex-wrap"}>
                                {
                                    results &&
                                    results.data.slice(1, min(results.data.length - 1, 7)).map((result) =>
                                        <>
                                            <SmallAnimeCard
                                                key={result.id}
                                                postUrl={result.attributes.posterImage.tiny}
                                                title={result.attributes.canonicalTitle}
                                                id={result.id}
                                            />
                                        </>
                                    )
                                }
                            </div>

                        </div>
                    </div>

                    {/*Who viewed this anime*/}
                    <div className={"d-flex flex-column flex-sm-row mt-5"}>
                        <div className={"ps-3 d-flex flex-column"}>
                            <h5>Users who may like this anime</h5>
                            <div className={"d-flex flex-row flex-wrap"}>
                                {
                                    relatedUsers &&
                                    relatedUsers.map((user) => {
                                        return (
                                                <UserCard
                                                    key={user.id}
                                                    user={user}
                                                />
                                            )

                                    })
                                }


                            </div>
                        </div>
                    </div>
                    {/*bottom bar*/}
                    <div className={"flex-sm-row mt-5"}>
                        <hr/>
                        <center>
                            <div className={"col-10 text-danger font-italic"}>
                                <p6 className={"font-italic"}>---- All rights reserved ----</p6>
                            </div>
                            <div className={"col-2 text-danger"}>
                                <Link className={"text-danger"}to={""}>
                                    <p6>KissAnime   </p6>
                                    <i className="far fa-kiss-wink-heart"></i>
                                </Link>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.userReducer.isLoggedIn,
        loggedInUser: state.userReducer.user,
    }
}

const mapDispatchToProps = (dispatch) => ({


    update: (newUser) => {
        userActions.update(dispatch, newUser)
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(Details)