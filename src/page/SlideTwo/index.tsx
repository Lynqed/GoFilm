import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import Vectors from "../../assets/image/Vectors.svg";
import cn from "classnames";
import { ICommon } from "../../App";

interface IProps extends ICommon {}
const SlideTwo = (props: IProps) => {
  const { end } = props;
  const [show, setShow] = useState<null | boolean>(null);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div
      className={cn(style.container, {
        [style.show]: show === true,
        [style.hide]: end,
      })}
    >
      <div className={style.innerContainer} />
      <div className={style.content}>
        <img src={Vectors} alt="vectors" className={style.image} />
        <div className={style.textContainer}>
          <div>
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
        </div>
      </div>
    </div>
  );
};

export default React.memo(SlideTwo);
