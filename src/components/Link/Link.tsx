import styled from 'styled-components';

export const Link = styled.a`
  transition: all 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.accent};
    transform: scale(1.02);
  }
`;
