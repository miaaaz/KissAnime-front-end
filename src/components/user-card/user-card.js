import  "./user-card.css"

const UserCard = () => {
  return (
      <div className="card wbdv-user-card me-3">
        <img
            src={"https://lh3.googleusercontent.com/proxy/Bpqqb1jsR6iCjckWcNGQnyd_qnk_gLf0mh_Ih-hisfv-EUISOcUu3MnnDHbOFZeCYKbJIMm9oaDYXPuX25iDL_bkPVsFBrnhS-k12ZHxUfcVGtswkGRfgrllnCz5Y39Ji6WVIU6qTWBSYAfSfg"}
            className="card-img-top"
            alt="..."/>
        <div className="card-body">
          <p className="card-text text-center">Bebop</p>
        </div>
      </div>
  )
}

export default UserCard