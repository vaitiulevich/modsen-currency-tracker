import { breakpoints } from '@constants/breakpoints';
import styled from 'styled-components';

export const TimelineContainer = styled.section`
  padding: ${(props) => props.theme.indents.containerPaddingDesctop};

  canvas {
    /* width: 100%; */
    height: 30rem;
  }

  @media (max-width: ${breakpoints.tablet}px) {
    padding: ${(props) => props.theme.indents.containerPaddingLaptop};
  }
  @media (max-width: ${breakpoints.mobile}px) {
    padding: ${(props) => props.theme.indents.containerPaddingMobile};
  }
`;
