import styled from "styled-components";
import { ReactComponent as InputSearch } from "../../assets/icons/searchbig.svg";
import { ReactComponent as Advenced } from "../../assets/icons/setting-lines.svg";
import { ReactComponent as Search } from "../../assets/icons/loupe.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  width: 100%;
  padding: var(--container);
  gap: 20px;
  align-items: center;
  margin: auto;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const InputWrap = styled.div`
  position: relative;
  width: 100%;
`;
export const InputsWrap = styled.div`
  padding: 30px;
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
  gap: 20px;
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
