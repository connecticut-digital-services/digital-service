import React from "react";
import { Link } from "gatsby";

function NavLink(props) {
    return (
      <Link className={`ct-nav-link ct-text-white ct-px-4 ct-py-2`} {...props} activeClassName={`ct--is-active`}>
        <span>{ props.children }</span>
      </Link>
    );
}

export default NavLink;
