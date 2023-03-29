import React, { FC, useState } from 'react';
import { ICommonProps, IHistoryItem } from '../types';
import { getSliderById } from '../utils';

interface IProps extends ICommonProps {
  value: IHistoryItem;
}

const SlideContainer: FC<IProps> = ({ value, ...common }: IProps) => {
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
    <div style={{ position: "relative", zIndex: common.end ? 5 : 10 }}>
      <Component {...common} />
    </div>
  );
};

export default React.memo(SlideContainer);
