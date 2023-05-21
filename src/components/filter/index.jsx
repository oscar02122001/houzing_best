import React, { useState, useRef } from "react";
import { Dropdown } from "antd";

import {
  Container,
  InputWrap,
  IconInput,
  IconAdvanced,
  IconSearch,
  InputsWrap,
  InputsTitle,
  Section,
  SectionInner,
} from "./style";
import { Input, Button } from "../generics/index";

const Filter = () => {
  window.addEventListener("click", ({ target }) => {
    console.log(target);
   
  });
  const country = useRef("");
  const region = useRef("");
  const city = useRef("");
  const zip = useRef("");
  const rooms = useRef("");
  const size = useRef("");
  const sort = useRef("");
  const min = useRef("");
  const max = useRef("");
  const [open, setOpen] = useState(false);

  const inputManu = (
    <InputsWrap>
      <Section>
        <InputsTitle className="subTitle">Address</InputsTitle>
        <SectionInner>
          <Input ref={country} placeholder={"Country"} />
          <Input ref={region} placeholder={"Region"} />
          <Input ref={city} placeholder={"City"} />
          <Input ref={zip} placeholder={"Zip code"} />
        </SectionInner>
      </Section>

      <Section>
        <InputsTitle className="subTitle">Apartment info</InputsTitle>
        <SectionInner>
          <Input ref={rooms} placeholder={"Room"} />
          <Input ref={size} placeholder={"Size"} />
          <Input ref={sort} placeholder={"Sort"} />
        </SectionInner>
      </Section>

      <Section>
        <InputsTitle className="subTitle">Price</InputsTitle>
        <SectionInner>
          <Input ref={min} placeholder={"Min price"} />
          <Input ref={max} placeholder={"Max price"} />
        </SectionInner>
      </Section>
    </InputsWrap>
  );
  const items = [
    {
      label: inputManu,
    },
  ];
  return (
    <Container>
      <InputWrap>
        <IconInput />
        <Input
          width={"100%"}
          padding={"12px 12px 12px 44px"}
          placeholder={"Enter an address, neighborhood, city, or ZIP code"}
        />
      </InputWrap>
      <Dropdown
        overlayStyle={{ marginTop: "10px" }}
        menu={{ items: items }}
        placement="bottomRight"
        trigger={["click"]}
        open={open}
      >
        <div>
          <Button onClick={() => setOpen(!open)} type={"light"} width={"131px"}>
            <IconAdvanced /> Advanced
          </Button>
        </div>
      </Dropdown>

      <Button type={"primary"} width={"180px"}>
        <IconSearch /> Search
      </Button>
    </Container>
  );
};

export default Filter;
