import React, { PropTypes } from 'react';
import Event from './Event.jsx';

const EventList = ({ view, eventList, deleteEvent, setDetailsBox, setCoordinates }) => (
  <div style={view ? { display: 'none' } : {}}>
    {eventList.map(event =>
      <Event
        key={event._id}
        setCoordinates={setCoordinates}
        setDetailsBox={setDetailsBox}
        deleteEvent={deleteEvent}
        event={event}
      />,
    )}
  </div>
);

EventList.propTypes = {
  view: React.PropTypes.bool.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  eventList: React.PropTypes.arrayOf(React.PropTypes.shape({})).isRequired,
  setDetailsBox: PropTypes.func.isRequired,
  setCoordinates: PropTypes.func.isRequired,
};

export default EventList;
