import React, { PropTypes } from 'react';
import Event from './Event.jsx';

const EventList = ({ eventlist, deleteEvent, setDetailsBox, setCoordinates }) =>
  <div>
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
  eventlist: PropTypes.array.isRequired,
  setDetailsBox: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  setCoordinates: PropTypes.func.isRequired,
};

export default EventList;
