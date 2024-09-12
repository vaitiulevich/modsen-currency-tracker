import styled from 'styled-components';

export const FormCurrency = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FormCurrencyInput = styled.input`
  background-color: ${(props) => props.theme.colors.fillSecondary};
  color: ${(props) => props.theme.colors.generalFont};
  padding: 0.5rem;
  border: none;
  margin-top: 0.5rem;
  width: 100%;
`;
export const SubmitButton = styled.button`
  margin: 1rem auto;
  padding: 1rem 2rem;
  background: ${(props) => props.theme.colors.fillSecondary};
  color: ${(props) => props.theme.colors.generalFont};
  border: 1px solid ${(props) => props.theme.colors.fillSecondary};
  outline: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.accent};
    border: 1px solid ${(props) => props.theme.colors.accent};
  }
`;
export const FormCurrencyInpPanel = styled.div`
  width: 100%;
  text-align: start;
`;