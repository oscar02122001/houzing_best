import React, { useEffect, useState } from "react";
import { Container, Wrapper, Content } from "./style";
import Slider from "react-slick";
import CategoryCard from "../categoryCard";
// import { Icons } from "../categoryCard/style";
import { useNavigate } from "react-router";

const { REACT_APP_BASE_URL: url } = process.env;

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "0px",
  slidesToShow: 4,
  speed: 500,
  dots: true,
};
const Category = () => {
  const [, setData] = useState([]);
  // const [title, setTitle] = useState();
  const navigate = useNavigate();

  const getTitle = (value) => {
    navigate(`/properties?city=${value}`);
  };

  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, []);

  return (
    <Container>
      <Wrapper>
        <Content>
          <h1 className="mainTitle">Category</h1>
          <p className="descript">
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </p>
        </Content>
        <Slider {...settings}>
          {/* {data.map(({ id, city }) => {
            return <CategoryCard key={id} title={city} />;
          })} */}
          <CategoryCard onClick={getTitle} title={"Toshkent"} />
          <CategoryCard onClick={getTitle} title={"Samarqand"} />
          <CategoryCard onClick={getTitle} title={"Djizzakh"} />
          <CategoryCard onClick={getTitle} title={"Buxoro"} />{" "}
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default Category;
