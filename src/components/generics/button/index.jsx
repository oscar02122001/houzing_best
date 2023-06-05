import React from "react";
import { Container } from "./style";

const Button = ({
  children,
  type,
  width,
  height,
  padding,
  onClick,
  disabled,
}) => {
  return (
    <Container
      onClick={onClick}
      type={type}
      width={width}
      height={height}
      padding={padding}
      disabled={disabled}
    >
      {children || "Generic Button"}
    </Container>
  );
};

export default Button;
