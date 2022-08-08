import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";

import Header from './components/Header';
import HomePage from "./components/HomePage";
import Details from "./components/Details";

function App() {
  const initState = {
    data: [],
    loading: true,
    error: ''
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SUCCESS':
        return { data: action.payload, loading: false, error: '' };
      case 'FAILED':
        return { data: [], loading: false, error: `Something Went Wrong Try Refreshing The Page` };
      default: return state;
    }
  };

  const [state, dispatch] = React.useReducer(reducer, initState);
  const [isDark, setIsDark] = React.useState(true);
  const [filters, setFilters] = React.useState({
    byName: '',
    byRegion: ''
  });

  const filterCountry = state.data.filter(country => {
    const nameMatch = country.name.toLowerCase().includes(filters.byName.toLowerCase());
    const regionMatch = country.region.toLowerCase() === filters.byRegion.toLowerCase();

    if (filters.byRegion) {
      return nameMatch && regionMatch;
    } else {
      return nameMatch;
    }
  }).sort((a, b) => {
    return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
  });

  function toggleTheme() {
    setIsDark(prevTheme => !prevTheme);
  }

  function handleFilters(name, value) {
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  }

  React.useEffect(() => {
    document.body.style.backgroundColor = isDark ? '#202c37' : '#fafafa';
  }, [isDark]);

  React.useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch('https://restcountries.com/v3.1/all');
        const data = await res.json();

        // Getting the needed data from the hole object
        const customizeDataArr = data.map(country => ({
          id: uuidv4(),
          name: country.name.common,
          population: country.population,
          capitalArr: country.capital,
          region: country.region,
          subregion: country.subregion,
          borderCountriesArr: country.borders,
          tLDArr: country.tld,
          currenciesObj: country.currencies,
          languagesObj: country.languages,
          flag: country.flags.svg,
          nativeNameObj: country.name.nativeName
        }));

        dispatch({ type: 'SUCCESS', payload: customizeDataArr });
      } catch (e) {
        dispatch({ type: 'FAILED' });
      }
    };

    getCountries();

  }, []);
  // basename="/rest-countries-api-react-app"
  // rest-countries-api-react-app
  return (
    <>
      <Router>
        <Header
          isDark={isDark}
          toggleTheme={toggleTheme}
        />

        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                isDark={isDark}
                state={state}
                filteredCountries={filterCountry}
                searchText={filters.byText}
                region={filters.byRegion}
                handleFilters={handleFilters}
              />
            }
          />

          <Route
            path='country/:id'
            element={
              <Details
                countries={state.data}
                isDark={isDark}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
