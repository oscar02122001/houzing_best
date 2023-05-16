import React, { useContext, useEffect, useState } from "react";
import { Container } from "./styled";
import { RootContext } from "../../context/home/rootContext";

const Home = () => {
  const [state, dispatch] = useContext(RootContext);
  const [state1, setState1] = useState(0);
  // console.log(state);

  useEffect(() => {
    setState1(state);
  }, [state]);

  return (
    <Container>
      <h1>Home page {state1}</h1>
      <button onClick={() => dispatch({ type: "plus" })}>click</button>
    </Container>
  );
};

export default Home;
