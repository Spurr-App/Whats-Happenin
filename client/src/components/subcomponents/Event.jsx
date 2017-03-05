import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Icon from './Icons.jsx';
import colors from './Colors.jsx';

const Event = ({ event, deleteEvent, setDetailsBox, event: {
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
      <RaisedButton
        className="fullButton"
        onTouchTap={() => setDetailsBox(event)}
        icon={<Icon.eye color={colors.medium} />}
        backgroundColor={colors.accent}
      />
      <br />
      <RaisedButton
        className="fullButton"
        onTouchTap={() => deleteEvent(event)}
        icon={<Icon.clear color={colors.medium} />}
        backgroundColor={colors.accent}
      />
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
};

export default Event;
