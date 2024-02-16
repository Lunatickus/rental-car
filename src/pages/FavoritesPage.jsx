import { AdvertsList } from "components/AdvertsList/AdvertsList";
import { useSelector } from "react-redux";
import { selectFavorites } from "../redux/adverts.selectors";

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      <h1>Favorites Page</h1>
      <AdvertsList adverts={favorites} />
    </>
  );
};

export default FavoritesPage;
