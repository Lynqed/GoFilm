import React from "react";
import style from "./style.module.scss";
import YouTube from "assets/image/socialMedia/youtube.svg";
import Instagram from "assets/image/socialMedia/instagram.svg";
import Facebook from "assets/image/socialMedia/facebook.svg";
import Twitter from "assets/image/socialMedia/twitter.svg";
import WhiteLogo from "assets/image/WhiteLogo.svg";

const Footer = () => {
  const pages = [
    { name: "Services" },
    { name: "About Us" },
    { name: "Clients" },
    { name: "Contact " },
  ];
  const email = [{ name: "Examplegmail.com" }, { name: "Examplegmail.2com" }];
  const social = [
    { image: YouTube },
    { image: Instagram },
    { image: Facebook },
    { image: Twitter },
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
            <p key={el.name}>{el.name}</p>
          ))}
        </div>
        <div className={style.text}>
          {email.map((el) => (
            <p key={el.name} className={style.text}>
              {el.name}
            </p>
          ))}
        </div>
        <div className={style.social}>
          {social.map((el) => (
            <img key={el.image} src={el.image} alt="social" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
