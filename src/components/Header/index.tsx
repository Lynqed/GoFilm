import React, { useCallback, useEffect, useState } from "react";

import cn from "classnames";
import Logo from "assets/image/OrangeLogo.svg";

import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { URLS } from "utils/router";
import { interpolation } from "page/Slides/SlideOne/utils";

import globalStyles from "style/global.module.scss";

interface IProps {}

const array = [
  { label: "Work", page: 2 },
  { label: "About Us", page: URLS.ABOUT },
  { label: "Clients", page: 4 },
  { label: "Contact", page: 5 },
] as const;

const defaultSetScreen = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

const Header = (props: IProps) => {
  const [scrollValue, setScrollValue] = useState(
    document.documentElement.scrollTop
  );
  console.log(scrollValue);
  const [screen] = useState(defaultSetScreen());
  const navigate = useNavigate();
  const scrollListener = useCallback((ev: Event) => {
    setScrollValue(document.documentElement.scrollTop);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
  }, []);
  const opacity = interpolation(scrollValue, 0, screen.height, 0, 1);
  return (
    <div className={cn(style.container)}>
      <div className={style.innerContainer}>
        <div
          className={style.background}
          style={{
            backgroundColor: `${globalStyles.colorBackground}`,
            opacity: opacity > 0.95 ? 0.95 : opacity,
          }}
        />
        <img
          className={style.logo}
          src={Logo}
          alt="logo"
          onClick={() => navigate(`${URLS.MAIN}`)}
        />
        <div className={style.box}>
          {array.map((el, i) => (
            <p
              key={i}
              className={style.label}
              onClick={() => {
                const url = `${URLS.MAIN}${el.page}`;
                navigate(url);
              }}
            >
              {el.label}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
