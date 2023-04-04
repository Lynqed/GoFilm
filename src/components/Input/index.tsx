import React, { FC } from "react";
import style from "./style.module.scss";
interface IProps {
  placeholder: string;
  type: string;
  name: string;
  value?: string;
  onChange: (str: string) => void;
  status?: boolean;
  title?: string;
}

const Input: FC<IProps> = ({
  placeholder,
  type,
  value,
  onChange,
  status,
  title,
}) => {
  return (
    <div className={style.boxInput}>
      <input
        placeholder={placeholder}
        type={type}
        className={status ? style.input : style.inputError}
        autoComplete="on"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      {status ? null : <p className={style.textError}>*{title}</p>}
    </div>
  );
};

export default Input;
