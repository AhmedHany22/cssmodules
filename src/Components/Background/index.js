import React from "react";
import Styles from "./Background.module.css";

const Background = () => {
  return (
    <div>
      <div className={Styles.stars}></div>
      <div className={Styles.alpha}></div>
      <div className={Styles.nebula}></div>
    </div>
  );
};

export default Background;
