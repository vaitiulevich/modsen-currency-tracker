import styled from 'styled-components';

export const ToggleContainer = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

export const ToggleInput = styled.input`
  display: none;
`;

export const ToggleSlider = styled.span<{ checked: boolean }>`
  position: relative;
  width: 50px;
  height: 24px;
  background-color: ${({ checked }) => (checked ? '#4CAF50' : '#ccc')};
  border-radius: 50px;
  border: ${(props) => props.theme.border.borderSwither};
  background-color: transparent;
  transition: background-color 0.2s ease;

  &::before {
    content: '';
    position: absolute;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    background: white;
    transition: transform 0.2s ease;
    border: ${(props) => props.theme.border.borderSwither};
    background-color: transparent;
    transform: ${({ checked }) =>
      checked ? 'translateX(26px)' : 'translateX(0px)'};
  }
`;
