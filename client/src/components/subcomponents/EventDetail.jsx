import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
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
    <div className="left center">
      <img className="image" alt="" src="" />
      <br />
      {businessName !== '' && <div>Business: {businessName} <br /> </div>}
      {busLink !== '' && <a target="_blank" rel="noreferrer noopener" href={busLink}>Website <br /> </a>}
      <RaisedButton
        className="fullButton"
        onTouchTap={() => linkToCalender(event)}
        icon={<Icon.date />}
        // icon={<div><Icon.add /><Icon.date /></div>}
        // label={<div><Icon.add /><Icon.date /></div>}
      />
      <br />
      <div>{tags}</div>
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


    <br />

    <p>{description}</p>

  </article>
);

EventDetail.propTypes = {
  event: React.PropTypes.shape({}).isRequired,
  linkToCalender: PropTypes.func.isRequired,
};

export default EventDetail;
