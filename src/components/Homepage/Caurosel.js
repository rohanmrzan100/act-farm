import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import img1 from "../../assets/img1.jpg";
import img3 from "../../assets/img3.jpg";
import img5 from "../../assets/img5.jpg";

const Caurosel = () => {
  return (
    <Carousel animation="slide">
      {[img1, img3, img5].map((product) => (
        <img
          src={product}
          className="w-full h-[500px] object-cover"
          alt="caurosel img"
        ></img>
      ))}
    </Carousel>
  );
};

export default Caurosel;
