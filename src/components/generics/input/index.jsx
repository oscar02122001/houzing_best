import React, { forwardRef } from "react";
import { Container } from "./style";
// const Input = ({
//   type,
//   width,
//   height,
//   padding,
//   margin,
//   onChange,
//   value,
//   defaultValue,
//   placeholder,
// }) => {
//   return (
//     <Container
//       onChange={onChange}
//       type={type}
//       width={width}
//       height={height}
//       padding={padding}
//       margin={margin}
//       value={value}
//       defaultValue={defaultValue}
//       placeholder={placeholder}
//     />
//   );
// };

const Input = forwardRef(
  (
    {
      type,
      width,
      height,
      padding,
      margin,
      onChange,
      value,
      name,
      defaultValue,
      placeholder,
    },
    ref
  ) => {
    return (
      <Container
        onChange={onChange}
        type={type}
        width={width}
        height={height}
        padding={padding}
        margin={margin}
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        ref={ref}
      />
    );
  }
);
export default Input;
