import React from "react";

export default function Select({ isDark, region, handleFilters, isOpened, setIsOpened }) {


  function handleFilterByRegion(e) {
    const { textContent } = e.target;
    handleFilters('byRegion', textContent);
    setIsOpened(false);
  }

  const style = {
    backgroundColor: isDark ? '#2b3945' : '#FFF',
    boxShadow: isDark ? '0 0 5px #11151752' : '0 0 5px #202c373b',
    color: isDark ? '#FFF' : '#111517'
  };

  const resetStyle = {
    position: 'absolute',
    top: '-35px',
    left: '0px',
    padding: '5px 10px',
    backgroundColor: isDark ? 'rebeccapurple' : '#111517',
    borderRadius: '5px',
    cursor: 'pointer',
    color: 'white',
    fontWeight: '600'
  };

  return (
    <div className="list-parent">
      <div
        className="select-list"
        style={style}
        onClick={() => setIsOpened(prev => !prev)}
      >
        {!region ? 'Filter by Region' : region}
        <svg xmlns="http://www.w3.org/2000/svg" width='10px' viewBox="0 0 384 512"><path className={isDark ? 'dark' : ''} d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" /></svg>
      </div>
      <div className={`regions ${isOpened ? 'opened' : ''}`} style={style}>
        <span onClick={(e) => handleFilterByRegion(e)}>Africa</span>
        <span onClick={(e) => handleFilterByRegion(e)}>Asia</span>
        <span onClick={(e) => handleFilterByRegion(e)}>Europe</span>
        <span onClick={(e) => handleFilterByRegion(e)}>Oceania</span>
        <span onClick={(e) => handleFilterByRegion(e)}>Americas</span>
      </div>
      {region && <span style={resetStyle} onClick={() => handleFilters('byRegion', '')}>Reset Filters</span>}
    </div>
  );
}

