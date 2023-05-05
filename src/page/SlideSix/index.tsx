import React, { useRef, useState } from "react";
import style from "./style.module.scss";
import { ICommonProps } from "types";
import emailjs from "emailjs-com";
import { toast } from "react-custom-alert";
import {
  isValidEmail,
  isValidFirstName,
  isValidSecondName,
} from "utils/Validation";
import Footer from "components/Footer";

interface IProps extends ICommonProps {}
const emailjsData = {
  serviceId: "service_tkljv1g",
  templateId: "template_0xn8sj1",
  publicKey: "UVL2GjbJcGYA8mWwZ",
};

const SlideSix = (props: IProps) => {
  const form = useRef<HTMLFormElement>(null);
  const [showMessage, setShowMessage] = useState(false);
  const [data, setData] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const validation = {
    email: isValidEmail(data.email),
    firstName: isValidFirstName(data.firstName),
    lastName: isValidSecondName(data.lastName),
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
            setShowMessage(true);
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
    <>
      <div className={style.container}>
        <div className={style.content}>
          {!showMessage ? (
            <>
              <div className={style.yellowBox}>
                <div className={style.boxText}>
                  <p className={style.firstText}>Let’s make film together</p>
                  <p className={style.secondText}>Film for everybody</p>
                </div>
                <form ref={form} onSubmit={sendEmail} className={style.boxForm}>
                  <div className={style.boxInput}>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={data.firstName}
                      onChange={onChange}
                      required={true}
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={data.lastName}
                      onChange={onChange}
                      required={!validation.lastName}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={data.email}
                      onChange={onChange}
                      required={!validation.email}
                    />
                    <input
                      type="number"
                      name="phone"
                      placeholder="Phone Number"
                      value={data.phone}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className={style.boxTextInput}>
                    <div className={style.textArea}>
                      <textarea
                        placeholder="Your message "
                        maxLength={250}
                        name="message"
                        required
                      />
                    </div>
                    <button className={style.buttonSend}>Send Message</button>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <div className={style.messageBox}>
              <div className={style.message}>
                <p className={style.messageText}>Excellent!</p>
                <p className={style.messageTextMain}>
                  We will contact you as soon as possible
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default React.memo(SlideSix);
