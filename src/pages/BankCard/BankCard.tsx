import { ChangeEvent, Component } from 'react';
import BankMap from '@components/BankMap/BankMap';
import CurrencySearch from '@components/CurrencySearch/CurrencySearch';
import { allBanks } from '@constants/banks';
import { CENTER_MAP } from '@constants/map';
import { CurrencyContext, CurrencyContextType } from '@store/CurrencyContext';
import withScrollAnimation from '@utils/HOC/withScrollAnimation';
import { includesNormalizeStr } from '@utils/includesNormalizeStr';
import { BankCardState } from 'interfaces/banks.interface';
import { Currency } from 'interfaces/currency.inteface';

class BankCard extends Component<{}, BankCardState> {
  static contextType = CurrencyContext;
  context!: CurrencyContextType;
  constructor(props: {}) {
    super(props);
    this.state = {
      banks: allBanks,
      searchTerm: '',
      filteredBanks: [],
      searchableCurrency: [],
    };
  }
  componentDidMount() {
    this.setState((prevState) => ({
      ...prevState,
      filteredBanks: this.state.banks,
    }));
  }

  handleSearchableCurrencySearch = (searchTerm: string) => {
    const { currencyList } = this.context;

    const searchableCurrency = currencyList.filter(
      (currency) =>
        includesNormalizeStr(currency.name, searchTerm) ||
        includesNormalizeStr(currency.code, searchTerm),
    );
    this.setState((prevState) => ({
      ...prevState,
      searchableCurrency,
    }));
  };

  handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase().trim();
    this.setState(
      (prevState) => ({
        ...prevState,
        searchTerm,
      }),
      () => this.handleSearchableCurrencySearch(searchTerm),
    );
  };

  onSetCurrency = (currency: Currency) => {
    const { searchTerm } = this.state;
    const code = currency.code || searchTerm;

    const filteredBanks = allBanks.filter(
      (bank) =>
        includesNormalizeStr(bank.name, code.toLowerCase()) ||
        bank.currency.some((curr) =>
          includesNormalizeStr(curr, code.toLowerCase()),
        ),
    );
    this.setState((prevState) => ({
      ...prevState,
      searchTerm: code,
      banks: filteredBanks,
    }));
  };

  render() {
    const { searchTerm, banks, searchableCurrency } = this.state;
    return (
      <div>
        <CurrencySearch
          searchTerm={searchTerm}
          searchableCurrency={searchableCurrency}
          handleSearch={this.handleSearch}
          onSelectCurrency={this.onSetCurrency}
        />
        <BankMap banks={banks} center={CENTER_MAP} />
      </div>
    );
  }
}

export default withScrollAnimation(BankCard);
