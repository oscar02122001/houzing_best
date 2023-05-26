import styled from "styled-components";
import { ReactComponent as Arrow } from "../../assets/icons/sliderArrow.svg";

export const Container = styled.div`
  position: relative;
  padding-top: 200px;
  padding-bottom: 200px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  padding: var(--container);
  margin: auto;
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
    fill: #000;
  }
  &:hover {
    background-color: rgba(250, 250, 250, 0.5);
  }
`;

