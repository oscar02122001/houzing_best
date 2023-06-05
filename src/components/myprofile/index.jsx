/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {
  Container,
  Wrapper,
  UserWrap,
  Icons,
  Img,
  Feature,
  Sale,
  OldPrice,
  Price,
} from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import { Table } from "antd";
import { Button } from "../generics";
import noimg from "../../assets/imgs/no-image.webp";
import { useQuery } from "react-query";
import { message } from "antd";

const MyProfile = () => {
  const token = localStorage.getItem("token");
  const { search } = useLocation();
  const request = useRequest();
  const navigate = useNavigate();

  const { refetch, data } = useQuery([search], async () => {
    const res = await request({
      url: `/houses/me`,
      headers: { Authorization: `Bearer ${token} ` },
    });
    return res;
  });

  const delHouse = (id) => {
    request({
      url: `/houses/${id}`,
      headers: { Authorization: `Bearer ${token} ` },
      method: "DELETE",
    }).then((res) => {
      if (res?.success) {
        refetch();
        message.info("Successfully deleted");
      } else message.warning("Samthing want wrong");
    });
  };

  const columns = [
    {
      title: "Listing Title",
      key: "data?.id",
      width: "450px",
      render: (data) => {
        return (
          <UserWrap key={data?.id}>
            <div>
              <Feature>FEATURED</Feature>
              <Img
                src={
                  (data?.attachments && data?.attachments[0]?.imgPath) || noimg
                }
              />
            </div>
            <UserWrap.Disc>
              <div className="subTitle">{data?.name || "Data Name"}</div>
              <div className="location">{data?.address || "Data location"}</div>
              <OldPrice className="location">
                $ {data?.price || "Data old price"}
              </OldPrice>
              <Price className="location">
                $ {data?.salePrice || "Data sale price"}
              </Price>
            </UserWrap.Disc>
            <Sale>FOR SALE</Sale>
          </UserWrap>
        );
      },
    },
    {
      id: 1,
      title: "Year Build",
      render: (data) => (
        <span key={data?.id}>{data.houseDetails.yearBuilt}</span>
      ),
      key: "yearBuilt",
    },
    {
      id: 2,
      title: "Region",
      dataIndex: "region",
      key: "region",
    },
    {
      id: 3,
      title: "Action",
      render: (data) => {
        return (
          <Icons.Wrapper>
            <Icons.EditIcon
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/myprofile/edithouse/${data?.id}`);
              }}
            />
            <Icons.DeleteIcon
              onClick={(e) => {
                e.stopPropagation();
                delHouse(data?.id);
              }}
            />
          </Icons.Wrapper>
        );
      },
      key: "data?.id",
    },
  ];

  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="mainTitle proTitle">My properties</div>
        <Button onClick={() => navigate(`/myprofile/newhouse`)}>
          Add House
        </Button>
      </div>
      <Wrapper>
        <Table
          rowKey="id"
          style={{ cursor: "pointer" }}
          onRow={(record) => {
            return {
              onClick: () => {
                navigate(`/properties/${record?.id}`);
              },
            };
          }}
          dataSource={data?.data}
          columns={columns}
        />
      </Wrapper>
    </Container>
  );
};

export default MyProfile;
