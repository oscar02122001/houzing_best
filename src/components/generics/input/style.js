import styled from "styled-components";

export const Container = styled.input`
  display: flex;
  width: ${({ width }) => (width ? width : '100%')} ;
  padding: ${({ padding }) => (padding ? padding : "12px 16px")};
  font-size: 14px;
  line-height: 20px;
  color: #0d263b;
  border: 1px solid #e6e9ec;
  border-radius: 2px;
  outline: none;
`;
