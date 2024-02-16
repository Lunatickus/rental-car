import { AdvertListItem } from "components/AdvertsListItem/AdvertsListItem";

export const AdvertsList = ({adverts}) => {

  return (
    <ul>
      {adverts.map((advert) => {
        return (
          <li key={advert.id}>
            <AdvertListItem item={advert} />
          </li>
        );
      })}
    </ul>
  );
};
