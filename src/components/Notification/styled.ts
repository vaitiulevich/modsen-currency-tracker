import styled from 'styled-components';

export const NotificationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const NotificationText = styled.div`
  font-size: ${(props) => props.theme.typography.fontSize.average};
  background-color: ${(props) => props.theme.colors.fillSecondary};
  position: fixed;
  bottom: 2rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.accent};
`;
