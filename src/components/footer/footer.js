import {Link} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import "./footer.css"

const Footer = ({loggedInUser}) => {
  return (
      <div className={"container pt-4 pb-2"}>

        {/*<hr/>*/}
        <footer className={"page-footer mb-2"}>
          <div className={"text-center"}>
            <div className={"text-danger font-italic pt-3"}>
              <p className={"mb-1 wbdv-footer-text"}>

                 All rights reserved |
                &copy; 2022 Made with
                <i className="fas fa-heart ms-2"></i>️</p>
              {
                loggedInUser &&
                <Link className={"text-danger"} to={"/"}>
                  <span>KissAnime</span>
                  <i className="ps-1 far fa-kiss-wink-heart"></i>
                </Link>
              }
              {
                !loggedInUser &&
                <Link className={"text-danger"} to={"/admin/login"}>
                  <span className={"wbdv-admin-login-text"}>Admin</span>
                  <i className="ps-1 far fa-kiss-wink-heart"></i>
                </Link>
              }

            </div>
          </div>
        </footer>
      </div>
  )
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.userReducer.isLoggedIn,
    loggedInUser: state.userReducer.user,
  }
}

export default connect(mapStateToProps)(Footer)