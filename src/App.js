import Search from "./components/search";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home";
import Details from "./components/details";

function App() {
  return (
      <div className="container-fluid">
        <BrowserRouter>
          <Route
              exact={true}
              path={["/"]}>
            <Home/>
          </Route>
          <Route
              exact={true}
              path={["/search", "/search/:keyWord"]}>
            <Search/>
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
