import 'mapbox-gl/dist/mapbox-gl.css';

import { Component, createRef, RefObject } from 'react';
import { MAPBOX_STYLES, MAPBOX_ZOOM } from '@constants/map';
import { MAPBOX_TOKEN } from '@constants/urls';
import { BankMapProps } from 'interfaces/banks.interface';
import mapboxgl from 'mapbox-gl';

import { MapBox } from './styled';

mapboxgl.accessToken = MAPBOX_TOKEN;

class BankMap extends Component<BankMapProps> {
  private mapContainer: RefObject<HTMLDivElement> = createRef();
  private map: mapboxgl.Map | null = null;
  private markers: mapboxgl.Marker[] = [];

  componentDidMount() {
    this.initializeMap();
  }

  componentDidUpdate(prevProps: BankMapProps) {
    if (prevProps.banks !== this.props.banks) {
      this.updateMarkers();
    }
  }

  initializeMap() {
    const { center } = this.props;

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current!,
      style: MAPBOX_STYLES,
      center,
      zoom: MAPBOX_ZOOM,
    });

    this.addMarkers();
  }

  addMarkers() {
    const { banks } = this.props;
    this.markers.forEach((marker) => marker.remove());
    this.markers = [];
    banks.forEach((bank) => {
      const marker = new mapboxgl.Marker()
        .setLngLat(bank.coordinates)
        .setPopup(
          new mapboxgl.Popup().setHTML(`
            <style>
        .popup-content {
          color:black;
        }
      </style>
          <div class="popup-content">
            <h3>${bank.name}</h3>
            <p>Адрес: ${bank.address}</p>
            <p>Рабочие часы: ${bank.timeWork}</p>
          </div>
        `),
        )
        .addTo(this.map!);
      this.markers.push(marker);
    });
  }

  updateMarkers() {
    this.addMarkers();
  }

  render() {
    return <MapBox ref={this.mapContainer} />;
  }
}

export default BankMap;
