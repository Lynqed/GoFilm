import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import SunRise from "assets/image/SunRise.jpeg";
import Desert from "assets/image/desert.jpeg";
import LatestProjects from "components/LatestProjects";
import cn from "classnames";

import { ICommonProps } from "types";

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
  const { end, goTo } = props;
  const [show, setShow] = useState<null | boolean>(null);
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div
      className={cn(style.container, {
        [style.show]: show === true,
        [style.hide]: end,
      })}
    >
      <div className={style.circleContainer}>
        <div className={style.innerContainer} />
      </div>
      <div className={style.content}>
        <p className={style.header}>Latest projects</p>
        <div id={latestProjectsId} className={style.boxProjects}>
          {array.map((el, i) => (
            <div
              key={i}
              onClick={() => {
                goTo(6);
              }}
              style={{
                animationDelay: `${i * 0.15}s`,
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
  );
};

export default React.memo(SlideThree);
