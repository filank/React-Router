import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <ul className="Nav-list">
          <Link to="/" exact style={{ textDecoration: "none" }}>
            <li>Home</li>
          </Link>
          <Link to="/category" style={{ textDecoration: "none" }}>
            <li>Category</li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>Products</li>
          </Link>
          <Link
            to="/login"
            style={{ textDecorationColor: " rgb(164, 102, 223)" }}
          >
            <li>admin area</li>
          </Link>
          <Link
            to="/admin"
            style={{
              color: "white",
              textDecorationColor: " rgb(164, 102, 223)",
            }}
          >
            Admin
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
