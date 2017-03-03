import React from 'react';
import {Step, Stepper, StepButton, StepContent} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

/**
 * A basic vertical non-linear implementation
 */
// class FileDrop extends React.Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       files: [],
//     };
//     this.onDrop = this.onDrop.bind(this);
//   }

class VerticalNonLinear extends React.Component {

  constructor() {
    super();
    this.state = {
      stepIndex: 0
    }
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  handleNext() {
    const { stepIndex} = this.state;
    if (stepIndex < 2) {
      this.setState({
        stepIndex: stepIndex + 1
      });
    }
  }

  handlePrev() {
    const { stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({
        stepIndex: stepIndex - 1
      });
    }
  }

  renderStepActions(step) {
    return (
      <div style={{
        margin: '12px 0'
      }}>
        <RaisedButton label="Next" disableTouchRipple={true} disableFocusRipple={true} primary={true} onTouchTap={this.handleNext} style={{
          marginRight: 12
        }}/> {step > 0 && (<FlatButton label="Back" disableTouchRipple={true} disableFocusRipple={true} onTouchTap={this.handlePrev}/>)}
      </div>
    );
  }

  render() {
    const { stepIndex } = this.state;

    return (
      <div
        style={{
          maxWidth: 380,
          maxHeight: 400,
          margin: 'auto'
        }}
      >
        <Stepper activeStep={ stepIndex} linear={false} orientation="vertical">
          {/* EVENT NAME */}
          <Step>
            <StepButton onTouchTap={() => this.setState({ stepIndex: 0 })}>
              What's your party called?
            </StepButton>
            <StepContent>
              <TextField
                name="title"
                type="title"
                hintText="Name"
                // style={style}
                // value={eventDetails.title}
                // onChange={eveChange}
                // errorText={errors.title}
              />
              {this.renderStepActions(0)}
            </StepContent>
          </Step>

          {/* EVENT LOCATION */}
          <Step>
            <StepButton onTouchTap={() => this.setState({ stepIndex: 1 })}>
              Where's it happening?
            </StepButton>
            <StepContent>

              {this.renderStepActions(1)}
            </StepContent>
          </Step>

          {/* EVENT TIME */}
          <Step>
            <StepButton onTouchTap={() => this.setState({ stepIndex: 2 })}>
              When's it happening? (time)
            </StepButton>
            <StepContent>

              {this.renderStepActions(2)}
            </StepContent>
          </Step>

          {/* EVENT DATE */}
          <Step>
            <StepButton onTouchTap={() => this.setState({ stepIndex: 3 })}>
              When's it happening? (date)
            </StepButton>
            <StepContent>

              {this.renderStepActions(3)}
            </StepContent>
          </Step>

          {/* EVENT IMAGE */}
          <Step>
            <StepButton onTouchTap={() => this.setState({ stepIndex: 4  })}>
              Show off
            </StepButton>
            <StepContent>

              {this.renderStepActions(4)}
            </StepContent>
          </Step>

          {/* EVENT BUSINESS */}
          <Step>
            <StepButton onTouchTap={() => this.setState({ stepIndex: 5 })}>
              Are you a business?
            </StepButton>
            <StepContent>

              {this.renderStepActions(5)}
            </StepContent>
          </Step>

          {/* WEBSITE */}
          <Step>
            <StepButton onTouchTap={() => this.setState({ stepIndex: 6 })}>
              Have a website?
            </StepButton>
            <StepContent>

              {this.renderStepActions(6)}
            </StepContent>
          </Step>

          {/* TAGS */}
          <Step>
            <StepButton onTouchTap={() => this.setState({ stepIndex: 7 })}>
              Tag it up
            </StepButton>
            <StepContent>

              {this.renderStepActions(7)}
            </StepContent>
          </Step>

          {/* ABOUT */}
          <Step>
            <StepButton onTouchTap={() => this.setState({ stepIndex: 8 })}>
              Tells about your event!
            </StepButton>
            <StepContent>

              {this.renderStepActions(8)}
            </StepContent>
          </Step>
        </Stepper>
      </div>
    );
  }
}

export default VerticalNonLinear;
