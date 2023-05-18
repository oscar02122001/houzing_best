import styled from "styled-components";
import { ReactComponent as InputSearch } from "../../assets/icons/searchbig.svg";
import { ReactComponent as Advenced } from "../../assets/icons/setting-lines.svg";
import { ReactComponent as Search } from "../../assets/icons/loupe.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  max-width: 1440px;
  padding: var(--container);
  width: 100%;
  gap: 20px;
`;

export const InputWrap = styled.div`
  position: relative;
`;
export const IconInput = styled(InputSearch)`
  position: absolute;
  margin-right: 9px;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
`;
export const IconAdvanced = styled(Advenced)`
  margin-right: 9px;
`;
export const IconSearch = styled(Search)`
  margin-right: 9px;
`;
