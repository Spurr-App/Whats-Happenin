import React, { PropTypes } from 'react';
import EventDetail from './subcomponents/EventDetail.jsx';
import Map from './subcomponents/Map.jsx';
import EventList from './subcomponents/EventList.jsx';

const Dashboard = ({ data, lat, lng, address, linkToCalender, setDetailsBox, setCoordinates, deleteEvent }) => (
  <div id="main">

    {/* LEFT SIDE */}
    <section id="map">
      {/* MAP */}
      <Map
        setCoordinates={setCoordinates}
        lat={lat}
        lng={lng}
        address={address}
      />

      {/* SELECTED EVENT */}
      <EventDetail
        event={data.detailsBox}
        linkToCalender={linkToCalender}
      />
    </section>

    {/* RIGHT SIDE */}
    <div id="sidebar">
      <EventList
        view={false}
        eventList={data.eventList}
        setDetailsBox={setDetailsBox}
        deleteEvent={deleteEvent}
      />
    </div>
  </div>
);

Dashboard.defaultProps = {
  address: 'Loading...',
  lat: 0,
  lng: 0,
};

Dashboard.propTypes = {
  data: React.PropTypes.shape({}).isRequired,
  lat: PropTypes.number,
  lng: PropTypes.number,
  address: PropTypes.string,
  setDetailsBox: PropTypes.func.isRequired,
  setCoordinates: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  linkToCalender: PropTypes.func.isRequired,
};

export default Dashboard;
