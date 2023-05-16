import styled from "styled-components";
import { ReactComponent as logoImg } from "../../assets/icons/logo.svg";
import { NavLink } from "react-router-dom";
// import "../index.css";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--container);
  background-color: var(--primaryColor);
  color: #fff;

  max-width: 1440px;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${(prop) => prop.logo && "pointer"};
  .active {
    color: red;
  }
`;

export const Logo = styled(logoImg)`
  width: 30px;
  height: 36px;
  margin-right: 12px;

  & path {
    fill: #fff;
  }
`;

export const NavItem = styled(NavLink)`
  text-decoration: var(--textDecoration);
  padding:  0 32px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  /* color: ${({ active }) => (active ? "red" : "white")}; */
  /* :last-of-type {
    margin-right: 0; */
  }
`;
