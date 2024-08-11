import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

const Navbar = () => {
  const auth = useAuth();

  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "normal" : "bold",
      textDecoration: isActive ? "underline" : "none",
    };
  };

  return (
    <div>
      <NavLink style={navLinkStyle} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyle} to="/about">
        About
      </NavLink>

      <NavLink style={navLinkStyle} to="/products">
        Products
      </NavLink>
      <NavLink style={navLinkStyle} to="/profile">
        Profile
      </NavLink>

      {!auth.user && (
        <NavLink style={navLinkStyle} to="login">
          Login
        </NavLink>
      )}
    </div>
  );
};

export default Navbar;
