import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import config from 'config';

import Logo from 'components/Logo';
import { login } from 'actions/index';

export class Home extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };

  handleClickLogin = (e) => {
    e.preventDefault();

    this.props.dispatch(login());
  };

  render() {
    const { user } = this.props;

    return (
      <div key="Home" className="app__home app__route">
        <div className="app__container">

 
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(Home);
