import React from 'react';

import {
  StatusDot,
  StatusDotPanel,
  StatusDotShadow,
  UpdatedContainer,
} from './styled';
const UpdatedStatus: React.FC = () => {
  return (
    <UpdatedContainer>
      <StatusDotPanel>
        <StatusDotShadow></StatusDotShadow>
        <StatusDot></StatusDot>
      </StatusDotPanel>
      <div>
        <p>Last updated at 11:59pm</p>
      </div>
    </UpdatedContainer>
  );
};
export default UpdatedStatus;
