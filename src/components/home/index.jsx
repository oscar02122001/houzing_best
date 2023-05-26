import React from "react";
import { Container } from "./styled";

// import user1 from "../../assets/icons/user1.svg";
// // import user2 from "../../assets/icons/user2.svg";
// // import user3 from "../../assets/icons/user3.svg";

import Intro from "../carousel";
import Category from "../category";
const Home = () => {
  return (
    <Container>
      <Intro />
      <Category />
    </Container>
  );
};

export default Home;
