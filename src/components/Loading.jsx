import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

const Loading = (props) => {
  const loadingRef = useRef();
  const loadingCircleRef = useRef();
  const loadingBgRef = useRef();
  const [loadingState, setLoadingState] = useState(true);
  const [loadingHide, setLoadingHide] = useState("d-block");

  useEffect(() => {
    setTimeout(() => {
      gsap.to(loadingRef.current, { opacity: "1" });
    }, 1000);

    setTimeout(() => {
      gsap.to(loadingCircleRef.current, {
        border: "0.5rem solid white",
        padding: "1rem",
      });
    }, 2000);

    setTimeout(() => {
      gsap.to(loadingCircleRef.current, {
        rotate: "+=360",
        borderRadius: "50%",
        padding: "3rem",
      });
    }, 3000);

    setTimeout(() => {
      gsap.to(loadingCircleRef.current, {
        opacity: "0",
      });
    }, 4000);

    setTimeout(() => {
      gsap.to(loadingBgRef.current, {
        opacity: "0",
        onComplete: () => {
          setLoadingState(false);
          setLoadingHide("d-none");
        },
      });
    }, 5000);
  }, []);
  return (
    <div
      ref={loadingBgRef}
      className={
        loadingState
          ? `loading-bg d-flex justify-content-center align-items-center ${loadingHide}`
          : `loading-bg-hide d-flex justify-content-center align-items-center ${loadingHide}`
      }
    >
      <div className="container loading-container d-flex justify-content-center align-items-center">
        <div ref={loadingCircleRef} className="logo-circle">
          <h1 ref={loadingRef} className="logo-title">
            KCM
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Loading;
