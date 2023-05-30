import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  padding: var(--container);  margin: auto;
`;


export const Image = styled.img`
width: 500px;
height: 300px;
`

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
