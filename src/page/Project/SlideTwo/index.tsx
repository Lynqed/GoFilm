import React, { useEffect, useRef } from "react";
import style from "./style.module.scss";
import { ICommonProps } from "types";
interface IProps extends ICommonProps {}
export const imagesSliderList = "images-list";

const SlideTwo = (props: IProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (el) {
      const onWheel = (e: WheelEvent) => {
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: "auto",
        });
      };

      el.addEventListener("wheel", onWheel);

      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.boxText}>
          <p className={style.headerText}>{props.value?.value?.title}</p>
          <p className={style.mainText}>{props.value?.value?.aboutProject}</p>
        </div>
        <div id={imagesSliderList} className={style.boxProjects} ref={ref}>
          {props.value?.value?.photo.map((el, i) => (
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
      </div>
    </div>
  );
};

export default React.memo(SlideTwo);
