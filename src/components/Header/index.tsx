import React from "react";
import Logo from "../../assets/image/OrangeLogo.svg";
import style from "./style.module.scss";
interface IProps {
  goTo: (index: number) => any;
}
const Header = (props: IProps) => {
  const { goTo } = props;

  const array = [
    { label: "Work", page: 2 },
    { label: "About Us", page: 1 },
    { label: "Clients", page: 4 },
    { label: "Contact", page: 5 },
  ];
  return (
    <div className={style.container}>
      <img src={Logo} alt="logo" />
      <div className={style.box}>
        {array.map((el, i) => (
          <p
            key={i}
            className={style.label}
            onClick={() => {
              goTo(el.page);
            }}
          >
            {el.label}
          </p>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Header);
