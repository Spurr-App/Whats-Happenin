import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import EventDetail from './subcomponents/EventDetail.jsx';
import Map from './subcomponents/Map.jsx';
import EventList from './subcomponents/eventList.jsx';

const Dashboard = ({ data, setEveList, setDetBox, setCoordinates, coordinates }) => (
  <Card className="container">
    {/* <CardTitle
      className="cardTitle"
      title="Whats Happenin'"
      subtitle="Find local hit events!"
    /> */}
    <div>
      <section id="eventpagebody">
        <section id="map" className="col-lg-4">
          <section >
            <Map geoCode={setCoordinates} coordinates={coordinates} />
            <article id="EventDetail">
              <EventDetail setCoordinates={setCoordinates} event={data.detailsBox} />
            </article>
          </section>
        </section>
        <sidebar className="col-lg-4">
          <EventList
            setCoordinates={setCoordinates}
            eventlist={data.eventList}
            setDetailsBox={setDetBox}
          />
        </sidebar>
      </section>
    </div>)
    {data && <CardText style={{ fontSize: '16px', color: 'green' }}>{data.secretData}</CardText>}
  </Card>
);

Dashboard.propTypes = {
  data: React.PropTypes.object.isRequired,
  setEveList: React.PropTypes.func.isRequired,
  setDetBox: React.PropTypes.func.isRequired,
  setCoordinates: React.PropTypes.func.isRequired,
};

export default Dashboard;
