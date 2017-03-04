import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  successMessage,
  user,
}) => (

  <div id="signin-up">
    <form action="/" onSubmit={onSubmit}>
      <h2>Login</h2>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>

      <div className="button-line">
        <RaisedButton
          className="fullButton"
          type="submit"
          label="Log in"
          primary
        />
      </div>

      <CardText>Don&apos;t have an account? <Link to={'/signup'}>Create one</Link>.</CardText>
    </form>
  </div>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: React.PropTypes.shape({}).isRequired,
  successMessage: PropTypes.string.isRequired,
  user: React.PropTypes.shape({}).isRequired,
};

export default LoginForm;
