import React, { useCallback, useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import style from './style.module.scss';
import { ICommonProps } from 'types';
import Video from 'assets/video/test_video.mp4';

import {
  defaultPosition,
  max,
  moveBlockId,
  elementWidth,
  screenWidth,
  animationSpeed,
  animationStep,
  interpolation,
  step
} from './utils';
import { isMobile } from 'utils';

interface IProps extends ICommonProps {}

const VariantA = (props: IProps) => {
  const mobileDevice = useRef(isMobile());

  const element_pos = useRef({ left: 0 });
  const moveElement = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef(false);

  const currentPosition = useRef(defaultPosition());
  const [position, setPosition] = useState(defaultPosition());

  const mousemoveListener = useCallback((e: { pageX: number }) => {
    if (dragStart.current) {
      const x = e.pageX - element_pos.current.left;
      if (e.pageX >= 0 && x + elementWidth <= screenWidth()) {
        setPosition(x);
      }
    }
  }, []);

  const moveUpListener = useCallback(() => {
    if (moveElement.current) {
      dragStart.current = false;
      if (currentPosition.current <= screenWidth() / 2) {
        let position = currentPosition.current;
        const animate = () => {
          if (position > 0) {
            position = position - animationStep;
            setPosition(position <= 0 ? 0 : position);
            setTimeout(() => {
              animate();
            }, animationSpeed);
          }
        };
        animate();
      } else {
        let position = currentPosition.current;
        const animate = () => {
          const pos = defaultPosition();
          if (position <= pos) {
            position = position + animationStep;
            setPosition(position >= pos ? pos : position);
            setTimeout(() => {
              animate();
            }, animationSpeed);
          }
        };
        animate();
      }
    }
  }, []);

  const moveDownListener = useCallback((e: MouseEvent) => {
    // @ts-ignore
    if (e.target.id === moveBlockId) {
      // @ts-ignore
      element_pos.current = { left: e.layerX };
      dragStart.current = true;
    }
  }, []);

  const touchstartListener = useCallback((e: TouchEvent) => {
    // @ts-ignore
    if (e.target.id === moveBlockId) {
      // @ts-ignore
      element_pos.current = { left: 0 };
      dragStart.current = true;
    }
  }, []);

  const touchmoveListener = useCallback((e: TouchEvent) => {
    if (dragStart.current) {
      const pageX = e.changedTouches[0]?.pageX;
      if (pageX !== undefined) {
        mousemoveListener({ pageX });
      }
    }
  }, []);

  const resizeListener = useCallback(() => {
    setPosition(defaultPosition());
  }, []);

  useEffect(() => {
    currentPosition.current = position;
  }, [position]);

  useEffect(() => {
    window.addEventListener('resize', resizeListener);
    document.addEventListener('mousemove', mousemoveListener);
    document.addEventListener('mousedown', moveDownListener);
    document.addEventListener('mouseup', moveUpListener);
    if (mobileDevice) {
      document.addEventListener('touchstart', touchstartListener);
      document.addEventListener('touchmove', touchmoveListener);
      document.addEventListener('touchend', moveUpListener);
    }
    return () => {
      window.removeEventListener('resize', resizeListener);
      document.removeEventListener('mousemove', mousemoveListener);
      document.removeEventListener('mousedown', moveDownListener);
      document.removeEventListener('mouseup', moveUpListener);
      if (mobileDevice) {
        document.removeEventListener('touchstart', touchstartListener);
        document.removeEventListener('touchmove', touchmoveListener);
        document.removeEventListener('touchend', moveUpListener);
      }
    };
  }, []);

  const offsetWidth = contentRef.current?.offsetWidth || 0;
  const start = screenWidth() / 2 + offsetWidth / 2;
  const end = start - offsetWidth;

  const current = position;

  const startAnimation = current <= start;
  const transitionText = startAnimation
    ? interpolation(current, start, end, max, 0)
    : max;
  const transitionText2 = startAnimation
    ? interpolation(current, start, end, 0, max)
    : 0;
  const transitionOpacity = startAnimation
    ? interpolation(current, start, end, 1, 0)
    : 1;

  const backgroundStyle = {
    transform: `translateX(${-(screenWidth() - position)}px)`
  };

  const mainTextStyle = {
    WebkitMaskImage: `linear-gradient(to right,black ${
      transitionText - step
    }%, transparent ${transitionText}%)`,
    maskImage: `linear-gradient(to right,black ${
      transitionText - step
    }%, transparent ${transitionText}%)`
  };

  const hiddenTextStyle = {
    WebkitMaskImage: `linear-gradient(to left,black ${
      transitionText2 - step
    }%, transparent ${transitionText2}%)`,
    maskImage: `linear-gradient(to left,black ${
      transitionText2 - step
    }%, transparent ${transitionText2}%)`
  };

  const moveElementStyle = {
    opacity: transitionOpacity,
    left: position
  };

  return (
    <div
      className={cn(style.mainContainer, {
        [style.startAnimation]: props.start
      })}
    >
      <div className={style.circleAnimation} />
      <div className={style.container}>
        <div className={style.backgroundImageContainer}>
          <div className={style.backgroundImage}>
            <video src={Video} autoPlay muted loop />
          </div>
        </div>
        <div className={cn(style.innerContainer)} style={backgroundStyle} />
        <div ref={contentRef} className={style.content}>
          <div style={mainTextStyle}>
            <p className={style.text}>
              Get things done <br />
            </p>
            <p className={style.text}>
              with<span className={style.yellowText}> your team</span>
            </p>
          </div>
          <div className={style.hiddenContent} style={hiddenTextStyle}>
            <p className={style.text2}>
              Get things done <br />
            </p>
            <p className={style.text2}>
              with<span className={style.yellowText2}> Go Film</span>
            </p>
          </div>
        </div>
        <div
          ref={moveElement}
          tabIndex={0}
          id={moveBlockId}
          className={cn(style.moveBlock)}
          style={moveElementStyle}
        />
      </div>
    </div>
  );
};

export default React.memo(VariantA);
