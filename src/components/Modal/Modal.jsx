import { useEffect } from "react";
import { ModalStyled } from "./Modal.styled";
import { ReactComponent as CloseButton } from "../../icons/close-button.svg";

export const Modal = ({ closeModal, advert }) => {
  const {
    img,
    make,
    model,
    type,
    year,
    rentalPrice,
    address,
    mileage,
    functionalities,
    fuelConsumption,
    engineSize,
    id,
    description,
    accessories,
    rentalConditions,
  } = advert;

  const splittedAddress = address.split(",");
  const splittedRentalConditions = rentalConditions.split("\n");
  const formattedMileage = mileage
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const splittedAge = splittedRentalConditions[0].split(": ");

  useEffect(() => {
    const onEsc = ({ code }) => {
      if (code !== "Escape") {
        return;
      }

      closeModal();
    };

    window.addEventListener("keydown", onEsc);

    return () => {
      window.removeEventListener("keydown", onEsc);
    };
  }, [closeModal]);

  const onBackdrop = ({ target, currentTarget }) => {
    if (target !== currentTarget) {
      return;
    }

    closeModal();
  };

  return (
    <ModalStyled onClick={onBackdrop}>
      <div className="modal">
        <button className="modal-close-btn" type="button" onClick={closeModal}>
          <CloseButton />
        </button>
        <img className="modal-img" src={img} alt="car" />
        <p className="modal-text">
          {make} <span className="modal-text-model">{model}</span>, {year}
        </p>
        <div className="modal-options-wrapper">
          <p className="modal-options">{splittedAddress[1]}</p>
          <p className="modal-options">{splittedAddress[2]}</p>
          <p className="modal-options">id: {id}</p>
          <p className="modal-options">Year: {year}</p>
          <p className="modal-options">Type: {type}</p>
          <p className="modal-options">Fuel Consumption: {fuelConsumption}</p>
          <p className="modal-options">Engine Size: {engineSize}</p>
        </div>
        <p className="modal-desc">{description}</p>
        <p className="modal-functionalities">
          Accessories and functionalities:
        </p>
        <div className="modal-functionalities-wrapper">
          {accessories.map((accessor) => (
            <p className="modal-functionalities-text" key={accessor}>
              {accessor}
            </p>
          ))}
          {functionalities.map((functional) => (
            <p className="modal-functionalities-text" key={functional}>
              {functional}
            </p>
          ))}
        </div>
        <p className="modal-rental-conditions">Rental Conditions:</p>
        <ul className="modal-rental-conditions-list">
          <li>
            <p className="modal-rental-conditions-text">
              {splittedAge[0]}:{" "}
              <span className="modal-rental-conditions-value">
                {splittedAge[1]}
              </span>
            </p>
          </li>
          <li>
            <p className="modal-rental-conditions-text">
              {splittedRentalConditions[1]}
            </p>
          </li>
          <li>
            <p className="modal-rental-conditions-text">
              {splittedRentalConditions[2]}
            </p>
          </li>
          <li>
            <p className="modal-rental-conditions-text">
              Mileage:{" "}
              <span className="modal-rental-conditions-value">
                {formattedMileage}
              </span>
            </p>
          </li>
          <li>
            <p className="modal-rental-conditions-text">
              Price:{" "}
              <span className="modal-rental-conditions-value">
                {rentalPrice}
              </span>
            </p>
          </li>
        </ul>
        <a className="modal-btn" href="tel: +380730000000">
          Rental car
        </a>
      </div>
    </ModalStyled>
  );
};
