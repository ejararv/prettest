import React from "react";
import { Link } from "react-router-dom";

import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.navbar_logo}>Books</div>
      <div>
        <Link className={classes.navbar_links} to="/home">
          Books
        </Link>
        <Link className={classes.navbar_links} to="/add">
          {" "}
          Add book
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
