const { default: styled } = require("styled-components");

export const FiltersFormStyled = styled.form`
  display: flex;
  justify-content: center;
  gap: 18px;
  align-items: end;
  margin-bottom: 50px;

  .filters-form-label {
    display: block;
    color: rgb(138, 138, 137);
    font-size: 14px;
    font-weight: 500;
    line-height: 129%;
    margin-bottom: 8px;
  }

  .filters-form-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 188px;
    padding: 14px 18px 14px 18px;
    border-radius: 14px;
    background-color: rgb(247, 247, 251);
    color: rgb(18, 20, 23);
    font-size: 18px;
    font-weight: 500;
    line-height: 111%;
  }

  .price-text {
    width: 89px;
  }

  .filters-form-text-wrapper {
    position: relative;
    display: block;
  }

  .filters-form-select {
    position: absolute;
    top: 48px;
    z-index: 1;
    width: 224px;
    border: 1px solid rgba(18, 20, 23, 0.05);
    border-radius: 14px;
    box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
    background: rgb(255, 255, 255);
    color: rgba(18, 20, 23, 0.2);
    font-size: 16px;
    font-weight: 500;
    line-height: 125%;
    padding: 14px 18px;
    outline: transparent;
  }

  .filters-form-option:not(:last-child) {
    margin-bottom: 8px;
  }

  .filters-form-select::-webkit-scrollbar {
    width: 8px;
  }

  .filters-form-select::-webkit-scrollbar-thumb {
    border-radius: 10px;
    height: 130px;
    background: rgba(18, 20, 23, 0.05);
  }

  .price-select {
    width: 125px;
  }

  .price-select::-webkit-scrollbar-thumb {
    height: 66px;
  }

  .filter-form-mileage-wrapper {
    display: flex;
  }

  .mileage-text {
    width: 124px;
  }

  .filters-form-input {
    width: 70px;
    background-color: transparent;
    border: transparent;
    outline: transparent;
    color: rgb(18, 20, 23);

    font-size: 18px;
    font-weight: 500;
    line-height: 111%;
  }

  .from {
    border-right: 1px solid rgba(138, 138, 137, 0.2);
    border-radius: 14px 0px 0px 14px;
  }

  .to {
    border-radius: 0px 14px 14px 0px;
    background: rgb(247, 247, 251);
  }

  .filters-form-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 44px 14px 44px;
    border-radius: 12px;
    border-color: transparent;

    background-color: rgb(52, 112, 255);

    color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: 600;
    line-height: 143%;
  }

  .filters-form-button:hover {
    background-color: rgb(11, 68, 205);
  }
`;
