import { HeaderStyled, NavLinkStyled } from "./Header.styled";
import { ReactComponent as CarRentIcon } from "../../icons/car-rent-icon.svg";

export const Header = () => {
  return (
    <HeaderStyled>
      <nav className="header-nav">
        <NavLinkStyled to="/"><CarRentIcon width={22} /> Home</NavLinkStyled>
        <div className="header-link-wrapper">
          <NavLinkStyled to="catalog">Catalog</NavLinkStyled>
          <NavLinkStyled to="favorites">Favorites</NavLinkStyled>
        </div>
      </nav>
    </HeaderStyled>
  );
};
