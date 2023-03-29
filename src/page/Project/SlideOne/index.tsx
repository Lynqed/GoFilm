import React from "react";
import style from "./style.module.scss";
import image from "assets/image/project.png";
const SlideOne = () => {
  return (
    <div className={style.container}>
      <div className={style.boxImage}>
        <img src={image} alt={"testimg"} className={style.image} />
      </div>
    </div>
  );
};

export default React.memo(SlideOne);
