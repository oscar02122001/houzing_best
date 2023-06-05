import styled, { css } from "styled-components";

import { ReactComponent as share } from "../../assets/icons/share.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";

import { ReactComponent as BathCard } from "../../assets/icons/bathCard.svg";
import { ReactComponent as BadCard } from "../../assets/icons/bedCard.svg";
import { ReactComponent as GarageCard } from "../../assets/icons/garageCard.svg";
import { ReactComponent as SquarCard } from "../../assets/icons/squarCard.svg";
import { ReactComponent as YearBuilt } from "../../assets/icons/yearbuilt.svg";
import { ReactComponent as User } from "../../assets/icons/user23.svg";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  /* padding: var(--container); */
  margin: auto;
  margin-bottom: 96px;
`;

Container.Inner = styled.div`
  display: flex;
  padding: var(--container);
`;

export const DetailsContent = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: ${({ location }) => (location ? "row" : "column")};
  justify-content: space-between;
  align-items: ${({ left }) => (left ? "end" : "start")};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ top }) => (top ? "row" : "column")};
  flex-grow: ${({ home }) => (home ? "1" : "0")};
  max-width: ${({ user }) => (user ? "280px" : "auto")};
  width: 100%;
  height: fit-content;
  margin-right: ${({ home }) => (home ? "24px" : "0")};
  gap: ${({ user }) => (user ? "24px" : "0")};
  padding: ${({ user }) => (user ? "24px" : "0")};
  border: ${({ user }) => (user ? "1px solid #e6e9ec" : "0")};
  border-radius: 3px;

  .sms {
    margin-bottom: -16px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  padding: var(--container);
  width: 100%;
  max-width: 1440px;
  margin: auto;
  margin-bottom: 24px;
  margin-top: 24px;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-left: 20px;
`;
ImageContainer.Main = styled.img`
  width: 100%;
  max-width: 550px;
  max-height: 360px;
`;

ImageContainer.Subimg = styled.img `
  position: relative;
  width: 100%;
  max-width: 250px;
  max-height: 190px;
`;

export const Blur = styled.div `
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: bold;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  /* identical to box height, or 122% */

  letter-spacing: -0.02em;

  color: #ffffff;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
`;
Blur.Container = styled.div `
  position: relative;
  width: 100%;
  max-width: 250px;
  max-height: 190px;
`;

export const Share = styled.div`
  display: flex;
  align-items: center;
  margin-right: 26px;
  cursor: pointer;
  &:active {
    transform: scale(0.9);
  }
`;
export const Save = styled(Share)`
  margin-right: 0;
`;

const iconCss = css`
  padding: 0 8px;
  margin-right: 10px;
  width: 35px;
  height: 35px;
  background-color: #f6f8f9;
  border-radius: 50%;
`;

export const Prices = styled.div`
  display: flex;
  margin-top: 25px;
  align-items: center;
`;

export const Icons = {
  Share: styled(share)`
    ${iconCss}
  `,
  Love: styled(love)`
    ${iconCss}
    &:hover {
      background-color: #cc5040;
      transition: 0.2s ease all;
      path {
        fill: #fff;
      }
    }
  `,
};

Prices.OldPrice = styled.p`
  margin: 0;
  margin-right: 8px;
  font-size: 12px;
  color: var(--secondaryColor);
  text-decoration-line: line-through;
`;
Prices.Price = styled.p`
  margin: 0;
  font-size: 24px;
  line-height: 24px;
  color: #0d263b;
`;

export const IconRooms = {
  Bad: styled(BadCard)`
    margin-right: 5px;
  `,
  Bath: styled(BathCard)`
    margin-right: 5px;
  `,
  Garage: styled(GarageCard)`
    margin-right: 5px;
  `,
  SCard: styled(SquarCard)`
    margin-right: 5px;
  `,
  Year: styled(YearBuilt)`
    margin-right: 5px;
  `,
  User: styled(User)`
    margin-right: 10px;
  `,
};

export const HouseInfo = styled.div`
  display: flex;
  gap: 25px;
  margin-top: 32px;
`;

HouseInfo.Item = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  color: #696969;
`;

Content.Title = styled.div`
  margin-top: 48px;
  margin-bottom: 16px;
`;
export const Description = styled.div``;

Content.Item = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #0d263b;
  margin-bottom: 24px;

  &:nth-child(2n) {
    margin-bottom: 0;
  }
`;

Wrapper.User = styled.div`
  display: flex;
  align-items: center;  
`;
