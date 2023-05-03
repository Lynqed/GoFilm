import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { ICommonProps, IHistoryItem } from '../types';
import { generateSliderId, getSliderById } from '../utils';
import globalStyle from 'style/global.module.scss';

interface IProps extends ICommonProps {
  value: IHistoryItem;
}

function elementInViewport(el: any) {
  var rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight * 0.7;
}

const SlideContainer: FC<IProps> = ({ value, ...common }: IProps) => {
  const defaultStart = value.sliderId === 0;
  const containerRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(defaultStart);
  const startValue = useRef(defaultStart);
  const [Component] = useState(() => {
    const component = getSliderById(value.sliderId);
    if (component) {
      return component.item.component;
    }
  });

  const onScroll = useCallback(() => {
    if (containerRef.current && !startValue.current) {
      const inView = elementInViewport(containerRef.current);
      if (inView) {
        console.log(inView, value, 'inView');
        setStart(true);
        startValue.current = true;
      }
    }
  }, []);

  useEffect(() => {
    const el = document.getElementById('main');
    if (el) {
      el.addEventListener('scroll', onScroll);
    }
  }, []);

  if (!Component) {
    return null;
  }
  return (
    <div
      ref={containerRef}
      id={generateSliderId(value.sliderId)}
      className={globalStyle.slideContainer}
    >
      {start && <Component {...common} start={start} />}
    </div>
  );
};

export default React.memo(SlideContainer);
