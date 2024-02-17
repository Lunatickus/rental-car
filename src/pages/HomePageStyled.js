import styled from "styled-components";
import img from "../images/car.jpg";

export const MainStyled = styled.main`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100vh;
  width: 100vw;

  .main-link {
    padding: 12px 50px 12px 50px;
    border-radius: 12px;

    background: rgb(52, 112, 255);
    color: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: 600;
    line-height: 143%;
    text-decoration: none;
  }

  .main-link:hover {
    background-color: rgb(11, 68, 205);
  }
`;
