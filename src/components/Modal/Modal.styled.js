import styled from "styled-components";

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: rgba(18, 20, 23, 0.5);

  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 24px;
    padding: 40px;
    background-color: rgb(255, 255, 255);
    height: 90%;
    width: 460px;
    overflow: auto;
  }

  .modal-close-btn {
    position: absolute;
    top: 16px;
    right: 16px;
    background-color: transparent;
    border: transparent;
    padding: 0;
    line-height: 0;
  }

  .modal-img {
    width: 460px;
    border-radius: 14px;
    margin-bottom: 14px;
  }

  .modal-text {
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    color: #121417;
  }

  .modal-text-model {
    color: #3470ff;
  }

  .modal-options-wrapper {
    display: flex;
    flex-wrap: wrap;
    row-gap: 6px;
    margin-bottom: 14px;
    width: 290px;
  }

  .modal-options {
    color: rgba(18, 20, 23, 0.5);
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
  }

  .modal-options:not(:last-child) {
    padding-right: 6px;
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }

  .modal-options:nth-child(5) {
    padding-right: 0;
    border-right: transparent;
  }

  .modal-options:not(:first-child) {
    padding-left: 6px;
  }

  .modal-options:nth-child(6) {
    padding-left: 0;
  }

  .modal-desc {
    color: rgb(18, 20, 23);
    font-size: 14px;
    font-weight: 400;
    line-height: 143%;
    margin-bottom: 24px;
  }

  .modal-functionalities,
  .modal-rental-conditions {
    color: rgb(18, 20, 23);
    font-size: 14px;
    font-weight: 500;
    line-height: 143%;
    margin-bottom: 8px;
  }

  .modal-functionalities-wrapper {
    display: flex;
    flex-wrap: wrap;
    row-gap: 6px;
    margin-bottom: 24px;
  }

  .modal-functionalities-text {
    color: rgba(18, 20, 23, 0.5);
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
  }

  .modal-functionalities-text:not(:last-child) {
    padding-right: 6px;
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }

  .modal-functionalities-text:nth-child(3) {
    padding-right: 0;
    border-right: transparent;
  }

  .modal-functionalities-text:not(:first-child) {
    padding-left: 6px;
  }

  .modal-functionalities-text:nth-child(4) {
    padding-left: 0;
  }

  .modal-rental-conditions-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
  }

  .modal-rental-conditions-text {
    padding: 7px 14px 7px 14px;
    border-radius: 35px;
    background-color: rgb(249, 249, 249);
    color: rgb(54, 53, 53);
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
  }

  .modal-rental-conditions-value {
    color: #3470ff;
  }

  .modal-btn {
    padding: 12px 50px 12px 50px;
    border-radius: 12px;

    background: rgb(52, 112, 255);
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: 600;
    line-height: 143%;
    text-decoration: none;
  }

  .modal-btn:hover {
    background-color: rgb(11, 68, 205);
  }
`;
