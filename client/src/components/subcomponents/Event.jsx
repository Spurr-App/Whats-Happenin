import React, { PropTypes } from 'react';

/**
*
* @param {coordinate string} will be a set of coordinates
* @returns parsed string, allows the map to be updated with new
* coordinates when the event location is clicked;
*/


const Event = ({ event, deleteEvent, setCoordinates, setDetailsBox, event: {
  title,
  eventTime,
  username,
  eventDate,
  businessName,
  busLink,
  location,
} }) => (
  <article className="eventdetail">
    <div className="eventlistbox">
      <button type="button" onClick={() => setDetailsBox(event)}>{title}</button>
      <button type="button" onClick={() => deleteEvent(event)}>Remove ME</button>
      <div>Poster: {username}</div>
      <div>Event Time: {eventTime}</div>
      <div>Event Date: {eventDate}</div>
      <button type="button" onClick={() => setCoordinates(location)}>Location: {location}</button>
      {businessName !== '' && <div>Business: {businessName}</div>}
      {busLink !== '' && <a target="_blank" rel="noreferrer noopener" href={busLink}>Website</a>}
    </div>
  </article>
);

Event.propTypes = {
  event: PropTypes.object.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  setDetailsBox: PropTypes.func.isRequired,
  setCoordinates: PropTypes.func.isRequired
};

export default Event;
