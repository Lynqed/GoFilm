import React, { FC } from 'react';
import style from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import { URLS } from 'utils/router';
interface IProps {
  header: string;
  text: string;
  bodyHeader: string;
  img: string;
}

const LatestProjects: FC<IProps> = ({ header, text, img, bodyHeader }) => {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <p className={style.headerText}>{header}</p>
      <div className={style.boxImage}>
        <img src={img} alt="imageProject" className={style.image} />
      </div>
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
