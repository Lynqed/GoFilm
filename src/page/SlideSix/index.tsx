import React, { useEffect, useRef, useState } from "react";
import Input from "components/Input";
import style from "./style.module.scss";
import cn from "classnames";
import { ICommonProps } from "types";
import emailjs from "emailjs-com";
import { toast } from "react-custom-alert";
import {
  isValidEmail,
  isValidFirstName,
  isValidPhone,
  isValidSecondName,
} from "utils/Validation";

interface IProps extends ICommonProps {}
const emailjsData = {
  serviceId: "service_tkljv1g",
  templateId: "template_0xn8sj1",
  publicKey: "UVL2GjbJcGYA8mWwZ",
};

const SlideSix = (props: IProps) => {
  const { end } = props;
  const [show, setShow] = useState<null | boolean>(null);
  const form = useRef<HTMLFormElement>(null);
  const [data, setData] = useState({
    email: "",
    phone: "",
    firstName: "",
    secondName: "",
  });
  const [email, setEmail] = useState(true);
  const [firstName, setFirstName] = useState(true);
  const [secondName, setSecondName] = useState(true);
  const [phone, setPhone] = useState(true);

  useEffect(() => {
    setShow(true);
  }, []);

  const onChange = (obj: Partial<typeof data>) => {
    setData((data) => ({
      ...data,
      ...obj,
    }));
  };

  const validation = {
    email: isValidEmail(data.email),
    phone: isValidPhone(data.phone),
    firstName: isValidFirstName(data.firstName),
    secondName: isValidSecondName(data.secondName),
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setEmail(validation.email);
    setFirstName(validation.firstName);
    setSecondName(validation.secondName);
    setPhone(validation.phone);
    if (
      form.current !== null &&
      !Object.values(validation).some((v) => v === false)
    ) {
      emailjs
        .sendForm(
          emailjsData.serviceId,
          emailjsData.templateId,
          form.current,
          emailjsData.publicKey
        )
        .then(
          (result) => {
            toast.success("Your letter has been sent");
          },
          (error) => {
            toast.error(`connection error, try again later`);
          }
        );
    } else {
      toast.warning(`you need to fill in all fields with an asterisk`);
    }
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
          <form ref={form} onSubmit={sendEmail} className={style.boxForm}>
            <div className={style.boxInput}>
              <Input
                placeholder="First Name*"
                type="text"
                name="firstName"
                value={data.firstName}
                onChange={(firstName) => onChange({ firstName })}
                title={"min 1 character max 30"}
                onBlur={() => {}}
                status={firstName}
              />

              <Input
                placeholder="Last Name*"
                type="text"
                name="lastName"
                value={data.secondName}
                onChange={(secondName) => onChange({ secondName })}
                title={"min 1 character max 30"}
                onBlur={() => {}}
                status={secondName}
              />
              <Input
                placeholder="yourmail@gmail.com*"
                type="text"
                name="email"
                onChange={(email) => onChange({ email })}
                value={data.email}
                title={"the email is not correct. Example: yourmail@gmail.com"}
                onBlur={() => {}}
                status={email}
              />
              <Input
                placeholder="Example:+1(555)5555555*"
                type="text"
                name="phoneNumber"
                onChange={(phone) => onChange({ phone })}
                value={data.phone}
                title={"Example:+1(555)5555555*"}
                onBlur={() => {}}
                status={phone}
              />
            </div>
            <div className={style.boxTextInput}>
              <div className={style.textArea}>
                <textarea
                  placeholder="Description"
                  maxLength={250}
                  name="message"
                />
              </div>
              <button className={style.buttonSend}>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SlideSix);
