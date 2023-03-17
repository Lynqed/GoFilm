import React from "react";
import Header from "../../../components/Header";
import TextCenter from "../../../assets/image/TextCenterYourTeam.svg";
import style from "./style.module.scss";

const VariantA = () => {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.textCenter}>
        <img src={TextCenter} alt="textCenter" />
      </div>
    </div>
  );
};

export default React.memo(VariantA);
