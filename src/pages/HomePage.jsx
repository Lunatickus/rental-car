import { Link } from "react-router-dom";
import { MainStyled } from "./HomePageStyled";

const HomePage = () => {
  return (
    <MainStyled>
      <Link className="main-link" to="/catalog">Choose a car</Link>
    </MainStyled>
  );
};

export default HomePage;
