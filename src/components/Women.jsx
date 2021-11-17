import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { Fade } from "react-awesome-reveal";
import Menu from "./Menu";
import Gallery from "./Gallery";
import Footer from "./Footer";
import Fancybox from "../fancybox";
import "@fancyapps/ui/dist/fancybox.css";

const Women = () => {
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
            id="women"
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <div className=" mt-5 container women-container d-flex justify-content-between align-items-center">
              <h3 className="women-logo text-center m-auto">KCM Photography</h3>
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
          id="women"
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className=" mt-5 container women-container d-flex justify-content-between align-items-center">
            <h3 className="women-logo text-center m-auto">KCM Photography</h3>
            <div className="nav-container d-flex justify-content-end">
              <Fade delay={500}>
                <h3 className="women-text">Women</h3>
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
                      data-caption="Sheila Marks"
                      href="https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Betty Anders"
                      href="https://images.pexels.com/photos/1251832/pexels-photo-1251832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        src="https://images.pexels.com/photos/1251832/pexels-photo-1251832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Terry Silver"
                      href="https://images.pexels.com/photos/10140858/pexels-photo-10140858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/10140858/pexels-photo-10140858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Jenna Powell"
                      href="https://images.pexels.com/photos/7505794/pexels-photo-7505794.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/7505794/pexels-photo-7505794.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Whitney Miller"
                      href="https://images.pexels.com/photos/2228561/pexels-photo-2228561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/2228561/pexels-photo-2228561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Kerry Prescott"
                      href="https://images.pexels.com/photos/4063861/pexels-photo-4063861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/4063861/pexels-photo-4063861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Amelia Banks"
                      href="https://images.pexels.com/photos/4063530/pexels-photo-4063530.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/4063530/pexels-photo-4063530.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Emma Garner"
                      href="https://images.pexels.com/photos/5202547/pexels-photo-5202547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/5202547/pexels-photo-5202547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Olivia Hart"
                      href="https://images.pexels.com/photos/3846135/pexels-photo-3846135.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/3846135/pexels-photo-3846135.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Dana Horowitz"
                      href="https://images.pexels.com/photos/4049991/pexels-photo-4049991.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/4049991/pexels-photo-4049991.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Audrey Jones"
                      href="https://images.pexels.com/photos/4050321/pexels-photo-4050321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/4050321/pexels-photo-4050321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Tammy Lee"
                      href="https://images.pexels.com/photos/3995673/pexels-photo-3995673.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/3995673/pexels-photo-3995673.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Cameron Burkes"
                      href="https://images.pexels.com/photos/8514143/pexels-photo-8514143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/8514143/pexels-photo-8514143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Ali Hill"
                      href="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Hillary Davis"
                      href="https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Jill Valentine"
                      href="https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Sophie Smith"
                      href="https://images.pexels.com/photos/6642541/pexels-photo-6642541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/6642541/pexels-photo-6642541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Jana Johnson"
                      href="https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Sarah Cross"
                      href="https://images.pexels.com/photos/4127502/pexels-photo-4127502.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/4127502/pexels-photo-4127502.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Anya Summers"
                      href="https://images.pexels.com/photos/3823043/pexels-photo-3823043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/3823043/pexels-photo-3823043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Rachel Duncan"
                      href="https://images.pexels.com/photos/568025/pexels-photo-568025.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/568025/pexels-photo-568025.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
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

export default Women;
