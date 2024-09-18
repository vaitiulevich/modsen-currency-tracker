import { memo } from 'react';
import Loader from '@components/Loader/Loader';
import ValuePanel from '@components/ValuePanel/ValuePanel';
import { STOCKS_LIST } from '@constants/currency';
import { useCurrencyContext } from '@utils/hooks/useCurrencyContext';
import withScrollAnimation from '@utils/HOC/withScrollAnimation';

import { AllCurrencyContainer, HomeContainer, Title } from './styled';

const Home = () => {
  const { currencyList, valuesList, loading } = useCurrencyContext();

  if (loading) {
    return <Loader />;
  }

  const renderStocks = () => {
    return STOCKS_LIST.map((item) => (
      <ValuePanel
        key={item.id}
        item={item}
        value={+item.value}
        isCurrency={false}
      />
    ));
  };

  const renderQuotes = () => {
    return currencyList.map((item) => (
      <ValuePanel
        key={item.code}
        item={item}
        value={valuesList && item.code ? valuesList[item.code].value : 0}
        isCurrency={true}
      />
    ));
  };

  return (
    <HomeContainer>
      <Title>Stocks</Title>
      <AllCurrencyContainer>{renderStocks()}</AllCurrencyContainer>
      <Title>Quotes</Title>
      <AllCurrencyContainer>{renderQuotes()}</AllCurrencyContainer>
    </HomeContainer>
  );
};

export default memo(withScrollAnimation(Home));
