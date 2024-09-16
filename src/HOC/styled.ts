import styled, { css } from 'styled-components';

interface AnimatedSectionProps {
  isVisible: boolean;
}

export const Section = styled.div<AnimatedSectionProps>`
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.5s ease-out,
    transform 0.5s ease-out;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`;

export const Title = styled.h2``;

export const Paragraph = styled.p``;
