import React, { useCallback, useEffect, useMemo, useState } from "react";
import style from "./style.module.scss";
import Vectors from "assets/image/Vectors.svg";
import cn from "classnames";
import { ICommonProps } from "types";
import globalStyle from "style/global.module.scss";

interface IProps extends ICommonProps {}

const max = 100;

const SlideTwo = ({ start }: IProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const listener = useCallback((event: MouseEvent) => {
    const x = event.x - window.screen.width / 2;
    const y = event.y - window.screen.height / 2;
    const X = x > max ? max : x < -max ? -max : x;
    const Y = y > max ? max : y < -max ? -max : y;
    setPosition({
      x: X,
      y: Y,
    });
  }, []);
  useEffect(() => {
    document.addEventListener("mousemove", listener);
    return () => {
      document.removeEventListener("mousemove", listener);
    };
  }, []);
  const imageStyle = useMemo(() => {
    return {
      transform: `translateX(${position.x}px) translateY(${position.y}px)`,
    };
  }, [position]);
  return (
    <div className={globalStyle.slideContainer}>
      <div
        className={cn(style.container, {
          [style.show]: start,
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
              <p className={style.about}>Over ons</p>
              <p className={style.textAbout}>
                “Onze missie is om alle bedrijven, die ervoor openstaan,
                <p className={style.orangeText}>
                  te voorzien van hoge kwaliteit video’s
                </p>
                om hun doelgroep op een creatieve manier te bereiken”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SlideTwo);
