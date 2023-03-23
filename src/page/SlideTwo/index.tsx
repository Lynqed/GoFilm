import React, { useEffect, useMemo, useState } from 'react';
import style from './style.module.scss';
import Vectors from '../../assets/image/Vectors.svg';
import cn from 'classnames';
import { ICommon } from '../../App';

interface IProps extends ICommon {}

const max = 100;

const SlideTwo = (props: IProps) => {
  const { end } = props;
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState<null | boolean>(null);
  useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const x = event.x - window.screen.width / 2;
      const y = event.y - window.screen.height / 2;
      const X = x > max ? max : x < -max ? -max : x;
      const Y = y > max ? max : y < -max ? -max : y;
      setPosition({
        x: X,
        y: Y
      });
    });
    setShow(true);
  }, []);
  const imageStyle = useMemo(() => {
    return {
      transform: `translateX(${position.x}px) translateY(${position.y}px)`
    };
  }, [position]);
  return (
    <div
      className={cn(style.container, {
        [style.show]: show === true,
        [style.hide]: end
      })}
    >
      <div className={style.innerContainer} />
      <div className={style.content}>
        <img
          src={Vectors}
          alt="vectors"
          className={style.image}
          style={imageStyle}
        />
        <div className={style.textContainer}>
          <div>
            <p className={style.about}>About us</p>
            <p className={style.textAbout}>
              “Our mission is to provide
              <br />
              <p className={style.orangeText}>
                high-quality video content
                <br />
              </p>
              to any business that is open to it.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SlideTwo);
