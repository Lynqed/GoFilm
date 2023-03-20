import React from "react";
import Header from "../../../components/Header";
import style from "./style.module.scss";
const VariantB = () => {
  return (
    <div className={style.backgraundImage}>
      <div className={style.container}>
        <div>
          <p className={style.text}>
            Get things done <br />
          </p>
          <p className={style.text}>
            with<span className={style.yellowText}> Go Film</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(VariantB);
