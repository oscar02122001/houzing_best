import styled from "styled-components";

import { ReactComponent as Edit } from "../../assets/icons/edit.svg";
import { ReactComponent as Delete } from "../../assets/icons/delete.svg";

const margin = ({ mar }) => {
  return mar;
};

const number = ({ num }) => {
  return num;
};

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: var(--container);
  width: calc((100% - ${margin}) / ${number});
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
  text-align: center;
`;

export const ImgWrap = styled.div`
  position: relative;
  /* width: 100%; */
  height: 220px;
`;

export const Img = styled.img`
  width: 143px;
  height: 113px;
`;

export const UserWrap = styled.div`
  display: flex;
  max-width: 450px;
  justify-content: space-between;

  .btn {
    font-size: 10px;
  }
`;

UserWrap.Disc = styled.div`
  flex-grow: 1;
  margin-left: 16px;
`;

export const Feature = styled.button`
  position: absolute;
  font-size: 10px;
  padding: 5px 12px;
  background: #0061df;
  border-radius: 3px;
  border: none;
  color: #fff;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background-color: #fff;
    transition: 0.2s ease all;
    color: #333;
  }
`;

export const Sale = styled(Feature)`
  width: auto;
  height: fit-content;
  position: relative;
  background-color: #0d263b;
`;

export const OldPrice = styled.p`
  margin: 0;
  margin-top: 21px;
  font-size: 12px;
  color: var(--secondaryColor);
  text-decoration-line: line-through;
`;
export const Price = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
`;

export const Icons = {
  EditIcon: styled(Edit)`
    cursor: pointer;
    &:hover {
      & path {
        fill: #1ddb04;
      }
    }
  `,
  DeleteIcon: styled(Delete)`
    width: 35px;
    height: 35px;
    padding: 10px 0;
    background-color: #f6f8f9;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background-color: #fff;
      & path {
        fill: red;
      }
    }
  `,
};

Icons.Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
`;
