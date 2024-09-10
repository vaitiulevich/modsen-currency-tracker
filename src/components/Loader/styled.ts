import styled from 'styled-components';

export const LoaderComponent = styled.div`
  border: 0.7rem solid ${(props) => props.theme.colors.footerSecondaryFont};
  border-top: 0.7rem ${(props) => props.theme.colors.accent} solid;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;
