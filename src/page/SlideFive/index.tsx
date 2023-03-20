import React from "react";
import style from "./style.module.scss";
import Atag from "../../assets/image/сompanyLogo/Atag.png";
import Cola from "../../assets/image/сompanyLogo/Cola.png";
import Craft from "../../assets/image/сompanyLogo/Craft.png";
import DHL from "../../assets/image/сompanyLogo/DHL.png";
import Docker from "../../assets/image/сompanyLogo/Docker.png";
import HBO from "../../assets/image/сompanyLogo/HBO.png";
import Malcolm from "../../assets/image/сompanyLogo/Malcolm.png";
import VMW from "../../assets/image/сompanyLogo/VMW.png";

const SlideFive = () => {
  const array = [
    { image: HBO },
    { image: Malcolm },
    { image: Atag },
    { image: Cola },
    { image: VMW },
    { image: Craft },
    { image: DHL },
    { image: Docker },
  ];
  return (
    <div className={style.container}>
      <div>
        <p className={style.slogan}>
          Our clients= <br />
        </p>
        <p className={style.orangeText}>Our friends</p>
      </div>
      <div className={style.test}>
        {array.map((el) => (
          <div key={el.image} className={style.imageBox}>
            <img src={el.image} alt="company" className={style.image} />
          </div>
        ))}
      </div>
      <div className={style.boxText}>
        <p>
          Pleasure to <br />
        </p>
        <p>work with</p>
      </div>
    </div>
  );
};

export default React.memo(SlideFive);
