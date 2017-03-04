import React, { PropTypes } from 'react';
import Icon from './Icons.jsx';

const EventDetail = ({ event: {
  username,
  eventTime,
  eventDate,
  title,
  location,
  description,
  tags,
  businessName,
  busLink,
}, linkToCalender, event }) => (
  <article id="selectedEvent">
    <div className="left">
      <img className="image" alt="" src="" />
      <div>{tags}</div>
      <button type="button" onClick={() => linkToCalender(event)}>
        Add to Calender
      </button>
    </div>

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

    {businessName !== '' && <div>Business: {businessName}</div>}
    {busLink !== '' && <a target="_blank" rel="noreferrer noopener" href={busLink}>Website</a>}
    <br />

    <p>{description}</p>

  </article>
);

EventDetail.propTypes = {
  event: React.PropTypes.shape({}).isRequired,
  linkToCalender: PropTypes.func.isRequired
};

export default EventDetail;
