import * as React from 'react';
import Props from 'prop-types';

const Notification = ({ type, children }) => (
  <div className={`notification is-${type}`}>{children}</div>
);

Notification.propTypes = {
  type: Props.string,
  children: Props.string.isRequired,
};

Notification.defaultProps = {
  type: 'success',
}

export default Notification;
