import React from "react";
import Logo from "../../assets/image/Logo.svg";
import style from "./style.module.scss";
const Header = () => {
  const array = [
    { label: "Work" },
    { label: "About Us" },
    { label: "Clients" },
    { label: "Contact" },
  ];
  return (
    <div className={style.container}>
      <img src={Logo} alt="logo" />
      <div className={style.box}>
        {array.map((el) => (
          <span className={style.label}>{el.label}</span>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Header);
