import React, { PropTypes } from 'react';
import Icon from './Icons.jsx';

const Event = ({ event, deleteEvent, setCoordinates, setDetailsBox, event: {
  title,
  username,
  eventTime,
  eventDate,
  location,
  // businessName,
  // busLink,
} }) => (
  <article>
    <div className="left center">
      <img className="image" alt="" src="" />
      <br />
      <button type="button" onClick={() => setDetailsBox(event)}>
        View Event
      </button>
      <br />
      <button type="button" onClick={() => setCoordinates(event)}>
        View Location
      </button>
      <br />
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
          <td>{location}</td>
        </tr>
      </tbody>
    </table>


    {/* {businessName !== '' && <div>Business: {businessName}</div>}

    {busLink !== '' && <a target="_blank" rel="noreferrer noopener"
    href={busLink}>Website</a>} */}

  </article>
);

Event.propTypes = {
  event: React.PropTypes.shape({}).isRequired,
  deleteEvent: PropTypes.func.isRequired,
  setDetailsBox: PropTypes.func.isRequired,
  setCoordinates: PropTypes.func.isRequired
};

export default Event;
