import React from "react";
import style from "./style.module.scss";
import Photo1 from "../../../assets/image/aboutUs/Photo1.jpg";
import Photo2 from "../../../assets/image/aboutUs/Photo2.jpeg";
import Photo3 from "../../../assets/image/aboutUs/Photo3.jpeg";
import Photo4 from "../../../assets/image/aboutUs/Photo4.jpg";
import Photo5 from "../../../assets/image/aboutUs/Photo5.jpg";
import Photo6 from "../../../assets/image/aboutUs/Photo6.jpg";
import Photo7 from "../../../assets/image/aboutUs/Photo7.jpg";
const photoArray = [Photo1, Photo2, Photo3, Photo4, Photo5, Photo6, Photo7];

const PhotoSlider = () => {
  const newArray = [];
  for (let i = 0; i < 5; i++) {
    if (photoArray) {
      newArray.push(...photoArray);
    }
  }
  return (
    <div className={style.boxImages}>
      {newArray.map((el, index) => (
        <img className={style.image} key={index} src={el} alt="photoAboutUs" />
      ))}
    </div>
  );
};

export default React.memo(PhotoSlider);
