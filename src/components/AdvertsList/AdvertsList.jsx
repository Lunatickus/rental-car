import { useSelector } from "react-redux";
import { selectAdverts } from "../../redux/adverts.selectors";
import { AdvertListItem } from "components/AdvertsListItem/AdvertsListItem";

export const AdvertsList = () => {
  const adverts = useSelector(selectAdverts);

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
