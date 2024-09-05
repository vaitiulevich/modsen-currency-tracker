import styled from 'styled-components';

export const ContactCardContainer = styled.div`
  padding: 1rem;
  border: ${(props) => props.theme.border.borderPanels};
  background: ${(props) => props.theme.colors.fillSecondary};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

export const ContactCardTitle = styled.h3`
  font-size: ${(props) => props.theme.typography.fontSize.average};
  color: ${(props) => props.theme.colors.accent};
`;
