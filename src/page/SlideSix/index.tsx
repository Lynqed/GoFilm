import React from "react";
import Input from "../../components/Input";
import style from "./style.module.scss";

const SlideSix = () => {
  return (
    <div className={style.container}>
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
  );
};

export default SlideSix;
