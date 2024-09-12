import React, { useContext } from 'react';
import Loader from '@components/Loader/Loader';
import ValuePanel from '@components/ValuePanel/ValuePanel';
import { STOCKS_LIST } from '@constants/currency';
import { CurrencyContext } from '@store/CurrencyContext';
import { Currency } from 'interfaces/currency.inteface';

import { AllCurrencyContainer, HomeContainer, Title } from './styled';

const Home: React.FC = () => {
  const context = useContext(CurrencyContext);

  if (!context) {
    return <div>Error: Context not found</div>;
  }

  const { currencyList, valuesList, error, loading } = context;

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <HomeContainer>
      <Title>Stocks</Title>
      <AllCurrencyContainer>
        {STOCKS_LIST.map((item) => (
          <ValuePanel
            key={item.id}
            item={item}
            value={+item.value}
            isCurrency={false}
          />
        ))}
      </AllCurrencyContainer>
      <Title>Quotes</Title>
      <AllCurrencyContainer>
        {currencyList.map((item: Currency) => (
          <ValuePanel
            key={item.code}
            item={item}
            value={valuesList && item.code ? valuesList[item.code].value : 0}
            isCurrency={true}
          />
        ))}
      </AllCurrencyContainer>
    </HomeContainer>
  );
};

export default Home;
