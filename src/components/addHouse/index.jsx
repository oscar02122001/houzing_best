/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import useRequest from "../../hooks/useRequest";
import { Input, Button } from "../generics/index";
import { useFormik } from "formik";
import { Checkbox } from "antd";
import {
  Container,
  Wrapper,
  InputsTitle,
  InputsWrap,
  Section,
  SectionInner,
  SelectAnt,
  Icons,
} from "./style";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";

const AddHouse = () => {
  const token = localStorage.getItem("token");
  // const [name, setName] = useState("");
  const [categId, setCategId] = useState();
  const [initial, setInitial] = useState([]);
  const [categ, setaCateg] = useState([]);
  const [imgs, setImgs] = useState([]);
  const [img, setImg] = useState("");
  const { search } = useLocation();
  const request = useRequest();
  const navigate = useNavigate();
  const { id } = useParams();

  const select = (id) => {
    console.log(id);
    setCategId(id);
  };

  useEffect(() => {
    request({
      url: `/categories/list`,
      headers: { Authorization: `Bearer ${token} ` },
    })
      .then((res) => setaCateg(res?.data || []))
      .catch(() => {});
  }, [search]);

  useEffect(() => {
    id &&
      request({
        url: `/houses/id/${id}`,
        headers: { Authorization: `Bearer ${token} ` },
      })
        .then((res) => {
          setImgs(res?.data?.attachments);
          setInitial(res?.data);
        })
        .catch(() => {});
  }, [search]);
  const formik = useFormik({
    initialValues: {
      houseDetails: {},
      componentsDto: {},
      homeAmenitiesDto: {},
      locations: {},
      ...initial,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      request({
        url: id ? `/houses/${id}` : `/houses`,
        method: id ? "PUT" : "POST",
        headers: { Authorization: `Bearer ${token} ` },
        body: { ...values, attachments: imgs, categoryId: categId },
      }).then((res) => {
        console.log(res);
        if (res?.success) navigate("/myprofile");
      });
    },
  });

  const addImg = () => {
    setImgs([
      ...imgs,
      { imgPath: img, id: `${img.length * Math.random()}${img}` },
    ]);
    setImg("");
  };

  const delUrl = (val) => {
    return setImgs(imgs.filter((v, i) => i !== val));
  };
  return (
    <Container>
      <div className="mainTitle proTitle">My properties</div>
      <Wrapper>
        <InputsWrap>
          <form onSubmit={formik.handleSubmit}>
            <Section>
              <InputsTitle className="subTitle">Address</InputsTitle>
              <SectionInner>
                <Input
                  onChange={formik.handleChange}
                  value={formik.values.country || ""}
                  name="country"
                  placeholder={"Country"}
                />
                <Input
                  onChange={formik.handleChange}
                  value={formik.values.region || ""}
                  name="region"
                  placeholder={"Region"}
                />
                <Input
                  onChange={formik.handleChange}
                  value={formik.values.city || ""}
                  name="city"
                  placeholder={"City"}
                />
                <Input
                  onChange={formik.handleChange}
                  value={formik.values.address || ""}
                  name="address"
                  placeholder={"Address"}
                />
              </SectionInner>
            </Section>

            <Section>
              <InputsTitle className="subTitle">Apartment info</InputsTitle>
              <SectionInner>
                <Input
                  onChange={formik.handleChange}
                  value={formik.values.houseDetails.room || ""}
                  name="houseDetails.room"
                  placeholder={"Room"}
                />
                <Input
                  onChange={formik.handleChange}
                  value={formik.values.houseDetails.area || ""}
                  name="houseDetails.area"
                  placeholder={"Area"}
                />
                <Input
                  onChange={formik.handleChange}
                  value={formik.values.houseDetails.bath || ""}
                  name="houseDetails.bath"
                  placeholder={"Bath"}
                />
                <Input
                  onChange={formik.handleChange}
                  value={formik.values.houseDetails.beds || ""}
                  name="houseDetails.beds"
                  placeholder={"Beds"}
                />{" "}
                <Input
                  onChange={formik.handleChange}
                  value={formik.values.houseDetails.garage || ""}
                  name="houseDetails.garage"
                  placeholder={"Garage"}
                />{" "}
                <Input
                  onChange={formik.handleChange}
                  value={formik.values.houseDetails.yearBuilt || ""}
                  name="houseDetails.yearBuilt"
                  placeholder={"Year Built"}
                />
                <SelectAnt
                  // defaultValue={"Selected Category"}
                  onChange={select}
                  value={formik.values.categoryId || ""}
                  name="categoryId"
                >
                  <SelectAnt.Option value={""}>
                    {"Selected Category"}
                  </SelectAnt.Option>
                  {categ?.map((value) => {
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
                  // defaultValue={name || ""}
                  onChange={formik.handleChange}
                  value={formik.values.name || ""}
                  name="name"
                  placeholder={"Name"}
                />{" "}
                <Input
                  // defaultValue={name || ""}
                  onChange={formik.handleChange}
                  value={formik.values.zipCode || ""}
                  name="zipCode"
                  placeholder={"Zip Code"}
                />{" "}
                <Input
                  onChange={formik.handleChange}
                  value={formik.values.locations.latitude || ""}
                  name="locations.latitude"
                  placeholder={"Latitude"}
                />{" "}
                <Input
                  onChange={formik.handleChange}
                  value={formik.values.locations.longitude || ""}
                  name="locations.longitude"
                  placeholder={"Longitude"}
                />
                <Input
                  onChange={formik.handleChange}
                  value={formik.values.price || ""}
                  name="price"
                  placeholder={"Price"}
                />
                <Input
                  onChange={formik.handleChange}
                  value={formik.values.salePrice || ""}
                  name="salePrice"
                  placeholder={"Sale price"}
                />{" "}
              </SectionInner>
            </Section>

            <Section>
              <SectionInner>
                <Input
                  value={img || ""}
                  onChange={({ target: { value } }) => setImg(value)}
                  placeholder={"Add Images URL"}
                ></Input>

                <Button
                  // disabled={!img && imgs.length >= 4}
                  width={"230px"}
                  type={"button"}
                  onClick={addImg}
                >
                  Add Images URL
                </Button>
              </SectionInner>
              <SectionInner fd={"true"}>
                {imgs.map((value, index) => {
                  return (
                    <pre key={index}>
                      {value?.imgPath}{" "}
                      <Icons.DeleteIcon onClick={() => delUrl(index)} />
                    </pre>
                  );
                })}
              </SectionInner>
            </Section>

            <Section>
              <InputsTitle className="subTitle">Description</InputsTitle>
              <TextArea
                name="description"
                placeholder="Description"
                rows={5}
                onChange={formik.handleChange}
              ></TextArea>
            </Section>

            <Section>
              <InputsTitle className="subTitle">Additional</InputsTitle>
              <SectionInner flex={"true"}>
                <SectionInner fd={"true"}>
                  <Checkbox
                    onChange={formik.handleChange}
                    value={formik.values.busStop}
                    name="homeAmenitiesDto.busStop"
                  >
                    Bus stop
                  </Checkbox>
                  <Checkbox
                    onChange={formik.handleChange}
                    value={formik.values.garden}
                    name="homeAmenitiesDto.garden"
                  >
                    Garden
                  </Checkbox>
                  <Checkbox
                    onChange={formik.handleChange}
                    value={formik.values.market}
                    name="homeAmenitiesDto.market"
                  >
                    Market
                  </Checkbox>
                  <Checkbox
                    onChange={formik.handleChange}
                    value={formik.values.park}
                    name="homeAmenitiesDto.park"
                  >
                    Park
                  </Checkbox>
                </SectionInner>
                <SectionInner fd={"true"}>
                  <Checkbox
                    onChange={formik.handleChange}
                    value={formik.values.parking}
                    name="homeAmenitiesDto.parking"
                  >
                    Parking
                  </Checkbox>
                  <Checkbox
                    onChange={formik.handleChange}
                    value={formik.values.school}
                    name="homeAmenitiesDto.school"
                  >
                    School
                  </Checkbox>
                  <Checkbox
                    onChange={formik.handleChange}
                    value={formik.values.stedium}
                    name="homeAmenitiesDto.stedium"
                  >
                    Stedium
                  </Checkbox>
                  <Checkbox
                    onChange={formik.handleChange}
                    value={formik.values.subway}
                    name="homeAmenitiesDto.subway"
                  >
                    Subway
                  </Checkbox>
                </SectionInner>
                <SectionInner fd={"true"}>
                  <Checkbox
                    onChange={formik.handleChange}
                    value={formik.values.supermarket}
                    name="homeAmenitiesDto.supermarket"
                  >
                    Supermarket
                  </Checkbox>
                  <Checkbox
                    onChange={formik.handleChange}
                    value={formik.values.airCondition}
                    name="componentsDto.airCondition"
                  >
                    Air Condition
                  </Checkbox>
                  <Checkbox
                    onChange={formik.handleChange}
                    value={formik.values.courtyard}
                    name="componentsDto.courtyard"
                  >
                    Courtyard
                  </Checkbox>
                  <Checkbox
                    onChange={formik.handleChange}
                    value={formik.values.furniture}
                    name="componentsDto.furniture"
                  >
                    Furniture
                  </Checkbox>
                </SectionInner>
                <SectionInner fd={"true"}>
                  <Checkbox
                    onChange={formik.handleChange}
                    value={formik.values.gasStove}
                    name="componentsDto.gasStove"
                  >
                    Gas Stove
                  </Checkbox>
                  <Checkbox
                    onChange={formik.handleChange}
                    value={formik.values.internet}
                    name="componentsDto.internet"
                  >
                    Internet
                  </Checkbox>
                  <Checkbox
                    onChange={formik.handleChange}
                    value={formik.values.tv}
                    name="componentsDto.tv"
                  >
                    TV
                  </Checkbox>
                </SectionInner>
              </SectionInner>
            </Section>
            <Button type={"submit"}>{id ? "Update" : "Save"}</Button>
          </form>
        </InputsWrap>
      </Wrapper>
    </Container>
  );
};

export default AddHouse;
