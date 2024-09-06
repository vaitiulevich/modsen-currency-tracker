import { endPoints, URL_CURRENCY_API } from '@constants/urls';
import React from 'react';

import {
  StatusDot,
  StatusDotPanel,
  StatusDotShadow,
  UpdatedContainer,
} from './styled';
const UpdatedStatus: React.FC = () => {
  const lastUpdatedString = JSON.parse(
    localStorage.getItem(`${URL_CURRENCY_API}${endPoints.latestCurrency}`) ||
      'null',
  ).meta.last_updated_at;
  const lastUpdated = new Date(lastUpdatedString);

  return (
    <UpdatedContainer>
      <StatusDotPanel>
        <StatusDotShadow></StatusDotShadow>
        <StatusDot></StatusDot>
      </StatusDotPanel>
      <div>
        <p>
          Last updated at {lastUpdated.getHours()}:{lastUpdated.getMinutes()}
          {lastUpdated.getHours() <= 12 ? 'am' : 'pm'}
        </p>
      </div>
    </UpdatedContainer>
  );
};
export default UpdatedStatus;
