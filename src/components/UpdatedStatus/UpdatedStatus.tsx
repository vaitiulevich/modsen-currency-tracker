import { endPoints, URL_CURRENCY_API } from '@constants/urls';
import React from 'react';

import {
  StatusDot,
  StatusDotPanel,
  StatusDotShadow,
  UpdatedContainer,
} from './styled';
const UpdatedStatus: React.FC = () => {
  const storedData = localStorage.getItem(
    `${URL_CURRENCY_API}${endPoints.latestCurrency}`,
  );

  const parsedData = storedData && JSON.parse(storedData).data;

  const lastUpdatedString = parsedData?.meta?.last_updated_at;

  const lastUpdated = new Date(lastUpdatedString);

  return (
    <UpdatedContainer>
      {lastUpdated && (
        <>
          <StatusDotPanel>
            <StatusDotShadow></StatusDotShadow>
            <StatusDot></StatusDot>
          </StatusDotPanel>
          <div>
            <p>
              Last updated at {lastUpdated.getUTCHours()}:
              {lastUpdated.getUTCMinutes()}
              {lastUpdated.getUTCHours() <= 12 ? 'am' : 'pm'}
            </p>
          </div>
        </>
      )}
    </UpdatedContainer>
  );
};
export default UpdatedStatus;
