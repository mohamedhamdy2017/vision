import React from 'react';
import {
  View,
  requireNativeComponent,
  StyleSheet,
  Platform,
  TextInput,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const moduleName = Platform.OS === 'ios' ? 'MapView' : 'MapViewManager';

const TomTomMap = requireNativeComponent(moduleName);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: '37.78825',
      longitude: '-122.4324',
      streetName: ''
    };
  }
  componentDidMount() {
    this.onMapReady();
  }

  async getLocation() {
    const {latitude, longitude, streetName} = this.state;

     const response = await fetch(
       `https://api.tomtom.com/routing/1/calculateRoute/${latitude},${longitude}:${latitude},${longitude}/json?&key=tfOF9G1mlrgw9A9mYaRdlOK5MhVXjbrW`,
     )
     console.log(response);
  }
  onMapReady = () => {
    Geolocation.getCurrentPosition(position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      this.setState({latitude, longitude}, () => this.getLocation());
    });
  };

  render() {
    const {latitude, longitude} = this.state;
    return (
      <>
        <View>
          <TextInput
            style={{
              width: '100%',
              height: '8%',
              position: 'absolute',
              backgroundColor: 'red',
              zIndex: 1,
              elevation: 4
            }}
            placeholder="Where to"
          />
        </View>
        <TomTomMap
          onMapReady={this.onMapReady}
          markers={[
            {lat: latitude, lng: longitude, label: 'location'},
            {lat: latitude, lng: longitude, label: 'location'},
          ]}
          mapZoom={17}
          mapCenter={{lat: latitude, lng: longitude}}
          style={{width: '100%', height: '100%'}}
        />
      </>
    );
  }
}

export default App;
