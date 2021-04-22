import AnimeList from "../anime-list/anime-list";
import React, {useState, useEffect} from 'react'
import userService from "../../services/user-service";

const EditingProfile = ({user, setEditingProfile, updateUser}) => {

  const [userCache, setUserCache] = useState(user)

  useEffect(() => {
    console.log(userCache)
  })

  // const updateUser = (e) => {
  //   // e.preventDefault();
  //   userService.updateUser(userCache._id, userCache)
  //   .then(r => {
  //     localStorage.setItem("user", JSON.stringify(r))
  //     setEditingProfile(false)
  //   })
  // }

  const setUserName = (username) => {
    const newUser = {
      ...userCache,
      userName: username
    }
    setUserCache(newUser)
  }

  const setEmail = (email) => {
    const newUser = {
      ...userCache,
      email: email
    }
    setUserCache(newUser)
  }

  const setPassword = (password) => {
    const newUser = {
      ...userCache,
      password: password
    }
    setUserCache(newUser)
  }

  const setPosterUrl = (profilePicUrl) => {
    const newUser = {
      ...userCache,
      profilePicUrl: profilePicUrl
    }
    setUserCache(newUser)
  }

  return (
      <>
        {/*<div className="tab-content" id="myTabContent">*/}
          {/*Profile Detail Content*/}
            {/*Form*/}
            <form onSubmit={() => updateUser(userCache)}
                  className="row mt-2 g-3">
              {/*Username*/}
              <div className="col-md-6">
                <label htmlFor="usernameFld"
                       className="form-label">Username</label>
                <input type="text"
                       onChange={(e) => setUserName(e.target.value)}
                       value={userCache.userName}
                       className="form-control"
                       id="usernameFld"/>
              </div>

              {/*Password*/}
              <div className="col-md-6">
                <label htmlFor="inputPassword4"
                       className="form-label">Password</label>
                <input type="password"
                       onChange={(e) => setPassword(e.target.value)}
                       value={userCache.password}
                       className="form-control"
                       id="inputPassword4"/>
              </div>

              {/*Email*/}
              <div className="col-md-12">
                <label htmlFor="inputEmail4"
                       className="form-label">Email</label>
                <input type="email"
                       onChange={(e) => setEmail(e.target.value)}
                       value={userCache.email}
                       className="form-control"
                       id="inputEmail4"/>
              </div>

              {/*/!*DOB*!/*/}
              {/*<div className="col-6">*/}
              {/*  <label htmlFor="dobFld" className="form-label">*/}
              {/*    Date of Birth</label>*/}
              {/*  <input type="date" className="form-control"*/}
              {/*         id="dobFld"/>*/}
              {/*</div>*/}

              {/*post url*/}
              <div className="col-md-12">
                <label htmlFor="inputEmail4"
                       className="form-label">Profile Image URL</label>
                <input type="text"
                       onChange={(e) => setPosterUrl(e.target.value)}
                       value={userCache.profilePicUrl}
                       className="form-control"
                       id="inputEmail4"/>
              </div>

              {/*Role*/}
              <div className="col-6">
                <label htmlFor="roleFld"
                       className="form-label">Role</label>
                <div>
                  <select className="form-select" id="roleFld">
                    <option value="webuser">User</option>
                    <option disabled value="admin">Editor/Admin
                    </option>
                  </select>
                </div>
              </div>



              {/*<div className="col-12">*/}
              {/*  <label htmlFor="inputAddress"*/}
              {/*         className="form-label">Address</label>*/}
              {/*  <input type="text"*/}
              {/*         className="form-control"*/}
              {/*         value={userCache.address || ""}*/}
              {/*         id="inputAddress" placeholder="1234 Main St"/>*/}
              {/*</div>*/}

              {/*Save changes*/}
              <div className="col-12 text-end text-uppercase">
                <button
                    type="submit"
                    className="btn btn-danger text-uppercase">
                  Save
                </button>
              </div>
            </form>

      </>


)
}

export default EditingProfile