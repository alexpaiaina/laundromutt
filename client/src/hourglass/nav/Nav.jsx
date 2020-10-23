import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="admin-login">
        <NavLink to="/auth/login" className="admin-link">ADMIN LOGIN</NavLink>
      </div>
      <div className="navbar">
        <div className="navbar-links">
          <div className="dead-links">Ketchum</div>
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/images/laundromutt.png`} alt="laundromutt-logo"/>
          </Link>
          <div className="dead-links">Idaho</div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;