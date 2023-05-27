import React from "react";
import {
  Container,
  Wrapper,
  InputWrap,
  IconInput,
  IconAdvanced,
  IconSearch,
} from "./style";
import { Input, Button } from "../generics/index";

const Filter = () => {
  return (
    <Container>
      <Wrapper>
        <InputWrap>
          <IconInput />
          <Input
            padding={'12px 12px 12px 44px'}
            width={"829px"}
            placeholder={"Enter an address, neighborhood, city, or ZIP code"}
          />
        </InputWrap>
        <Button type={"light"} width={"131px"}>
          <IconAdvanced /> Advanced
        </Button>
        <Button type={"primary"} width={"180px"}>
          <IconSearch /> Search
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Filter;
