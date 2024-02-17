import { Triangle } from "react-loader-spinner";
import { LoaderStyled } from "./Loader.styled";

export const Loader = () => {
  return (
    <LoaderStyled>
      <div className="loader">
        <Triangle
          visible={true}
          height="150"
          width="150"
          color="#3470FF"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </LoaderStyled>
  );
};
