import React, { useState, useRef, useEffect } from "react";
import { Dropdown } from "antd";
import UseReplace from "../../hooks/useReplace";
import UseSearch from "../../hooks/useSearch";
import useRequest from "../../hooks/useRequest";
// import { RequestContext } from "../../context/request";

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
  const request = useRequest();
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    token &&
      request({
        url: `/categories/list`,
        headers: { Authorization: `Bearer ${token} ` },
      }).then((res) => setData(res?.data || []));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const change = ({ target: { name, value } }) => {
    return navigate(`${location?.pathname}${UseReplace(name, value)}`);
  };

  const select = (e) => {
    return navigate(`/properties${UseReplace("category_id", e)}`);
  };

  const sorted = (e) => {
    return navigate(`/properties${UseReplace("sort", e)}`);
  };

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
        dropdownRender={() => {
          return (
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
                    <SelectAnt.Option value={""}>
                      {"Selected Sort"}
                    </SelectAnt.Option>
                    <SelectAnt.Option value="asc">Increace</SelectAnt.Option>
                    <SelectAnt.Option value="desc">Decreace</SelectAnt.Option>
                  </SelectAnt>
                  <SelectAnt
                    onChange={select}
                    defaultValue={query.get("category") || "Selected Category"}
                    ref={category}
                  >
                    <SelectAnt.Option value={""}>
                      {"Selected Category"}
                    </SelectAnt.Option>
                    {data.map((value) => {
                      return (
                        <SelectAnt.Option key={value?.id} value={value.id}>
                          {value.name}
                        </SelectAnt.Option>
                      );
                    })}
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
        }}
        trigger={["click"]}
      >
        <div>
          <Button type={"light"} width={"131px"}>
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
