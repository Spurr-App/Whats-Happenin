import React, { PropTypes } from 'react';
import Icon from './Icons.jsx';

/**
 * @param {coordinate string} will be a set of coordinates
 * @returns parsed string, allows the map to be updated with new
 * coordinates when the event location is clicked;
 */
const parseCoordinates = function parseCoordinates(coordString) {
  let coordinates = coordString.split('longitude');
  const coordinateObj = {
    address: coordinates[0]
  };
  coordinates = coordinates[1].split(' ');
  coordinateObj.latitude = +coordinates[coordinates.length - 1];
  coordinateObj.longitude = +coordinates[1];
}

const Event = ({ event, deleteEvent, setCoordinates, setDetailsBox, event: {
  title,
  eventTime,
  username,
  eventDate,
  businessName,
  busLink,
  location,
}, setCoordinates, setDetailsBox }) => {
  let address = location.split(' ');
  address.splice(-7, 7);
  address = address.join(' ');

/**
 * setDetailsBox passed down from mappage
 * @param {props.event} an event item
 * @returns sets the Event details box to this event
 */
  function setDetBox() {
    const coordinates = parseCoordinates(location);
    setCoordinates(coordinates);
    setDetailsBox(event);
  }

  function setCoords() {
    const coordinates = parseCoordinates(location);
    setCoordinates(coordinates);
  }

  const addAttendee = function addAttendee() {
    fetch('/addAttendee', { method: 'POST',
      params: { username: localStorage.getItem('email'), event: title }
    }).then((attended) => {
      if (attended) {
        event.attendees += 1;
      }
    });
  };
  return (
    <article className="eventdetail">
      <div className="left">
        <img className="image" alt="" src="" /><br />
        <button type="button" onClick={() => setDetailsBox(event)}>
          View Event
        </button>
        <button type="button" onClick={() => deleteEvent(event)}>
          Remove Event
        </button>
      </div>

      {/* EVENT INFO */}
      <table>
        <tbody>
          <tr>
            <td><Icon.star /></td>
            <td>{title}</td>
          </tr>
          <tr>
            <td><Icon.face /></td>
            <td>{username}</td>
          </tr>
          <tr>
            <td><Icon.time /></td>
            <td>{eventTime}</td>
          </tr>
          <tr>
            <td><Icon.date /></td>
            <td>{eventDate}</td>
          </tr>
          <tr>
            <td><Icon.location /></td>
            <td>{address}</td>
          </tr>
        </tbody>
      </table>


      {/* {businessName !== '' && <div>Business: {businessName}</div>}

      {busLink !== '' && <a target="_blank" rel="noreferrer noopener"
      href={busLink}>Website</a>} */}

    </article>
  );
};

Event.propTypes = {
  event: PropTypes.object.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  setDetailsBox: PropTypes.func.isRequired,
  setCoordinates: PropTypes.func.isRequired
};

export default Event;
