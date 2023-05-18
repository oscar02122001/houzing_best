import React from "react";
import {
  Container,
  Wrapper,
  Main,
  Section,
  Logo,
  LogoText,
  NavItem,
} from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import navbar from "../../utils/navbar";
import Button from "../generics/button";
import Filter from "../filter";

const Navbar = () => {
  const navigate = useNavigate();
  // const location = useLocation("");
  // const [path, setPath] = useState("");

  // useEffect(() => {
  //   setPath(location.pathname);
  // }, [location.pathname]);

  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")} logo={"true"}>
            <Logo /> <LogoText>Houzing</LogoText>
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
      <Filter />
      <Outlet />
    </Container>
  );
};

export default Navbar;
