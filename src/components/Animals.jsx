import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { Fade } from "react-awesome-reveal";
import Menu from "./Menu";
import Gallery from "./Gallery";
import Footer from "./Footer";
import Fancybox from "../fancybox";
import "@fancyapps/ui/dist/fancybox.css";

const Animals = () => {
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
            id="animals"
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <div className=" mt-5 container animals-container d-flex justify-content-between align-items-center">
              <h3 className="animals-logo text-center m-auto">
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
          id="animals"
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className=" mt-5 container animals-container d-flex justify-content-between align-items-center">
            <h3 className="animals-logo text-center m-auto">KCM Photography</h3>
            <div className="nav-container d-flex justify-content-end">
              <Fade delay={500}>
                <h3 className="animals-text">Animals</h3>
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
                      data-caption="Squirrel"
                      href="https://images.pexels.com/photos/460775/pexels-photo-460775.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/460775/pexels-photo-460775.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Chihuahua Puppy"
                      href="https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        src="https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Wild Horse"
                      href="https://images.pexels.com/photos/4747815/pexels-photo-4747815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/4747815/pexels-photo-4747815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Street Dog"
                      href="https://images.pexels.com/photos/37401/dog-cute-pet.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/37401/dog-cute-pet.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Cat"
                      href="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Hedgehog"
                      href="https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Fox"
                      href="https://images.pexels.com/photos/247399/pexels-photo-247399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/247399/pexels-photo-247399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Swimming Cat"
                      href="https://images.pexels.com/photos/248280/pexels-photo-248280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/248280/pexels-photo-248280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Lion"
                      href="https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Monkey"
                      href="https://images.pexels.com/photos/1829979/pexels-photo-1829979.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/1829979/pexels-photo-1829979.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Python"
                      href="https://images.pexels.com/photos/45246/green-tree-python-python-tree-python-green-45246.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/45246/green-tree-python-python-tree-python-green-45246.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Sleeping Cat"
                      href="https://images.pexels.com/photos/533053/pexels-photo-533053.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/533053/pexels-photo-533053.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Panda"
                      href="https://images.pexels.com/photos/7506265/pexels-photo-7506265.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/7506265/pexels-photo-7506265.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Eagle"
                      href="https://images.pexels.com/photos/53581/bald-eagles-bald-eagle-bird-of-prey-adler-53581.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/53581/bald-eagles-bald-eagle-bird-of-prey-adler-53581.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Cow"
                      href="https://images.pexels.com/photos/36347/cow-pasture-animal-almabtrieb.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/36347/cow-pasture-animal-almabtrieb.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Deer"
                      href="https://images.pexels.com/photos/735988/pexels-photo-735988.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/735988/pexels-photo-735988.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Zebra"
                      href="https://images.pexels.com/photos/39245/zebra-stripes-black-and-white-zoo-39245.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/39245/zebra-stripes-black-and-white-zoo-39245.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Shark"
                      href="https://images.pexels.com/photos/10154784/pexels-photo-10154784.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/10154784/pexels-photo-10154784.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Cat Moonlight"
                      href="https://images.pexels.com/photos/35888/amazing-beautiful-breathtaking-clouds.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/35888/amazing-beautiful-breathtaking-clouds.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Parrot"
                      href="https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="gallery-box">
                    <a
                      data-fancybox="gallery"
                      data-caption="Flying Bird"
                      href="https://images.pexels.com/photos/674804/pexels-photo-674804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    >
                      <img
                        className="gallery-img img-fluid"
                        alt=""
                        src="https://images.pexels.com/photos/674804/pexels-photo-674804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
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

export default Animals;
