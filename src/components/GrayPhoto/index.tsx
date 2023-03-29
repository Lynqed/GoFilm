import React, { FC } from "react";
import style from "./style.module.scss";

interface IProps {
  image: string;
  name: string;
  position: string;
}
const GrayPhoto: FC<IProps> = ({ image, name, position }) => {
  return (
    <div>
      <div className={style.container}>
        <img src={image} alt="person" className={style.image} />

        <div className={style.boxText}>
          <p className={style.name}>{name}</p>
          <p className={style.position}>{position}</p>
        </div>
      </div>
    </div>
  );
};

export default GrayPhoto;
