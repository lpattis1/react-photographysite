import React from "react";

const Nav = (props) => {
  return (
    <nav
      style={{ zIndex: props.zState }}
      onClick={props.click}
      className="nav navbar menu-nav"
    >
      <svg
        className="nav-bars"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="26"
        viewBox="0 0 36 31"
      >
        {" "}
        <path
          className="bars"
          d="M36,0H0V3H36V0ZM24,14H0v3H24V14ZM36,28H0v3H36V28Z"
          transform="translate(36 31) rotate(180)"
        ></path>{" "}
      </svg>
    </nav>
  );
};

export default Nav;
