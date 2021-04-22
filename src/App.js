import Search from "./components/search/search-bar";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home/home";
import Details from "./components/detail/details";
import Login from "./components/login-page/login";
import Profile from "./components/profile/profile";
import SearchResults from "./components/search/search-results";
import PublicProfile from "./components/profile/public-profile";
import {connect, Provider} from "react-redux"
import {combineReducers, createStore} from "redux";
import userReducer from "./components/reducers/user-reducer";
import AdminLogin from "./components/admin-login-pages/admin-login";

const reducer = combineReducers({
  userReducer
})

const store = createStore(reducer)

function App() {
  return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <Route
                exact={true}
                path={["/"]}>
              <Home/>
            </Route>
            <Route
                exact={true}
                path={["/login"]}>
              <Login/>
            </Route>

            <Route
                exact={true}
                path={["admin/login"]}>
              <AdminLogin/>
            </Route>

            <Route
                exact={true}
                path={["/profile"]}>
              <Profile/>
            </Route>
            <Route
                exact={true}
                path={["/profile/:userId"]}>
              <PublicProfile/>
            </Route>
            <Route
                exact={true}
                path={["/search", "/search/:keyWord"]}>
              <SearchResults/>
            </Route>
            <Route
                exact={true}
                path={["/details/:animeId"]}>
              <Details/>
            </Route>

          </BrowserRouter>
        </div>
      </Provider>
  );
}

export default App;
