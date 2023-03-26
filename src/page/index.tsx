import React, { FC } from 'react';
import { ICommonProps, IHistoryItem } from '../types';

import SlideFive from './SlideFive';
import SlideFour from './SlideFour';
import VariantA from './SlideOne';
import SlideSix from './SlideSix';
import SlideThree from './SlideThree';
import SlideTwo from './SlideTwo';

interface IProps extends ICommonProps {
  value: IHistoryItem;
}

export const sliders: Record<
  number,
  React.MemoExoticComponent<React.ComponentType<ICommonProps>>
> = {
  0: VariantA,
  1: SlideTwo,
  2: SlideThree,
  3: SlideFour,
  4: SlideFive,
  5: SlideSix
};

const SlideContainer: FC<IProps> = ({ value, ...common }: IProps) => {
  const Component = sliders[value.sliderIndex];
  return (
    <div style={{ position: 'relative', zIndex: common.end ? 5 : 10 }}>
      <Component {...common} />
    </div>
  );
};

export default React.memo(SlideContainer);
