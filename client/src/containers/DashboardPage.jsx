/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

import React from 'react';
import Auth from '../modules/Auth.js';
import Dashboard from '../components/Dashboard.jsx';

class DashboardPage extends React.Component {

  static linkToCalender({ eventDateObj, eventTimeObj, title, description, location }) {
    const dateTime = `${eventDateObj.slice(0, 10)}T${eventTimeObj.slice(11)}`
      .replace(/-|:|\.\d\d\d/g, '');
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title.replace(' ', '+')}&dates=${dateTime}/${dateTime}&details=${description.replace(' ', '+')}&location=${location.split('longitude')[0].replace(' ', '+').replace(',', '')}&sf=true&output=xml`;

    window.open(url);
  }

  static parseCoordinates(coordString) {
    console.log(coordString, 'this is coordString in parseCoordinates');
    let coordinates = coordString.split('longitude');
    const coordinateObj = {
      address: coordinates[0]
    };
    coordinates = coordinates[1].split(' ');
    coordinateObj.latitude = +coordinates[coordinates.length - 1];
    coordinateObj.longitude = +coordinates[1];

    return coordinateObj;
  }

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

    // this.linkToCalender = this.linkToCalender.bind(this);
    // parseCoordinates = this.parseCoordinates.bind(this);
    this.setCoordinates = this.setCoordinates.bind(this);
    this.setCoordinates2 = this.setCoordinates2.bind(this);
    this.setDetailsBox = this.setDetailsBox.bind(this);
    this.fetchEvents = this.fetchEvents.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
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
    })
    .then(res => res.json())
    .then(data => this.setState({ secretData: data.message }))
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
  * @param {location} will be a set of coordinates
  * @returns Sets the state coordinates, for each event list member
  * allowing for the map to be updated
  */
  // TODO: Make these work, they are being used in different ways, pick one
  setCoordinates(coordString) {
    console.log(coordString, 'this is locationUnParsed in setCoordinatesConstructo');
    const location = this.constructor.parseCoordinates(coordString);
    this.setState({ location });
  }

  setCoordinates2(location) {
    this.setState({ location });
  }

  /*
  * @param {events} a list of event objects from query
  * @returns Sets the state eventlist to the array of events
  */
  fetchEvents() {
    console.log('fetch events hit');
    fetch('/events')
      .then(events => events.json())
      .then((eventList) => {
        console.log(eventList, 'these are events in fetch');
        this.setState({ eventList, detailsBox: eventList[0] });
      })
      .catch(err => console.error(err));
  }

  deleteEvent(event) {
    // TODO: this is async and should be fixed, then is not working
    const that = this;
    console.log('this is event', event);
    fetch(`/deleteEvent/${event._id}`, {
      method: 'DELETE',
    })
    .then((res) => {
      console.log(res);
      console.log(that.fetchEvents, 'this is fetch events');
      that.fetchEvents()
    });
    // this.fetchEvents();
    // this.fetchEvents();
  }

  render() {
    // TODO: Was passing coordinates but it was undefined...this may be a bug
    return (
      <Dashboard
        setCoordinates={this.setCoordinates}
        setCoordinates2={this.setCoordinates2}
        setDetailsBox={this.setDetailsBox}
        data={this.state}
        linkToCalender={this.constructor.linkToCalender}
        fetchEvents={this.fetchEvents}
        deleteEvent={this.deleteEvent}
      />
    );
  }

}

export default DashboardPage;
