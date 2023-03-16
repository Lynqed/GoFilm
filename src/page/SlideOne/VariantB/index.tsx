import React from "react";
import Header from "../../../components/Header";
import style from "./style.module.scss";
const VariantB = () => {
  return (
    <div>
      <div className={style.container}>
        <Header />
        <div className={style.textCenter}></div>
      </div>
    </div>
  );
};

export default VariantB;
