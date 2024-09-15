import { useCurrencyContext } from '@store/CurrencyContext';

import {
  StatusDot,
  StatusDotPanel,
  StatusDotShadow,
  UpdatedContainer,
} from './styled';
const UpdatedStatus = () => {
  const lastUpdatedString = useCurrencyContext().lastUpdated.last_updated_at;
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
            {lastUpdated ? (
              <p>
                Last updated at {lastUpdated.getUTCHours()}:
                {lastUpdated.getUTCMinutes()}
                {lastUpdated.getUTCHours() <= 12 ? 'am' : 'pm'}
              </p>
            ) : (
              <p>Not updated yet</p>
            )}
          </div>
        </>
      )}
    </UpdatedContainer>
  );
};
export default UpdatedStatus;
