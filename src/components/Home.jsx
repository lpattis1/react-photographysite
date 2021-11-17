import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Loading from "./Loading";
import Menu from "./Menu";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  const imgs = [
    {
      imgId: 0,
      img: "https://i.imgur.com/RrhJhGs.jpg",
    },
    {
      imgId: 1,
      img: "https://i.imgur.com/ty6q7La.jpg",
    },

    {
      imgId: 2,
      img: "https://i.imgur.com/zCoOPHq.jpg",
    },
  ];
  const randomIndex = Math.floor(Math.random() * imgs.length);
  const [bg, setBg] = useState(imgs[randomIndex].img);
  const [menuOpacity, setMenuOpacity] = useState(0);

  const [menuState, setMenuState] = useState(false);
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
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
        }}
        id="home"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <Fade triggerOnce delay={6000}>
          <Nav navColor="white" click={toggleMenu} />
        </Fade>

        <div className="container home-container d-flex flex-column justify-content-center align-items-center">
          <div className="home-text d-flex flex-column justify-content-center align-items-center">
            <Fade triggerOnce delay={6000}>
              <h1 className="home-title text-white">Kudret Manoj.</h1>
            </Fade>
            <Fade triggerOnce delay={7000}>
              <p className="home-description">
                Photographer // Video Editor // Artist
              </p>
            </Fade>
          </div>
          ;
        </div>
      </div>
      <Loading />
      <Menu
        slider={menuState ? "0%" : "-5000%"}
        trans="0.3s ease-in-out"
        opac={menuOpacity}
        click={toggleMenu}
      />
    </>
  );
};

export default Home;
