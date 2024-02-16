import { useState } from "react";
import { brands } from "services/car-brand";
import { ReactComponent as ArrowDown } from "../../icons/arrow-down.svg";
import { ReactComponent as ArrowUp } from "../../icons/arrow-up.svg";
import { createPriceRange } from "services/price-range";
import { useDispatch } from "react-redux";
import { fetchFilteredAdverts } from "../../redux/advertsOperations";

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
        from: carMileageFrom,
        to: carMileageTo,
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
    <form onSubmit={handleSubmit}>
      <label>
        <p>Car Brand</p>
        <p onClick={() => setBrandIsSelectorOpen(!isBrandSelectorOpen)}>
          <span>{selectedBrand || "Enter the text"}</span>
          {isBrandSelectorOpen ? <ArrowUp /> : <ArrowDown />}
        </p>
        {isBrandSelectorOpen && (
          <select name="car-brand" size="9" onChange={handleChangeBrand}>
            {brands.map((brand) => {
              return (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              );
            })}
          </select>
        )}
      </label>
      <label>
        <p>Price/ 1 hour</p>
        <p onClick={() => setPriceIsSelectorOpen(!isPriceSelectorOpen)}>
          <span>{selectedPrice || "To"} $</span>
          {isPriceSelectorOpen ? <ArrowUp /> : <ArrowDown />}
        </p>
        {isPriceSelectorOpen && (
          <select name="car-brand" size="9" onChange={handleChangePrice}>
            {priceRange.map((price) => {
              return (
                <option key={price} value={price}>
                  {price}
                </option>
              );
            })}
          </select>
        )}
      </label>
      <div>
        <p>Сar mileage / km</p>
        <label>
          <p>From</p>
          <input
            type="number"
            name="car-mileage-from"
            value={carMileageFrom === 0 ? "" : carMileageFrom}
            onChange={handleChangeCarMileage}
          />
        </label>
        <label>
          <p>To</p>
          <input
            type="number"
            name="car-mileage-to"
            value={carMileageTo === 0 ? "" : carMileageTo}
            onChange={handleChangeCarMileage}
          />
        </label>
      </div>
      <button type="submit">Search</button>
    </form>
  );
};
