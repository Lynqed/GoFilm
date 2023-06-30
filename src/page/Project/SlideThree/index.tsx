import React from "react";
import style from "./style.module.scss";
import { ICommonProps } from "types";

interface IProps extends ICommonProps {}

const SlideThree = (props: IProps) => {
  const { value } = props;

  return (
    <div className={style.container}>
      <div className={style.videoContainer}>
        <video src={value?.value?.video} className={style.video} controls />
        <div className={style.textBox}>
          <span className={style.aboutProject}>{value?.value?.aboutVideo}</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SlideThree);
