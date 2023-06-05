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
import Footer from "../footer";
import { Dropdown } from "antd";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // const location = useLocation("");
  // const [path, setPath] = useState("");

  // useEffect(() => {
  //   setPath(location.pathname);
  // }, [location.pathname]);

  const clickProfile = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "logout") {
      localStorage.clear();
      navigate("/register");
    } else {
      navigate(`/${name}`);
    }
  };

  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")} logo={"true"}>
            <Logo /> <LogoText>Houzing </LogoText>
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
            {token ? (
              <Dropdown
                dropdownRender={() => {
                  return (
                    <Section.Profile>
                      <div
                        data-name="myprofile"
                        onClick={clickProfile}
                        className="location profileItem"
                      >
                        My profile
                      </div>
                      <div
                        data-name="properties"
                        onClick={clickProfile}
                        className="location profileItem"
                      >
                        My Properties
                      </div>
                      <div
                        data-name="favourites"
                        onClick={clickProfile}
                        className="location profileItem"
                      >
                        Favourites
                      </div>
                      <div
                        data-name="logout"
                        onClick={clickProfile}
                        className="location profileItem"
                      >
                        Log out
                      </div>
                    </Section.Profile>
                  );
                }}
                trigger={["click"]}
              >
                <div>
                  <Button onClick={() => {}} type={"dark"}>
                    Profile
                  </Button>
                </div>
              </Dropdown>
            ) : (
              <Button onClick={() => navigate("/register")} type={"dark"}>
                Register
              </Button>
            )}
          </Section>
        </Wrapper>
      </Main>
      <Filter />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Navbar;
