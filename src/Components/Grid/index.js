import React from "react";
import GridItem from "./GridItem/index";
import Styles from "./Grid.module.css";

const Grid = ({ facts, action }) => {
  const renderFacts = () => {
    return facts.map((fact) => (
      <GridItem key={fact.id} fact={fact} action={action} />
    ));
  };
  return <div className={Styles.grid}>{renderFacts()}</div>;
};

export default Grid;
