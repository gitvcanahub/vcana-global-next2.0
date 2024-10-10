import React from "react";
import style from "./index.module.css";

const SpiningLoader = () => {
  return (
    // <div className={style.bb}>
    <div className={style.loader}>
      <div className={style.loader_circle}></div>
      <span className={style.loader_text}>Loading...</span>
    </div>
    // </div>
  );
};

export default SpiningLoader;
