import React, { useRef } from "react";
import {
  Container,
  Image,
  Content,
  Title,
  SubTitle,
  Price,
  SliderBtn,
} from "./style";
import { Carousel } from "antd";
import { Button } from ".././generics";
import img1 from "../../assets/imgs/skyper.jpg";
import img2 from "../../assets/imgs/Screenshot_20211118-150358_Outlook.jpg";
import img3 from "../../assets/imgs/brick-home-arched-entry-11045236.jpg";

const Intro = () => {
  const slide = useRef("");
  const onChange = (currentSlide) => {};

  const goToSlide = (type) => {
    if (type === "prev") slide.current.prev();
    if (type === "next") slide.current.next();
  };

  return (
    <Container>
      <Carousel ref={slide} afterChange={onChange}>
        <Image src={img1} />
        <Image src={img2} />
        <Image src={img3} />
      </Carousel>
      <Content>
        <Title>Skyper Pool Partment</Title>
        <SubTitle className="discript">
          112 Glenwood Ave Hyde Park, Boston, MA
        </SubTitle>
        <Price>$5,250/mo</Price>
        <Button type={"dark"} width={"180px"}>
          Read more
        </Button>
      </Content>
      <SliderBtn prev={"true"} onClick={() => goToSlide("prev")} />
      <SliderBtn next={"true"} onClick={() => goToSlide("next")} />
    </Container>
  );
};

export default Intro;
