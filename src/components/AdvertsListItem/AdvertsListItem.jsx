import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/advertsSlice";
import { selectFavorites } from "../../redux/adverts.selectors";
import { useState } from "react";
import { Modal } from "components/Modal/Modal";
import { ReactComponent as UnpaintedHeart } from "../../icons/unpainted-heart.svg";
import { ReactComponent as PainedHeart } from "../../icons/painted-heart.svg";
import {
  AdvertItemImageStyled,
  AdvertsItemStyled,
} from "./AdvertsListItem.styled";

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
  const splittedAddress = address.split(",");
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const isLongString = (str) => {
    if (str.length > 12) {
      return str.slice(0, 12) + "...";
    }

    return str;
  };

  const functional = isLongString(functionalities[0]);

  const isFavorite = (id) => {
    return favorites.find((advert) => advert.id === id);
  };

  const handleAddRemoveFavorite = () => {
    if (isFavorite(item.id)) {
      dispatch(removeFavorite(item.id));
    } else {
      dispatch(addFavorite(item));
    }
  };

  return (
    <>
      <AdvertsItemStyled>
        <button
          className="adverts-item-close-btn"
          type="button"
          onClick={handleAddRemoveFavorite}
        >
          {isFavorite(item.id) ? <PainedHeart /> : <UnpaintedHeart />}
        </button>
        <AdvertItemImageStyled $backgroundImage={img}></AdvertItemImageStyled>
        <div className="advert-item-text-wrapper">
          <p className="advert-item-text">
            {make} <span className="advert-item-text-model">{model}</span>,{" "}
            {year}
          </p>
          <p className="advert-item-text">{rentalPrice}</p>
        </div>
        <div className="advert-item-desc-wrapper">
          <p className="advert-item-desc">{splittedAddress[1]}</p>
          <p className="advert-item-desc">{splittedAddress[2]}</p>
          <p className="advert-item-desc">{rentalCompany}</p>
          <p className="advert-item-desc">{type}</p>
          <p className="advert-item-desc">{model}</p>
          <p className="advert-item-desc">{mileage}</p>
          <p className="advert-item-desc">{functional}</p>
        </div>
        <button
          className="advert-item-btn"
          type="button"
          onClick={() => setIsOpenModal(true)}
        >
          Learn more
        </button>
      </AdvertsItemStyled>
      {isOpenModal && (
        <Modal closeModal={() => setIsOpenModal(false)} advert={item} />
      )}
    </>
  );
};
