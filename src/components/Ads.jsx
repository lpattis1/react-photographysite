import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { Fade } from "react-awesome-reveal";
import Menu from "./Menu";
import Gallery from "./Gallery";
import Footer from "./Footer";
import "@fancyapps/ui/dist/fancybox.css";

const Ads = () => {
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
            id="ads"
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <div className=" mt-5 container ads-container d-flex justify-content-between align-items-center">
              <h3 className="ads-logo text-center m-auto">KCM Photography</h3>
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
          id="ads"
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className=" mt-5 container ads-container d-flex justify-content-between align-items-center">
            <h3 className="ads-logo text-center m-auto">KCM Photography</h3>
            <div className="nav-container d-flex justify-content-end">
              <Fade delay={500}>
                <h3 className="women-text">Commercial</h3>
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
                      data-caption="Corporation Fountain"
                      href="https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Group"
                      href="https://images.pexels.com/photos/5325589/pexels-photo-5325589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        src="https://images.pexels.com/photos/5325589/pexels-photo-5325589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Bathtub"
                      href="https://images.pexels.com/photos/9376399/pexels-photo-9376399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/9376399/pexels-photo-9376399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Mannequin"
                      href="https://images.pexels.com/photos/6567255/pexels-photo-6567255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/6567255/pexels-photo-6567255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Car"
                      href="https://images.pexels.com/photos/2710043/pexels-photo-2710043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/2710043/pexels-photo-2710043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Food Production"
                      href="https://images.pexels.com/photos/2889093/pexels-photo-2889093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/2889093/pexels-photo-2889093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Cartier"
                      href="https://images.pexels.com/photos/9978722/pexels-photo-9978722.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/9978722/pexels-photo-9978722.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Charity"
                      href="https://images.pexels.com/photos/2049333/pexels-photo-2049333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/2049333/pexels-photo-2049333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Shoes"
                      href="https://images.pexels.com/photos/4464819/pexels-photo-4464819.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/4464819/pexels-photo-4464819.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Spa"
                      href="https://images.pexels.com/photos/9774961/pexels-photo-9774961.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/9774961/pexels-photo-9774961.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Hotel"
                      href="https://images.pexels.com/photos/3285725/pexels-photo-3285725.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/3285725/pexels-photo-3285725.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Television"
                      href="https://images.pexels.com/photos/3764958/pexels-photo-3764958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/3764958/pexels-photo-3764958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Model"
                      href="https://images.pexels.com/photos/3385234/pexels-photo-3385234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/3385234/pexels-photo-3385234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Park"
                      href="https://images.pexels.com/photos/1060059/pexels-photo-1060059.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/1060059/pexels-photo-1060059.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Set"
                      href="https://images.pexels.com/photos/2566038/pexels-photo-2566038.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/2566038/pexels-photo-2566038.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Motorcycle"
                      href="https://images.pexels.com/photos/2949289/pexels-photo-2949289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/2949289/pexels-photo-2949289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Store"
                      href="https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Food Stand"
                      href="https://images.pexels.com/photos/2459452/pexels-photo-2459452.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/2459452/pexels-photo-2459452.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Helicopter"
                      href="https://images.pexels.com/photos/2589037/pexels-photo-2589037.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/2589037/pexels-photo-2589037.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Watch"
                      href="https://images.pexels.com/photos/9979244/pexels-photo-9979244.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/9979244/pexels-photo-9979244.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Chair"
                      href="https://images.pexels.com/photos/60342/pexels-photo-60342.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/60342/pexels-photo-60342.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
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

export default Ads;
