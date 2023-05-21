/* eslint-disable default-case */
import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid #FFFFFF",
        color: "#fff",
      };
    case "light":
      return {
        background: "#fff",
        border: "1px solid #E6E9EC",
        color: "#0D263B",
      };
    case "primary":
      return {
        background: "#0061DF",
        border: "1px solid #0061DF",
        color: "#fff",
      };

    default:
      return {
        background: "#0061DF",
        border: "1px solid #0061DF",
        color: "#fff",
      };
  }
};

export const Container = styled.button`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
  padding: ${({ padding }) => (padding ? padding : "12px 16px")};
  width: ${({ width }) => (width ? width : "120px")};
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 20px;
  border-radius: 3px;
  cursor: pointer;
  ${getType}
  

  &:active {
    opacity: 0.7;
  }
`;
