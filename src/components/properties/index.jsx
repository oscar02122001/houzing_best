import React, { useEffect, useState } from "react";
import { Container } from "./styled";
import Card from "../card/index";
import { useLocation, useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;

const Properties = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const navigate = useNavigate();

  const onclick = (id) => {
    return navigate(`/ptoperties/${id}`);
  };

  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => setData(res.data || []));
  }, [search]);

  return (
    <Container>
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
    </Container>
  );
};

export default Properties;
