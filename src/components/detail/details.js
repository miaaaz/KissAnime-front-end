import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import AnimeService from '../../services/anime-service'
import TopNavBar from "../top-navbar/top-navbar";
import "./detail.css"
import SmallAnimeCard from "../small-anime-card/small-anime-card";
import UserCard from "../user-card/user-card";
import userService from '../../services/user-service'

const Details = () => {
  const [anime, setAnime] = useState({})
  const {animeId} = useParams()

  useEffect(() => {
    AnimeService.findAnimeById(animeId)
    .then(anime => setAnime(anime))
  }, [animeId])

  const addToList = () => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      const oldAnimes = foundUser.animeList
      const newAnimees = [
          ...foundUser.animeList,
        {
          id: animeId,
          title: anime.data.attributes.canonicalTitle,
          created: new Date().toLocaleDateString(),
          status: "want to watch"
        }
      ]
      const updatedUser = {
        ...foundUser,
        animeList: newAnimees
      }
      userService.updateUser(foundUser._id, updatedUser).then(r => console.log(r))

    }
  }


  return(
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

                    {/*Add to list*/}
                    <button
                        onClick={addToList}
                        className={"btn btn-danger"}>
                      <i className="fas fa-heart me-2"></i>
                      <span>Add to my list</span>

                    </button>

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
                    <SmallAnimeCard/>
                    <SmallAnimeCard/>
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

              </div>


            </div>


        }

      </>
  )
}

export default Details