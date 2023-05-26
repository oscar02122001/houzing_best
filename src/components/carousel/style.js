import styled from "styled-components";
import { ReactComponent as Arrow } from "../../assets/icons/sliderArrow.svg";

export const Container = styled.div`
  position: relative;
  text-align: center;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 571px;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
    content: " ";
  }
`;

export const Image = styled.img`
  width: 100vw;
  height: 571px;
`;

export const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  color: #ffffff;
  align-items: center;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
export const Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  margin-bottom: 8px;
  letter-spacing: -0.02em;
  color: #ffffff;
`;
export const SubTitle = styled.div`
  margin-bottom: 26px;
`;
export const Price = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
`;

export const SliderBtn = styled(Arrow)`
  position: absolute;
  width: 45px;
  height: 45px;
  padding: 15px;
  top: 50%;
  background-color: rgba(250, 250, 250, 0.2);
  transform: translateY(-50%);
  transform: ${({ prev }) => (prev ? "rotate(0deg)" : "rotate(180deg)")};
  left: ${({ prev }) => (prev ? "32px" : "")};
  right: ${({ next }) => (next ? "32px" : "")};
  border-radius: 50%;
  cursor: pointer;
  z-index: 3;

  path {
    fill: #fff;
  }
  &:hover {
    background-color: rgba(250, 250, 250, 0.5);
  }
`;
