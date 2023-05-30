import { styled } from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  gap: 20px;
  /* justify-content: space-between; */
  display: flex;
  flex-wrap: wrap;
  padding: var(--container);
  margin: auto;
  margin-bottom: 96px;
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 64px 0;
  text-align: center;
`;
