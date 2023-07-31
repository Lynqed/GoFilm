import React, { useRef } from "react";
import style from "./style.module.scss";
import LatestProjects from "components/LatestProjects";

import { ICommonProps, ShortVideoLinks } from "types";

import globalStyle from "style/global.module.scss";
import { useNavigate } from "react-router-dom";
import { URLS } from "utils/router";

interface IProps extends ICommonProps {}

export const latestProjectsId = "latest-Projects";
const array = [
  {
    id: "1",
    header: "A1-Betononderhoud",
    bodyHeader: "Employer branding & brandfilm",
    text: "De kennis en kunde van A1-betononderhoud vertaald naar een unieke brandfilm.",
    video: ShortVideoLinks.A1,
  },
  {
    id: "2",
    header: "Wetterskip Fryslân",
    bodyHeader: "Brandfilm",
    text: "Duidelijkheid maken in de werkzaamheden van een waterschap met behulp van een videorondleiding",
    video: ShortVideoLinks.WeetterSkip,
  },
  {
    id: "3",
    header: "LUNA YOUNG MASTERS 2023",
    bodyHeader: "Aftermovie",
    text: "Een creatieve aftermovie ontwikkeld voor dit meerdaagse kunstevenement",
    video: ShortVideoLinks.Luna,
  },
  {
    id: "4",
    header: "Leeuwerikhoeve",
    bodyHeader: "Brandfilm",
    text: "Visuele rebranding om de uitstraling van dit wellnesresort te professionaliseren.",
    video: ShortVideoLinks.Lee,
  },
  {
    id: "5",
    header: "Henry Schein Medical x Trees for All",
    bodyHeader: "Aftermovie",
    text: "Contentmarketing in de gezondheidszorg",
    video: ShortVideoLinks.Henry,
  },
];
const SlideThree = (props: IProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(...array);
  }

  return (
    <div className={globalStyle.slideContainer}>
      <div className={style.container}>
        <div className={style.content}>
          <p className={style.header}>Recente projecten</p>

          <div id={latestProjectsId} className={style.boxProjects} ref={ref}>
            {newArray.map((el, i) => (
              <div
                key={i}
                onClick={() => {
                  navigate(`${URLS.MAIN}${URLS.PROJECT}#${el.id}`);
                }}
              >
                <LatestProjects
                  header={el.header}
                  text={el.text}
                  bodyHeader={el.bodyHeader}
                  video={el.video}
                  id={el.id}
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
