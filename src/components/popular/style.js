import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 48px;
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
  width: 100%;
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
  z-index: 1;
`;
export const Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 48px;
  margin-bottom: 48px;
  letter-spacing: -0.02em;
  color: #ffffff;
`;
