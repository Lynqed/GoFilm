import React, { FC, useRef } from "react";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { URLS } from "utils/router";
import { isIOS } from "react-device-detect";
interface IProps {
  header: string;
  text: string;
  bodyHeader: string;
  video: string;
  id: string;
  poster: string;
}

const LatestProjects: FC<IProps> = ({
  header,
  text,
  video,
  bodyHeader,
  poster,
  id,
}) => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };
  return (
    <div className={style.container}>
      <p className={style.headerText}>{header}</p>

      {isIOS ? (
        <img src={poster} alt="test" className={style.image} />
      ) : (
        <video
          src={video}
          ref={videoRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          muted
          playsInline
        />
      )}
      <div className={style.boxBody}>
        <div className={style.box}>
          <p className={style.bodyHeader}>{bodyHeader}</p>
          <p className={style.text}>{text}</p>
        </div>
        <div className={style.boxButton}>
          <button
            className={style.button}
            onClick={() => {
              navigate(`${URLS.MAIN}${URLS.PROJECT}#${id}`);
            }}
          >
            <a
              href={`${URLS.MAIN}${URLS.PROJECT}#${id}`}
              className={style.button}
            >
              VIEW CASE
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestProjects;
