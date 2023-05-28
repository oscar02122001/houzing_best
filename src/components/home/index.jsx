import React from "react";
import { Container } from "./styled";

import Intro from "../carousel";
import Category from "../category";
import Recommend from "../recommend";
import ChooseUs from "../chooseUs";
import Recent from "../recent";
import Popular from "../popular";
import Testimonials from "../testimonials";
const Home = () => {
  return (
    <Container>
      <Intro />
      <Recommend />
      <ChooseUs />
      <Category />
      <Popular />
      <Recent />
      <Testimonials />
    </Container>
  );
};

export default Home;
