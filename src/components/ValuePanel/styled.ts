import styled from 'styled-components';

export const ValuePanelContainer = styled.div<{ iscurrency: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.fillSecondary};
  border: ${(props) => props.theme.border.borderPanels};
  border-radius: 5px;
  cursor: ${(props) => props.iscurrency && 'pointer'};

  &:hover {
    background-color: ${(props) =>
      props.iscurrency && props.theme.colors.hoverFill};
  }

  p {
    color: ${(props) => props.theme.colors.secondaryFont};
  }
`;

export const CurrencyName = styled.h3`
  font-size: ${(props) => props.theme.typography.fontSize.average};
`;

export const ValueIcon = styled.div`
  height: 3rem;
  border-radius: 5px;
  margin-right: 1rem;
  background-color: ${(props) => props.theme.colors.fillSecondary};
`;
