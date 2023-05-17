import styled from "styled-components";

export const Container = styled.input`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "44px")};
  padding: 0 16px;
  font-size: 14px;
  line-height: 20px;
  color: #0d263b;
  border: 1px solid #e6e9ec;
  border-radius: 2px;
  outline: none;
`;
