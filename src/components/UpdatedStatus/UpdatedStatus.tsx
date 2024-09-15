import { useCurrencyContext } from '@utils/hooks/useCurrencyContext';

import {
  StatusDot,
  StatusDotPanel,
  StatusDotShadow,
  UpdatedContainer,
} from './styled';
const UpdatedStatus = () => {
  const { lastUpdated } = useCurrencyContext();
  const lastUpdatedDate = new Date(lastUpdated.last_updated_at);

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
                Last updated at {lastUpdatedDate.getUTCHours()}:
                {lastUpdatedDate.getUTCMinutes()}
                {lastUpdatedDate.getUTCHours() <= 12 ? 'am' : 'pm'}
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
