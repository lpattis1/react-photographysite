import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { Fade } from "react-awesome-reveal";
import Menu from "./Menu";
import Footer from "./Footer";
import "@fancyapps/ui/dist/fancybox.css";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const Films = () => {
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
        <div style={{ position: "relative" }} id="films">
          <div className=" mt-5 container films-container d-flex justify-content-between align-items-center">
            <h3 className="films-logo text-center m-auto">KCM Photography</h3>
            <div className="nav-container d-flex justify-content-end">
              <Fade delay={500}>
                <h3 className="films-text">Films</h3>
              </Fade>
              <Nav click={toggleMenu} />
            </div>
          </div>

          <header
            style={{ position: "relative" }}
            className="films-header   mt-5"
          >
            <video
              className="header-vid"
              autoPlay
              loop
              muted
              style={{
                position: "relative",

                width: "100%",
                height: "65vh",
                left: "0",
                right: "0",
                objectFit: "cover",
                zIndex: -1,
                overflowY: "hidden",
              }}
            >
              <source src="https://i.imgur.com/IxLP3y7.mp4" type="video/mp4" />
            </video>
            <div className=" vid-container">
              <div className="vid-text text-center d-flex flex-column justify-content-center align-items-center">
                <div className="vid-content d-flex flex-column justify-content-center align-items-center">
                  <h1 className="film-header-title">Lot30</h1>
                  <p className="film-description-one">
                    KCM proudly presents LOT30, a full service production
                    company which specialises in producing high quality,
                    immersive, cinematic films for a wide range of digital
                    platforms.
                  </p>
                  <div className="btn-location mt-3">
                    <button className="view-films-btn btn">
                      <a href="#showreel" className="view-films-jump">
                        View Films
                        <BsFillArrowDownCircleFill className="btn-icon" />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <Fade delay={300}>
            <div id="showreel" className="showreel">
              <div className="container showreel-container d-flex flex-column justify-content-center align-items-center">
                <h2 className="showreel-title">Latest Video</h2>
                <video controls className="latest-video">
                  <source
                    src="https://i.imgur.com/ZZC83Pf.mp4"
                    type="video/mp4"
                  />
                </video>
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

      <Footer showFooter={footerDisplay} />
    </>
  );
};

export default Films;
