import React from 'react';
import Auth from '../modules/Auth.js';
import Dashboard from '../components/Dashboard.jsx';

const parseCoordinates = function parseCoordinates(coordString) {
  let coordinates = coordString.split('longitude');
  const coordinateObj = {
    address: coordinates[0]
  };
  coordinates = coordinates[1].split(' ');
  coordinateObj.latitude = +coordinates[coordinates.length - 1];
  coordinateObj.longitude = +coordinates[1];

  return coordinateObj;
};

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secretData: '',
      eventList: [],
      detailsBox: {
        name,
      },
    };
    this.fetchEvents();

    this.setCoordinates = this.setCoordinates.bind(this);
    this.setDetailsBox = this.setDetailsBox.bind(this);
    this.setEventList = this.setEventList.bind(this);
    this.fetchEvents = this.fetchEvents.bind(this);
  }

  /**
   * This method will be executed after initial rendering.
   * @param {none} sets security token
   * @returns sets secret message on state for authorization
   * with the given location
   */
  componentDidMount() {
    fetch('/api/dashboard', {
      method: 'GET',
      headers: new Headers({
        'Content-type': 'application/x-www-form-urlencoded',
        authorization: `bearer ${(Auth.getToken())}`
      })
    }).then(res => res.json())
    .then((data) => {
      this.setState({
        secretData: data.message,
      });
    })
    .catch(err => `Whoops: ${err}`);
  }

  /**
   * Returns the sum of a and b
   * @param {event} the event object a user clicks on
   * @return Sets the state detailbox to the clicked event
   */
  setDetailsBox(detailsBox) {
    this.setState({ detailsBox });
  }

  /*
  *
  * @param {events} a list of event objects from query
  * @returns Sets the state eventlist to the array of events
  */
  setEventList(eventList) {
    this.setState({ eventList });
  }

  /*
  *
  * @param {location} will be a set of coordinates
  * @returns Sets the state coordinates, for each event list member
  * allowing for the map to be updated
  */
  setCoordinates(locationUnParsed) {
    const location = parseCoordinates(locationUnParsed);
    this.setState({ location });
  }

  /*
  * @param {events} a list of event objects from query
  * @returns Sets the state eventlist to the array of events
  */
  fetchEvents() {
    fetch('/events')
      .then(events => events.json())
      .then(eventList => this.setState({ eventList, detailsBox: eventList[0] }))
      .catch(err => console.error(err));
  }

  render() {
    return (<Dashboard
      coordinates={this.state.location}
      setCoordinates={this.setCoordinates}
      setDetBox={this.setDetailsBox}
      setEveList={this.setEventList}
      data={this.state}
      fetchEvents={this.fetchEvents}
    />);
  }

}

export default DashboardPage;
