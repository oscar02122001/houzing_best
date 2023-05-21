import React from "react";
import { Container } from "./styled";

import img1 from "../../assets/imgs/1.png";
// import img2 from "../../assets/imgs/2.png";
// import img3 from "../../assets/imgs/3.png";
import user1 from "../../assets/icons/user1.svg";
// import user2 from "../../assets/icons/user2.svg";
// import user3 from "../../assets/icons/user3.svg";

import Intro from "../carousel";
import Card from "../card";

const Home = () => {
  return (
    <Container>
      <Intro />
      <Card
        title="New Apartment Nice Wiew"
        url={img1}
        userImg={user1}
        location="Quincy St, Brooklyn, NY, USA"
        bed="4"
        bath=" 5"
        garage="1"
        sq="1200"
        oldPrice={"$2,800"}
        price="$7,500"
      />
    </Container>
  );
};

export default Home;
