import React, { PropTypes } from 'react';

const EventDetail = ({ event: {
  eventTime,
  eventDate,
  title,
  location,
  description,
  tags,
  businessName,
  busLink
}, setCoordinates, linkToCalender, event }) => (
  <article className="selectedEvent">
    {/* <img alt="" id="image" className="col-sm-2" /> */}
    {/* <img className="image" alt="" src={picLink} /> */}

    <section className="eventdescription">
      <img className="image" alt="" />
      <br />
      <h1>{title}</h1>
      <div>Event Time: {eventTime}</div>
      <div>Event Date: {eventDate}</div>

      <button type="button" onClick={() => setCoordinates(location)}>Show Location on Map</button>

      {businessName !== '' && <div>Business: {businessName}</div>}
      {busLink !== '' && <a target="_blank" rel="noreferrer noopener" href={busLink}>Website</a>}
      <br />

      <p>{description}</p>
      <div>{tags}</div>
      <button type="button" onClick={() => linkToCalender(event)}>Add to Your Calender</button>
    </section>
  </article>
);

EventDetail.propTypes = {
  event: PropTypes.object.isRequired,
  setCoordinates: PropTypes.func.isRequired,
  linkToCalender: PropTypes.func.isRequired
};

export default EventDetail;
