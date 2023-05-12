import React, { useEffect, useRef } from "react";
import style from "./style.module.scss";
import SunRise from "assets/image/SunRise.jpeg";
import Desert from "assets/image/desert.jpeg";
import LatestProjects from "components/LatestProjects";

import { ICommonProps } from "types";

import globalStyle from "style/global.module.scss";

interface IProps extends ICommonProps {}

export const latestProjectsId = "latest-Projects";
const array = [
  {
    header: "IN LOVE WE TRUST",
    bodyHeader: "OUR REALITY",
    text: "We helped children create their place in the world by giving them the power to color themselves into it.",
    img: SunRise,
  },
  {
    header: "The Bunny",
    bodyHeader: "IN LOVE WE TRUST",
    text: "Some people may be satisfied with a ten. We like to take it to eleven.",
    img: Desert,
  },
  {
    header: "The Bunny",
    bodyHeader: "IN LOVE WE TRUST",
    text: "Some people may be satisfied with a ten. We  like to take it to eleven.",
    img: Desert,
  },
  {
    header: "The Bunny",
    bodyHeader: "IN LOVE WE TRUST",
    text: "Some people may be satisfied with a ten.Like to take it to eleven.",
    img: Desert,
  },
];
const SlideThree = (props: IProps) => {
  const { goTo } = props;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      const onWheel = (e: WheelEvent) => {
        e.preventDefault();
        console.log(e);
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
    <div className={globalStyle.slideContainer}>
      <div className={style.container}>
        <div className={style.content}>
          <p className={style.header}>Latest projects</p>

          <div id={latestProjectsId} className={style.boxProjects} ref={ref}>
            {array.map((el, i) => (
              <div
                key={i}
                onClick={() => {
                  goTo(6);
                }}
              >
                <LatestProjects
                  header={el.header}
                  text={el.text}
                  bodyHeader={el.bodyHeader}
                  img={el.img}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SlideThree);
