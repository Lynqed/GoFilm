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
      toast.warning(
        `One of the required field is missed. Please define all the required fields and re-attempt.`
      );
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
                placeholder="First Name"
                type="text"
                name="firstName"
                value={data.firstName}
                onChange={(firstName) => onChange({ firstName })}
                title={
                  data.firstName.length
                    ? "Please limit your response to 30 characters"
                    : "This field is required."
                }
                onBlur={() => {}}
                status={firstName}
              />

              <Input
                placeholder="Last Name"
                type="text"
                name="lastName"
                value={data.secondName}
                onChange={(secondName) => onChange({ secondName })}
                title={
                  data.secondName.length
                    ? "Please limit your response to 30 characters"
                    : "This field is required."
                }
                onBlur={() => {}}
                status={secondName}
              />
              <Input
                placeholder="Email"
                type="text"
                name="email"
                onChange={(email) => onChange({ email })}
                value={data.email}
                title={
                  data.email.length
                    ? "Please make sure your email address is valid"
                    : "This field is required."
                }
                onBlur={() => {}}
                status={email}
              />
              <Input
                placeholder="Phone Number"
                type="text"
                name="phoneNumber"
                onChange={(phone) => onChange({ phone })}
                value={data.phone}
                title={
                  data.phone.length
                    ? "Please make sure your phone number is in the following format:+15555555555*"
                    : "This field is required."
                }
                onBlur={() => {}}
                status={phone}
              />
            </div>
            <div className={style.boxTextInput}>
              <div className={style.textArea}>
                <textarea
                  placeholder="Your message "
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
