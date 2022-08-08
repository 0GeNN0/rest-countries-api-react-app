import React from "react";

import Select from "./Select";

export default function Filters({ isDark, searchText, region, handleFilters, isOpened, setIsOpened }) {


  const headerStyle = {
    backgroundColor: isDark ? '#2b3945' : '#FFF',
    color: isDark ? '#FFF' : '#111517',
    boxShadow: isDark ? '0 0 5px #11151752' : '0 0 5px #202c373b'
  };

  return (
    <div className="filters container">
      <input
        style={headerStyle}
        className={`search-inp ${isDark ? 'dark' : ''}`}
        placeholder="Search for a country"
        type='text'
        value={searchText}
        name='byName'
        onChange={(e) => handleFilters(e.target.name, e.target.value)}
      />
      <Select
        isDark={isDark}
        region={region}
        handleFilters={handleFilters}
        isOpened={isOpened}
        setIsOpened={setIsOpened}
      />
    </div>
  );
}