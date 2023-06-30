import React from "react";
import style from "./style.module.scss";
import Logo1 from "assets/image/Logo/Tekengebied1.png";
import Logo2 from "assets/image/Logo/Tekengebied2.png";
import Logo3 from "assets/image/Logo/Tekengebied3.png";
import Logo4 from "assets/image/Logo/Tekengebied4.png";
import Logo5 from "assets/image/Logo/Tekengebied5.png";
import Logo6 from "assets/image/Logo/Tekengebied6.png";
import Logo7 from "assets/image/Logo/Tekengebied7.png";
import Logo8 from "assets/image/Logo/Tekengebied8.png";
import Logo9 from "assets/image/Logo/Tekengebied9.png";
import Logo10 from "assets/image/Logo/Tekengebied10.png";

import { ICommonProps } from "types";

interface IProps extends ICommonProps {}
const array = [
  { image: Logo1 },
  { image: Logo2 },
  { image: Logo3 },
  { image: Logo4 },
  { image: Logo5 },
  { image: Logo6 },
  { image: Logo7 },
  { image: Logo8 },
  { image: Logo9 },
  { image: Logo10 },
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
