import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import YouTube from "assets/image/socialMedia/youtube.svg";
import Instagram from "assets/image/socialMedia/instagram.svg";
import Facebook from "assets/image/socialMedia/facebook.svg";
import Twitter from "assets/image/socialMedia/twitter.svg";
import Email from "assets/image/socialMedia/email.svg";
import cn from "classnames";

const Footer = () => {
  const [show, setShow] = useState<null | boolean>(null);
  useEffect(() => {
    setShow(true);
  }, []);
  const social = [
    { image: YouTube, name: "YouTube" },
    { image: Instagram, name: "Instagram" },
    { image: Facebook, name: "Facebook" },
    { image: Twitter, name: "Twitter" },
    { image: Email, name: "Email" },
  ];
  return (
    <div
      className={cn(style.container, {
        [style.show]: show === true,
      })}
    >
      <div className={style.innerContainer} />
      <div className={style.content}>
        <p>Our Socials</p>
        <div className={style.social}>
          {social.map((el, i) => (
            <div className={style.boxSocial} key={i}>
              <img src={el.image} alt="social" className={style.imgSocial} />
              <p className={style.nameSocial}>{el.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Footer);
