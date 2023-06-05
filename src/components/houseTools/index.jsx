/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from "react";
import {
  Container,
  Wrapper,
  DetailsContent,
  Content,
  Icons,
  Share,
  Save,
  Prices,
  IconRooms,
  HouseInfo,
  Description,
  ImageContainer,
  Blur,
  ImgContainer,
} from "./style";
import { useParams } from "react-router";
import useRequest from "../../hooks/useRequest";
import { Button, Input } from "../generics";
import { Checkbox } from "antd";
import Yandex from "../generics/yandex";
import Recent from "../recent";
import { FavouriteContext } from "../../context/home";
import { message } from "antd";

import noimg from "../../assets/imgs/no-image.webp";

const HouseTools = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const houseId = useParams();
  const request = useRequest();
  const [state] = useContext(FavouriteContext);
  const required = useRequest();

  const {
    address,
    city,
    region,
    attachments,
    country,
    // name,
    description,
    houseDetails,
    price,
    salePrice,
    favorite,
    location,
    user,
    zipCode,
    id,
  } = data;

  useEffect(() => {
    houseId?.id &&
      request({
        url: `/houses/id/${houseId?.id}`,
      }).then((res) => {
        setData(res.data || []);
        window.scrollTo(0, 0);
      });
  }, [houseId?.id]);

  // const onChange = (e) => {
  //   console.log(`checked = ${e.target.checked}`);
  // };

  const fav = (event) => {
    event?.stopPropagation();
    token &&
      required({
        url: `/houses/addFavourite/${id}?favourite=${!favorite}`,
        method: "PUT",
        headers: { Authorization: `Bearer ${token} ` },
      }).then((res) => {
        if (favorite) res?.success && message.warning("Successfully disliked");
        else res?.success && message.info("Successfully liked");
        state.refetch && state.refetch();
      });
  };

  return (
    <Container>
      <ImageContainer>
        <ImageContainer.Main
          src={(attachments && attachments[0]?.imgPath) || noimg}
          alt="test"
        />
        <ImgContainer>
          {attachments &&
            attachments?.slice(1, 5).map((value, index) => {
              return attachments?.length > 5 && index === 3 ? (
                <Blur.Container key={value?.id}>
                  <ImageContainer.Subimg
                    key={value?.id}
                    src={value?.imgPath}
                    alt="test"
                  />
                  <Blur key={value?.id}>+{attachments?.length - 5}</Blur>
                </Blur.Container>
              ) : (
                <ImageContainer.Subimg
                  key={value?.id}
                  src={value?.imgPath}
                  alt="test"
                />
              );
            })}
        </ImgContainer>
      </ImageContainer>
      <Container.Inner top={"true"}>
        <Wrapper home={"true"}>
          <DetailsContent>
            <Content>
              <div className="subTitle">
                {address} {houseDetails?.room}
              </div>
              <div className="location">
                {region},{city},{country}
              </div>
              <HouseInfo>
                <HouseInfo.Item>
                  <IconRooms.Bad />
                  {houseDetails?.beds || 0} Bad
                </HouseInfo.Item>
                <HouseInfo.Item>
                  <IconRooms.Bath />
                  {houseDetails?.bath || 0} Bath
                </HouseInfo.Item>
                <HouseInfo.Item>
                  <IconRooms.Garage />
                  {houseDetails?.garage || 0} Garage
                </HouseInfo.Item>
                <HouseInfo.Item>
                  <IconRooms.SCard />
                  {houseDetails?.area || 0} Sq Ft
                </HouseInfo.Item>{" "}
                <HouseInfo.Item>
                  <IconRooms.Year />
                  Year Built: {houseDetails?.yearBuilt || 0}
                </HouseInfo.Item>
              </HouseInfo>
            </Content>
            <Content left={"true"}>
              <div style={{ display: "flex" }}>
                <Share className="location">
                  <Icons.Share />
                  Share
                </Share>
                <Save className="location" onClick={fav}>
                  <Icons.Love />
                  Save
                </Save>
              </div>
              <Prices>
                <Prices.OldPrice>${price}/mo</Prices.OldPrice>
                <Prices.Price>${salePrice}/mo</Prices.Price>
              </Prices>
              <div className="location">
                {user?.lastname} {user?.firstname}
              </div>
            </Content>
          </DetailsContent>
          <Content.Title className="subTitle">Description</Content.Title>
          <Description>{description}</Description>
          <Content.Title className="subTitle">Location</Content.Title>
          <Content location={"true"}>
            <div>
              <Content.Item>
                Address: <span className="location">{address}</span>
              </Content.Item>
              <Content.Item>
                State/County: <span className="location">{region}</span>
              </Content.Item>
            </div>
            <div>
              <Content.Item>
                City: <span className="location">{city}</span>
              </Content.Item>
              <Content.Item>
                Zip: <span className="location">{zipCode}</span>
              </Content.Item>
            </div>
            <div>
              <Content.Item>
                Area:<span className="location"> {region}</span>
              </Content.Item>
              <Content.Item>
                Country: <span className="location">{country}</span>
              </Content.Item>
            </div>
          </Content>
          <Yandex
            center={{ center: [location?.latitude, location?.longitude] }}
          />
          {/* <Recent /> */}
        </Wrapper>
        <Wrapper className="sss" user={"true"}>
          <Wrapper.User>
            <IconRooms.User />
            <div>
              <div className="subTitle">
                {user?.firstname} {user?.lastname}
              </div>
              <div className="location">+998973253412</div>
            </div>
          </Wrapper.User>
          <Input placeholder={"Name"} />
          <Input placeholder={"Phone"} />
          <Input placeholder={"Email"} />
          <Content.Item className="sms">Message</Content.Item>
          <Input placeholder={"Message"} />
          <Checkbox>
            <span className="location check">
              By submitting this form I agree to Terms of Use
            </span>
          </Checkbox>
          <Button width={"100%"}>Send request</Button>
        </Wrapper>
      </Container.Inner>
      <Recent />
    </Container>
  );
};

export default HouseTools;
