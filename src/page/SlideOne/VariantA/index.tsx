import React, { useCallback, useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import style from './style.module.scss';

const moveBlockId = 'move-block-id';

const VariantA = () => {
  const dragStart = useRef(false);
  const [inProgress, setInProgress] = useState(false);
  const open = useRef(false);
  const [right, setRight] = useState(0);
  const listener = useCallback((e: MouseEvent) => {
    if (dragStart.current) {
      const right = e.pageX - window.screen.width;
      if (right <= -window.screen.width / 3) {
        open.current = true;
        setInProgress(false);
        setRight(-window.screen.width);
      } else {
        setRight(right);
      }
    } else {
      if (!open.current) {
        setRight(0);
      }
    }
  }, []);
  useEffect(() => {
    document.addEventListener('mousemove', listener);
    document.addEventListener('mousedown', (e) => {
      // @ts-ignore
      if (e.target.id === moveBlockId) {
        dragStart.current = true;
        setInProgress(true);
      }
    });
    document.addEventListener('mouseup', () => {
      dragStart.current = false;
      setInProgress(false);
    });
  }, []);
  const opacity = 1 - right / -(window.screen.width / 3);
  return (
    <div className={style.container}>
      <div className={style.backgroundImageContainer}>
        <div className={style.backgroundImage} />
      </div>
      <div
        className={cn(style.innerContainer, {
          [style.transition]: !inProgress
        })}
        style={{
          transform: `translateX(${right}px)`
        }}
      />
      <div className={style.content}>
        <p className={style.text}>
          Get things done <br />
        </p>
        <p className={style.text}>
          with<span className={style.yellowText}> your team</span>
        </p>
      </div>
      <div
        tabIndex={0}
        id={moveBlockId}
        className={cn(style.moveBlock, {
          [style.transition]: !inProgress
        })}
        style={{
          opacity,
          transform: `translateX(${right}px)`
        }}
      />
    </div>
  );
};

export default React.memo(VariantA);
