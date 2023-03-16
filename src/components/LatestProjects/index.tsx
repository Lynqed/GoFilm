import React, { FC } from "react";
import style from "./style.module.scss";

interface IProps {
  header: string;
  text: string;
  bodyHeader: string;
  img: string;
}

const LatestProjects: FC<IProps> = ({ header, text, img, bodyHeader }) => {
  return (
    <div className={style.container}>
      <p className={style.headerText}>{header}</p>
      <div className={style.boxImage}>
        <img src={img} alt="imageProject" className={style.image} />
      </div>
      <div className={style.boxBody}>
        <div className={style.box}>
          <p className={style.bodyHeader}>{bodyHeader}</p>
          <p className={style.text}>{text}</p>
        </div>
        <div className={style.boxButton}>
          <button className={style.button}>VIEW CASE</button>
        </div>
      </div>
    </div>
  );
};

export default LatestProjects;
