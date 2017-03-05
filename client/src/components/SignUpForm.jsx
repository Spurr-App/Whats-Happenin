import React from 'react';
import { Link } from 'react-router';
import { CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
  <div id="signin-up">
    <form action="/" onSubmit={onSubmit}>
      <h1 className="welcome text-center">Welcome to What&apos;s Happenin&apos;</h1>
      <h2>Sign Up</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <table>
        <tbody>
          <tr>
            <td>
              <TextField
                floatingLabelText="Username"
                type="username"
                name="username"
                errorText={errors.username}
                onChange={onChange}
                value={user.username}
              />
            </td>
            <td>
              <TextField
                floatingLabelText="Name"
                type="name"
                name="name"
                errorText={errors.name}
                onChange={onChange}
                value={user.name}
              />
            </td>
          </tr>
          <tr>
            <td>
              <TextField
                floatingLabelText="Email"
                name="email"
                errorText={errors.email}
                onChange={onChange}
                value={user.email}
              />
            </td>
            <td>
              <TextField
                floatingLabelText="Password"
                type="password"
                name="password"
                onChange={onChange}
                errorText={errors.password}
                value={user.password}
              />
            </td>
          </tr>
          <tr>
            <td>
              <TextField
                floatingLabelText="City, State"
                type="location"
                name="location"
                onChange={onChange}
                errorText={errors.location}
                value={user.location}
              />
            </td>
            <td>
              <RaisedButton
                className="fullButton"
                type="submit"
                label="Create New Account"
                primary
              />
            </td>
          </tr>
        </tbody>
      </table>

      <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
    </form>
  </div>
);

SignUpForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  errors: React.PropTypes.shape({}).isRequired,
  user: React.PropTypes.shape({}).isRequired,
};

export default SignUpForm;
