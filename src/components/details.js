import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import AnimeService from '../services/anime-service'

const Details = () => {
  const [anime, setAnime] = useState({})
  const {animeId} = useParams()

  useEffect(() => {
    AnimeService.findAnimeById(animeId)
    .then(anime => setAnime(anime))
  }, [animeId])


  return(
      <>
        {anime.data &&

            <div>
              <h1>{anime.data.attributes.canonicalTitle}</h1>
              <div className={"inline-block"}>
                <img src={anime.data.attributes.posterImage.small}/>
                <h3>
                  <span className={"mt-3 badge bg-success text-light"}>
                    Average Rating: {anime.data.attributes.averageRating}%
                  </span>
                </h3>
              </div>


              <p>
                {anime.data.attributes.description}
              </p>

            </div>


        }

      </>
  )
}

export default Details