import  "./small-card.css"

const SmallCard = () => {
  return (
      <div className="card wbdv-small-card me-3">
        <img
            height={185}
            src="https://media.kitsu.io/anime/poster_images/40593/small.jpg?1597696917"
            className="card-img-top wbdv-user-card-img"
            alt="..."/>
          <div className="card-body p-0 pt-2">
            <p className="card-text">A Day Before Us</p>
          </div>
      </div>
  )
}

export default SmallCard