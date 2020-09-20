import React from 'react';
import PropTypes from 'prop-types';
import styles from './Icon.module.scss';

const Icon = ({
  iconName, size, position
}) => {
  return (
    <i className={`${styles[iconName]} ${styles[size]}` } style={{ backgroundPosition: position }}></i>
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  position: PropTypes.string,
};

Icon.defaultProps = {
  size: 'medium',
  position: 'bottom',
};

export default Icon;
