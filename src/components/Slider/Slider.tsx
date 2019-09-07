import React, { useState } from "react";

import "./_slider.scss";

const Slider = () => {
  const [activePicture, setActivePicture] = useState(0);
  const [imagesArray, setImagesArray] = useState([
    "/images/slider.png",
    "/images/header.jpg"
  ]);

  const handleClick = (value: any) => () => {
    setActivePicture(value);
  };
  const handleClickArrow = (val: string) => () => {
    const lenghtArray = imagesArray.length - 1;
    if (val === "next") {
      setActivePicture(activePicture === lenghtArray ? 0 : activePicture + 1);
    } else {
      setActivePicture(activePicture === 0 ? lenghtArray : activePicture - 1);
    }
  };
  return (
    <div className="slider">
      <div className="slider__boxWrapper">
        {imagesArray.map((el, index) => (
          <div
            className={
              activePicture === index ? "slider__box--active" : "slider__box"
            }
            onClick={handleClick(index)}
          />
        ))}
      </div>
      <div className="slider__carousel">
        <div className="slider__images">
          {imagesArray.map((el: any, index: any) => (
            <img
              className={
                activePicture === index ? "slider__img--active" : "slider__img"
              }
              src={el}
            />
          ))}
        </div>
        <div className="slider__arrowLeft" onClick={handleClickArrow("prev")}>
          <div className="slider__arrowLeft--img"></div>
        </div>
        <div className="slider__arrowRight" onClick={handleClickArrow("next")}>
          <div className="slider__arrowRight--img"></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
