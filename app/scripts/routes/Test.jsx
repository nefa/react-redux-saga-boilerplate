import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import config from 'config';

import { showAlert, updateCollection } from 'actions';
import Logo from 'components/Logo';
import { fetch1, fetch2 } from '../mocks';
// import { login } from 'actions';


export class Test extends React.PureComponent {

  static propTypes = {
    collection: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    collection: []
  }

  componentDidMount() {
    this.logStuff();
  }

  handleClickTest(e) {
    e.preventDefault();

    this.props.dispatch(showAlert('A new test alert thrown !!', { type: 'success', icon: 'i-trophy' }));
  }

  async logStuff() {
    const res1 = await fetch1();
    const res2 = await fetch2(res1.oldUrl);
    // console.log(res2);
    this.props.dispatch(updateCollection(res2.list));
  }

  render() {
    const { collection } = this.props;
    console.log("props in Test.jsx", this.props);

    return (
      <div key="Test" className="app__home app__route">
        <div className="app__container">
          <div className="app__home__wrapper">
            <div className="app__home__header">
              <Logo />
            </div>
            <h1>Text and more text</h1>
            <h3>{collection.length}</h3>
            <hr />
            {/* <a
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
              className={cx('btn btn-lg btn-danger btn-icon', {
                'btn-loading': false,
              })}>
              <i className="i-sign-in" />
              <span>Test</span>
            </a> */}
          </div>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return { collection: state.collection };
}

export default connect(mapStateToProps)(Test);
