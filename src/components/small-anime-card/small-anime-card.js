import  "./small-anime-card.css"
import {Link} from "react-router-dom";

const SmallAnimeCard = ({postUrl, title, id}) => {
  return (
      // <div className="card wbdv-small-card me-3">
      //   <img
      //       height={185}
      //       src="https://media.kitsu.io/anime/poster_images/40593/small.jpg?1597696917"
      //       className="card-img-top wbdv-user-card-img"
      //       alt="..."/>
      //     <div className="card-body p-0 pt-2">
      //       <p className="card-text">A Day Before Us</p>
      //     </div>
      // </div>
      <div className="card wbdv-small-card me-3 mb-3">
          <img
              height={185}
              src={postUrl}
              className="card-img-top wbdv-user-card-img"
              alt="..."/>
          <Link
              to={`/details/${id}`}
              className="card-body p-0 pt-2">
              <p className="card-text">{title}</p>
          </Link>
      </div>
  )
}

export default SmallAnimeCard