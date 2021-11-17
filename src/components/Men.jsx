import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { Fade } from "react-awesome-reveal";
import Menu from "./Menu";
import Gallery from "./Gallery";
import Footer from "./Footer";
import Fancybox from "../fancybox";
import "@fancyapps/ui/dist/fancybox.css";

const Men = () => {
  const [menuState, setMenuState] = useState(false);
  const [menuOpacity, setMenuOpacity] = useState(0);
  const [loadingState, setLoadingState] = useState(true);
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

  useEffect(() => {
    setTimeout(() => {
      setLoadingState(false);
    }, 5000);
  }, []);

  console.log(footerDisplay);

  if (loadingState) {
    return (
      <>
        <Fade delay={500}>
          <div
            style={{ position: "relative" }}
            id="men"
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <div className=" mt-5 container men-container d-flex justify-content-between align-items-center">
              <h3 className="men-logo text-center m-auto">KCM Photography</h3>
              <div className="nav-container justify-content-end">
                <Nav click={toggleMenu} />
              </div>
            </div>

            <Fade delay={2000}>
              <div className="loading d-flex flex-column justify-content-center align-items-center">
                <div
                  className="spinner-border text-center d-flex justify-content-center align-items-center"
                  role="status"
                ></div>
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
      </>
    );
  } else {
    return (
      <>
        <div
          id="men"
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className=" mt-5 container men-container d-flex justify-content-between align-items-center">
            <h3 className="men-logo text-center m-auto">KCM Photography</h3>
            <div className="nav-container d-flex justify-content-end">
              <Fade delay={500}>
                <h3 className="men-text">Men</h3>
              </Fade>
              <Nav click={toggleMenu} />
            </div>
          </div>
          <div className="slider">
            <Gallery>
              <Fade
                triggerOnce={true}
                className="gallery-col col-12 col-lg-4"
                cascade={true}
              >
                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Kevin Anderson"
                      href="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Dylan Powell"
                      href="https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt="man"
                        src="https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Kyle Thomson"
                      href="https://images.pexels.com/photos/90764/man-studio-portrait-light-90764.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/90764/man-studio-portrait-light-90764.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Kelvin Francis"
                      href="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Louis West"
                      href="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Cohen Walter"
                      href="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Derick Malone"
                      href="https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Reece Scott"
                      href="https://images.pexels.com/photos/10108224/pexels-photo-10108224.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/10108224/pexels-photo-10108224.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Bailey Gray"
                      href="https://images.pexels.com/photos/1496647/pexels-photo-1496647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/1496647/pexels-photo-1496647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Ashton Jackson"
                      href="https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Adam Jones"
                      href="https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Harley George"
                      href="https://images.pexels.com/photos/764880/pexels-photo-764880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/764880/pexels-photo-764880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Charlie Hicks"
                      href="https://images.pexels.com/photos/5441742/pexels-photo-5441742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/5441742/pexels-photo-5441742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Deacon Solomon"
                      href="https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Ollie Hunter"
                      href="https://images.pexels.com/photos/10131170/pexels-photo-10131170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/10131170/pexels-photo-10131170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Trent Duncan"
                      href="https://images.pexels.com/photos/1478685/pexels-photo-1478685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/1478685/pexels-photo-1478685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Dominic Khan"
                      href="https://images.pexels.com/photos/10002810/pexels-photo-10002810.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/10002810/pexels-photo-10002810.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Edward Fox"
                      href="https://images.pexels.com/photos/10131973/pexels-photo-10131973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/10131973/pexels-photo-10131973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Alvin Cross"
                      href="https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Alfie Marshall"
                      href="https://images.pexels.com/photos/6519228/pexels-photo-6519228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/6519228/pexels-photo-6519228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Aidan Potter"
                      href="https://images.pexels.com/photos/247899/pexels-photo-247899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/247899/pexels-photo-247899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>
              </Fade>
            </Gallery>
          </div>
          <Menu
            slider={menuState ? "0%" : "-5000%"}
            trans="0.3s ease-in-out"
            opac={menuOpacity}
            click={toggleMenu}
          />
        </div>
        <Fade triggerOnce={true} delay={2000}>
          <Footer showFooter={footerDisplay} />
        </Fade>
      </>
    );
  }
};

export default Men;
