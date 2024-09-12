import { breakpoints } from '@constants/breakpoints';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.fillBackground};
  padding: ${(props) => props.theme.indents.containerPaddingDesctop};
  color: ${(props) => props.theme.colors.generalFont};
  margin-top: 2rem;

  @media (max-width: ${breakpoints.tablet}px) {
    padding: ${(props) => props.theme.indents.containerPaddingLaptop};
  }
  @media (max-width: ${breakpoints.mobile}px) {
    padding: ${(props) => props.theme.indents.containerPaddingMobile};
  }
`;

export const FooterContent = styled.div`
  width: 35%;
  @media (max-width: ${breakpoints.mobile}px) {
    width: auto;
  }
`;

export const Logo = styled.div``;

export const LogoTitle = styled.h2`
  background: ${(props) => props.theme.colors.accentFont};
  color: transparent;
  background-clip: text;
  text-align: end;
  white-space: nowrap;
  margin-left: 1rem;
  font-size: ${(props) => props.theme.typography.fontSize.average};
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};
`;
export const LogoHeadline = styled.div`
  display: flex;
  align-items: center;
`;

export const TopFooter = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${breakpoints.mobile}px) {
    flex-direction: column;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  max-width: 1200px;
  @media (max-width: ${breakpoints.mobile}px) {
    width: auto;
  }
`;

export const Column = styled.div`
  flex: 1;
  margin: 0 1rem;

  h3 {
    font-size: ${(props) => props.theme.typography.fontSize.average};
    margin-bottom: 0.5rem;
  }
`;

export const CopyrightInfo = styled.p`
  padding: 2.5rem 0 0.5rem;
  color: ${(props) => props.theme.colors.footerSecondaryFont};
  font-size: ${(props) => props.theme.typography.fontSize.medium};
`;

export const NavItem = styled.a`
  margin: 0.2rem 0;
  display: block;
  color: ${(props) => props.theme.colors.footerSecondaryFont};
  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;
