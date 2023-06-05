import React, { useEffect, useState } from "react";
import { Container, Wrapper, Content } from "./style";
import Card from "../card";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

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
const Recent = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => setData(res.data || []));
  }, []);

  const onClick = (id) => {
    return navigate(`/properties/${id}`);
  };

  return (
    <Container>
      <Wrapper>
        <Content>
          <h1 className="mainTitle">Recent Properties for Rent</h1>
          <p className="descript">
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </p>
        </Content>
        <Slider {...settings}>
          {data.map((value) => {
            return (
              <Card
                key={value?.id}
                onClick={() => onClick(value.id)}
                data={value}
                margin={"20px"}
                count={1}
              />
            );
          })}
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default Recent;
