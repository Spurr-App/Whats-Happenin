import React from 'react';
// import DropZone from 'react-dropzone';
import { Step, Stepper, StepButton, StepContent } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import DropZone from './DropZone.jsx';

const style = {
  width: '100%',
};

class VerticalNonLinear extends React.Component {

  constructor() {
    super();
    this.state = {
      stepIndex: 0
    };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  handleNext() {
    const { stepIndex } = this.state;
    if (stepIndex < 7) {
      this.setState({
        stepIndex: stepIndex + 1
      });
    }
  }

  handlePrev() {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({
        stepIndex: stepIndex - 1
      });
    }
  }

  renderStepActions(step) {
    return (
      <div
        style={{
          margin: '12px 0'
        }}
      >
        <RaisedButton
          label="Next"
          disableTouchRipple
          disableFocusRipple
          primary
          onTouchTap={this.handleNext}
          style={{ marginRight: 12
          }}
        /> {step > 0 && (
          <FlatButton
            label="Back"
            disableTouchRipple
            disableFocusRipple
            onTouchTap={this.handlePrev}
          />)}
      </div>
    );
  }

  render() {
    const { stepIndex } = this.state;

    return (
      <div
        style={{
          width: 400,
          maxHeight: 400,
          margin: 'auto'
        }}
      >
        <Stepper activeStep={stepIndex} linear={false} orientation="vertical">
          {/* EVENT NAME */}
          <Step>
            <StepButton onTouchTap={() => this.setState({ stepIndex: 0 })}>
              What&apos; your party called?
            </StepButton>
            <StepContent>
              <TextField
                name="title"
                type="title"
                hintText="Name"
                style={style}
                // value={eventDetails.title}
                // onChange={eveChange}
                // errorText={errors.title}
              />
              {this.renderStepActions(0)}
            </StepContent>
          </Step>

          {/* ABOUT */}
          <Step>
            <StepButton onTouchTap={() => this.setState({ stepIndex: 1 })}>
              Tells about your event!
            </StepButton>
            <StepContent>
              <TextField
                multiLine
                name="description"
                type="description"
                hintText="Describe your sweet event"
                style={style}
                // value={eventDetails.description}
                // onChange={eveChange}
              />
              {this.renderStepActions(1)}
            </StepContent>
          </Step>

          {/* EVENT IMAGE */}
          <Step>
            <StepButton onTouchTap={() => this.setState({ stepIndex: 2 })}>
              Show off
            </StepButton>
            <StepContent>
              <DropZone />
              {this.renderStepActions(2)}
            </StepContent>
          </Step>

          {/* EVENT DATE */}
          <Step>
            <StepButton onTouchTap={() => this.setState({ stepIndex: 3 })}>
              Whens it happening? (date)
            </StepButton>
            <StepContent>

              {this.renderStepActions(3)}
            </StepContent>
          </Step>

          {/* EVENT TIME */}
          <Step>
            <StepButton onTouchTap={() => this.setState({ stepIndex: 4 })}>
              Whens it happening? (time)
            </StepButton>
            <StepContent>

              {this.renderStepActions(4)}
            </StepContent>
          </Step>

          {/* EVENT LOCATION */}
          <Step>
            <StepButton onTouchTap={() => this.setState({ stepIndex: 5 })}>
              Where&apos; it happening?
            </StepButton>
            <StepContent>
              <TextField
                multiLine
                id="locationslot"
                name="location"
                type="location"
                hintText="Where"
                style={style}
                // value={`${location.address} \
                // longitude: ${location.longitude}, \
                // latitude: ${location.latitude}`}
                // onChange={eveChange}
                // errorText={errors.location}
              />
              {this.renderStepActions(5)}
            </StepContent>
          </Step>

          {/* BUSINESS WEBSITE */}
          <Step>
            <StepButton onTouchTap={() => this.setState({ stepIndex: 6 })}>
              Are you a business?
            </StepButton>
            <StepContent>
              <TextField
                name="busLink"
                type="busLink"
                hintText="Promote your business' website"
                style={style}
                // value={eventDetails.busLink}
                // onChange={eveChange}
                // errorText={errors.busLink}
              />
              {this.renderStepActions(6)}
            </StepContent>
          </Step>

          {/* TAGS */}
          <Step>
            <StepButton onTouchTap={() => this.setState({ stepIndex: 7 })}>
              Tag it up
            </StepButton>
            <StepContent>
              <TextField
                multiLine
                name="tags"
                type="tags"
                hintText="tags"
                style={style}
                // value={eventDetails.tags}
                // onChange={eveChange}
              />
              {this.renderStepActions(7)}
            </StepContent>
          </Step>

        </Stepper>

        {/* SUBMIT BUTTON */}
        <RaisedButton label="Submit Event" className="fullButton" />
      </div>
    );
  }
}

export default VerticalNonLinear;
