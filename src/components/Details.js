import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Details({ countries, isDark }) {
  const params = useParams();
  const navigate = useNavigate();

  const country = countries.find(country => country.id === params.id);
  console.log(country);

  const [nativeName] = country.nativeNameObj ? Object.values(country.nativeNameObj) : 'No Native Name';
  const [currencies] = country.currenciesObj ? Object.values(country.currenciesObj) : "Replacment";
  const languages = country.languagesObj ? Object.values(country.languagesObj) : `People Don't Like Taking Too Much 😅`;

  const iconColor = isDark ? '#FFF' : '#111517';
  const mainStyle = {
    color: isDark ? '#FFF' : '#111517',
  };
  const buttonAndBCsStyle = {
    backgroundColor: isDark ? '#2b3945' : '#FFF',
    boxShadow: isDark ? '0 0 10px #111517' : '0 0 5px #11151775'
  };

  return (
    <main className='main-details-page container' style={mainStyle}>
      <div onClick={() => navigate(-1)} className='btn' style={buttonAndBCsStyle}>
        <svg enableBackground="new 0 0 32 32" zversion="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width='20px'>
          <path clipRule="evenodd" d="M31.106,15H3.278l8.325-8.293  c0.391-0.391,0.391-1.024,0-1.414c-0.391-0.391-1.024-0.391-1.414,0l-9.9,9.899c-0.385,0.385-0.385,1.029,0,1.414l9.9,9.9  c0.391,0.391,1.024,0.391,1.414,0c0.391-0.391,0.391-1.024,0-1.414L3.278,17h27.828c0.552,0,1-0.448,1-1  C32.106,15.448,31.658,15,31.106,15z" fill={iconColor} fillRule="evenodd" id="Arrow_Back" />
        </svg>

        Back
      </div>

      <div className='country-in-detail'>
        <div className='image'>
          <img src={country.flag} alt='Flag' />
        </div>

        <article className='country-detail'>
          <h1>{country.name}</h1>

          <div className='details'>
            <div className='left'>
              <p><span>Native Name:</span> {nativeName.common || nativeName}</p>
              <p><span>Population:</span> {country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
              <p><span>Region:</span> {country.region}</p>
              <p><span>Subregion:</span> {country.subregion}</p>
              {country.capitalArr && <p><span>Capital:</span> {country.capitalArr}</p>}
            </div>

            <div className='right'>
              <p><span>Top Level Domain:</span> {country.tLDArr}</p>
              <p><span>Currencies:</span> {currencies.name || currencies}</p>
              <p><span>Languages: </span>
                {
                  typeof languages !== 'string' ?

                    languages.join(', ')
                    :
                    languages
                }
              </p>
            </div>
          </div>
          <div className='border-countries'>
            <p>Border Countries: </p>

            <div>
              {
                country.borderCountriesArr ?

                  country.borderCountriesArr.map(bCountry =>
                    <span key={bCountry} style={buttonAndBCsStyle}>{bCountry}</span>
                  )
                  :
                  'Iceland so Water is the border'
              }
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

export default React.memo(Details);