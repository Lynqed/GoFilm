import React from "react";
import style from "./style.module.scss";
import SunRise from "../../assets/image/SunRise.jpeg";
import Desert from "../../assets/image/desert.jpeg";
import LatestProjects from "../../components/LatestProjects";
const SlideThree = () => {
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
  return (
    <div className={style.container}>
      <p className={style.header}>Lates projects</p>
      <div className={style.boxProjects}>
        {array.map((el) => (
          <LatestProjects
            key={el.text}
            header={el.header}
            text={el.text}
            bodyHeader={el.bodyHeader}
            img={el.img}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(SlideThree);
