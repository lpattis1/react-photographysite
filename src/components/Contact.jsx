import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { Fade } from "react-awesome-reveal";
import Menu from "./Menu";
import Footer from "./Footer";
import "@fancyapps/ui/dist/fancybox.css";

const Contact = () => {
  const [menuState, setMenuState] = useState(false);
  const [menuOpacity, setMenuOpacity] = useState(0);
  const [footerDisplay, setFooterDisplay] = useState(true);

  const toggleMenu = (e) => {
    if (!menuState) {
      setFooterDisplay(false);
      setMenuState(true);
      setTimeout(() => {
        setMenuOpacity(1);
      }, 500);
    } else {
      setFooterDisplay(true);
      setMenuOpacity(0);
      setTimeout(() => {
        setMenuState(false);
      }, 1000);
    }
  };

  return (
    <>
      <Fade triggerOnce={true} delay={500}>
        <div
          style={{ position: "relative" }}
          id="contact"
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className=" mt-5 container contact-container d-flex justify-content-between align-items-center">
            <h3 className="contact-logo text-center m-auto">KCM Photography</h3>
            <div className="nav-container d-flex justify-content-end">
              <Fade delay={500}>
                <h3 className="contact-text">Contact</h3>
              </Fade>
              <Nav click={toggleMenu} />
            </div>
          </div>
          <Fade triggerOnce={true} delay={500}>
            <div
              style={{ position: "relative" }}
              className="contact-section mt-5  "
            >
              <div className="contact-container container  ">
                <h4 className="contact-title ">Contact</h4>
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <div className="contact-text-area-one mb-5">
                      <h4 className="general-title mb-3">General</h4>
                      <p className="general-one general-item">
                        info@koendemuynck.com
                      </p>
                      <p className="general-two general-item">355-532-5555</p>
                      <p className="general-three general-item">Topstraat 93</p>
                      <p className="general-four general-item">
                        1600 Sint-Pieters-Leeuw
                      </p>
                    </div>

                    <div className="contact-text-area-two mt-4">
                      <h4 className="general-title mb-3">Studio</h4>
                      <p className="general-one general-item">
                        Schaliestraat 5
                      </p>
                      <p className="general-two general-item mb-4">
                        1602 Vlezenbeek
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="contact-img-area mb-5">
                      <img
                        className="img-fluid contact-img"
                        src="https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>

          <Menu
            slider={menuState ? "0%" : "-5000%"}
            trans="0.3s ease-in-out"
            opac={menuOpacity}
            click={toggleMenu}
          />
        </div>
      </Fade>
      <Fade triggerOnce={true} delay={1000}>
        <Footer showFooter={footerDisplay} />
      </Fade>
    </>
  );
};

export default Contact;
