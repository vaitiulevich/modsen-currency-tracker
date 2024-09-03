import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%,100% {
    transform: scale(1);
  }
  50% {
    transform: scale(.8);
  }
`;

export const UpdatedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;

  p {
    font-size: ${(props) => props.theme.typography.fontSize.average};
  }
`;
export const StatusDotShadow = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.accent};
  opacity: 0.4;
  animation: ${pulse} 2s infinite;
`;
export const StatusDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.accent};
  position: absolute;
`;
export const StatusDotPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  position: relative;
  margin-right: 1rem;
`;
