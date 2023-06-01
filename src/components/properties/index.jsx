/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container, ContentTitle } from "./styled";
import Card from "../card/index";
import { useLocation, useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
// import { Pagination } from "antd";
// import UseReplace from "../../hooks/useReplace";

const Properties = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const navigate = useNavigate();
  const request = useRequest();

  // const toPage = (page) => {
  //   // console.log(data.page);
  //   return navigate(`/properties${UseReplace("page", page - 1)}`);
  // };

  const onclick = (id) => {
    console.log(id);
    return navigate(`/properties/${id}`);
  };

  useEffect(() => {
    request({ url: `/houses/list${search}` }).then((res) =>
      setData(res.data || [])
    );
  }, [search]);

  
  return (
    <Container>
      <ContentTitle>
        <h1 className="mainTitle">Recent Properties for Rent</h1>
        <p className="descript">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </p>
      </ContentTitle>

      {data.map((value) => {
        return (
          <Card
            key={value.id}
            onClick={() => onclick(value.id)}
            data={value}
            margin={"40px"}
            count={3}
          />
        );
      })}

      <div>
        {/* <Pagination onChange={toPage} defaultCurrent={0} total={data.length} /> */}
      </div>
    </Container>
  );
};

export default Properties;
