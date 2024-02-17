import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  background-color: rgb(247, 247, 251);
  height: 48px;
  padding: 12px 50px;
  font-size: 20px;
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 12px;

  .header-nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .header-link-wrapper {
    display: flex;
    justify-content: space-between;
    width: 15%;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  color: #3470ff;
  text-decoration: none;

  &.active {
    color: #0b44cd;
  }
`;
