import React, { useState, useRef } from "react";
import { Dropdown } from "antd";
import UseReplace from "../../hooks/useReplace";
import UseSearch from "../../hooks/useSearch";

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
  SelectAnt,
} from "./style";
import { Input, Button } from "../generics/index";
import { useLocation, useNavigate } from "react-router-dom";

const Filter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = UseSearch();
  const country = useRef("");
  const region = useRef("");
  const city = useRef("");
  const zip = useRef("");
  const rooms = useRef("");
  const category = useRef("");
  const min = useRef("");
  const max = useRef("");
  const [open, setOpen] = useState(false);

  const change = ({ target: { name, value } }) => {
    return navigate(`${location?.pathname}${UseReplace(name, value)}`);
  };

  const select = (e) => {
    return navigate(`/properties${UseReplace("city", e)}`);
  };

  const sorted = (e) => {
    return navigate(`/properties${UseReplace("sort", e)}`);
  };

  const inputManu = (
    <InputsWrap>
      <Section>
        <InputsTitle className="subTitle">Address</InputsTitle>
        <SectionInner>
          <Input
            defaultValue={query.get("country")}
            onChange={change}
            ref={country}
            name="country"
            placeholder={"Country"}
          />
          <Input
            defaultValue={query.get("region")}
            onChange={change}
            ref={region}
            name="region"
            placeholder={"Region"}
          />
          <Input
            defaultValue={query.get("city")}
            onChange={change}
            ref={city}
            name="city"
            placeholder={"City"}
          />
          <Input
            defaultValue={query.get("zipCode")}
            onChange={change}
            ref={zip}
            name="zipCode"
            placeholder={"Zip code"}
          />
        </SectionInner>
      </Section>

      <Section>
        <InputsTitle className="subTitle">Apartment info</InputsTitle>
        <SectionInner>
          <Input
            onChange={change}
            defaultValue={query.get("room")}
            name="room"
            ref={rooms}
            placeholder={"Room"}
          />
          <SelectAnt
            onChange={sorted}
            defaultValue={"Selected Sort"}
            ref={category}
          >
            <SelectAnt.Option value={""}>{"Selected Sort"}</SelectAnt.Option>
            <SelectAnt.Option value="asc">Increace</SelectAnt.Option>
            <SelectAnt.Option value="desc">Decreace</SelectAnt.Option>
          </SelectAnt>
          <SelectAnt
            onChange={select}
            defaultValue={query.get("city") || "Selected Category"}
            ref={category}
          >
            <SelectAnt.Option value={""}>
              {"Selected Category"}
            </SelectAnt.Option>
            <SelectAnt.Option value="Toshkent">Toshkent</SelectAnt.Option>
            <SelectAnt.Option value="Djizzakh">Djizzakh</SelectAnt.Option>
            <SelectAnt.Option value="Samarqand">Samarqand</SelectAnt.Option>
            <SelectAnt.Option value="Buxoro">Buxoro</SelectAnt.Option>
          </SelectAnt>
        </SectionInner>
      </Section>

      <Section>
        <InputsTitle className="subTitle">Price</InputsTitle>
        <SectionInner>
          <Input
            onChange={change}
            name="min_price"
            defaultValue={query.get("min_price")}
            ref={min}
            placeholder={"Min price"}
          />
          <Input
            onChange={change}
            name="max_price"
            defaultValue={query.get("max_price")}
            ref={max}
            placeholder={"Max price"}
          />
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

      <Button
        onClick={() => {
          console.log(country.current.value);
        }}
        type={"primary"}
        width={"180px"}
      >
        <IconSearch /> Search
      </Button>
    </Container>
  );
};

export default Filter;
