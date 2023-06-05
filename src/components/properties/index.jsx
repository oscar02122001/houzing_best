/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container, ContentTitle } from "./styled";
import Card from "../card/index";
import { useLocation, useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";

const Properties = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const navigate = useNavigate();
  const request = useRequest();

  const onclick = (id) => {
    return navigate(`/properties/${id}`);
  };

  useEffect(() => {
    request({ url: `/houses/list${search}` })
      .then((res) => setData(res.data || []))
      .catch(() => {});
  }, [search]);

  return (
    <Container>
      <ContentTitle>
        <h1 className="mainTitle">Recent Properties for Rent</h1>
        <p className="descript">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </p>
      </ContentTitle>

      {data?.map((value) => {
        return (
          <Card
            key={value?.id}
            onClick={() => onclick(value.id)}
            data={value}
            margin={"40px"}
            count={3}
          />
        );
      })}

      <div></div>
    </Container>
  );
};

export default Properties;
