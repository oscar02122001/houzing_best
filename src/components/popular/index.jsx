import React, { useRef } from "react";
import { Container, Image, Content, Title } from "./style";
import { Button } from ".././generics";
import img3 from "../../assets/imgs/Screenshot_20211118-150358_Outlook.jpg";

const Popular = () => {
  return (
    <Container>
      <Image src={img3} />
      <Content>
        <Title>
          Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home
        </Title>
        <Button type={"primary"} width={"180px"}>
          Read more
        </Button>
      </Content>
    </Container>
  );
};

export default Popular;
