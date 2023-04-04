import React, { useEffect, useState } from "react";
import Input from "components/Input";
import style from "./style.module.scss";
import cn from "classnames";
import { ICommonProps } from "types";

interface IProps extends ICommonProps {}
const regEmail =
  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
const regNumber = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

const SlideSix = (props: IProps) => {
  const { end } = props;
  const [show, setShow] = useState<null | boolean>(null);
  const [isValid, setIsValid] = useState(false);

  const [emailInput, setEmailInput] = useState({
    error: false,
    value: "",
  });
  const [phoneInput, setPhoneInput] = useState({
    error: false,
    value: "",
  });
  const [firstName, setFirstName] = useState({
    error: false,
    value: "",
  });
  const [secondName, setSecondName] = useState({
    error: false,
    value: "",
  });

  useEffect(() => {
    setShow(true);
  }, []);
  useEffect(() => {
    if (
      emailInput.error &&
      phoneInput.error &&
      firstName.error &&
      secondName.error
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [emailInput.error, phoneInput.error, firstName.error, secondName.error]);

  const isValidEmail = (email: string) => {
    const isValidEmail = regEmail.test(email);
    return setEmailInput({ error: isValidEmail, value: email });
  };
  const isValidPhone = (phone: string) => {
    const isValidPhone = regNumber.test(phone);
    return setPhoneInput({ error: isValidPhone, value: phone });
  };
  const isValidFirstName = (firstName: string) => {
    if (firstName.trim().length > 0 && firstName.length < 30) {
      return setFirstName({ error: true, value: firstName });
    }
    return setFirstName({ error: false, value: firstName });
  };
  const isValidSecondName = (secondName: string) => {
    if (secondName.trim().length > 0 && secondName.length < 30) {
      return setSecondName({ error: true, value: secondName });
    }
    return setSecondName({ error: false, value: secondName });
  };

  return (
    <div
      className={cn(style.container, {
        [style.show]: show === true,
        [style.hide]: end,
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
              <Input
                placeholder="First Name"
                type="text"
                name="firstName"
                value={firstName.value}
                onChange={isValidFirstName}
                status={firstName.error}
                title={"min 1 character max 30"}
              />

              <Input
                placeholder="Last Name"
                type="text"
                name="lastName"
                value={secondName.value}
                onChange={isValidSecondName}
                status={secondName.error}
                title={"min 1 character max 30"}
              />
              <Input
                placeholder="yourmail@gmail.com"
                type="text"
                name="email"
                onChange={isValidEmail}
                value={emailInput.value}
                status={emailInput.error}
                title={"the email is not correct. Example: yourmail@gmail.com"}
              />
              <Input
                placeholder="Example:+1(234)5678901"
                type="text"
                name="phoneNumber"
                onChange={isValidPhone}
                value={phoneInput.value}
                status={phoneInput.error}
                title={"not the right number. Example: +1(234)5678901"}
              />
            </div>
            <div className={style.boxTextInput}>
              <div className={style.textArea}>
                <textarea placeholder="Description" maxLength={250} />
              </div>
              <button className={style.buttonSend} disabled={isValid}>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SlideSix);
