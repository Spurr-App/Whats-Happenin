import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import EventDetail from './subcomponents/EventDetail.jsx';
import Map from './subcomponents/Map.jsx';
import EventList from './subcomponents/eventList.jsx';

const Dashboard = ({ data, setEveList, setDetBox, setCoordinates, fetchEvents, coordinates }) => (
  <Card className="container">
    <div>
      <section id="main">
        <section id="map" className="col-lg-4">
          <section >

            {/* MAP */}
            <Map geoCode={setCoordinates} coordinates={coordinates} />

            {/* SELECTED EVENT */}
            <article id="EventDetail">
              <EventDetail setCoordinates={setCoordinates} event={data.detailsBox} />
            </article>
          </section>
        </section>

        {/* SIDEBAR */}
        <sidebar className="col-lg-4">
          <EventList
            setCoordinates={setCoordinates}
            eventlist={data.eventList}
            setDetailsBox={setDetBox}
            fetchEvents={fetchEvents}
          />
        </sidebar>
      </section>
    </div>)
  </Card>
);

Dashboard.propTypes = {
  data: React.PropTypes.object.isRequired,
  setEveList: React.PropTypes.func.isRequired,
  setDetBox: React.PropTypes.func.isRequired,
  setCoordinates: React.PropTypes.func.isRequired,
  fetchEvents: React.PropTypes.func.isRequired,
};

export default Dashboard;
