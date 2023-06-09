import React, { useState } from "react";
import { Content } from "./style";
import { Button, Input } from "../generics/index";
import { useNavigate } from "react-router";
import { message } from "antd";

const SignIn = () => {
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
          window.scrollTo(0, 0);
          message.info("Logged in saccessfully");
        } else {
          message.warning("Samthing went wrong");
        }
      });
  };

  return (
    <Content>
      <div className="subTitle">Sign in</div>
      <Input
        onChange={getData}
        type="email"
        name="email"
        placeholder={"Email"}
      />
      <Input
        onChange={getData}
        type="password"
        name="password"
        placeholder={"Password"}
      />
      <Button onClick={click} type={"primary"} width={"100%"}>
        Login
      </Button>
    </Content>
  );
};

export default SignIn;
