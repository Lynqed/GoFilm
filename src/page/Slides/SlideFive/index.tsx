import React from "react";
import style from "./style.module.scss";
import Atag from "assets/image/сompanyLogo/Atag.png";
import Cola from "assets/image/сompanyLogo/Cola.png";
import Craft from "assets/image/сompanyLogo/Craft.png";
import DHL from "assets/image/сompanyLogo/DHL.png";
import Docker from "assets/image/сompanyLogo/Docker.png";
import HBO from "assets/image/сompanyLogo/HBO.png";
import Malcolm from "assets/image/сompanyLogo/Malcolm.png";
import VMW from "assets/image/сompanyLogo/VMW.png";
import { ICommonProps } from "types";

interface IProps extends ICommonProps {}
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
const SlideFive = (props: IProps) => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.companies}>
            {array.map((el, i) => (
              <div key={i} className={style.imageBox}>
                <img src={el.image} alt="company" className={style.image} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SlideFive);
