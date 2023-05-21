import styled, { css } from "styled-components";

import { ReactComponent as BathCard } from "../../assets/icons/bathCard.svg";
import { ReactComponent as BadCard } from "../../assets/icons/bedCard.svg";
import { ReactComponent as GarageCard } from "../../assets/icons/garageCard.svg";
import { ReactComponent as SquarCard } from "../../assets/icons/squarCard.svg";

import { ReactComponent as Top } from "../../assets/icons/topdown.svg";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: var(--container);
  margin: 0 auto;
`;

export const CardWrap = styled.div`
  width: 381px;
  height: 430px;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
`;

export const ImgWrap = styled.div`
  position: relative;
  width: 381px;
  height: 220px;
`;
export const TextWrap = styled.div`
  padding: 24px 20px 16px;
`;
export const Img = styled.img`
  position: absolute;
  width: 381px;
  height: 220px;
  top: 0;
  left: 0;
`;

export const IconsWrap = styled.div`
  display: flex;
  margin-top: 16px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

IconsWrap.Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Icons = {
  Bad: styled(BadCard)`
    margin-bottom: 5px;
  `,
  Bath: styled(BathCard)`
    margin-bottom: 5px;
  `,
  Garage: styled(GarageCard)`
    margin-bottom: 5px;
  `,
  SCard: styled(SquarCard)`
    margin-bottom: 5px;
  `,
};

export const Feature = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 10px;
  padding: 5px 12px;
  background: #0061df;
  border-radius: 3px;
  border: none;
  color: #fff;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background-color: #fff;
    transition: 0.2s ease all;
    color: #333;
  }
`;

export const Sale = styled(Feature)`
  left: auto;
  right: 20px;
  background-color: #0d263b;
`;
export const ImageUser = styled.img`
  position: absolute;
  width: 38px;
  height: 38px;
  bottom: -17px;
  right: 22px;
  border-radius: 50%;
`;

export const CardFooter = styled.div`
  display: flex;
  padding: 8px 20px;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid #e6e9ec;
`;

export const OldPrice = styled.p`
  margin: 0;
  font-size: 12px;
  color: var(--secondaryColor);
  text-decoration-line: line-through;
`;
export const Price = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
`;

const btnCommon = css`
  width: 35px;
  height: 35px;
  padding: 11px 0;
`;

export const ResizeIcon = styled(Top)`
  ${btnCommon}
  cursor: pointer;
  margin-right: 15px;
`;
export const HeartIcon = styled(Heart)`
  ${btnCommon}
  background-color: #f6f8f9;
  border-radius: 50%;
  cursor: pointer;
`;
