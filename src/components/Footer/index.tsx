import React from "react";
import style from "./style.module.scss";
import YouTube from "../../assets/image/socialMedia/youtube.svg";
import Instagram from "../../assets/image/socialMedia/instagram.svg";
import Facebook from "../../assets/image/socialMedia/facebook.svg";
import Twitter from "../../assets/image/socialMedia/twitter.svg";
import WhiteLogo from "../../assets/image/WhiteLogo.svg";
import { URLS } from "utils/router";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const pages = [
    { name: "Services", page: 2 },
    { name: "About Us", page: URLS.ABOUT },
    { name: "Clients", page: 4 },
    { name: "Contact ", page: 5 },
  ];
  const email = [{ name: "Examplegmail.com" }, { name: "Examplegmail.2com" }];
  const social = [
    { image: YouTube, href: "https://www.youtube.com/" },
    { image: Instagram, href: "https://instagram.com/" },
    { image: Facebook, href: "https://www.facebook.com/" },
    { image: Twitter, href: "https://twitter.com/" },
  ];
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
        </div>
        <div className={style.social}>
          {social.map((el) => (
            <a href={`${el.href}`} target="blank">
              <img key={el.image} src={el.image} alt="social" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
