import React from 'react'
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();

    return (
          <ul className="nav">
            <li className="nav-item">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                Search
                </Link>
            </li>
            <li className="nav-item">
                <Link
                to="/books"
                className={location.pathname === "/books" ? "nav-link active" : "nav-link"}
                >
                Saved
                </Link>
            </li>
          </ul>
    )
}

export default NavBar
