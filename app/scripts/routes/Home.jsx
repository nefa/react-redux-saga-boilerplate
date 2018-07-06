import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import cx from 'classnames';

import config from 'config';

import { login, showAlert } from 'actions';
import Logo from 'components/Logo';

export class Home extends React.PureComponent {

  constructor(props) {
    super(props);
    this.handleClickLogin = this.handleClickLogin.bind(this);
    this.handleClickTest = this.handleClickTest.bind(this);
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }),
    user: PropTypes.object.isRequired,
  };

  handleClickLogin(e) {
    e.preventDefault();

    this.props.dispatch(login());
  }

  handleClickTest(e) {
    console.log('...from e handler', this.props.history, e);
    e.preventDefault();

    this.props.dispatch(showAlert('Test alert thrown', { type: 'success', icon: 'i-trophy' }));
    this.props.history.push('/test');
  }

  render() {
    const { user } = this.props;

    return (
      <div key="Home" className="app__home app__route">
        <div className="app__container">
          <div className="app__home__wrapper">
            <div className="app__home__header">
              <Logo />
            </div>
            <h1>{config.description}</h1>
            <a
              href="#login"
              onClick={this.handleClickLogin}
              className={cx('btn btn-lg btn-primary btn-icon', {
                'btn-loading': user.status === 'running',
              })}
            >
              <i className="i-sign-in" />
              <span>Start</span>
            </a>
            <a href="#test"
              onClick={this.handleClickTest}
              className={cx('btn btn-lg btn-secondary btn-icon', {
                'btn-loading': false,
              })} >

              <i className="i-sign-in" />
              <span>Test</span>
            </a>         
          </div>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(withRouter(Home));
