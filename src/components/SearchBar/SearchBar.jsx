import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.module.scss';
import Icon from '../Icon/Icon';
import styles from './SearchBar.module.scss';

const SearchBar = ({ 
  searchText, handleChange, iconName
  }) => (
  <>
  <div className={`${styles['search-box']}`}>
    <Icon iconName={iconName} position="center"/>
    <label className={`${styles['visually-hidden']}`} htmlFor="search">Search:</label> 
    <input
      type="text"
      placeholder="Search"
      name="search"
      id="search"
      value={searchText}
      onChange={handleChange}
    />
    </div>
  </>
);

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default SearchBar;