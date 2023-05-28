import React, { useEffect, useState } from "react";
import { Container, Wrapper, Content } from "./style";
import Card from "../card";
import Slider from "react-slick";
// import { useNavigate } from "react-router";

const { REACT_APP_BASE_URL: url } = process.env;

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "40px 20px  ",
  slidesToShow: 3,
  speed: 500,
  dots: true,
};
const Recommend = () => {
  const [data, setData] = useState([]);
  // const navigate = useNavigate();

  // const getTitle = (value) => {
  //   navigate(`/properties?city=${value}`);
  // };

  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => setData(res.data || []));
  }, []);

  return (
    <Container>
      <Wrapper>
        <Content>
          <h1 className="mainTitle">Recommended</h1>
          <p className="descript">
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </p>
        </Content>
        <Slider {...settings}>
          {data.map((value) => {
            return <Card key={"4"} data={value} margin={"20px"} count={1} />;
          })}
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default Recommend;
