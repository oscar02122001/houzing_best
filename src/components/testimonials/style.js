import styled from "styled-components";

import { ReactComponent as usr1 } from "../../assets/icons/user1.svg";
import { ReactComponent as usr2 } from "../../assets/icons/user2.svg";
import { ReactComponent as usr3 } from "../../assets/icons/user23.svg";
import { ReactComponent as use4 } from "../../assets/icons/user2.svg";

export const Container = styled.div`
  background-color: #f5f7fc;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  padding: var(--container);
  padding-top: 48px;
  padding-bottom: 48px;
  margin: auto;
`;

export const Content = styled.div`
  align-items: center;
  text-align: center;
  margin-bottom: 32px;
`;

export const SectionWrap = styled.div`
  display: flex;
  /* justify-content: space-between; */
  text-align: center;
  flex-wrap: wrap;
  gap: 20px;
`;
export const Section = styled.div`
  width: calc((100% - 20px) / 1) !important;
  background-color: #fff;
  text-align: center;
`;
export const ContentWrap = styled.div`
  padding: 40px 48px 61px 48px;
`;
export const UserWrap = styled.div`
  position: relative;
  padding-top: 37px;
  background-color: #f5f7fc;
`;

export const Icons = {
  User1: styled(usr1)`
    position: absolute;
    top: -50%;
    left: 50%;
    transform: translate(-50%, 50%);
  `,
  User2: styled(usr2)`
    position: absolute;
    top: -50%;
    left: 50%;
    transform: translate(-50%, 50%);
  `,
  User3: styled(usr3)`
    position: absolute;
    top: -50%;
    left: 50%;
    transform: translate(-50%, 50%);
  `,
  User4: styled(use4)`
    position: absolute;
    top: -50%;
    left: 50%;
    transform: translate(-50%, 50%);
  `,
};
