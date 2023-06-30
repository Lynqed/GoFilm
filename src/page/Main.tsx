import React, { useEffect } from "react";
import { v4 as uuid } from "uuid";

import { IHistoryItem, TypeGroup } from "types";

import SlideContainer from "page/Slides";
import { useParams } from "react-router";
import { generateSliderId } from "utils";
import style from "./style.module.scss";

const listOfPages: IHistoryItem[] = [
  {
    sliderId: 0,
    group: TypeGroup.main,
    key: uuid(),
  },
  {
    sliderId: 1,
    group: TypeGroup.main,
    key: uuid(),
  },
  {
    sliderId: 2,
    group: TypeGroup.main,
    key: uuid(),
  },
  {
    sliderId: 3,
    group: TypeGroup.main,
    key: uuid(),
  },
  {
    sliderId: 4,
    group: TypeGroup.main,
    key: uuid(),
  },
  {
    sliderId: 5,
    group: TypeGroup.main,
    key: uuid(),
  },
  {
    sliderId: 9,
    group: TypeGroup.main,
    key: uuid(),
  },
];

function App() {
  const params = useParams();

  useEffect(() => {
    const slideId = params.slideId;
    if (slideId) {
      const id = generateSliderId(slideId);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [params]);
  return (
    <div className={style.container}>
      {listOfPages.map((value) => {
        return (
          <SlideContainer
            key={value.key}
            goTo={() => {}}
            value={value}
            start={false}
            end={false}
          />
        );
      })}
    </div>
  );
}

export default React.memo(App);
