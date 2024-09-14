import { breakpoints } from '@constants/breakpoints';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  justify-content: space-between;

  @media (max-width: ${breakpoints.tablet}px) {
    flex-direction: column;
  }
`;

export const NavItem = styled.a`
  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;
