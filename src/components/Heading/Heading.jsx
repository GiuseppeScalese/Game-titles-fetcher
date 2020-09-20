import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Heading = ({
  children, priority, className, appearance, id,
}) => {
  const Tag = `h${priority}`;
  const classes = classnames(appearance || `h${priority}`, className);

  return <Tag className={classes} id={id}>{children}</Tag>;
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  priority: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']),
  appearance: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};

Heading.defaultProps = {
  className: '',
  priority: '1',
  appearance: undefined,
  id: null,
};

export default Heading;
