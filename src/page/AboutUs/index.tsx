import React, { FC, useCallback, useEffect, useState } from "react";
import { IHistoryItem, TypeGroup } from "types";
import { v4 as uuid } from "uuid";
import SlideContainer from "../Slides";
interface IProps {}

const listOfPages: IHistoryItem[] = [
  {
    sliderId: 10,
    group: TypeGroup.about,
    key: uuid(),
  },
  {
    sliderId: 11,
    group: TypeGroup.about,
    key: uuid(),
  },
];
const AboutUs: FC<IProps> = ({}: IProps) => {
  return (
    <div>
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
};

export default React.memo(AboutUs);
