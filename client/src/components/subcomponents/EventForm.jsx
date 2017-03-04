import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import TimePicker from 'material-ui/TimePicker';
import DatePicker from 'material-ui/DatePicker';
import DropZone from 'react-dropzone';
// import { Gmaps, Marker, geocoder, InfoWindow } from 'react-gmaps';

const style = {
  marginLeft: 20,
};

const EventForm = ({
  eventDetails,
  eveChange,
  processForm,
  handleTime,
  handleDate,
  location,
  errors,
  }) =>
    <form action="/" onSubmit={processForm}>
      <div>
        <TextField
          name="title"
          type="title"
          hintText="Name"
          style={style}
          value={eventDetails.title}
          onChange={eveChange}
          errorText={errors.title}
        />
      </div>
      <div>
        <TextField
          multiLine
          id="locationslot"
          name="location"
          type="location"
          hintText="Where"
          style={style}
          value={`${location.address} \
          longitude: ${location.longitude}, \
          latitude: ${location.latitude}`}
          onChange={eveChange}
          errorText={errors.location}
        />
      </div>
      <div>
        <TimePicker
          name="eventTime"
          type="eventTime"
          hintText="Time"
          style={style}
          onChange={handleTime}
          value={eventDetails.eventTimeObj}
          errorText={errors.eventTime}
        />
      </div>
      <div>
        <DatePicker
          type="eventDate"
          hintText="Date"
          name="eventDate"
          style={style}
          onChange={handleDate}
          value={eventDetails.eventDateObj}
          errorText={errors.eventDate}
        />
      </div>
      <div>
        <TextField
          name="picLink"
          type="picLink"
          hintText="Got an image link to share?"
          style={style}
          value={eventDetails.picLink}
          onChange={eveChange}
          errorText={errors.picLink}
        />
      </div>
      <div>
        <DropZone />
      </div>
      <div>
        <TextField
          name="busLink"
          type="busLink"
          hintText="Promote your business' website"
          style={style}
          value={eventDetails.busLink}
          onChange={eveChange}
          errorText={errors.busLink}
        />
      </div>
      <div>
        <TextField
          name="businessName"
          type="businessName"
          hintText="Are you a business? What's your name?"
          style={style}
          value={eventDetails.businessName}
          onChange={eveChange}
        />
      </div>
      <div>
        <TextField
          multiLine
          name="tags"
          type="tags"
          hintText="tags"
          style={style}
          value={eventDetails.tags}
          onChange={eveChange}
        />
      </div>
      <div>
        <TextField
          multiLine
          name="description"
          type="description"
          hintText="Describe your sweet event"
          style={style}
          value={eventDetails.description}
          onChange={eveChange}
        />
      </div>
      <div>
        <RaisedButton type="submit" label="Post Event" />
      </div>
    </form>;

EventForm.propTypes = {
  eventDetails: React.PropTypes.object.isRequired,
  eveChange: React.PropTypes.func.isRequired,
  processForm: React.PropTypes.func.isRequired,
  handleTime: React.PropTypes.func.isRequired,
  handleDate: React.PropTypes.func.isRequired,
  closeDrawer: React.PropTypes.func.isRequired,
  location: React.PropTypes.object.isRequired,
  errors: React.PropTypes.object.isRequired,
};

export default EventForm;
