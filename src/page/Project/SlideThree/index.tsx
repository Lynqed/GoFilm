import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import { ICommonProps } from "types";
import cn from "classnames";
import image from "assets/image/projectImg/imgBack.png";

interface IProps extends ICommonProps {}

const SlideThree = () => {

  return (
    <div
      className={style.container}
    >
      <div className={style.innerContainer} />
      <div className={style.content}>
        <div className={style.boxImage}>
          <img src={image} className={style.image} alt="bgImage" />
        </div>
      </div>
    </div>
  );
};

export default React.memo(SlideThree);
