import React from "react";
import { BsXLg } from "react-icons/bs";
import { Link } from "react-router-dom";

const Menu = (props) => {
  return (
    <div
      style={{
        transform: `translateY(${props.slider})`,
        transition: props.trans,
        opacity: props.opac,
      }}
      className="directory-menu"
    >
      <div className="container menu-container align-items-center">
        <div className="top-menu d-flex justify-content-between align-items-center mt-5">
          <h4 className="logo">
            <Link className="back menu-link-direct" exact to="/">
              KCM
            </Link>
          </h4>
          <BsXLg
            onClick={props.click}
            className="close-icon align-self-center"
          />
        </div>
        <div
          id="m-row"
          className="row gx-5 menu-row mt-3 m-auto d-flex justify-content-center"
        >
          <div className="col col-lg-3 col-12 menu-col d-flex justify-content-center align-items-center">
            <div className="menu-link text-center">
              <Link className="men menu-link-direct" exact to="/men">
                Men
              </Link>
            </div>
          </div>

          <div className="col col-lg-3 col-12 menu-col d-flex justify-content-center align-items-center">
            <div className="menu-link text-center">
              <Link className="women menu-link-direct" exact to="/women">
                Women
              </Link>
            </div>
          </div>

          <div className="col col-lg-3 col-12 menu-col d-flex justify-content-center align-items-center">
            <div className="menu-link text-center">
              <Link className="animals menu-link-direct" exact to="/animals">
                Animals
              </Link>
            </div>
          </div>

          <div className="col col-lg-3 col-12 menu-col ending-link d-flex justify-content-center align-items-center">
            <div className="menu-link text-center">
              <Link className="scenic menu-link-direct" exact to="/scenic">
                Scenic
              </Link>
            </div>
          </div>

          <div className="col col-lg-3 col-12 menu-col d-flex justify-content-center align-items-center">
            <div className="menu-link text-center">
              <Link className="films menu-link-direct" exact to="/films">
                Films
              </Link>
            </div>
          </div>

          <div className="col col-lg-3 col-12 menu-col d-flex justify-content-center align-items-center">
            <div className="menu-link text-center">
              <Link className="ads menu-link-direct" exact to="/ads">
                Ads
              </Link>
            </div>
          </div>

          <div className="col col-lg-3 col-12 menu-col d-flex justify-content-center align-items-center">
            <div className="menu-link text-center">
              <Link className="about menu-link-direct" exact to="/about">
                About
              </Link>
            </div>
          </div>

          <div className="col col-lg-3 col-12 menu-col ending-link d-flex justify-content-center align-items-center">
            <div className="menu-link text-center">
              <Link className="contact menu-link-direct" exact to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
