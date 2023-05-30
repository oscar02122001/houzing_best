import styled from "styled-components";

export const Container = styled.div`
  padding: 64px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 30px 48px 30px; 
  margin: auto;
  max-width: 580px;
  width: 100%;
  gap: 30px;
  border: 2px solid #e6e9ec;
`;

export const Content = styled.div`
  align-items: center;
  text-align: center;
  margin-bottom: 32px;
`;

export const SectionWrap = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
`;
export const Section = styled.div`
  width: calc((100% - 260px) / 4);
`;
