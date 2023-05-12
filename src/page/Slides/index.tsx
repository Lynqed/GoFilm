import React, { FC, useRef, useState } from "react";
import { ICommonProps, IHistoryItem } from "types";
import { generateSliderId, getSliderById } from "utils";
import globalStyle from "style/global.module.scss";

interface IProps extends ICommonProps {
  value: IHistoryItem;
}

const SlideContainer: FC<IProps> = ({ value, ...common }: IProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [Component] = useState(() => {
    const component = getSliderById(value.sliderId);
    if (component) {
      return component.item.component;
    }
  });

  if (!Component) {
    return null;
  }
  return (
    <div
      ref={containerRef}
      id={generateSliderId(value.sliderId)}
      className={value.sliderId !== 4 ? globalStyle.slideContainer : ""}
    >
      <Component {...common} start={true} />
    </div>
  );
};

export default React.memo(SlideContainer);
