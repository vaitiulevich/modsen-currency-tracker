import { Logo } from '@components/Logo/Logo';

import { NoPageContainer } from './styled';

export const NoPageYet = () => {
  return (
    <NoPageContainer>
      <Logo />
      <p>There is no page yet</p>
    </NoPageContainer>
  );
};
