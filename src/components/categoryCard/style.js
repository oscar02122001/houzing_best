import styled from "styled-components";

import { ReactComponent as house } from "../../assets/icons/houseC.svg";
import { ReactComponent as apartment } from "../../assets/icons/apartment.svg";
import { ReactComponent as office } from "../../assets/icons/officeC.svg";
import { ReactComponent as villa } from "../../assets/icons/villa.svg";




export const Container = styled.div`
  position: relative;
  width: calc((100% - 10px) / 1);
  border-radius: 3px;
  &::before {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 3px;
    content: "";
  }
`;

export const ImgWrap = styled.div``;
export const Image = styled.img`
  width: 100%;
  height: 350px;
  border-radius: 3px;
`;
export const Title = styled.h3`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  margin-top: 20px;
  color: #ffffff;
`;

export const Content = styled.div`
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Icons = {
  Home: styled(house)``,
  Apart: styled(apartment)``,
  Office: styled(office)``,
  Villa: styled(villa)``,
};
