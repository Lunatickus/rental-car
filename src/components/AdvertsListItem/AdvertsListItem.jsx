import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/advertsSlice";
import { selectFavorites } from "../../redux/adverts.selectors";
import { useState } from "react";
import { Modal } from "components/Modal/Modal";

export const AdvertListItem = ({ item }) => {
  const {
    img,
    make,
    model,
    type,
    year,
    rentalPrice,
    address,
    rentalCompany,
    mileage,
    functionalities,
  } = item;
  const splitedAddress = address.split(",");
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleAddRemoveFavorite = () => {
    if (favorites.find((advert) => advert.id === item.id)) {
      dispatch(removeFavorite(item.id));
    } else {
      dispatch(addFavorite(item));
    }
  };

  return (
    <>
      <div>
        <button type="button" onClick={handleAddRemoveFavorite}>
          Add to favorite
        </button>
        <img src={img} alt="" />
        <p>
          {make} {model}, {year}
        </p>
        <p>{rentalPrice}</p>
        <p>{splitedAddress[1]}</p>
        <p>{splitedAddress[2]}</p>
        <p>{rentalCompany}</p>
        <p>{type}</p>
        <p>{model}</p>
        <p>{mileage}</p>
        <p>{functionalities[0]}</p>
        <button type="button" onClick={() => setIsOpenModal(true)}>
          Learn more
        </button>
      </div>
      {isOpenModal && (
        <Modal closeModal={() => setIsOpenModal(false)} advert={item} />
      )}
    </>
  );
};
