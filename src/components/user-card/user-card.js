import  "./user-card.css"

const UserCard = () => {
  return (
      <div className="card wbdv-user-card me-3">
        <img
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfpAw_3VIQ1dwcM2Jw3WCQOMmS024jAV_zmQ&usqp=CAU"}
            className="card-img-top"
            alt="..."/>
        <div className="card-body">
          <p className="card-text text-center">Bebop</p>
        </div>
      </div>
  )
}

export default UserCard