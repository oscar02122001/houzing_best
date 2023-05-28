import React from "react";
import Slider from "react-slick";

import {
  Container,
  Wrapper,
  Content,
  Section,
  UserWrap,
  ContentWrap,
  Icons,
} from "./style";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "50px",
  slidesToShow: 3,
  speed: 500,
};

const Testimonials = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <h1 className="mainTitle">Testimonials</h1>
          <p className="descript">
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </p>
        </Content>
        <Slider {...settings}>
          <Section>
            <ContentWrap>
              <p className="discript" style={{ marginBottom: "0" }}>
                “ I believe in lifelong learning and Skola is a great place to
                learn from experts. I've learned a lot and recommend it to all
                my friends “
              </p>
            </ContentWrap>

            <UserWrap>
              <Icons.User1 />
              <h1 className="subTitle" style={{ marginBottom: "0" }}>
                Marvin McKinney
              </h1>
              <p className="descript">Designer</p>
            </UserWrap>
          </Section>
          <Section>
            <ContentWrap>
              <p className="discript" style={{ marginBottom: "0" }}>
                “ I believe in lifelong learning and Skola is a great place to
                learn from experts. I've learned a lot and recommend it to all
                my friends “
              </p>
            </ContentWrap>
            <UserWrap>
              <Icons.User2 />
              <h1 className="subTitle" style={{ marginBottom: "0" }}>
                Marvin McKinney
              </h1>
              <p className="descript">Designer</p>
            </UserWrap>
          </Section>
          <Section>
            <ContentWrap>
              <p className="discript" style={{ marginBottom: "0" }}>
                “ I believe in lifelong learning and Skola is a great place to
                learn from experts. I've learned a lot and recommend it to all
                my friends “
              </p>
            </ContentWrap>
            <UserWrap>
              <Icons.User3 />
              <h1 className="subTitle" style={{ marginBottom: "0" }}>
                Marvin McKinney
              </h1>
              <p className="descript">Designer</p>
            </UserWrap>
          </Section>
          <Section>
            <ContentWrap>
              <p className="discript" style={{ marginBottom: "0" }}>
                “ I believe in lifelong learning and Skola is a great place to
                learn from experts. I've learned a lot and recommend it to all
                my friends “
              </p>
            </ContentWrap>
            <UserWrap>
              <Icons.User4 />
              <h1 className="subTitle" style={{ marginBottom: "0" }}>
                Marvin McKinney
              </h1>
              <p className="descript">Designer</p>
            </UserWrap>
          </Section>
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default Testimonials;
