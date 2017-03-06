import React, { PropTypes } from 'react';
import { Gmaps, Marker, InfoWindow } from 'react-gmaps';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Icon from './Icons.jsx';
import colors from './Colors.jsx';

class Map extends React.Component {

  static onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true,
      panControl: true,
      zoomControl: true,
      mapTypeControl: true,
      scaleControl: true,
      streetViewControl: true,
      overviewMapControl: true,
      rotateControl: true,
    });
  }

  static onDragEnd(e) {
    console.warn('onDragEnd', e);
  }

  static onCloseClick() {
    console.warn('onCloseClick');
  }

  static onClick(e) {
    console.warn('onClick', e);
  }


  constructor(props) {
    super(props);
    this.state = {
      location: {
        address: props.address,
        latitude: props.lat,
        longitude: props.lng,
      },
      googleKey: null,
    };
    this.setStateGeoLocate = this.setStateGeoLocate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition((location) => {
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coords.latitude},${location.coords.longitude}`)
      .then(response => response.json())
      .then((json) => {
        this.setStateGeoLocate(json);
      });
    });
  }
  componentWillReceiveProps(nextprops) {
    if (nextprops.coordinates) {
      const newLatitude = +nextprops.coordinates.latitude;
      const newLongitude = +nextprops.coordinates.longitude;
      const newAddress = nextprops.coordinates.address;
      this.setState({
        location: {
          latitude: newLatitude,
          longitude: newLongitude,
          address: newAddress,
        },
      });
    }
  }

  /**
   *
   * @param {json} Json object from Google API call
   *
   * @returns Sets the location of the map
   *     location parameter to the geolocation's coordinates.
   * @param {geocode} sets the location for the form data
   * @param {setState} sets the location for the map to centralize
  */
  setStateGeoLocate(json) {
    const location = {
      latitude: json.results[0].geometry.location.lat,
      longitude: json.results[0].geometry.location.lng,
      address: json.results[0].formatted_address,
    };
    this.setState({ location });
    this.props.setCoordinates(location);
  }
  /**
   *
   * @param {event} form submission event
   * @param this, state, Takes the search position from state object
   *
   * @returns Sets the location of the map for a query, and sets the event form
   *          location parameter to the geolocation's coordinates.
   */
  handleSubmit(event) {
    event.preventDefault();

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.search}`)
    .then(response => response.json())
    .then((json) => {
      this.setStateGeoLocate(json);
    });
  }
/**
 *
 * @param {event} form submission event
 * @param this, state, Takes the search position from state object
 *
 * @returns Sets the location of the map for a query, and sets the event form
 *          location parameter to the geolocation's coordinates.
 */
  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    return (
      <div>
        {/* MAP */}
        <Gmaps
          className="center"
          width={'500px'}
          height={'300px'}
          border-radius={'10px'}
          lat={this.props.lat}
          lng={this.props.lng}
          zoom={12}
          style={{ borderRadius: '5px' }}
          params={{ v: '3.exp', key: 'AIzaSyBRQ6rMKIjU7tsFNGxfmRhySiZXOt87Ykc' }}
          onMapCreated={this.onMapCreated}
        >
          <Marker
            lat={this.props.lat}
            lng={this.props.lng}
            draggable
            onDragEnd={this.onDragEnd}
          />
          <InfoWindow
            lat={this.props.lat}
            lng={this.props.lng}
            onCloseClick={this.onCloseClick}
            content={this.props.address}
          />
        </Gmaps>

        {/* LOCATION INPUT */}
        <div className="form">
          <TextField
            id="address"
            onChange={this.handleChange}
            hintText="Search location..."
            hintStyle={{ color: colors.medium }}
            underlineStyle={{ borderColor: colors.medium }}
            underlineFocusStyle={{ borderColor: colors.light }}
          />
          <FlatButton
            type="submit"
            icon={<Icon.map />}
            backgroundColor={colors.accent}
            hoverColor={colors.light}
            onTouchTap={this.handleSubmit}
          />
        </div>
        {/* <form onSubmit={this.handleSubmit} >
          <div>{<Icon.map />}</div>
          <input id="address" name="location" onChange={this.handleChange} type="text" />
          <button type="submit">
            Go
          </button>
        </form> */}
      </div>
    );
  }
}

Map.defaultProps = {
  address: 'Loading...',
  lat: 0,
  lng: 0,
};

Map.propTypes = {
  address: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
  setCoordinates: PropTypes.func.isRequired,
};

export default Map;
