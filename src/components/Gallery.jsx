import React from "react";
import Fancybox from "../fancybox";
import "@fancyapps/ui/dist/fancybox.css";

const Gallery = (props) => {
  return (
    <Fancybox>
      <div className="container d-flex">
        <div className="row gallery-row">{props.children}</div>
      </div>
    </Fancybox>
  );
};

export default Gallery;
