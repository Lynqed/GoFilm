import React, { FC, useRef } from "react";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { URLS } from "utils/router";
interface IProps {
  header: string;
  text: string;
  bodyHeader: string;
  video: string;
  id: string;
}

const LatestProjects: FC<IProps> = ({
  header,
  text,
  video,
  bodyHeader,
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
      <video
        className={style.boxVideo}
        src={video}
        ref={videoRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        loop
      />
      <div className={style.boxBody}>
        <div className={style.box}>
          <p className={style.bodyHeader}>{bodyHeader}</p>
          <p className={style.text}>{text}</p>
        </div>
        <div className={style.boxButton}>
          <button
            className={style.button}
            onClick={() => {
              navigate(URLS.PROJECT);
            }}
          >
            VIEW CASE
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestProjects;
