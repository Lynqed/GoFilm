import React, { FC, FocusEventHandler, useState } from "react";
import {
  isValidEmail,
  isValidFirstName,
  isValidPhone,
  isValidSecondName,
} from "utils/Validation";
import style from "./style.module.scss";
interface IProps {
  placeholder: string;
  type: string;
  name: string;
  value: string;
  onChange: (str: string) => void;
  title?: string;
  onBlur: FocusEventHandler<HTMLInputElement>;
  status: boolean;
}

const Input: FC<IProps> = ({
  placeholder,
  type,
  value,
  onChange,
  status,
  title,
  name,
  onBlur,
}) => {
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (event: React.FocusEvent<HTMLInputElement>) => {
    let regex: any;
    switch (name) {
      case "email":
        regex = isValidEmail(value);
        break;
      case "phoneNumber":
        regex = isValidPhone(value);
        break;
      case "firstName":
        regex = isValidFirstName(value);
        break;
      case "lastName":
        regex = isValidSecondName(value);
        break;
      // default:
      //   regex = /.*/;
      //   break;
    }
    setIsValid(regex);
  };

  return (
    <div className={style.boxInput}>
      <input
        placeholder={placeholder}
        type={type}
        className={status && isValid ? style.input : style.inputError}
        autoComplete="on"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        name={name}
        onBlur={(event) => {
          onBlur(event);
          handleSubmit(event);
        }}
      />
      {status && isValid ? null : <p className={style.textError}>*{title}</p>}
    </div>
  );
};

export default Input;
