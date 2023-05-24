import React from "react";
import noimg from "../../assets/imgs/no-image.webp";
import {
  Container,
  ImgWrap,
  Img,
  TextWrap,
  Feature,
  Sale,
  // ImageUser,
  CardFooter,
  OldPrice,
  ResizeIcon,
  HeartIcon,
  IconsWrap,
  Icons,
} from "./style";
const Card = ({ data }) => {
  const {
    address,
    city,
    attachments,
    country,
    name,
    houseDetails,
    price,
    salePrice,
  } = data;

  return (
    <Container>
      <ImgWrap>
        <Feature>Featured</Feature>
        <Sale>For Sale</Sale>
        <Img src={attachments[0]?.imgPath || noimg} />
        {/* <ImageUser src={attachments || noimg} /> */}
      </ImgWrap>
      <TextWrap>
        <div className="subTitle">{name || "House name"} </div>
        <div className="location ddd" style={{ fontSize: "14px" }}>
          {address}, {city}, {country}
        </div>
        <IconsWrap className="location">
          <IconsWrap.Item>
            <Icons.Bad />
            {houseDetails.beds || 0} Bed
          </IconsWrap.Item>
          <IconsWrap.Item>
            <Icons.Bath />
            {houseDetails.bath || 0} Bath
          </IconsWrap.Item>
          <IconsWrap.Item>
            <Icons.Garage />
            {houseDetails.garage || 0} Garage
          </IconsWrap.Item>
          <IconsWrap.Item>
            <Icons.SCard />
            {houseDetails.area || 0} Sq Ft
          </IconsWrap.Item>
        </IconsWrap>
      </TextWrap>
      <CardFooter>
        <div>
          <OldPrice className="old-price">{price || 0}/mo</OldPrice>
          <div className="subTitle">{salePrice || 0}/mo</div>
        </div>
        <div>
          <ResizeIcon />
          <HeartIcon />
        </div>
      </CardFooter>
    </Container>
  );
};

export default Card;
