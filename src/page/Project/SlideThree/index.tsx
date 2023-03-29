import React from "react";
import style from "./style.module.scss";
import image from "assets/image/projectImg/imgBack.png";

const SlideThree = () => {
  return (
    <div className={style.container}>
      <div className={style.boxImage}>
        <img src={image} className={style.image} alt="bgImage" />
      </div>
    </div>
  );
};

export default SlideThree;
