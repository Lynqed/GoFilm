import React from "react";
import style from "./style.module.scss";
import persone1 from "../../assets/image/team/person2.jpeg";
import persone2 from "../../assets/image/team/person1.jpeg";
import persone3 from "../../assets/image/team/person3.jpeg";
import persone4 from "../../assets/image/team/person4.jpeg";
import persone5 from "../../assets/image/team/person5.jpeg";
import GrayPhoto from "../../components/GrayPhoto";

// image: string;
// name: string;
// position: string;
const SlideFour = () => {
  const array = [
    { name: "Jack Twist", position: "Videographer", image: persone1 },
    { name: "Jack Twist", position: "Videographer", image: persone2 },
    { name: "Jack Twist", position: "Videographer", image: persone3 },
    { name: "Jack Twist", position: "Videographer", image: persone4 },
    { name: "Jack Twist", position: "Videographer", image: persone5 },
  ];
  return (
    <div className={style.container}>
      <p className={style.textTeam}>Our Team</p>
      <div className={style.boxImage}>
        {array.map((el) => (
          <GrayPhoto
            key={el.image}
            image={el.image}
            name={el.name}
            position={el.position}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(SlideFour);
