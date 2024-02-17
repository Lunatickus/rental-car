import { AdvertsList } from "components/AdvertsList/AdvertsList";
import { useSelector } from "react-redux";
import { selectFavorites } from "../redux/adverts.selectors";
import { Container } from "components/Container/Container";

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <main>
      <Container>
        <AdvertsList adverts={favorites} />
      </Container>
    </main>
  );
};

export default FavoritesPage;
