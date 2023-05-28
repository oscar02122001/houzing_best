import React from "react";
import {
  Container,
  Wrapper,
  Content,
  SectionWrap,
  Section,
  Icons,
} from "./style";

const ChooseUs = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <h1 className="mainTitle">Why Choose Us?</h1>
          <p className="descript">
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </p>
        </Content>
        <SectionWrap>
          <Section>
            <Icons.IconSms />
            <h1 className="subTitle">Trusted By Thousands</h1>
            <p className="discript" style={{ marginBottom: "0" }}>
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </p>
          </Section>
          <Section>
            <Icons.IconHome />
            <h1 className="subTitle">Wide Renge Of Properties</h1>
            <p className="discript" style={{ marginBottom: "0" }}>
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </p>
          </Section>
          <Section>
            <Icons.IconPhone />
            <h1 className="subTitle">Financing Made Easy</h1>
            <p className="discript" style={{ marginBottom: "0" }}>
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </p>
          </Section>
          <Section>
            <Icons.IconMap />
            <h1 className="subTitle">See Neighborhoods</h1>
            <p className="discript" style={{ marginBottom: "0" }}>
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </p>
          </Section>
        </SectionWrap>
      </Wrapper>
    </Container>
  );
};

export default ChooseUs;
