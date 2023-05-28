import React from "react";
import { useNavigate } from "react-router";
import {
  Container,
  Wrapper,
  SectionWrap,
  Title,
  Items,
  Section,
  Icons,
  IconWrap,
  NetworkIconWrap,
  NetIcons,
  FooterLogo,
  FooterWrap,
  LogoWrap,
  Logo,
} from "./style";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <SectionWrap>
          <Section>
            <Title className="subTitle">Contact Us</Title>
            <IconWrap>
              <Icons.IconLocation />
              <Items>Al-Kharazmiy street, Chilanzar 17-avenue, 48, 8</Items>
            </IconWrap>

            <Items>
              <Icons.IconPhone /> +998 99 210 02 12
            </Items>
            <Items>
              <Icons.IconSms /> olimjonismatov01@gmail.com
            </Items>
            <NetworkIconWrap>
              <NetIcons.IconFacebook />
              <NetIcons.IconTwit />
              <NetIcons.IconInsta />
              <NetIcons.IconLinkin />
            </NetworkIconWrap>
          </Section>
          <Section>
            <Title className="subTitle">Discover</Title>
            <Items>Chicago</Items>
            <Items>Los Angeles</Items>
            <Items>Miami</Items>
            <Items>New York</Items>
          </Section>
          <Section>
            <Title className="subTitle">Lists by Category</Title>
            <Items>Apartments</Items>
            <Items>Condos</Items>
            <Items>Houses</Items>
            <Items>Offices</Items>
            <Items>Retail</Items>
            <Items>Villas</Items>
          </Section>
          <Section>
            <Title className="subTitle">Lists by Category</Title>
            <Items> About Us</Items>
            <Items>Terms & Conditions</Items>
            <Items>Support Center</Items>
            <Items>Contact Us</Items>
          </Section>
        </SectionWrap>
      </Wrapper>
      <FooterLogo>
        <FooterWrap>
          <LogoWrap onClick={() => navigate("/home")}>
            <Logo />
            Houzing
          </LogoWrap>
          <p className="location" style={{ color: "#fff", marginBottom: "0" }}>
            Copyright © 2021 CreativeLayers. All Right Reserved.
          </p>
        </FooterWrap>
      </FooterLogo>
    </Container>
  );
};

export default Footer;
