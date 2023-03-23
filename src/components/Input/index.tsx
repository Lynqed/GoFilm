import React, { FC } from "react";
import style from "./style.module.scss";
interface IProps {
  placeholder: string;
  type: string;
  name: string;
}

const Input: FC<IProps> = ({ placeholder, type }) => {
  return (
    <input placeholder={placeholder} type={type} className={style.input} />
  );
};

export default Input;
