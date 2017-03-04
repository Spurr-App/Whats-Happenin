import React, { PropTypes } from 'react';

/**
*
* @param {coordinate string} will be a set of coordinates
* @returns parsed string, allows the map to be updated with new
* coordinates when the event location is clicked;
*/


const Event = ({ event, event: {
  title,
  eventTime,
  username,
  eventDate,
  businessName,
  busLink,
  location,
}, setCoordinates, setDetailsBox, fetchEvents }) => {

  function onDeleteChild() {
    fetch(`/deleteEvent/${event._id}`, {
      method: 'DELETE',
    })
    .then(() => fetchEvents());
    // fetchEvents();
  }

  // function addAttendee() {
  //   fetch('/addAttendee', { method: 'POST',
  //     params: { username: localStorage.getItem('email'), event: title }
  //   }).then((attended) => {
  //     if (attended) {
  //       event.attendees += 1;
  //     }
  //   });
  // }

  return (
    <article className="eventdetail">
      <div className="eventlistbox">
        <button type="button" onClick={() => setDetailsBox(event)}>{title}</button>
        <button type="button" onClick={onDeleteChild}>Remove ME</button>
        {/* <button type="button" onClick={addAttendee}>Attend Attendee</button> */}
        <div>Poster: {username}</div>
        {/* <div>Number of Attendees: {event.attendees}</div> */}
        <div>Event Time: {eventTime}</div>
        <div>Event Date: {eventDate}</div>
        <button type="button" onClick={() => setCoordinates(location)}>Location: {location}</button>
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
