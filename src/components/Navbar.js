import { NavLink } from "react-router-dom";
import useAuth from "../auth/useAuth";

export default function Navbar() {
  const auth = useAuth();

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeclassname="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeclassname="active">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories" activeclassname="active">
            Categories
          </NavLink>
        </li>
        {!auth.isLogged() && (
          <>
            <li>
              <NavLink to="/login" activeclassname="active">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" activeclassname="active">
                Register
              </NavLink>
            </li>
          </>
        )}

        {auth.isLogged() && (
          <>
            <li>
              <NavLink to="/dashboard" activeclassname="active">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/payments" activeclassname="active">
                Payments
              </NavLink>
            </li>
            <li>
              <button onClick={auth.logout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
