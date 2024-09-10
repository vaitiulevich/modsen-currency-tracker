import { breakpoints } from '@constants/breakpoints';
import styled from 'styled-components';

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => props.theme.indents.containerPaddingDesctop};

  @media (max-width: ${breakpoints.tablet}px) {
    padding: ${(props) => props.theme.indents.containerPaddingLaptop};
  }
  @media (max-width: ${breakpoints.mobile}px) {
    padding: ${(props) => props.theme.indents.containerPaddingMobile};
  }
`;
export const SearchTitle = styled.h2`
  font-size: ${(props) => props.theme.typography.fontSize.large};
  margin-bottom: 1rem;
  text-align: center;
`;

export const SearchInputPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1.2rem;
  border-radius: 0.2rem;
  width: 20rem;
  background-color: ${(props) => props.theme.colors.fillSecondary};
`;
export const SearchButton = styled.button`
  display: flex;
  background: transparent;
  outline: none;
  border: none;
  height: 1.2rem;
  cursor: pointer;
`;
export const SearchInput = styled.input`
  width: 100%;
  outline: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.generalFont};
  border: none;
`;
export const CurrencyList = styled.ul`
  margin: 0;
  list-style: none;
  background-color: ${(props) => props.theme.colors.fillSecondary};
  width: 20rem;
  position: absolute;
  top: 7.5rem;
  z-index: 10;
`;
export const CurrencyListItem = styled.li`
  padding: 0.4rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverFill};
    color: ${(props) => props.theme.colors.accent};
  }
`;
