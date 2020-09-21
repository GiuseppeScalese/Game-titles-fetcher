import React from 'react';
import CardType from '../CardType/CardType';

const Card = ({
  cardTag, ...rest
}) => {

  if (cardTag === 'new') {
    return (  
    <CardType cardTag="icon-tag-new"  {...rest} />
    )
  } else if (cardTag === 'top') {
    return (
      <CardType cardTag="icon-tag-top"  {...rest} />
    );    
  }
  return (      
    <CardType {...rest} />
  );
};

export default Card;


