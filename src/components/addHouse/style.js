import styled from "styled-components";
import { Select } from "antd";
import { ReactComponent as Delete } from "../../assets/icons/delete.svg";

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: var(--container);
  border-radius: 3px;
  margin: auto;
  margin-bottom: 96px;

  .proTitle {
    text-align: left;
    margin-top: 34px;
    margin-bottom: 32px;
  }
`;
export const Wrapper = styled.div`
  padding: 24px 30px 48px;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  gap: 20px;
`;

export const InputWrap = styled.div`
  position: relative;
  width: 100%;
  background-color: #ffffff;
`;
export const InputsWrap = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 6px;
`;

export const Section = styled.div`
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;
export const InputsTitle = styled.div`
  margin: 0;
  margin-bottom: 10px;
`;
export const SectionInner = styled.div`
  display: flex;
  flex-direction: ${({ fd }) => (fd ? "column" : "row")};
  justify-content: ${({ flex }) => (flex ? "space-between" : "start")};
  gap: 20px;
`;

export const SelectAnt = styled(Select)`
  max-width: 200px;
  max-width: 200px;
  width: 100%;

  .ant-select-selector {
    height: 44px !important;
    align-items: center;
  }
`;

export const Icons = {
  DeleteIcon: styled(Delete)`
    width: 15px;
    height: 15px;

    &:hover {
      & path {
        fill: red;
      }
    }
  `,
};
