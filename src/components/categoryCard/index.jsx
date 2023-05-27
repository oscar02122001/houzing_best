import React from "react";
import { Container, ImgWrap, Image, Content, Title } from "./style";
import noimg from "../../assets/imgs/no-image.webp";

const CatrgoryCard = ({ backImg, icon, title, onClick }) => {
  return (
    <Container onClick={() => onClick(title)}>
      <ImgWrap>
        <Image src={backImg || noimg} />
        <Content>
          {icon}
          <Title>{title || "Category name"}</Title>
        </Content>
      </ImgWrap>
    </Container>
  );
};

export default CatrgoryCard;
