
import React from "react";
import { Link } from "react-scroll";

const NavLink = (props) => {
  return (
    <li className="nav-item active" style={{cursor:"pointer"}}>
      <Link smooth={true} duration={100} className="nav-link" to={props.path}>
        {props.title}
        <span className="sr-only">(current)</span>
      </Link>
    </li>
  );
};

export default NavLink;
