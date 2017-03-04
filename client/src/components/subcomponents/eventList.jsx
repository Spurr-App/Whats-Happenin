import React, { PropTypes } from 'react';
import Event from './Event.jsx';

const EventList = ({ open, eventList, deleteEvent, setDetailsBox, setCoordinates }) => (
  <div>
    {/* style={open ? { display: 'none' } : {}} */}
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
  // open: React.PropTypes.bool.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  eventList: PropTypes.array.isRequired,
  setDetailsBox: PropTypes.func.isRequired,
  setCoordinates: PropTypes.func.isRequired,
};

export default EventList;
