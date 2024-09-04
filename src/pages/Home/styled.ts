import { breakpoints } from '@constants/breakpoints';
import styled from 'styled-components';
export const HomeContainer = styled.section`
  padding: ${(props) => props.theme.indents.containerPaddingDesctop};
`;
export const AllCurrencyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem 6rem;
`;

export const Title = styled.h2`
  width: 43%;
  font-size: ${(props) => props.theme.typography.fontSize.average};
  margin: 2rem 0;
  padding-bottom: 1rem;
  border-bottom: ${(props) => props.theme.border.borderPanels};
`;
