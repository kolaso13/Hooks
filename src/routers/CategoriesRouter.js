import {
    Link,
    NavLink,
    Routes,
    Route,
    Redirect,
    useRouteMatch,
  } from "react-router-dom";
  import CategoriesPage from "../pages/CategoriesPage";
  import PrivateRoute from "./PrivateRoute";
  
  export default function CategoriesRouter() {
    const { url } = useRouteMatch();
  
    return (
      <div>
        <ul>
          <li>
            <NavLink exact to={`${url}`} activeclassname="active">
              All
            </NavLink>
          </li>
          <li>
            <NavLink to={`${url}/terror`} activeclassname="active">
              Terror
            </NavLink>
          </li>
          <li>
            <NavLink to={`${url}/action`} activeclassname="active">
              Action
            </NavLink>
          </li>
          <li>
            <NavLink to={`${url}/anime`} activeclassname="active">
              Anime
            </NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="/categories" component={CategoriesPage} />
          <PrivateRoute path="/categories/terror" component={TerrorRouter} />
  
          <Route path="/categories/action">
            <h1>Category Action</h1>
          </Route>
          <Route path="/categories/anime">
            <h1>Category Anime</h1>
          </Route>
  
          <Route path="*">
            <Redirect to="/404" />
          </Route>
        </Routes>
      </div>
    );
  }
  
  function TerrorRouter() {
    const { url } = useRouteMatch();
  
    return (
      <div>
        <ul>
          <li>
            <Link to="/categories/terror">All</Link>
          </li>
          <li>
            <Link to="/categories/terror/gore">Gore</Link>
          </li>
          <li>
            <Link to="/categories/terror/suspense">Suspense</Link>
          </li>
        </ul>
        <Routes>
          <Route path={`${url}`}>
            <h3>Category Terror</h3>
          </Route>
          <Route path={`${url}/gore`}>
            <h3>Gore</h3>
          </Route>
          <Route path={`${url}/suspense`}>
            <h3>Suspense</h3>
          </Route>
          <Route path="*">
            <Redirect to="/404" />
          </Route>
        </Routes>
      </div>
    );
  }