import Search from "./components/search/search-bar";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home/home";
import Details from "./components/detail/details";
import Login from "./components/login-page/login";
import Profile from "./components/profile/profile";
import SearchResults from "./components/search/search-results";

function App() {
  return (
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
              path={["/profile"]}>
            <Profile/>
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
  );
}

export default App;
