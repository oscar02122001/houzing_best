/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
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
} from "./style";
import { useParams } from "react-router";
import useRequest from "../../hooks/useRequest";
import { Button, Input } from "../generics";
import { Checkbox } from "antd";
// import Yandex from "../generics/yandex";
import Recent from "../recent";

const HouseTools = () => {
  const [data, setData] = useState([]);
  const houseId = useParams();
  const request = useRequest();

  const {
    address,
    city,
    region,
    // attachments,
    country,
    // name,
    description,
    houseDetails,
    price,
    salePrice,
    // location,
    user,
    zipCode,
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

  return (
    <Container>
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
                <Save className="location">
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
          {/* <Yandex
            center={{ center: [location?.latitude, location?.longitude] }}
          /> */}
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
