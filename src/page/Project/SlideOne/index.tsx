import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import image from "assets/image/project.png";
import cn from "classnames";
import { ICommonProps } from "types";
interface IProps extends ICommonProps {}
const SlideOne = (props: IProps) => {
  const { end } = props;
  const [show, setShow] = useState<null | boolean>(null);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div
      className={cn(style.container, {
        [style.show]: show === true,
        [style.hide]: end,
      })}
    >
      <div className={style.innerContainer} />
      <div className={style.content}>
        <div className={style.boxImage}>
          <img src={image} alt={"testimg"} className={style.image} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(SlideOne);
