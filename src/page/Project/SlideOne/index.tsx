import React, { useCallback, useEffect, useRef, useState } from "react";
import cn from "classnames";
import style from "./style.module.scss";
import { ICommonProps } from "types";
import { interpolation } from "page/Slides/SlideOne/utils";
import Loader from "components/Loader";

const Play = require("assets/image/play.svg").default;
interface IProps extends ICommonProps {}
const defaultSetScreen = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

const step = 50;
const animationTime = 10;

const SlideOne = (props: IProps) => {
  const { value } = props;
  const openState = useRef(false);
  const [open, setOpen] = useState(false);
  const [screen, setScreen] = useState(defaultSetScreen());
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [screenOpen, setScreenOpen] = useState({
    width: 0,
    height: 0,
  });
  const resizeListener = useCallback(() => {
    setScreen(defaultSetScreen());
  }, []);
  useEffect(() => {
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);
  const onChangeOpen = useCallback(() => {
    if (openState.current === true) {
      setScreenOpen((screenOpen) => {
        if (screenOpen.width <= window.innerWidth * 2) {
          setTimeout(() => {
            onChangeOpen();
          }, animationTime);
          return {
            width: screenOpen.width + step,
            height: screenOpen.height + step,
          };
        }
        return screenOpen;
      });
    }
  }, []);
  const onChangeClose = useCallback(() => {
    if (openState.current === false) {
      setScreenOpen((screenOpen) => {
        if (screenOpen.width > 0) {
          setTimeout(() => {
            onChangeClose();
          }, animationTime);
          const width = screenOpen.width - step;
          const height = screenOpen.height - step;
          return {
            width: width < 0 ? 0 : width,
            height: height < 0 ? 0 : height,
          };
        }
        return screenOpen;
      });
    }
  }, []);

  const onClickStop = useCallback(() => {
    if (openState.current) {
      onClickPlay();
    }
  }, []);
  const onClickPlay = useCallback(() => {
    setOpen((open) => {
      openState.current = !open;
      if (open) {
        onChangeClose();
      } else {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
        }
        onChangeOpen();
      }
      return !open;
    });
  }, []);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.preload = "auto";
      const handleCanPlayThrough = () => {
        setIsLoading(false);
        videoRef.current?.play();
      };
      videoRef.current.addEventListener("canplaythrough", handleCanPlayThrough);
      return () => {
        videoRef.current?.removeEventListener(
          "canplaythrough",
          handleCanPlayThrough
        );
      };
    }
  }, []);

  const scaleOpen = interpolation(screenOpen.width, 0, 1536, 0, 2);
  const transformYOpen = interpolation(screenOpen.width, 0, 100, 0, -130);
  const transformXOpen = interpolation(screenOpen.width, 0, 100, 0, -65);
  const transformHeightOpen = interpolation(screenOpen.height, 0, 100, 0, 100);

  const scale = interpolation(screen.width, 1536, 0, 0.9, 0);
  const transformY = interpolation(screen.width, 1536, 500, 140, 295);
  const transformX = interpolation(screen.width, 1536, 1000, 300, 200);
  const transformHeight = interpolation(screen.height, 758, 950, 0, 100);

  const text = <>{value?.value?.projectName}</>;
  const clipId = value?.key + `-poligon`;

  return (
    <div>
      {isLoading ? <Loader /> : null}
      <div className={style.container} id={value?.value?.id}>
        <div className={style.content}>
          <div className={style.boxImage}>
            <div
              className={style.imageContainer}
              style={{ clipPath: `url(#${clipId})` }}
            >
              <video
                className={cn(style.video)}
                src={value?.value?.video}
                autoPlay
                muted={open ? false : true}
                loop
                ref={videoRef}
              />

              <div
                className={cn(style.maskText, style.text1, {
                  [style.open]: open,
                })}
              >
                {text}
              </div>
              <div
                className={cn(style.controlContainer, { [style.open]: open })}
                onClick={onClickStop}
              >
                <img
                  src={Play}
                  alt="start"
                  className={cn(style.playButton, { [style.open]: open })}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onClickPlay();
                  }}
                />
              </div>
            </div>
            <div className={cn(style.maskText, style.text2)}>{text}</div>
          </div>
          <svg className={style.svgPoligon} preserveAspectRatio="xMinYMin meet">
            <defs>
              <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
                <path
                  fill="white"
                  d="M1026.74 213.242L721.248 518.735C606.51 403.997 420.489 403.997 305.751 518.735L0.257812 213.242C283.259 -69.7593 743.74 -69.7593 1026.74 213.242Z"
                  transform={`translate(${transformX + transformXOpen}, ${
                    transformY +
                    transformHeight +
                    transformYOpen +
                    transformHeightOpen
                  }), scale(${scale + scaleOpen})`}
                ></path>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SlideOne);
