import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image/Image';
import styles from './Card.module.scss';

const Card = ({
  cardLink, cardTitle, cardName, cardImage, cardCopy
}) => {
  return (
    <a className={`${styles.card}`} href={cardLink} title={cardTitle}>
      <Image source={cardImage} size="fit" altText={cardName} />
      <span className={`${styles['card-copy']}`}>{cardCopy}</span>
    </a>
  );
};

Card.propTypes = {
  cardLink: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardCopy: PropTypes.string,
};

Card.defaultProps = {
  cardCopy: 'Play!',
};

export default Card;


