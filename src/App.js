import React, { useState } from "react";

import "./App.css";
import Title from "./Components/Title";
import Background from "./Components/Background";
import Grid from "./Components/Grid";
import Rocket from "./Components/Rocket";
import Smoke from "./Components/Rocket/Smoke";

import Data from "./Data/NASA_facts.json";

const App = () => {
  const [facts, setFacts] = useState(Data);

  const updateClick = (id) => {
    console.log(facts[id]);
    let factsCopy = facts;
    factsCopy[id].clicked = true;
    setFacts(factsCopy);
    setFacts(factsCopy);
    console.log(facts[id]);
  };

  return (
    <div>
      <Title />
      <Background />
      <Grid facts={facts} action={updateClick} />
      <Rocket />
      <Smoke />
    </div>
  );
};

export default App;
