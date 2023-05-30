/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container, Wrapper } from "./style";
import { useParams } from "react-router";
import useRequest from "../../hooks/useRequest";

const HouseTools = () => {
  const [data, setData] = useState();
  const houseId = useParams();
  const request = useRequest();

  useEffect(() => {
    houseId?.id &&
      request({
        url: `/houses/id/${houseId?.id}`,
      }).then((res) => setData(res.data || []));
  }, [houseId?.id]);

  return (
    <Container>
      <Wrapper>
        <h1>{data?.name}</h1>
      </Wrapper>
    </Container>
  );
};

export default HouseTools;
