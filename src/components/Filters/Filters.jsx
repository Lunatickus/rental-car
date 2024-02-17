import { useState } from "react";
import { brands } from "services/car-brand";
import { ReactComponent as ArrowDown } from "../../icons/arrow-down.svg";
import { ReactComponent as ArrowUp } from "../../icons/arrow-up.svg";
import { createPriceRange } from "services/price-range";
import { useDispatch } from "react-redux";
import { fetchFilteredAdverts } from "../../redux/advertsOperations";
import { FiltersFormStyled } from "./Filters.styled";

export const Filters = () => {
  const dispatch = useDispatch();
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [isBrandSelectorOpen, setBrandIsSelectorOpen] = useState(false);
  const [isPriceSelectorOpen, setPriceIsSelectorOpen] = useState(false);
  const [carMileageFrom, setCarMileageFrom] = useState(0);
  const [carMileageTo, setCarMileageTo] = useState(0);
  const priceRange = createPriceRange();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedBrand && !selectedPrice && !carMileageFrom && !carMileageTo) {
      return;
    }

    if (
      (carMileageFrom && !carMileageTo) ||
      (carMileageTo && !carMileageFrom)
    ) {
      return;
    }

    dispatch(
      fetchFilteredAdverts({
        brand: selectedBrand,
        price: selectedPrice,
        mileageFrom: carMileageFrom,
        mileageTo: carMileageTo,
      })
    );
  };

  const handleChangeBrand = (e) => {
    setSelectedBrand(e.target.value);
    setBrandIsSelectorOpen(!isBrandSelectorOpen);
  };

  const handleChangePrice = (e) => {
    setSelectedPrice(Number(e.target.value));
    setPriceIsSelectorOpen(!isPriceSelectorOpen);
  };

  const handleChangeCarMileage = (e) => {
    if (e.target.name === "car-mileage-from") {
      setCarMileageFrom(Number(e.target.value));
      return;
    }

    if (e.target.name === "car-mileage-to") {
      setCarMileageTo(Number(e.target.value));
      return;
    }
  };

  return (
    <FiltersFormStyled onSubmit={handleSubmit}>
      <label>
        <p className="filters-form-label">Car Brand</p>
        <div className="filters-form-text-wrapper">
          <div
            className="filters-form-text"
            onClick={() => setBrandIsSelectorOpen(!isBrandSelectorOpen)}
          >
            <p>{selectedBrand || "Enter the text"}</p>
            {isBrandSelectorOpen ? <ArrowUp /> : <ArrowDown />}
          </div>
          {isBrandSelectorOpen && (
            <select
              className="filters-form-select"
              name="car-brand"
              size="9"
              onChange={handleChangeBrand}
            >
              {brands.map((brand) => {
                return (
                  <option
                    className="filters-form-option"
                    key={brand}
                    value={brand}
                  >
                    {brand}
                  </option>
                );
              })}
            </select>
          )}
        </div>
      </label>
      <label>
        <p className="filters-form-label">Price/ 1 hour</p>
        <div className="filters-form-text-wrapper">
          <div
            className="filters-form-text price-text"
            onClick={() => setPriceIsSelectorOpen(!isPriceSelectorOpen)}
          >
            <p>{selectedPrice || "To"} $</p>
            {isPriceSelectorOpen ? <ArrowUp /> : <ArrowDown />}
          </div>
          {isPriceSelectorOpen && (
            <select
              className="filters-form-select price-select"
              name="car-price"
              size="6"
              onChange={handleChangePrice}
            >
              {priceRange.map((price) => {
                return (
                  <option
                    className="filters-form-option"
                    key={price}
                    value={price}
                  >
                    {price}
                  </option>
                );
              })}
            </select>
          )}
        </div>
      </label>
      <div>
        <p className="filters-form-label">Сar mileage / km</p>
        <div className="filter-form-mileage-wrapper">
          <label className="filters-form-text mileage-text from">
            <p>From</p>
            <input
              className="filters-form-input"
              type="number"
              name="car-mileage-from"
              value={carMileageFrom === 0 ? "" : carMileageFrom}
              onChange={handleChangeCarMileage}
            />
          </label>
          <label className="filters-form-text mileage-text to">
            <p>To</p>
            <input
              className="filters-form-input"
              type="number"
              name="car-mileage-to"
              value={carMileageTo === 0 ? "" : carMileageTo}
              onChange={handleChangeCarMileage}
            />
          </label>
        </div>
      </div>
      <button className="filters-form-button" type="submit">
        Search
      </button>
    </FiltersFormStyled>
  );
};
