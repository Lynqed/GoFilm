import React from "react";
import style from "./style.module.scss";
import Vectors from "../../assets/image/Vectors.svg";

const SlideTwo = () => {
  return (
    <div className={style.container}>
      <img src={Vectors} alt="vectors" />
      <div className={style.about}>About us</div>
      <span>
        “Our mission is to provide<span>high-quality video content</span> to any
        business that is open to it.”
      </span>
    </div>
  );
};

export default React.memo(SlideTwo);
