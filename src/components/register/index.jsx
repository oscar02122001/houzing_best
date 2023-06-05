import React from "react";
import { Container, Wrapper } from "./style";

import { Tabs } from "antd";
import SignIn from "../signin";
import SignUp from "../signup";


const Register = () => {
  const onChange = (key) => {
    // console.log(key);
  };

  const items = [
    {
      key: "1",
      label: `Sign in`,
      children: <SignIn />,
    },
    {
      key: "2",
      label: `Sign Up`,
      children: <SignUp />,
    },
  ];

  return (
    <Container>
      <Wrapper>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </Wrapper>
    </Container>
  );
};

export default Register;
