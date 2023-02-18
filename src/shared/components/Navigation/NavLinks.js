import React, { useContext, useEffect } from "react";
import "./NavLinks.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import { connect } from "react-redux";
import { logUserOut } from "../../../Redux/Action/User.action";

const NavLinks = (props) => {
  useEffect(() => {}, []);
  const authContext = useContext(AuthContext);
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact="true">
          ALL USERS
        </NavLink>
      </li>
      {authContext.isLoggedIn && (
        <li>
          <NavLink to={`/${props.userState.curUser["_id"]}/places`}>
            MY PLACES
          </NavLink>
        </li>
      )}
      {authContext.isLoggedIn && (
        <>
          <li>
            <NavLink to="/places/new">NEW PLACE</NavLink>
          </li>

          <li>
            <NavLink
              onClick={() => {
                props.logUserOut();
                authContext.logOut();
              }}
              to="/auth"
            >
              LOGOUT
            </NavLink>
          </li>
        </>
      )}
      {!authContext.isLoggedIn && (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      )}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    userState: state.userReducer,
  };
};
const mapDispatcherToProps = (d) => {
  return {
    logOut: () => {
      d(logUserOut);
    },
  };
};

export default connect(mapStateToProps, mapDispatcherToProps)(NavLinks);
