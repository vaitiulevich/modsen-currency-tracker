import { Component } from 'react';
import { images } from '@constants/images';
import { SearchInputPlaceholder } from '@constants/messages';
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
    }, 100);
  };

  handleSelectCurrency = (currency: Currency) => {
    this.props.onSelectCurrency(currency);
    this.setState({ isFocused: false });
  };

  render() {
    const { searchTerm, searcebleCurrency, onSearch } = this.props;
    const { isFocused } = this.state;

    return (
      <SearchContainer>
        <SearchTitle>Search currency in the bank</SearchTitle>
        <SearchInputPanel>
          <SearchInput
            placeholder={SearchInputPlaceholder}
            value={searchTerm}
            onChange={onSearch}
            onFocus={() => this.setState({ isFocused: true })}
            onBlur={this.handleBlur}
          />
          <SearchButton>
            <img src={images.searchIcon} alt="search" />
          </SearchButton>
        </SearchInputPanel>
        {isFocused && searcebleCurrency.length > 0 && (
          <CurrencyList>
            {searcebleCurrency.map((currency, index) => (
              <CurrencyListItem
                key={index}
                onClick={() => this.handleSelectCurrency(currency)}
              >
                {currency.name}
              </CurrencyListItem>
            ))}
          </CurrencyList>
        )}
      </SearchContainer>
    );
  }
}

export default CurrencySearch;
