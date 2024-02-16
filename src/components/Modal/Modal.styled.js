import styled from "styled-components";

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: rgba(18, 20, 23, 0.5);;

  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 24px;
    padding: 40px;
    background-color: rgb(255, 255, 255);
  }
`;
