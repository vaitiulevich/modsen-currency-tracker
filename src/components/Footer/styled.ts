import { breakpoints } from '@constants/breakpoints';
import styled from 'styled-components';

export const FooterContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.fillBackground};
  padding: ${(props) => props.theme.indents.containerPaddingDesctop};
  color: ${(props) => props.theme.colors.generalFont};

  @media (max-width: ${breakpoints.tablet}px) {
    padding: ${(props) => props.theme.indents.containerPaddingLaptop};
  }
  @media (max-width: ${breakpoints.mobile}px) {
    padding: ${(props) => props.theme.indents.containerPaddingMobile};
  }
`;

export const Logo = styled.div``;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
`;

export const NavItem = styled.a`
  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;
