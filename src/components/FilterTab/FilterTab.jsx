import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import styles from './FilterTab.module.scss';

 const FilterTab = ({ 
  onClick, filterTabText, iconName, isSelected
  }) => {
    if (iconName === '') {
      return (
        <span onClick={onClick}>{filterTabText}</span>
      );
    }
    return (      
      <span className={`${styles['filter-tab-box']} ${styles[isSelected]}`} onClick={onClick}>
        <Icon iconName={iconName}/><span className={`${styles['tab-copy']}`}>{filterTabText}</span>
      </span>
    );
  };

FilterTab.propTypes = {
  onClick: PropTypes.func.isRequired,
  filterTabText: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  isSelected: PropTypes.string,
  iconSize: PropTypes.string,
};

FilterTab.defaultProps = {
  iconName: '',
  isSelected: '',
};

export default FilterTab;



