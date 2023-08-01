import React, { useState } from "react";
import style from "./style.module.scss";
import { URLS } from "utils/router";
import { useNavigate } from "react-router";
import burger from "../../assets/image/menu.svg";
import close from "../../assets/image/close.svg";

interface Item {
  label: string;
  page: string | number;
}

interface IProps {
  links: Item[];
}

const HamburgerMenu: React.FC<IProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <img
        onClick={handleClick}
        src={!isOpen ? burger : close}
        alt="burgerMenu"
      />
      {isOpen && (
        <div className={style.containerMenu}>
          {links.map((el, i) => (
            <p
              key={i}
              className={style.label}
              onClick={() => {
                const url = `${URLS.MAIN}${el.page}`;
                navigate(url);
                setIsOpen(false);
              }}
            >
              {el.label}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
