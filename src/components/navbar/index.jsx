import React, { useEffect, useState } from "react";
import { Container, Wrapper, Section, Logo, NavItem } from "./style";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import navbar from "../../utils/navbar";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation("");
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  return (
    <Container>
      <Wrapper>
        <Section onClick={() => navigate("/home")} logo={'true'}>
          <Logo /> <h3>Houzing</h3>
        </Section>
        <Section>
          {navbar.map((item, index) => {
            return (
              // <NavItem key={item.id} active={path === item.path} to={item.path}>
              <NavItem
                className={({ isActive }) => isActive && "active"}
                key={index}
                to={item.path}
              >
                {item.title}
              </NavItem>
            );
          })}
        </Section>
        <Section>
          <button>Click me</button>
        </Section>
      </Wrapper>
      <Outlet />
    </Container>
  );
};

export default Navbar;
