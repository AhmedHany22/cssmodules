import React from "react";
import Styles from "./GridItem.module.css";

import Badge from "./Badge";
import Explorer from "./Explorer";

const GridItem = ({ fact, action }) => {
  return (
    <div className={Styles.card} onClick={() => action(fact.id)}>
      {fact.clicked ? <Explorer /> : <Badge />}
      <h2 className={Styles.title}>{fact.title}</h2>
      <article className={Styles.fact}>{fact.fact}</article>
    </div>
  );
};

export default GridItem;
