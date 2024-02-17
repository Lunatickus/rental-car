import styled from "styled-components";

export const AdvertsItemStyled = styled.div`
  position: relative;
  width: 274px;

  .adverts-item-close-btn {
    position: absolute;
    right: 14px;
    top: 14px;
    background-color: transparent;
    border: transparent;
    padding: 0;
    line-height: 0;
  }

  .advert-item-text {
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    color: #121417;
  }

  .advert-item-text-model {
    color: #3470ff;
  }

  .advert-item-text-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .advert-item-desc-wrapper {
    display: flex;
    flex-wrap: wrap;
    row-gap: 6px;
    margin-bottom: 28px;
  }

  .advert-item-desc {
    color: rgba(18, 20, 23, 0.5);
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
  }

  .advert-item-desc:not(:last-child) {
    padding-right: 6px;
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }

  .advert-item-desc:nth-child(4) {
    padding-right: 0;
    border-right: transparent;
  }

  .advert-item-desc:not(:first-child) {
    padding-left: 6px;
  }

  .advert-item-desc:nth-child(5) {
    padding-left: 0;
  }

  .advert-item-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 12px;
    padding-bottom: 12px;
    border-radius: 12px;
    background-color: rgb(52, 112, 255);
    border-color: transparent;

    color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: 600;
    line-height: 143%;
  }

  .advert-item-btn:hover {
    background-color: rgb(11, 68, 205);
  }
`;

export const AdvertItemImageStyled = styled.div`
  width: 274px;
  height: 268px;
  border-radius: 14px;
  margin-bottom: 14px;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
