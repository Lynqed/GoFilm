import React, { useRef } from "react";
import style from "./style.module.scss";
import { ICommonProps } from "types";
interface IProps extends ICommonProps {}
export const imagesSliderList = "images-list";

const SlideTwo = (props: IProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const newArray = [];
  for (let i = 0; i < 5; i++) {
    if (props.value?.value?.photo) {
      newArray.push(...props.value?.value?.photo);
    }
  }
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.boxText}>
          <p className={style.headerText}>{props.value?.value?.title}</p>
          <p className={style.mainText}>{props.value?.value?.aboutProject}</p>
        </div>
        <div id={imagesSliderList} className={style.boxProjects} ref={ref}>
          {newArray.map((el, i) => (
            <div
              key={i}
              style={{
                animationDelay: `${i * 0.15}s`,
              }}
            >
              <img src={el} alt="projectImg" className={style.image} />
            </div>
          ))}
        </div>
        <div className={style.boxAbout}>
          <p className={style.textAbout}>{props.value?.value?.aboutVideo}</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SlideTwo);
