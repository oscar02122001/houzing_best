import React from "react";
import { Container } from "./style";
const Input = ({
  type,
  width,
  height,
  padding,
  margin,
  onChange,
  value,
  defaultValue,
  placeholder,
}) => {
  return (
    <Container
      onChange={onChange}
      type={type}
      width={width}
      height={height}
      padding={padding}
      margin={margin}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
    />
  );
};

export default Input;
