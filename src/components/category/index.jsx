/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container, Wrapper, Content } from "./style";
import Slider from "react-slick";
import CategoryCard from "../categoryCard";
import { useNavigate } from "react-router";
import useRequest from "../../hooks/useRequest";
import UseReplace from "../../hooks/useReplace";

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
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const request = useRequest();

  const getTitle = (id) => {
    navigate(`/properties${UseReplace(`category_id`, id)}`);
  };

  useEffect(() => {
    token &&
      request({
        url: `/categories/list`,
        headers: { Authorization: `Bearer ${token} ` },
      }).then((res) => {
        setData(res?.data || []);
      });
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
          {data?.map(({ id, name }) => {
            return (
              <CategoryCard
                onClick={() => getTitle(id)}
                key={id}
                title={name}
              />
            );
          })}
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default Category;
