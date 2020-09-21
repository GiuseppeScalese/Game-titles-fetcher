import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import FilterTab from './components/FilterTab/FilterTab';
import Image from './components/Image/Image';
import Heading from './components/Heading/Heading';
import searchMockData from './mockData/searchMock.json';
import styles from './App.module.scss';

function App() {

  //load mock data from file
  const dataList = searchMockData;

  //manage states
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(dataList);
  const [isTabSelected, setTabSelected] = useState("");

  // exclude column list from search filter
  const excludeColumns = ["id", "tag", "image", "link"];

  // handle change event of search input
  const handleChange = value => {
    setSearchText(value);
    filterDataSearch(value);
  };

  // filter records by tags
  const filterDataTags = (value, tabNumber) => {
    const lowercasedValue = value.toLowerCase().trim();

    if (lowercasedValue === "all") setData(dataList);
    else {
      const filteredData = dataList.filter(item => item.tag.includes(lowercasedValue));
      setData(filteredData);
    }

    //set tab selected on click
    setTabSelected(tabNumber);
  }

  // filter records by search text
  const filterDataSearch = (value) => {
    const lowercasedValue = value.toLowerCase().trim();

    if (lowercasedValue === "") setData(dataList);
    else {
      const filteredData = dataList.filter(item => {
        return Object.keys(item).some(key =>
          excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  }

  return (
    <div className={`${styles['app-wrapper']}`}>
      <div className={`${styles['header']}`}>
        <Heading className={`${styles['main-heading']}`} priority="1">SLOTS</Heading>
        <div className={`${styles['filters-wrapper']}`}>
          <div className={`${styles['filters-tab-box']}`}>
            <FilterTab iconName="icon-all" onClick={() => filterDataTags("all", 1)} filterTabText={"All"}/>
            <FilterTab isSelected={isTabSelected === 3 ? 'selected' : ""} iconName="icon-new" onClick={() => filterDataTags("new", 3)} filterTabText={"New"}/>
            <FilterTab isSelected={isTabSelected === 2 ? 'selected' : ""} iconName="icon-top" onClick={() => filterDataTags("top", 2)} filterTabText={"Top"}/>
          </div>
          <SearchBar iconName="icon-search" searchText={searchText} handleChange={e => handleChange(e.target.value)} />
        </div>
      </div>

      <div className={`${styles['item-container']}`}>
        {data.map((data, i) => {
          return <div key={i} className={`${styles['item-box']}`}>
            <a className={`${styles.card}`} href={data.link} title={data.name}><Image source={data.image} size="fit" altText={data.name} />
              <span className={`${styles['card-copy']}`}>PLAY!</span>
            </a>
          </div>
        })}
        {data.length === 0 && <span className={`${styles['results-message']}`}>No games found to display!</span>}
      </div>
    </div>
  );
}

export default App;
