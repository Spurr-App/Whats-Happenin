import React, { PropTypes } from 'react';
import EventDetail from './subcomponents/EventDetail.jsx';
import Map from './subcomponents/Map.jsx';
import EventList from './subcomponents/EventList.jsx';

const Dashboard = ({ data, linkToCalender, setDetailsBox, setCoordinates, deleteEvent }) => (
  <div id="main">

    {/* LEFT SIDE */}
    <section id="map">
      {/* MAP */}
      <Map setCoordinates={setCoordinates} />

      {/* SELECTED EVENT */}
      <EventDetail
        event={data.detailsBox}
        linkToCalender={linkToCalender}
      />
    </section>

    {/* RIGHT SIDE */}
    <div id="sidebar">
      <EventList
        eventList={data.eventList}
        setDetailsBox={setDetailsBox}
        deleteEvent={deleteEvent}
      />
    </div>
  </div>
);

Dashboard.propTypes = {
  data: React.PropTypes.shape({}).isRequired,
  setDetailsBox: PropTypes.func.isRequired,
  setCoordinates: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  linkToCalender: PropTypes.func.isRequired,
};

export default Dashboard;
