import { breakpoints } from '@constants/breakpoints';
import styled from 'styled-components';

export const TimelineContainer = styled.section`
  padding: ${(props) => props.theme.indents.containerPaddingDesctop};

  canvas {
    width: 100%;
    height: 400px;
  }
`;
