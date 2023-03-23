import React from "react";
import Header from "../../../components/Header";
import TextCenter from "../../../assets/image/TextCenterYourTeam.svg";
import style from "./style.module.scss";

const VariantA = () => {
  return (
    <div className={style.container}>
      <div>
        <p className={style.text}>
          Get things done <br />
        </p>
        <p className={style.text}>
          with<span className={style.yellowText}> your team</span>
        </p>
      </div>
    </div>
  );
};

export default React.memo(VariantA);
