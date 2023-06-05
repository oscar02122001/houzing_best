import styled from "styled-components";

import { ReactComponent as sms } from "../../assets/icons/sms.svg";
import { ReactComponent as home } from "../../assets/icons/chooseHome.svg";
import { ReactComponent as phone } from "../../assets/icons/phone.svg";
import { ReactComponent as map } from "../../assets/icons/map.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  padding: var(--container);
  padding-top: 48px;
  padding-bottom: 48px;
  margin: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Content = styled.div`
  align-items: center;
  text-align: center;
  margin-bottom: 32px;
`;

export const Icons = {
  IconSms: styled(sms)`
    margin-bottom: 40px;
  `,
  IconHome: styled(home)`
    margin-bottom: 40px;
  `,
  IconPhone: styled(phone)`
    margin-bottom: 40px;
  `,
  IconMap: styled(map)`
    margin-bottom: 40px;
  `,
};
