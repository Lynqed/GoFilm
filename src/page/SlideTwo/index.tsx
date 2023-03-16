import React from "react";
import style from "./style.module.scss";
import Vectors from "../../assets/image/Vectors.svg";

const SlideTwo = () => {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <p className={style.about}>About us</p>
        <p className={style.textAbout}>
          “Our mission is to provide
          <br />
          <p className={style.orangeText}>
            high-quality video content
            <br />
          </p>
          to any business that is open to it.”
        </p>
      </div>
      <img src={Vectors} alt="vectors" className={style.image} />
    </div>
  );
};

export default React.memo(SlideTwo);
