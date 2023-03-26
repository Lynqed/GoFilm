import React, { useEffect, useState } from 'react';
import Input from '../../components/Input';
import style from './style.module.scss';
import cn from 'classnames';
import { ICommonProps } from '../../types';

interface IProps extends ICommonProps {}

const SlideSix = (props: IProps) => {
  const { end } = props;
  const [show, setShow] = useState<null | boolean>(null);
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div
      className={cn(style.container, {
        [style.show]: show === true,
        [style.hide]: end
      })}
    >
      <div className={style.innerContainer} />
      <div className={style.content}>
        <div className={style.yellowBox}>
          <div className={style.boxText}>
            <p className={style.firstText}>Let’s make film together</p>
            <p className={style.secondtText}>Film for everybody</p>
          </div>
          <div className={style.boxForm}>
            <div className={style.boxInput}>
              <Input placeholder="First Name" type="text" name="firstName" />
              <Input placeholder="Last Name" type="text" name="lastName" />
              <Input placeholder="Email" type="text" name="email" />
              <Input
                placeholder="Phone Number"
                type="number"
                name="phoneNumber"
              />
            </div>
            <div className={style.boxTextInput}>
              <textarea placeholder="Description" />
              <button className={style.buttonSend}>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SlideSix);
