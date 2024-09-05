import { breakpoints } from '@constants/breakpoints';
import styled from 'styled-components';

export const ContactContainer = styled.section`
  padding: ${(props) => props.theme.indents.containerPaddingDesctop};
`;

export const ContactTitle = styled.h2`
  width: 43%;
  font-size: ${(props) => props.theme.typography.fontSize.average};
  margin: 2rem 0;
  padding-bottom: 1rem;
  border-bottom: ${(props) => props.theme.border.borderPanels};
`;

export const ContactList = styled.div`
  display: grid;
  gap: 1rem 5rem;
  grid-template-columns: repeat(2, 1fr);
`;
