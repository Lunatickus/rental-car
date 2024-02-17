import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "../redux/advertsOperations";
import { AdvertsList } from "components/AdvertsList/AdvertsList";
import { selectAdverts, selectIsLoading } from "../redux/adverts.selectors";
import { Filters } from "components/Filters/Filters";
import { Container } from "components/Container/Container";
import { Loader } from "components/Loader/Loader";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const adverts = useSelector(selectAdverts);
  const canLoadMore = page * 12 === adverts.length;
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchAdverts(page));
  }, [dispatch, page]);

  return (
    <main>
      <Container>
        <Filters />
        <AdvertsList adverts={adverts} />
        {canLoadMore && (
          <button
            className="load-more-btn"
            type="button"
            onClick={() => setPage(page + 1)}
          >
            Load more
          </button>
        )}
      </Container>
      {isLoading && <Loader />}
    </main>
  );
};

export default CatalogPage;
