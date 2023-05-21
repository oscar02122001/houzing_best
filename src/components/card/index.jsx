import React from "react";
import noimg from "../../assets/imgs/no-image.webp";
import {
  Container,
  CardWrap,
  ImgWrap,
  Img,
  TextWrap,
  Feature,
  Sale,
  ImageUser,
  CardFooter,
  OldPrice,
  ResizeIcon,
  HeartIcon,
  IconsWrap,
  Icons,
} from "./style";
const Card = ({
  url,
  title,
  userImg,
  location,
  oldPrice,
  price,
  bed,
  bath,
  garage,
  sq,
}) => {
  return (
    <Container>
      <CardWrap>
        <ImgWrap>
          <Feature>Featured</Feature>
          <Sale>For Sale</Sale>
          <Img src={url || noimg} />
          <ImageUser src={userImg || noimg} />
        </ImgWrap>
        <TextWrap>
          <div className="subTitle">{title || "House name"} </div>
          <div className="location" style={{ fontSize: "14px" }}>
            {location || "House location"}
          </div>
          <IconsWrap className="location">
            <IconsWrap.Item>
              <Icons.Bad />
              {bed || 0} Bed
            </IconsWrap.Item>
            <IconsWrap.Item>
              <Icons.Bath />
              {bath || 0} Bath
            </IconsWrap.Item>
            <IconsWrap.Item>
              <Icons.Garage />
              {garage || 0} Garage
            </IconsWrap.Item>
            <IconsWrap.Item>
              <Icons.SCard />
              {sq || 0} Sq Ft
            </IconsWrap.Item>
          </IconsWrap>
        </TextWrap>
        <CardFooter>
          <div>
            <OldPrice className="old-price">{oldPrice || 0}/mo</OldPrice>
            <div className="subTitle">{price || 0}/mo</div>
          </div>
          <div>
            <ResizeIcon />
            <HeartIcon />
          </div>
        </CardFooter>
      </CardWrap>
    </Container>
  );
};

export default Card;
