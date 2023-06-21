import React from "react";
import style from "./style.module.scss";
import persone1 from "assets/image/team/person1.jpg";
import persone2 from "assets/image/team/person2.jpg";
import persone3 from "assets/image/team/person3.jpg";
import GrayPhoto from "components/GrayPhoto";
import { ICommonProps } from "types";

import globalStyle from "style/global.module.scss";

interface IProps extends ICommonProps {}
const array = [
  { name: "Wietze Woudwijk", position: "Director", image: persone1 },
  {
    name: "Stefan Spoelstra",
    position: " Videograaf & Editor",
    image: persone2,
  },
  {
    name: "Jacco Kazemier",
    position: " Concept & Vormgeving",
    image: persone3,
  },
];
const SlideFour = (props: IProps) => {
  return (
    <div className={globalStyle.slideContainer}>
      <div className={style.container}>
        <div className={style.content}>
          <p className={style.textTeam}>Our Team</p>
          <div className={style.boxImage}>
            {array.map((el, i) => (
              <GrayPhoto
                key={i}
                image={el.image}
                name={el.name}
                position={el.position}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SlideFour);
