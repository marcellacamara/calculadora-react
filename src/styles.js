import styled from "styled-components";
import { device } from "./breakpoints";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #c4bfdc;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background-color: #d5d0ed;
  width: 80%;
  border-radius: 1.25rem;

  @media ${device.mobileS} {
    width: 90%;
  }
  @media ${device.mobileM} {
    width: 80%;
  }
  @media ${device.mobileL} {
    width: 70%;
  }
  @media ${device.tablet} {
    width: 40%;
  }
  @media ${device.laptop} {
    width: 30%;
  }
  @media ${device.laptopL} {
    width: 20%;
  }
  @media ${device.desktop} {
    width: 15%;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
