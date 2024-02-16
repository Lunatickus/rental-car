import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "../redux/advertsOperations";
import { AdvertsList } from "components/AdvertsList/AdvertsList";
import { selectAdverts } from "../redux/adverts.selectors";
import { Filters } from "components/Filters/Filters";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const adverts = useSelector(selectAdverts);
  const canLoadMore = page * 12 === adverts.length;

  useEffect(() => {
    dispatch(fetchAdverts(page));
  }, [dispatch, page]);

  return (
    <>
      <h1>Catalog Page</h1>
      <Filters />
      <AdvertsList adverts={adverts} />
      {canLoadMore && (
        <button type="button" onClick={() => setPage(page + 1)}>
          Load more
        </button>
      )}
    </>
  );
};

export default CatalogPage;
