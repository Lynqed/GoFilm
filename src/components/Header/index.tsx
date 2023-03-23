import React from "react";
import Logo from "../../assets/image/OrangeLogo.svg";
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
          <p key={el.label} className={style.label}>
            {el.label}
          </p>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Header);
