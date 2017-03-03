import React, { PropTypes } from 'react';

/**
*
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

  return coordinateObj;
};

const Event = ({ event, event: {
  title,
  eventTime,
  username,
  eventDate,
  businessName,
  busLink,
  location,
}, setCoordinates, setDetailsBox }) => {
/* setDetailsBox passed down from mappage
 * @param {props.event} an event item
 * @returns sets the Event details box to this event
 */
  function setDetBox() {
    setDetailsBox(event);
  }

  function setCoords() {
    const coordinates = parseCoordinates(location);
    setCoordinates(coordinates);
  }

  function removeEventChild() {
    console.log(event, 'removeEventChild')
      var url = '/deleteEvent/' + event._id;
      return fetch(url, {
          method: 'DELETE',
          // params: {event: event._id}
      })
      .then(res => res)
    }

  // function removeEventChild() {
  //   // make database call using fetch;
  //   // if does not automatically update page, either change state, or force refreh
  //   console.log(event, 'removeEvent Child event.id')
  //   fetch('/deleteEvent/:id', { method: 'DELETE',
  //     // params: { id: event._id }
  //     params: _id
  //
  //     // { id: ':id' }
  //   }).then((err, eventObject) => {
  //     if(err) throw err;
  //     console.log(eventObject)
  //     if (eventObject) {
  //       console.log('DELETED at removeEventChild');
  //     }
  //   });
//     url = `${API_URL}/${resource}/${params.id}`;
// options.method = 'DELETE';
  // }
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
      <div className="eventlistbox">
        <button type="button" onClick={setDetBox}>{title}</button>
        <button type="button" onClick={removeEventChild}>Remove ME</button>
        {/* <button type="button" onClick={addAttendee}>Attend Attendee</button> */}
        <div>Poster: {username}</div>
        {/* <div>Number of Attendees: {event.attendees}</div> */}
        <div>Event Time: {eventTime}</div>
        <div>Event Date: {eventDate}</div>
        <button type="button" onClick={setCoords}>Location: {location}</button>
        {businessName !== '' && <div>Business: {businessName}</div>}
        {busLink !== '' && <a target="_blank" rel="noreferrer noopener" href={busLink}>Website</a>}
      </div>
    </article>
  );
};

Event.propTypes = {
  event: PropTypes.object.isRequired,
};

export default Event;
