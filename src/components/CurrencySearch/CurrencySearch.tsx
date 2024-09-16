import { Component } from 'react';
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

class CurrencySearch extends Component<
  CurrencySearchProps,
  { isFocused: boolean }
> {
  constructor(props: CurrencySearchProps) {
    super(props);
    this.state = {
      isFocused: false,
    };
  }

  handleBlur = () => {
    setTimeout(() => {
      this.setState({ isFocused: false });
    }, 300);
  };

  handleSelectCurrency = (currency: Currency) => {
    const { onSelectCurrency } = this.props;
    console.log(currency);
    onSelectCurrency(currency);
    this.setState({ isFocused: false });
  };

  renderCurrencyList() {
    const { searchableCurrency } = this.props;
    console.log(searchableCurrency);
    if (searchableCurrency.length === 0) {
      console.log(searchableCurrency);

      return <CurrencyListItem>{NO_CURRENCY}</CurrencyListItem>;
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

  render() {
    const { searchTerm, searchableCurrency, onSearch } = this.props;
    const { isFocused } = this.state;
    const isShowCurrencyList = isFocused && searchableCurrency.length > 0;

    return (
      <SearchContainer>
        <SearchTitle>Search currency in the bank</SearchTitle>
        <SearchInputPanel>
          <SearchInput
            placeholder={searchInputPlaceholder}
            value={searchTerm}
            onChange={onSearch}
            onFocus={() => this.setState({ isFocused: true })}
            onBlur={this.handleBlur}
          />
          <SearchButton>
            <img src={images.searchIcon} alt="search" />
          </SearchButton>
        </SearchInputPanel>
        {isShowCurrencyList && this.renderCurrencyList()}
      </SearchContainer>
    );
  }
}

export default CurrencySearch;
