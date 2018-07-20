import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const RoutePublicTest = ({ component: Component, ...rest }) => (
  <Route component={Component} {...rest} />   

);

RoutePublicTest.propTypes = {
  component: PropTypes.func.isRequired,
};

export default RoutePublicTest;
