import React from 'react';
// import DropZone from 'react-dropzone';
import {Step, Stepper, StepButton, StepContent} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import DropZone from './DropZone.jsx';
import Icon from './Icons.jsx';

const style = {
  width: '100%',
};

const iconColor = '#EEF3AD';

class VerticalNonLinear extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stepIndex: 0,
      open: false,
    }

    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.test = this.test.bind(this);
  }

  test(input) {
    console.log(input);
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
      <div style={{ margin: '12px 0', float: 'right' }}>
        { step > 0 && (
          <FlatButton
            label="Back"
            disableTouchRipple
            disableFocusRipple
            onTouchTap={this.handlePrev}
            style={{ margin: '0 12px' }}
          />) }
        <RaisedButton
          label="Next"
          disableTouchRipple
          disableFocusRipple
          primary
          onTouchTap={this.handleNext}
          overlayStyle={{
            backgroundColor: '#EEF3AD'
          }}
        />
      </div>
    );
  }

  render() {
    const { stepIndex } = this.state;

    return (
      <div
        style={{
          width: 380,
        }}
      >

        <Stepper
          activeStep={stepIndex}
          linear={false}
          orientation="vertical"
          style={this.props.open ? {} : { display: 'none' }}
        >
          {/* EVENT NAME */}
          <Step>
            <StepButton
              onTouchTap={() => this.setState({ stepIndex: 0 })}
              icon={<Icon.note />}
            >
              What's your party called?
            </StepButton>
            <StepContent>
              <TextField
                name="title"
                type="title"
                hintText="Name"
                style={style}
                value={this.props.eventDetails.title}
                onChange={this.props.eveChange}
                errorText={this.props.errors.title}
              />
              {this.renderStepActions(0)}
            </StepContent>
          </Step>

          {/* ABOUT */}
          <Step>
            <StepButton
              onTouchTap={() => this.setState({ stepIndex: 1 })}
              icon={<Icon.note />}
            >
              Talk about your event!
            </StepButton>
            <StepContent>
              <TextField
                multiLine
                name="description"
                type="description"
                hintText="Describe your sweet event"
                style={style}
                value={this.props.eventDetails.description}
                onChange={this.props.eveChange}
              />
              {this.renderStepActions(1)}
            </StepContent>
          </Step>

          {/* EVENT IMAGE */}
          <Step>
            <StepButton
              onTouchTap={() => this.setState({ stepIndex: 2 })}
              icon={<Icon.cam />}
            >
              Show off
            </StepButton>
            <StepContent>
              <DropZone />
              {this.renderStepActions(2)}
            </StepContent>
          </Step>

          {/* EVENT DATE */}
          <Step>
            <StepButton
              onTouchTap={() => this.setState({ stepIndex: 3 })}
              icon={<Icon.date />}
            >
              When is it happening? (date)
            </StepButton>
            <StepContent>

              {this.renderStepActions(3)}
            </StepContent>
          </Step>

          {/* EVENT TIME */}
          <Step>
            <StepButton
              onTouchTap={() => this.setState({ stepIndex: 4 })}
              icon={<Icon.time />}
            >
              When is it happening? (time)
            </StepButton>
            <StepContent>

              {this.renderStepActions(4)}
            </StepContent>
          </Step>

          {/* EVENT LOCATION */}
          <Step>
            <StepButton
              onTouchTap={() => this.setState({ stepIndex: 5 })}
              icon={<Icon.location />}
            >
              Where is it happening?
            </StepButton>
            <StepContent>
              <TextField
                multiLine
                id="locationslot"
                name="location"
                type="location"
                hintText="Where"
                style={style}
                value={this.props.location.address}
                onChange={this.props.eveChange}
                errorText={this.props.errors.location}
              />
              {this.renderStepActions(5)}
            </StepContent>
          </Step>

          {/* BUSINESS WEBSITE */}
          <Step>
            <StepButton
              onTouchTap={() => this.setState({ stepIndex: 6 })}
              icon={<Icon.work />}
            >
              Are you a business?
            </StepButton>
            <StepContent>
              <TextField
                name="busLink"
                type="busLink"
                hintText="Promote your business' website"
                style={style}
                value={this.props.eventDetails.busLink}
                onChange={this.props.eveChange}
                errorText={this.props.errors.busLink}
              />
              {this.renderStepActions(6)}
            </StepContent>
          </Step>

          {/* TAGS */}
          <Step>
            <StepButton
              onTouchTap={() => this.setState({ stepIndex: 7 })}
              icon={<Icon.tag />}
            >
              Tag it up
            </StepButton>
            <StepContent>
              <TextField
                multiLine
                name="tags"
                type="tags"
                hintText="tags"
                style={style}
                value={this.props.eventDetails.tags}
                onChange={this.props.eveChange}
              />
              {this.renderStepActions(7)}
            </StepContent>
          </Step>

        </Stepper>

        {/* SUBMIT BUTTON */}
        <RaisedButton
          className="fullButton"
          label="Submit Event"
          backgroundColor="#ADEBBE"
          style={
            this.props.open ?
            { margin: '15px 0' } :
            { display: 'none' }
          }
          icon={<Icon.send />}
        />

      </div>
    );
  }
}

VerticalNonLinear.propTypes = {
  eventDetails: React.PropTypes.object.isRequired,
  eveChange: React.PropTypes.func.isRequired,
  processForm: React.PropTypes.func.isRequired,
  handleTime: React.PropTypes.func.isRequired,
  handleDate: React.PropTypes.func.isRequired,
  closeDrawer: React.PropTypes.func.isRequired,
  location: React.PropTypes.object.isRequired,
  errors: React.PropTypes.object.isRequired,
};

export default VerticalNonLinear;
