import styled from "styled-components";

export const ContainerStyled = styled.div`
  width: 1184px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .load-more-btn {
    background-color: transparent;
    border: transparent;
    padding: 0;
    color: rgb(52, 112, 255);
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    text-decoration-line: underline;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 200px;
  }

  .load-more-btn:hover {
    color: rgb(11, 68, 205);
  }
`;
