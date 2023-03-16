import React, { FC } from "react";
import style from "./style.module.scss";

interface IProps {
  image: string;
  name: string;
  position: string;
}
const GrayPhoto: FC<IProps> = ({ image, name, position }) => {
  return (
    <div className={style.container}>
      <img src={image} alt="person" className={style.image} />
      <div>{name}</div>
      <div>{position}</div>
    </div>
  );
};

export default GrayPhoto;
