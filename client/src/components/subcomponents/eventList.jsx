import React, { PropTypes } from 'react';
import Event from './Event.jsx';

const EventList = ({ open, eventlist, deleteEvent, setDetailsBox, setCoordinates }) =>
  <div style={open ? { display: 'none' } : {}}>
    {eventlist.map(event =>
      <Event
        key={event._id}
        setCoordinates={setCoordinates}
        setDetailsBox={setDetailsBox}
        deleteEvent={deleteEvent}
        event={event}
      />,
    )}
  </div>;

EventList.propTypes = {
  open: React.PropTypes.bool.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  eventlist: React.PropTypes.array.isRequired,
  setDetailsBox: React.PropTypes.func.isRequired,
  setCoordinates: React.PropTypes.func.isRequired,
};

export default EventList;
