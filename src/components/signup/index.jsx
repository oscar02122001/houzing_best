import React, { useState } from "react";
import { Content } from "./style";
import { Button, Input } from "../generics/index";
// import { useNavigate } from "react-router";
import { message } from "antd";

const SignUp = () => {
  // const navigate = useNavigate();
  const [body, setBody] = useState({});

  const getData = ({ target: { name, value } }) => {
    setBody({ ...body, [name]: value });
  };

  const click = () => {
    return fetch("http://localhost:8081/api/public/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          // navigate("/signin");
          message.info("Logged in saccessfully");
        } else {
          message.warning("Samthing went wrong");
        }
      });
  };

  return (
    <Content>
      <div className="subTitle">Sign Up</div>
      <Input onChange={getData} name="email" placeholder={"Email"} />
      <Input onChange={getData} name="firstname" placeholder={"First name"} />
      <Input onChange={getData} name="lastname" placeholder={"Last name"} />
      <Input onChange={getData} name="password" placeholder={"Password"} />

      <Button onClick={click} type={"primary"} width={"100%"}>
        Register
      </Button>
    </Content>
  );
};

export default SignUp;
