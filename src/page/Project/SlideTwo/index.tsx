import React from "react";
import style from "./style.module.scss";
import imageProject from "assets/image/projectImg/imgProject.png";

const SlideTwo = () => {
  const image = [
    { image: imageProject },
    { image: imageProject },
    { image: imageProject },
  ];
  return (
    <div className={style.container}>
      <div className={style.boxText}>
        <p className={style.headerText}>
          Check the main <span className={style.orangeText}>details</span>
        </p>
        <p className={style.mainText}>
          We helped children create their place in the world by
          <br /> giving them the power to color themselves into it.
        </p>
      </div>
      <div className={style.boxProjects}>
        {image.map((el, i) => (
          <div
            key={i}
            style={{
              animationDelay: `${i * 0.15}s`,
            }}
          >
            <img src={el.image} alt="projectImg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(SlideTwo);
