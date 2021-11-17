import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { Fade } from "react-awesome-reveal";
import Menu from "./Menu";
import Gallery from "./Gallery";
import Footer from "./Footer";
import Fancybox from "../fancybox";
import "@fancyapps/ui/dist/fancybox.css";

const Scenic = () => {
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
            id="scenic"
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <div className=" mt-5 container scenic-container d-flex justify-content-between align-items-center">
              <h3 className="scenic-logo text-center m-auto">
                KCM Photography
              </h3>
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
          id="scenic"
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className=" mt-5 container scenic-container d-flex justify-content-between align-items-center">
            <h3 className="scenic-logo text-center m-auto">KCM Photography</h3>
            <div className="nav-container d-flex justify-content-end">
              <Fade delay={500}>
                <h3 className="scenic-text">Scenic</h3>
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
                      data-caption="Winter Forest"
                      href="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Serene Park"
                      href="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    >
                      <img
                        className="gallery-img img-fluid"
                        src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Foggy Island"
                      href="https://images.pexels.com/photos/1529881/pexels-photo-1529881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/1529881/pexels-photo-1529881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Sky Architecture"
                      href="https://images.pexels.com/photos/1437493/pexels-photo-1437493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/1437493/pexels-photo-1437493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Sun Setting"
                      href="https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="City Festival"
                      href="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Enchanting Forest"
                      href="https://images.pexels.com/photos/1757363/pexels-photo-1757363.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/1757363/pexels-photo-1757363.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Winter Trees"
                      href="https://images.pexels.com/photos/730614/pexels-photo-730614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/730614/pexels-photo-730614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Snowy Peaks"
                      href="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Starry Desert"
                      href="https://images.pexels.com/photos/34107/milky-way-stars-night-sky.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/34107/milky-way-stars-night-sky.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Beach Jungle"
                      href="https://images.pexels.com/photos/6004828/pexels-photo-6004828.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/6004828/pexels-photo-6004828.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Winter Pines"
                      href="https://images.pexels.com/photos/4504068/pexels-photo-4504068.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/4504068/pexels-photo-4504068.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Dark Mountain"
                      href="https://images.pexels.com/photos/689451/pexels-photo-689451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/689451/pexels-photo-689451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Sky Peak"
                      href="https://images.pexels.com/photos/6043246/pexels-photo-6043246.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/6043246/pexels-photo-6043246.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Desert Sands"
                      href="https://images.pexels.com/photos/8241099/pexels-photo-8241099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/8241099/pexels-photo-8241099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Rainbow Ocean"
                      href="https://images.pexels.com/photos/4636525/pexels-photo-4636525.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/4636525/pexels-photo-4636525.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Dark Lake"
                      href="https://images.pexels.com/photos/551616/pexels-photo-551616.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/551616/pexels-photo-551616.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="River Arch"
                      href="https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Mountain Bay"
                      href="https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Shadowy Drive"
                      href="https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Ominous Road"
                      href="https://images.pexels.com/photos/927017/pexels-photo-927017.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/927017/pexels-photo-927017.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
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

export default Scenic;
