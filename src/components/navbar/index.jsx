import React, { useEffect, useState } from "react";
import { Container, Wrapper, Main, Section, Logo, NavItem } from "./style";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import navbar from "../../utils/navbar";
import Button from "../generics/button";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation("");
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")} logo={"true"}>
            <Logo /> <h3>Houzing</h3>
          </Section>
          <Section>
            {navbar.map((item, index) => {
              return (
                !item.hidden && (
                  // <NavItem key={item.id} active={path === item.path} to={item.path}>
                  <NavItem
                    className={({ isActive }) => isActive && "active"}
                    key={index}
                    to={item.path}
                  >
                    {item.title}
                  </NavItem>
                )
              );
            })}
          </Section>
          <Section>
            <Button onClick={() => navigate("/signin")} type={"dark"}>
              Login
            </Button>
          </Section>
        </Wrapper>
      </Main>
      <Outlet />
    </Container>
  );
};

export default Navbar;
