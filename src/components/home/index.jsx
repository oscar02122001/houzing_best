import React, { useContext, useEffect, useState } from "react";
import { Container } from "./styled";
import { RootContext } from "../../context/home/rootContext";
// import Input from "../generics/input";
// import Button from "../generics/button";
import { Button, Input } from "../generics";

const Home = () => {
  // const [state, dispatch] = useContext(RootContext);
  // const [state1, setState1] = useState(0);
  // console.log(state);

  // useEffect(() => {
  //   setState1(state);
  // }, [state]);

  return (
    <Container>
      <h1>Home page</h1>
      {/* <button onClick={() => dispatch({ type: "plus" })}>click</button> */}
      <Input width={"200px"} placeholder={"Input"} />
      <Button>Click</Button>
      <Button type={'light'}>Netlfy</Button>
    </Container>
  );
};

export default Home;
