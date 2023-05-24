import React, { useEffect, useState } from "react";
import { Container } from "./styled";
import Card from "../card/index";
import { useLocation } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;

const Properties = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => setData(res.data || []));
  }, [search]);

  return (
    <Container>
      {data.map((value) => {
        return <Card key={value.id} data={value} />;
      })}
    </Container>
  );
};

export default Properties;
