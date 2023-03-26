import React from 'react';

import cn from 'classnames';
import Logo from '../../assets/image/OrangeLogo.svg';
import { IHistoryItem } from '../../types';
import style from './style.module.scss';
interface IProps {
  goTo: (index: number) => any;
  currentSlide: IHistoryItem;
}
const array = [
  { label: 'Work', page: 2 },
  { label: 'About Us', page: 1 },
  { label: 'Clients', page: 4 },
  { label: 'Contact', page: 5 }
];

const Header = (props: IProps) => {
  const { goTo, currentSlide } = props;
  return (
    <div
      className={cn(style.container, {
        [style.firstSlide]: currentSlide.sliderIndex === 0
      })}
    >
      <div className={style.innerContainer}>
        <img
          className={style.logo}
          src={Logo}
          alt="logo"
          onClick={() => goTo(0)}
        />
        <div className={style.box}>
          {array.map((el, i) => (
            <p
              key={i}
              className={style.label}
              onClick={() => {
                goTo(el.page);
              }}
            >
              {el.label}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
