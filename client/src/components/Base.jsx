import React from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';


const Base = ({ children }) => (
  <div>
    <nav>
      <div className="left">
        <IndexLink to="/">
        What&apos;s Happenin&apos;
        </IndexLink>
      </div>

      {Auth.isUserAuthenticated() ? (
        <div className="right">
          <IndexLink activeClassName="active" to="/">
            Events
          </IndexLink>
          <Link to="/profile">Profile</Link>
          <Link to="/logout">Log out</Link>
        </div>
      ) : (
        <div className="right">
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      )}

    </nav>

    { /* child component will be rendered here */ }
    {children}

  </div>
);

Base.propTypes = {
  children: React.PropTypes.object.isRequired,
};

export default Base;
