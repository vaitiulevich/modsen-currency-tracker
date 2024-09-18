import { breakpoints } from '@constants/breakpoints';
import styled from 'styled-components';

export const MenuContainer = styled.div<{ isopen: boolean }>`
  display: block;
  width: 60%;
  flex-direction: column;
  justify-content: flex-start;
  background: ${(props) => props.theme.colors.fillSecondary};
  height: 100%;
  text-align: left;
  padding: 4rem 2rem 1rem 1rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isopen }) => (isopen ? 'translateX(0)' : 'translateX(100%)')};
  z-index: 10;
  @media (max-width: ${breakpoints.mobile}px) {
    width: 100%;
  }
`;
export const BurgerButton = styled.button<{ isopen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 11;
  margin-right: 1rem;
  position: ${({ isopen }) => isopen && 'fixed'};
  top: 1rem;
  right: 1rem;

  div {
    width: 2rem;
    height: 0.2rem;
    background: ${(props) => props.theme.colors.generalFont};
    transition: all 0.3s ease;

    &:nth-child(1) {
      transform: ${({ isopen }) =>
        isopen ? 'rotate(45deg) translate(.6rem, .6rem)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${({ isopen }) => (isopen ? '0' : '1')};
    }

    &:nth-child(3) {
      transform: ${({ isopen }) =>
        isopen ? 'rotate(-45deg) translate(5px, -5px)' : 'rotate(0)'};
    }
  }
`;

export const Overlay = styled.div<{ isopen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.footerSecondaryFont}b6;
  z-index: 1;
  opacity: ${(props) => (props.isopen ? 1 : 0)};
  visibility: ${(props) => (props.isopen ? 'visible' : 'hidden')};
  transition: all 0.3s;
`;
