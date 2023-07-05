import React, { FC, useEffect } from "react";
import { v4 as uuid } from "uuid";

import { IHistoryItem, TypeGroup } from "types";

import SlideContainer from "./Slides";
import { ProjectsData } from "data";

interface IProps {}
function flatten(arr: any) {
  return arr.reduce(function (flat: any, toFlatten: any) {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    );
  }, []);
}

const listOfPages = flatten(
  ProjectsData.map((value) => [
    {
      sliderId: 6,
      group: TypeGroup.project,
      key: uuid(),
      value: value,
    },
    {
      sliderId: 7,
      group: TypeGroup.project,
      key: uuid(),
      value: value,
    },
    {
      sliderId: 8,
      group: TypeGroup.project,
      key: uuid(),
      value: value,
    },
  ])
) as IHistoryItem[];

const Component: FC<IProps> = ({}: IProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {listOfPages.map((value) => {
        console.log("1");
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

export default React.memo(Component);
