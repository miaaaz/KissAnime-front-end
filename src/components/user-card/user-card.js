import  "./user-card.css"
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const UserCard = ({user, loggedInUser}) => {
  return (
      <div className="card wbdv-user-card me-3">
        <img
            src={user.profilePicUrl}
            className="card-img-top"
            alt="..."/>
        <div className="card-body">
          <Link
              to={loggedInUser && loggedInUser._id === user._id ? `/profile` : `/profile/${user._id}`}
              className="card-text">
            <p className="text-center">
              {user.userName}
            </p>

          </Link>
        </div>
      </div>
  )
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.userReducer.isLoggedIn,
    loggedInUser: state.userReducer.user,
  }
}

export default connect(mapStateToProps)(UserCard)