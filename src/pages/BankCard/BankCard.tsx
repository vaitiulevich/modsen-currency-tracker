import BankMap from '@components/BankMap/BankMap';
import React from 'react';

import { BankCardContainer } from './styled';

interface Bank {
  name: string;
  coordinates: [number, number]; // [долгота, широта]
}
// interface Bank {
//   name: string;
//   coordinates: { lat: number; lng: number };
// }

interface BankCoordinates {
  lat: number;
  lng: number;
}

interface BankState {
  bankName: string;
  city: string;
  coordinates: BankCoordinates[];
  error: string | null;
}
interface AppState {
  banks: Bank[];
  // currentBank: BankState;
}

class BankCard extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      banks: [
        // { name: 'Беларусбанк', coordinates: [27.5581, 53.9045] },
        // { name: 'Приорбанк', coordinates: [27.554, 53.906] },
        // { name: 'БПС-Сбербанк', coordinates: [27.563, 53.9065] },
        // { name: 'Альфа-Банк', coordinates: [27.561, 53.903] },
        // { name: 'Технобанк', coordinates: [27.57, 53.91] },
      ],
      // currentBank: {
      // bankName: 'Беларусбанк',
      // city: 'Минск',
      // coordinates: [],
      // error: null,
      // },
    };
  }
  // mapboxgl.accessToken =
  // 'pk.eyJ1Ijoia2F0ZWthdGUwMyIsImEiOiJjbTBxbzdxZGQwMDVnMmlzYmYzOWY2bXVzIn0.gHTo5KsWLetooYvXZK0tsw';

  getCoordinates = async (address: string) => {
    const accessToken =
      'pk.eyJ1Ijoia2F0ZWthdGUwMyIsImEiOiJjbTBxbzdxZGQwMDVnMmlzYmYzOWY2bXVzIn0.gHTo5KsWLetooYvXZK0tsw'; // Замените на ваш токен
    try {
      console.log(encodeURIComponent(address));
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${accessToken}`,
      );

      if (!response.ok) {
        throw new Error('Ошибка при получении данных');
      }

      const data = await response.json();
      if (data.features.length > 0) {
        const newCoordinates = data.features.map((feature: any) => ({
          name: address,
          coordinates: [
            feature.geometry.coordinates[0],
            feature.geometry.coordinates[1],
          ],
        }));
        // console.log(newCoordinates);

        // this.state = {
        //   banks: [...this.state.banks, ...newCoordinates],
        // };
        this.setState((prevState) => ({
          banks: [...prevState.banks, ...newCoordinates],
          error: null,
        }));
        // this.setState({ coordinates, error: null });
      } else {
        throw new Error('Адрес не найден');
      }
      // console.log(this.state);
    } catch (error) {
      console.log(error);
      // this.setState({ error: error.message, coordinates: null });
    }
  };

  handleSearch = () => {
    const bankName = 'Belarusbank';
    this.getCoordinates(`Belarusbank, Minsk`);
    this.getCoordinates(`Priorbank, Minsk`);
    // this.getCoordinates(`Технобанк, Minsk`);
    console.log(this.state.banks);
  };

  render() {
    // console.log(this.state.banks);
    return (
      <div>
        <BankCardContainer>
          <div>
            <button onClick={this.handleSearch}>ff</button>
            <h2>Search currency in the bank</h2>
            <input placeholder="Сurrency search..." />
          </div>
        </BankCardContainer>
        {/* <BankMap banks={this.state.banks} /> */}
      </div>
    );
  }
}

export default BankCard;
