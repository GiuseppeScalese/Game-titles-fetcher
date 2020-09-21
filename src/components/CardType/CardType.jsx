import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image/Image';
import Icon from '../Icon/Icon';
import styles from './CardType.module.scss';

const CardType = ({
  cardTag, cardLink, cardTitle, cardName, cardImage, cardCopy
}) => {

  if (cardTag !== null) {
    return (
      <a className={`${styles.card}`} href={cardLink} title={cardTitle}>
        <Image source={cardImage} size="fit" altText={cardName} />
        <span className={`${styles['card-copy']}`}>{cardCopy}</span> 
        <Icon iconName={cardTag} />
      </a>
    );
  }
  return (      
    <a className={`${styles.card}`} href={cardLink} title={cardTitle}>
      <Image source={cardImage} size="fit" altText={cardName} />
      <span className={`${styles['card-copy']}`}>{cardCopy}</span>  
    </a>
  );
};

CardType.propTypes = {
  cardLink: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardCopy: PropTypes.string,
  cardTag: PropTypes.string,
};

CardType.defaultProps = {
  cardCopy: 'Play!',
  cardTag: null,
};

export default CardType;


