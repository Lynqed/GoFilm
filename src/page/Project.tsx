import React, { FC, useEffect } from "react";
import { v4 as uuid } from "uuid";

import { IHistoryItem, TypeGroup } from "types";

import SlideContainer from "./Slides";
import { ProjectsData } from "data";

interface IProps {}

const listOfPages: IHistoryItem[] = [
  {
    sliderId: 6,
    group: TypeGroup.project,
    key: uuid(),
  },
  {
    sliderId: 7,
    group: TypeGroup.project,
    key: uuid(),
  },
  {
    sliderId: 8,
    group: TypeGroup.project,
    key: uuid(),
  },
];

const Component: FC<IProps> = ({}: IProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const ListOfPagesFunct = () => {
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

  return (
    <div>
      {ProjectsData.map((el) => {
        return <div key={el.projectName}>{ListOfPagesFunct()}</div>;
      })}
    </div>
  );
};

export default React.memo(Component);
