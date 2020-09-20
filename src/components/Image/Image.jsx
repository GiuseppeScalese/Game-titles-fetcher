import React from 'react';
import PropTypes from 'prop-types';
import styles from './Image.module.scss';

const Image = ({
  source, size, altText, background, children,
}) => {
  if (background) {
    return (
      <div
        className={`${styles['background-image']}`}
        style={{ backgroundImage: `url(${source})` }}
      >
        {children}
      </div>
    );
  }
  return (
    <img
      className={`${styles[size]}`}
      src={source}
      alt={altText}
      loading="lazy"
    />
  );
};

Image.propTypes = {
  children: PropTypes.node,
  source: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['fit']),
  altText: PropTypes.string.isRequired,
  background: PropTypes.bool,
};

Image.defaultProps = {
  children: undefined,
  background: false,
  size: 'fit',
};

export default Image;
