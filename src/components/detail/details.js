import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import AnimeService from '../../services/anime-service'
import TopNavBar from "../top-navbar/top-navbar";
import "./detail.css"
import SmallAnimeCard from "../small-anime-card/small-anime-card";
import UserCard from "../user-card/user-card";
import userService from '../../services/user-service'
import {connect} from "react-redux";
import userActions from "../actions/user-actions";

const Details = ({isLoggedIn={}, loggedInUser={}, update}) => {
    const [anime, setAnime] = useState({})
    const {animeId} = useParams()

    const {keyWord} = useParams()
    const [searchKeyWord, setSearchKeyWord] = useState(keyWord)
    const [results, setResults] = useState({data:[]})

    const [showButtons, setShowButtons] = useState(true)
    const [curUser, setCurUser] = useState(loggedInUser || JSON.parse(localStorage.getItem("user")))

    const [count, setCount] = useState(0);

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
        }
        AnimeService.findAnimeById(animeId)
            .then(anime => {
                setAnime(anime)
                console.log(anime)
                setSearchKeyWord(anime.data.attributes.canonicalTitle)})

         AnimeService.findAnimeByTitle(searchKeyWord)
            .then(results => setResults(results))
    }, [searchKeyWord, animeId, loggedInUser, count])


    const addToList = (status) => {
        if (curUser.animeList) {
            // Check duplicate anime
            const oldAnimes = loggedInUser.animeList
            const index = oldAnimes.findIndex(elm => elm.id === animeId)
            if (index === -1) {
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
        } else {
            alert("Please log in first.")
        }
    }

    // const addToWatchingList = () => {
    //     const loggedInUser = localStorage.getItem("user");
    //     if (loggedInUser) {
    //         const foundUser = JSON.parse(loggedInUser);
    //         const oldAnimes = foundUser.animeList
    //         const newAnimees = [
    //             ...foundUser.animeList,
    //             {
    //                 id: animeId,
    //                 title: anime.data.attributes.canonicalTitle,
    //                 // store anime poster url
    //                 src: anime.data.attributes.posterImage.tiny,
    //                 created: new Date().toLocaleDateString(),
    //                 status: "watching"
    //             }
    //         ]
    //         const updatedUser = {
    //             ...foundUser,
    //             animeList: newAnimees
    //         }
    //         userService.updateUser(foundUser._id, updatedUser).then(r => console.log(r))
    //
    //
    //     } else {
    //         alert("Please log in first.")
    //     }
    // }
    //
    // const addToWatchedList = () => {
    //     const loggedInUser = localStorage.getItem("user");
    //     if (loggedInUser) {
    //         const foundUser = JSON.parse(loggedInUser);
    //         const oldAnimes = foundUser.animeList
    //         const newAnimees = [
    //             ...foundUser.animeList,
    //             {
    //                 id: animeId,
    //                 title: anime.data.attributes.canonicalTitle,
    //                 // store anime poster url
    //                 src: anime.data.attributes.posterImage.tiny,
    //                 created: new Date().toLocaleDateString(),
    //                 status: "watched"
    //             }
    //         ]
    //         const updatedUser = {
    //             ...foundUser,
    //             animeList: newAnimees
    //         }
    //         userService.updateUser(foundUser._id, updatedUser).then(r => console.log(r))
    //     } else {
    //         alert("Please log in first.")
    //     }
    // }


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

                        <div className={"wbdv-detail-attributes ps-3"}>
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
                                                className={"btn btn-success w-100"}>
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



                            <p className={"pt-4 pb-2"}>
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
                            <h3>Related Anime</h3>
                            <div className={"d-flex flex-row"}>
                                {console.log(results)}
                                {
                                    count < 7 &&
                                    results &&
                                    results.data.map((result) =>
                                        <>
                                            {console.log(count)}
                                            {count < 6 &&
                                                <p>
                                                {setCount(count + 1)}
                                            </p>}
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
                            <h3>Users who are watching this anime</h3>
                            <div className={"d-flex flex-row"}>
                                <UserCard/>
                                <UserCard/>
                                <UserCard/>
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