import React, { useState, useEffect } from 'react';

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        // Take only the first 28 countries
        const first28Countries = data.slice(0, 28);
        setCountries(first28Countries);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="country-list">
      {countries.map((country) => (
        <div key={country.cca2} className="country-item">
          <img
            src={country.flags.svg}
            alt={`Flag of ${country.name.common}`}
            width="50"
            height="30"
          />
          <span>{country.name.common}</span>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
