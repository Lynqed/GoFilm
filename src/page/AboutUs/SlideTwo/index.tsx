import React from "react";
import { useNavigate } from "react-router";
import { URLS } from "utils/router";
import style from "./style.module.scss";

const SlideTwo = () => {
  const navigate = useNavigate();
  const pageNumber = 5;
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.boxText}>
          <p className={style.boldText}>
            With storyboarding, cinematography, sound design, and high-end
            equipment, we’ll capture your audience’s attention and get your
            message across for you.
          </p>

          <p className={style.text}>
            Our team has extensive experience remotely guiding clients through
            video projects. Whether you’re working from home or located across
            the country, we can conduct pre-planning and video shoots via
            Microsoft Teams or some other form of virtual conferencing services.
            Throughout this process, our team will work with you to accommodate
            your project needs and produce stunning video assets that tell your
            story. No matter which type of video you need, we can work with you
            to market your product, spread your message, and achieve any other
            goal you’ve set for your project.
          </p>
        </div>
        <div className={style.buttonBox}>
          <button
            className={style.button}
            onClick={() => {
              const url = `${URLS.MAIN}${pageNumber}`;
              navigate(url);
            }}
          >
            Let`s contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SlideTwo);
