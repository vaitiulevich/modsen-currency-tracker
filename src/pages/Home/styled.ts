import { breakpoints } from '@constants/breakpoints';
import styled from 'styled-components';
export const HomeContainer = styled.section`
  padding: ${(props) => props.theme.indents.containerPaddingDesctop};

  @media (max-width: ${breakpoints.tablet}px) {
    padding: ${(props) => props.theme.indents.containerPaddingLaptop};
  }
  @media (max-width: ${breakpoints.mobile}px) {
    padding: ${(props) => props.theme.indents.containerPaddingMobile};
  }
`;
export const AllCurrencyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem 6rem;

  @media (max-width: ${breakpoints.tablet}px) {
    gap: 1rem;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Title = styled.h2`
  width: 43%;
  font-size: ${(props) => props.theme.typography.fontSize.average};
  margin: 2rem 0;
  padding-bottom: 1rem;
  border-bottom: ${(props) => props.theme.border.borderPanels};
`;
