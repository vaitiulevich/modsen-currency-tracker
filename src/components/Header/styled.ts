import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.fillBackground};
  padding: ${(props) => props.theme.indents.containerPaddingDesctop};
  color: ${(props) => props.theme.colors.generalFont};
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