import React, { useRef } from "react";
import style from "./style.module.scss";
import Instagram from "assets/image/socialMedia/instagram.svg";
import Linkedin from "assets/image/socialMedia/linkedin.svg";
import WhiteLogo from "assets/image/WhiteLogo.svg";
import { URLS } from "utils/router";
import { useNavigate } from "react-router-dom";
import { isMobile } from "utils";
const pages = [
  { name: "Projecten", page: 2 },
  { name: "Over ons", page: URLS.ABOUT },
  { name: "Brands", page: 4 },
  { name: "Contact ", page: 5 },
];
const email = [{ name: "Info@gofilm.nl" }];
const social = [
  { image: Instagram, href: "https://instagram.com/" },
  { image: Linkedin, href: "https://www.linkedin.com/company/gofilm/" },
];
const Footer = () => {
  const navigate = useNavigate();
  const mobileDevice = useRef(isMobile());

  return (
    <div className={style.container}>
      <hr />
      <div className={style.boxInformation}>
        <div className={style.image}>
          <img src={WhiteLogo} alt="Logo" />
        </div>
        <div className={style.text}>
          {pages.map((el) => (
            <p
              key={el.name}
              onClick={() => {
                const url = `${URLS.MAIN}${el.page}`;
                navigate(url);
              }}
            >
              {el.name}
            </p>
          ))}
        </div>
        <div className={style.text}>
          {email.map((el) => (
            <a href={`mailto: ${el.name}`} key={el.name} className={style.text}>
              {el.name}
            </a>
          ))}
          {mobileDevice.current && (
            <div className={style.social}>
              {social.map((el) => (
                <a key={el.image} href={`${el.href}`} target="blank">
                  <img src={el.image} alt="social" />
                </a>
              ))}
            </div>
          )}
        </div>
        {!mobileDevice.current && (
          <div className={style.social}>
            {social.map((el) => (
              <a key={el.image} href={`${el.href}`} target="blank">
                <img src={el.image} alt="social" />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
