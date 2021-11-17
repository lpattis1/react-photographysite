import React from "react";

const Footer = (props) => {
  return (
    <footer
      className={props.showFooter === true ? "footer-show" : "footer-hide"}
    >
      <div className="container footer-container d-flex justify-content-center align-items-center">
        <h6 className="credits text-white text-center">
          KCM Photography &copy;
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
