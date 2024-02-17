import styled from "styled-components";

export const LoaderStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: rgba(18, 20, 23, 0.5);

  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
