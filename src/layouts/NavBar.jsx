import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/header-logo.png';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
  .logo {
    color: white;
    font-family: ${props => props.theme.fontFamily.logo};
    font-size: 1.2rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.logo};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  a {
    color: white;
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.black.darklight};
    }
  }
`;

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/">
      <span className="logo">Nico ViGnoLA</span>
      {/* <img src={logo} alt="Gatsby Logo" /> */}
    </StyledLink>
    <Nav>
      {/* <Link to="/blog">Blog</Link> */}
      <Link to="/about">About</Link>
    </Nav>
  </Headroom>
);

export default NavBar;
