import BankMap from '@components/BankMap/BankMap';
import CurrencySearch from '@components/CurrencySearch/CurrencySearch';
import { allBanks } from '@constants/banks';
import { CurrencyContext, CurrencyContextType } from '@store/CurrencyContext';
import { BankCardState } from 'interfaces/banks.interface';
import { Currency } from 'interfaces/currency.inteface';
import React from 'react';

class BankCard extends React.Component<{}, BankCardState> {
  static contextType = CurrencyContext;
  context!: CurrencyContextType;
  constructor(props: {}) {
    super(props);
    this.state = {
      banks: allBanks,
      searchTerm: '',
      filteredBanks: [],
      searcebleCurrency: [],
    };
  }
  componentDidMount() {
    this.setState((prevState) => ({
      ...prevState,
      filteredBanks: this.state.banks,
    }));
  }

  handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase().trim();
    this.setState((prevState) => ({
      ...prevState,
      searchTerm,
    }));
    const { currencyList } = this.context;

    const searcebleCurrency = currencyList.filter(
      (currency) =>
        currency.name?.toLowerCase().includes(searchTerm) ||
        currency.code?.toLowerCase().includes(searchTerm),
    );

    this.setState((prevState) => ({
      ...prevState,
      searcebleCurrency,
    }));
  };

  onSetCurrency = (currency: Currency) => {
    const code = currency.code || this.state.searchTerm;

    const filteredBanks = allBanks.filter(
      (bank) =>
        bank.name.toLowerCase().includes(code.toLowerCase()) ||
        bank.currency.some((curr) =>
          curr.toLowerCase().includes(code.toLowerCase()),
        ),
    );
    this.setState((prevState) => ({
      ...prevState,
      banks: filteredBanks,
    }));
  };

  render() {
    const { searchTerm } = this.state;
    return (
      <div>
        <CurrencySearch
          searchTerm={searchTerm}
          searcebleCurrency={this.state.searcebleCurrency}
          onSearch={this.handleSearch}
          onSelectCurrency={this.onSetCurrency}
        />
        <BankMap banks={this.state.banks} />
      </div>
    );
  }
}

export default BankCard;
