import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { Fade } from "react-awesome-reveal";
import Menu from "./Menu";
import Footer from "./Footer";
import "@fancyapps/ui/dist/fancybox.css";

const About = () => {
  const [menuState, setMenuState] = useState(false);
  const [menuOpacity, setMenuOpacity] = useState(0);

  const toggleMenu = (e) => {
    if (!menuState) {
      setMenuState(true);
      setTimeout(() => {
        setMenuOpacity(1);
      }, 500);
    } else {
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
          id="about"
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className=" mt-5 container about-container d-flex justify-content-between align-items-center">
            <h3 className="about-logo text-center m-auto">KCM Photography</h3>
            <div className="nav-container d-flex justify-content-end">
              <Fade delay={500}>
                <h3 className="about-text">About</h3>
              </Fade>
              <Nav click={toggleMenu} />
            </div>
          </div>

          <div className="about-section">
            <div className="about-container container">
              <Fade triggerOnce={true} cascade={true}>
                <h1 className="about-title text-center mb-5">About Me</h1>
                <p className="about-kcm-one about-kcm">
                  KCM’s photography has spearheaded advertising campaigns, books
                  and exhibitions for some of the worlds leading blue chip
                  clients. His evocative and timeless images have inspired
                  magazine editors, luxury brands and his viewers for nearly two
                  decades.
                </p>
                <p className="about-kcm-two about-kcm">
                  Uninhibited, but with a unique clarity of vision, he brings a
                  wealth of personal experience and reference to his pictures.
                  “My lens is a two way tool – the superficial image on one side
                  and my own instinctive need for authenticity on the other”.
                </p>
                <p className="about-kcm-three about-kcm">
                  Behind the sheer beauty of his images, there is a cerebral
                  layer of personal experience which informs all he does. As one
                  onlooker commented after seeing his Paris “Winds and Sails”
                  exhibition for Louis Vuitton – “You know that this man has
                  sailed the worlds toughest seas – no one else could produce
                  pictures of this calibre.”
                </p>
              </Fade>
            </div>
          </div>

          <Menu
            slider={menuState ? "0%" : "-5000%"}
            trans="0.3s ease-in-out"
            opac={menuOpacity}
            click={toggleMenu}
          />
        </div>
      </Fade>
    </>
  );
};

export default About;
