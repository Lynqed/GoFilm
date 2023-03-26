import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import persone1 from "../../assets/image/team/person2.jpeg";
import persone2 from "../../assets/image/team/person1.jpeg";
import persone3 from "../../assets/image/team/person3.jpeg";
import persone4 from "../../assets/image/team/person4.jpeg";
import persone5 from "../../assets/image/team/person5.jpeg";
import GrayPhoto from "../../components/GrayPhoto";
import cn from "classnames";
import { ICommonProps } from "../../types";

interface IProps extends ICommonProps {}
const array = [
  { name: "Jack Twist", position: "Videographer", image: persone1 },
  { name: "Jack Twist", position: "Videographer", image: persone2 },
  { name: "Jack Twist", position: "Videographer", image: persone3 },
  { name: "Jack Twist", position: "Videographer", image: persone4 },
  { name: "Jack Twist", position: "Videographer", image: persone5 },
];
const SlideFour = (props: IProps) => {
  const { end } = props;
  const [show, setShow] = useState<null | boolean>(null);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div
      className={cn(style.container, {
        [style.show]: show === true,
        [style.hide]: end,
        [style.end]: end,
      })}
    >
      <div className={style.innerContainer} />
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
  );
};

export default React.memo(SlideFour);
