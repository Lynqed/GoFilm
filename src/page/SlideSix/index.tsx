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

  useEffect(() => {
    setShow(true);
  }, []);

  const onChange = (obj: Partial<typeof data>) => {
    setData((data) => ({
      ...data,
      ...obj,
    }));
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form.current);
    if (form.current !== null) {
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
    }
  };
  const validation = {
    email: isValidEmail(data.email),
    phone: isValidPhone(data.phone),
    firstName: isValidFirstName(data.firstName),
    secondName: isValidSecondName(data.secondName),
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
                placeholder="First Name"
                type="text"
                name="firstName"
                value={data.firstName}
                onChange={(firstName) => onChange({ firstName })}
                status={validation.firstName}
                title={"min 1 character max 30"}
              />

              <Input
                placeholder="Last Name"
                type="text"
                name="lastName"
                value={data.secondName}
                onChange={(secondName) => onChange({ secondName })}
                status={validation.secondName}
                title={"min 1 character max 30"}
              />
              <Input
                placeholder="yourmail@gmail.com"
                type="text"
                name="email"
                onChange={(email) => onChange({ email })}
                value={data.email}
                status={validation.email}
                title={"the email is not correct. Example: yourmail@gmail.com"}
              />
              <Input
                placeholder="Example:+1(234)5678901"
                type="text"
                name="phoneNumber"
                onChange={(phone) => onChange({ phone })}
                value={data.phone}
                status={validation.phone}
                title={"not the right number. Example: +1(234)5678901"}
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
              <button
                className={style.buttonSend}
                disabled={Object.values(validation).some((v) => v === false)}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SlideSix);
