import React from "react";

import Filters from "./Filters";
import Country from "./Country";

export default function HomePage({ isDark, searchText, region, state, handleFilters, filteredCountries }) {
  const [isOpened, setIsOpened] = React.useState(false);

  function closeOpenedList() {
    if (isOpened) {
      setIsOpened(false);
    }
  }

  const styles = {
    backgroundColor: isDark ? '#202c37' : '#fafafa'
  };

  const h1Style = {
    color: isDark ? '#FFF' : '#111517',
    textAlign: 'center'
  };

  return (
    <main onClick={closeOpenedList} style={styles}>
      <Filters
        isDark={isDark}
        searchText={searchText}
        region={region}
        handleFilters={handleFilters}
        isOpened={isOpened}
        setIsOpened={setIsOpened}
      />
      <div className="countries container">
        {
          state.loading ?

            <h1 style={h1Style}>Loading...</h1>

            :

            (
              filteredCountries.length > 0 ?

                filteredCountries.map(country =>
                  <Country
                    key={country.id}
                    id={country.id}
                    name={country.name}
                    population={country.population}
                    region={country.region}
                    capital={country.capitalArr}
                    flag={country.flag}
                    isDark={isDark}
                  />
                )

                :

                <h1 style={h1Style}>Country Not Found There Is No Match</h1>
            )
        }
        {state.error && <h1 style={h1Style}>{state.error}</h1>}
      </div>
    </main >
  );
}