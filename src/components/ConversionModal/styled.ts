import { breakpoints } from '@constants/breakpoints';
import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #00000080;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ModalContent = styled.div`
  background: ${(props) => props.theme.colors.modalFill};
  backdrop-filter: blur(1.5rem);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 50%;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}px) {
    width: 90%;
  }
`;

export const ConversionResult = styled.div`
  padding: 1rem;
  border: 0.01rem solid;
  width: 70%;
  margin: 1rem auto 0;
`;

export const ModalTitle = styled.h2`
  font-size: ${(props) => props.theme.typography.fontSize.large};
`;

export const ConversionCurencyPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const ModalSelect = styled.select`
  background-color: transparent;
  color: ${(props) => props.theme.colors.generalFont};
  padding: 0.2rem;
  cursor: pointer;
  border: none;

  option {
    background-color: ${(props) => props.theme.colors.fillSecondary};
  }
`;

export const ModalInput = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: ${(props) => props.theme.border.borderSwither};
  color: ${(props) => props.theme.colors.generalFont};
  padding: 0.2rem;
  margin: 0.2rem;
`;

export const CloseButton = styled.button`
  margin: 1rem;
  padding: 1rem 2rem;
  background: ${(props) =>
    props.disabled
      ? props.theme.colors.modalFill
      : props.theme.colors.fillSecondary};
  color: ${(props) =>
    props.disabled
      ? props.theme.colors.footerSecondaryFont
      : props.theme.colors.generalFont};
  border: 1px solid ${(props) => props.theme.colors.fillSecondary};
  outline: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: ${(props) =>
      props.disabled
        ? props.theme.colors.footerSecondaryFont
        : props.theme.colors.accent};
    border: 1px solid
      ${(props) =>
        props.disabled
          ? props.theme.colors.footerSecondaryFont
          : props.theme.colors.accent};
  }
`;

export const ModalInputPanel = styled.div`
  height: 3rem;
`;
export const ErrorPanel = styled.p`
  color: ${(props) => props.theme.colors.errMessage};
  font-size: ${(props) => props.theme.typography.fontSize.small};
`;
