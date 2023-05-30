import React, { useState } from "react";
import { Container, Wrapper } from "./style";
import { Button, Input } from "../generics/index";
import { useNavigate } from "react-router";
import { message } from "antd";
// import useRequest from "../../hooks/useRequest";

const SignIn = () => {
  // const request = useRequest();
  const navigate = useNavigate();
  const [body, setBody] = useState({});

  const getData = ({ target: { name, value } }) => {
    setBody({ ...body, [name]: value });
  };

  const click = () => {
    return fetch("http://localhost:8081/api/public/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.authenticationToken) {
          localStorage.setItem("token", res.authenticationToken);
          navigate("/home");
          message.info("Logged in saccessfully");
        } else {
          message.warning("Samthing went wrong");
        }
      });
  };

  return (
    <Container>
      <Wrapper>
        <div className="subTitle">Sign in</div>
        <Input onChange={getData} name="email" placeholder={"Email"} />
        <Input onChange={getData} name="password" placeholder={"Password"} />
        <Button onClick={click} type={"primary"} width={"100%"}>
          Login
        </Button>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
