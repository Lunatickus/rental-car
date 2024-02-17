import { AdvertListItem } from "components/AdvertsListItem/AdvertsListItem";
import { AdvertListStyled } from "./AdvertsList.styled";


export const AdvertsList = ({adverts}) => {

  return (
    <AdvertListStyled>
      {adverts.map((advert) => {
        return (
          <li key={advert.id}>
            <AdvertListItem item={advert} />
          </li>
        );
      })}
    </AdvertListStyled>
  );
};
