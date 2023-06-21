import React, { useEffect, useRef } from "react";
import style from "./style.module.scss";
import A1 from "assets/video/ProjectVideo/A1.mp4";
import Henry from "assets/video/ProjectVideo/Henry.mp4";
import Lee from "assets/video/ProjectVideo/Leeu.mp4";
import Weetterskip from "assets/video/ProjectVideo/Wetterskip.mp4";
import Youngla from "assets/video/ProjectVideo/Youngla.mp4";
import LatestProjects from "components/LatestProjects";

import { ICommonProps } from "types";

import globalStyle from "style/global.module.scss";

interface IProps extends ICommonProps {}

export const latestProjectsId = "latest-Projects";
const array = [
  {
    header: "A1-Betononderhoud",
    bodyHeader: "Employer branding & brandfilm",
    text: "De kennis en kunde van A1-betononderhoud vertaald naar een unieke brandfilm.",
    video: A1,
  },
  {
    header: "Wetterskip Fryslân",
    bodyHeader: "Brandfilm",
    text: "Duidelijkheid maken in de werkzaamheden van een waterschap met behulp van een videorondleiding",
    video: Weetterskip,
  },
  {
    header: "LUNA YOUNG MASTERS 2023",
    bodyHeader: "Aftermovie",
    text: "Een creatieve aftermovie ontwikkeld voor dit meerdaagse kunstevenement",
    video: Youngla,
  },
  {
    header: "Leeuwerikhoeve",
    bodyHeader: "Brandfilm",
    text: "Some people may be satisfied with a ten.Like to take it to eleven.",
    video: Lee,
  },
  {
    header: "Henry Schein Medical x Trees for All",
    bodyHeader: "Aftermovie",
    text: "Contentmarketing in de gezondheidszorg",
    video: Henry,
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
                  video={el.video}
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
