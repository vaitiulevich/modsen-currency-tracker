import { PureComponent } from 'react';
import { images } from '@constants/images';
import { NO_CURRENCY, searchInputPlaceholder } from '@constants/messages';
import { CurrencySearchProps } from 'interfaces/banks.interface';
import { Currency } from 'interfaces/currency.inteface';

import {
  CurrencyList,
  CurrencyListItem,
  SearchButton,
  SearchContainer,
  SearchInput,
  SearchInputPanel,
  SearchTitle,
} from './styled';

class CurrencySearch extends PureComponent<
  CurrencySearchProps,
  { isFocused: boolean }
> {
  private blurTimeout: NodeJS.Timeout | null = null;

  constructor(props: CurrencySearchProps) {
    super(props);
    this.state = {
      isFocused: false,
    };
  }

  componentWillUnmount() {
    if (this.blurTimeout) {
      clearTimeout(this.blurTimeout);
    }
  }

  handleBlur = () => {
    this.blurTimeout = setTimeout(() => {
      this.setState({ isFocused: false });
    }, 300);
  };

  handleSelectCurrency = (currency: Currency) => {
    const { onSelectCurrency } = this.props;
    onSelectCurrency(currency);
    this.setState({ isFocused: false });
  };

  renderCurrencyList() {
    const { searchableCurrency } = this.props;

    if (searchableCurrency.length === 0) {
      return (
        <CurrencyList>
          <CurrencyListItem>{NO_CURRENCY}</CurrencyListItem>
        </CurrencyList>
      );
    }
    return (
      <CurrencyList>
        {searchableCurrency.map((currency) => (
          <CurrencyListItem
            key={currency.code}
            onClick={() => this.handleSelectCurrency(currency)}
          >
            {currency.name}
          </CurrencyListItem>
        ))}
      </CurrencyList>
    );
  }

  shouldComponentUpdate(
    nextProps: CurrencySearchProps,
    nextState: { isFocused: boolean },
  ) {
    return (
      nextProps.searchTerm !== this.props.searchTerm ||
      nextProps.searchableCurrency !== this.props.searchableCurrency ||
      nextState.isFocused !== this.state.isFocused
    );
  }

  render() {
    const { searchTerm, handleSearch } = this.props;
    const { isFocused } = this.state;

    return (
      <SearchContainer>
        <SearchTitle>Search currency in the bank</SearchTitle>
        <SearchInputPanel>
          <SearchInput
            placeholder={searchInputPlaceholder}
            value={searchTerm}
            onChange={handleSearch}
            onFocus={() => this.setState({ isFocused: true })}
            onBlur={this.handleBlur}
          />
          <SearchButton>
            <img src={images.searchIcon} alt="search" />
          </SearchButton>
        </SearchInputPanel>
        {isFocused && this.renderCurrencyList()}
      </SearchContainer>
    );
  }
}

export default CurrencySearch;
