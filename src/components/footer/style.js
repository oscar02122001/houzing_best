import styled from "styled-components";

import { ReactComponent as sms } from "../../assets/icons/smsFoot.svg";

import { ReactComponent as phone } from "../../assets/icons/phoneFoot.svg";
import { ReactComponent as location } from "../../assets/icons/location.svg";
import { ReactComponent as facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as instogram } from "../../assets/icons/insta.svg";
import { ReactComponent as linkin } from "../../assets/icons/in.svg";

import { ReactComponent as logoImg } from "../../assets/icons/logo.svg";

export const Container = styled.div`
  background-color: #0d263b;

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  padding: var(--container);
  padding-top: 48px;
  padding-bottom: 16px;
  margin: auto;
`;

export const SectionWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Section = styled.div`
  width: calc((100% - 516px) / 4);
  color: #fff !important;

  &:first-child {
    width: 295px;
  }
`;



export const IconWrap = styled.div`
  display: flex;
`;

export const Icons = {
  IconSms: styled(sms)`
    margin-right: 22px;
  `,
  IconPhone: styled(phone)`
    margin-right: 22px;
  `,
  IconLocation: styled(location)`
  
    margin-right: 22px;
  `,
};

export const Title = styled.h1`
  color: #fff;
  margin-bottom: 32px;
`;
export const Items = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #fff;
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

export const NetworkIconWrap = styled.div`
  display: flex;
  margin-top: 40px;
  gap: 37px;
`;

export const NetIcons = {
  IconFacebook: styled(facebook)``,
  IconTwit: styled(twitter)``,
  IconInsta: styled(instogram)``,
  IconLinkin: styled(linkin)``,
};
export const FooterLogo = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.15);
`;
export const FooterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  padding: var(--container);
  padding-top: 16px;
  padding-bottom: 16px;
  margin: auto;
`;

export const Logo = styled(logoImg)`
  width: 30px;
  height: 36px;
  margin-right: 12px;

  & path {
    fill: #fff;
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;
`;
