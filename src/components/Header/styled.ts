import { breakpoints } from '@constants/breakpoints';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
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

export const MenuContainer = styled.div<{ isDesktop: boolean }>`
  flex-grow: 1;
  display: flex;
  justify-content: ${({ isDesktop }) => (isDesktop ? 'center' : 'flex-end')};
`;

export const MenuOptions = styled.div`
  display: flex;
`;
