import React, { useContext } from "react";
import noimg from "../../assets/imgs/no-image.webp";
import useRequest from "../../hooks/useRequest";
import { FavouriteContext } from "../../context/home";
import { message } from "antd";
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
const Card = ({ data, margin, count, onClick }) => {
  const required = useRequest();
  const [state] = useContext(FavouriteContext);
  const token = localStorage.getItem("token");
  // const [favour, setFavour] = useState(false);
  const {
    address,
    city,
    attachments,
    country,
    name,
    houseDetails,
    price,
    salePrice,
    favorite,
    id,
  } = data;

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
    <Container onClick={onClick} mar={margin} num={count}>
      <ImgWrap>
        <Feature>Featured</Feature>
        <Sale>For Sale</Sale>
        <Img src={attachments[0]?.imgPath || noimg} />
        {/* <ImageUser src={attachments || noimg} /> */}
      </ImgWrap>
      <TextWrap>
        <div className="subTitle">
          {name || "House name"} {houseDetails.room}{" "}
        </div>
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
          <HeartIcon onClick={fav} />
          {/* favourite={favorite} */}
        </div>
      </CardFooter>
    </Container>
  );
};

export default Card;
