/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import useRequest from "../../hooks/useRequest";
import Card from "../card";
import { FavouriteContext } from "../../context/home";
import { Container, Wrapper, Content } from "./style";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const Favourite = () => {
  const token = localStorage.getItem("token");
  const request = useRequest();
  const [, dispatch] = useContext(FavouriteContext);
  const navigate = useNavigate();

  const { refetch, data } = useQuery(
    [],
    async () => {
      const res = await request({
        url: `/houses/getAll/favouriteList`,
        headers: { Authorization: `Bearer ${token} ` },
      }).catch(() => {});
      return res;
    },

    {
      onSuccess: (res) => {
        dispatch({ type: "refetch", payload: refetch });
      },
    }
  );

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };

  return (
    <Container>
      <Content>
        <h1 className="mainTitle">Favourite</h1>
        <p className="descript">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </p>
      </Content>
      <Wrapper>
        {token && data?.data?.length ? (
          data?.data?.map((value) => {
            return (
              <Card
                key={value?.id}
                onClick={() => onSelect(value.id)}
                data={value}
                margin={"40px"}
                count={3}
              />
            );
          })
        ) : (
          <div className="notFound">Data Not Found</div>
        )}
      </Wrapper>
    </Container>
  );
};

export default Favourite;
