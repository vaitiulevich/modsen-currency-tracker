import 'mapbox-gl/dist/mapbox-gl.css';

import { Component, createRef, RefObject } from 'react';
import { MAPBOX_STYLES, MAPBOX_ZOOM } from '@constants/map';
import { MAPBOX_TOKEN } from '@constants/urls';
import { BankMapProps } from 'interfaces/banks.interface';
import mapboxgl from 'mapbox-gl';

import { MapBox } from './styled';

mapboxgl.accessToken = MAPBOX_TOKEN;

class BankMap extends Component<BankMapProps> {
  private mapContainer: RefObject<HTMLDivElement>;
  private map: mapboxgl.Map | null;
  private markers: mapboxgl.Marker[];

  constructor(props: BankMapProps) {
    super(props);
    this.mapContainer = createRef();
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
      style: MAPBOX_STYLES,
      center: [27.55924, 53.90454],
      zoom: MAPBOX_ZOOM,
    });

    this.addMarkers();
  }

  addMarkers() {
    this.markers.forEach((marker) => marker.remove());
    this.markers = [];
    this.props.banks.forEach((bank) => {
      const marker = new mapboxgl.Marker()
        .setLngLat(bank.coordinates)
        .setPopup(new mapboxgl.Popup().setText(bank.name))
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