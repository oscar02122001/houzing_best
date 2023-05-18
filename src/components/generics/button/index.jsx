import React from "react";
import { Container } from "./style";

const Button = ({
  children,
  type,
  width,
  padding,
  onClick,
}) => {
  return (
    <Container
      onClick={onClick}
      type={type}
      width={width}
      padding={padding}
    >
      {children || "Generic Button"}
    </Container>
  );
};

export default Button;
