import 'mapbox-gl/dist/mapbox-gl.css'; // Importing the CSS

import mapboxgl from 'mapbox-gl';
import React from 'react';

mapboxgl.accessToken =
  'pk.eyJ1Ijoia2F0ZWthdGUwMyIsImEiOiJjbTBxbzdxZGQwMDVnMmlzYmYzOWY2bXVzIn0.gHTo5KsWLetooYvXZK0tsw'; // Замените на ваш токен

interface Bank {
  name: string;
  coordinates: [number, number]; // [longitude, latitude]
}

interface BankMapProps {
  banks: Bank[];
}

class BankMap extends React.Component<BankMapProps> {
  private mapContainer: React.RefObject<HTMLDivElement>;
  private map: mapboxgl.Map | null;
  private markers: mapboxgl.Marker[];

  constructor(props: BankMapProps) {
    super(props);
    this.mapContainer = React.createRef();
    this.map = null;
    this.markers = [];
  }

  componentDidMount() {
    this.initializeMap();
  }

  componentDidUpdate(prevProps: BankMapProps) {
    if (prevProps.banks !== this.props.banks) {
      this.updateMarkers();
    }
  }

  initializeMap() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current!,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [27.55924, 53.90454], // Начальные координаты
      zoom: 11,
    });

    // Добавление маркеров при инициализации карты
    this.addMarkers();
  }

  addMarkers() {
    // Удаляем старые маркеры
    this.markers.forEach((marker) => marker.remove());
    this.markers = [];

    // Добавляем новые маркеры
    this.props.banks.forEach((bank) => {
      const marker = new mapboxgl.Marker()
        .setLngLat(bank.coordinates)
        .setPopup(new mapboxgl.Popup().setText(bank.name))
        .addTo(this.map!);
      this.markers.push(marker);
    });
  }

  updateMarkers() {
    this.addMarkers(); // Просто добавляем маркеры заново
  }

  render() {
    return (
      <div
        ref={this.mapContainer}
        style={{ width: '100%', height: '500px' }} // Установка размеров для карты
      />
    );
  }
}

export default BankMap;
