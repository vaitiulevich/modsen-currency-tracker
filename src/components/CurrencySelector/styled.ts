import { breakpoints } from '@constants/breakpoints';
import styled from 'styled-components';

export const CurrentCurrencyPanel = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 6rem;
    padding: 1rem;
  }
`;
export const ContentCurrencyPanel = styled.div`
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleCurrencyPanel = styled.h2`
  font-size: ${(props) => props.theme.typography.fontSize.average};
`;
export const SubTitleCurrencyPanel = styled.p`
  font-size: ${(props) => props.theme.typography.fontSize.small};
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};
  color: ${(props) => props.theme.colors.footerSecondaryFont};
`;
export const CurrencySelect = styled.select`
  background: transparent;
  color: ${(props) => props.theme.colors.generalFont};
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  margin-bottom: 3rem;

  option {
    background-color: ${(props) => props.theme.colors.fillSecondary};
  }
`;
