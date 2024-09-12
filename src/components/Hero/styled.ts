import { breakpoints } from '@constants/breakpoints';
import styled from 'styled-components';

export const HeroHeadline = styled.h1`
  background: ${(props) => props.theme.colors.accentFont};
  color: transparent;
  background-clip: text;
  text-align: end;
  margin-right: 1.5rem;
  white-space: nowrap;
  font-size: ${(props) => props.theme.typography.fontSize.largest};
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};

  @media (max-width: ${breakpoints.tablet}px) {
    margin-right: 1rem;
    font-size: ${(props) => props.theme.typography.fontSize.large};
  }
  @media (max-width: ${breakpoints.mobile}px) {
    margin: 0;
    text-align: center;
  }
`;

export const HeroContainer = styled.section`
  background: ${(props) => props.theme.colors.linerGradientHero};
  padding: ${(props) => props.theme.indents.containerPaddingDesctop};
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: ${breakpoints.tablet}px) {
    padding: ${(props) => props.theme.indents.containerPaddingLaptop};
  }
  @media (max-width: ${breakpoints.mobile}px) {
    padding: ${(props) => props.theme.indents.containerPaddingMobile};
  }
`;

export const HeroLogo = styled.div`
  height: 17rem;

  @media (max-width: ${breakpoints.tablet}px) {
    height: 15rem;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    display: none;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: ${breakpoints.mobile}px) {
    align-items: center;
  }
`;

export const HeroSubtitle = styled.div`
  width: 50%;
  text-align: center;
  @media (max-width: ${breakpoints.tablet}px) {
    width: 70%;
    font-size: ${(props) => props.theme.typography.fontSize.medium};
  }
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: ${(props) => props.theme.typography.fontSize.small};
  }
`;
