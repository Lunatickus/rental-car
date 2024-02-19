import { useEffect, useState } from "react";
import { brands } from "services/car-brand";
import { ReactComponent as ArrowDown } from "../../icons/arrow-down.svg";
import { ReactComponent as ArrowUp } from "../../icons/arrow-up.svg";
import { createPriceRange } from "services/price-range";
import { useDispatch } from "react-redux";
import { fetchFilteredAdverts } from "../../redux/advertsOperations";
import { FiltersFormStyled } from "./Filters.styled";
import { useSearchParams } from "react-router-dom";

export const Filters = () => {
  const dispatch = useDispatch();
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [isBrandSelectorOpen, setBrandIsSelectorOpen] = useState(false);
  const [isPriceSelectorOpen, setPriceIsSelectorOpen] = useState(false);
  const [carMileageFrom, setCarMileageFrom] = useState(0);
  const [carMileageTo, setCarMileageTo] = useState(0);
  const priceRange = createPriceRange();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchParamBrand = searchParams.get("brand") || "";
    const searchParamPrice = Number(searchParams.get("price")) || 0;
    const searchParamMileageFrom = Number(searchParams.get("mileageFrom")) || 0;
    const searchParamMileageTo = Number(searchParams.get("mileageTo")) || 0;

    setSelectedBrand(searchParamBrand);
    setSelectedPrice(searchParamPrice);
    setCarMileageFrom(searchParamMileageFrom);
    setCarMileageTo(searchParamMileageTo);

    dispatch(
      fetchFilteredAdverts({
        brand: searchParamBrand,
        price: searchParamPrice,
        mileageFrom: searchParamMileageFrom,
        mileageTo: searchParamMileageTo,
      })
    );
  }, [dispatch, searchParams]);

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

    setSearchParams({
      brand: selectedBrand,
      price: selectedPrice,
      mileageFrom: carMileageFrom,
      mileageTo: carMileageTo,
    });
  };

  const handleChangeValue = (e) => {
    switch (e.target.name) {
      case "car-brand":
        setSelectedBrand(e.target.value);
        setBrandIsSelectorOpen(!isBrandSelectorOpen);
        break;
      case "car-price":
        setSelectedPrice(Number(e.target.value));
        setPriceIsSelectorOpen(!isPriceSelectorOpen);
        break;
      case "car-mileage-from":
        setCarMileageFrom(Number(e.target.value));
        break;
      case "car-mileage-to":
        setCarMileageTo(Number(e.target.value));
        break;
      default:
        return;
    }
  };

  return (
    <FiltersFormStyled onSubmit={handleSubmit}>
      <label>
        <span className="filters-form-label">Car Brand</span>
        <span className="filters-form-text-wrapper">
          <span
            className="filters-form-text"
            onClick={() => setBrandIsSelectorOpen(!isBrandSelectorOpen)}
          >
            <span>{selectedBrand || "Enter the text"}</span>
            {isBrandSelectorOpen ? <ArrowUp /> : <ArrowDown />}
          </span>
          {isBrandSelectorOpen && (
            <select
              className="filters-form-select"
              name="car-brand"
              size="9"
              onChange={handleChangeValue}
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
        </span>
      </label>
      <label>
        <span className="filters-form-label">Price/ 1 hour</span>
        <span className="filters-form-text-wrapper">
          <span
            className="filters-form-text price-text"
            onClick={() => setPriceIsSelectorOpen(!isPriceSelectorOpen)}
          >
            <span>{selectedPrice || "To"} $</span>
            {isPriceSelectorOpen ? <ArrowUp /> : <ArrowDown />}
          </span>
          {isPriceSelectorOpen && (
            <select
              className="filters-form-select price-select"
              name="car-price"
              size="6"
              onChange={handleChangeValue}
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
        </span>
      </label>
      <div>
        <span className="filters-form-label">Сar mileage / km</span>
        <div className="filter-form-mileage-wrapper">
          <label className="filters-form-text mileage-text from">
            <span>From</span>
            <input
              className="filters-form-input"
              type="number"
              name="car-mileage-from"
              value={carMileageFrom === 0 ? "" : carMileageFrom}
              onChange={handleChangeValue}
            />
          </label>
          <label className="filters-form-text mileage-text to">
            <span>To</span>
            <input
              className="filters-form-input"
              type="number"
              name="car-mileage-to"
              value={carMileageTo === 0 ? "" : carMileageTo}
              onChange={handleChangeValue}
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
