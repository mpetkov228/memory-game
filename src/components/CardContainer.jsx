import { useEffect, useState } from 'react';

import Card from "./Card";
import '../styles/CardContainer.css';

const CardContainer = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const newData = data.slice(30, 42).map(country => {
          return {
            ccn3: country.ccn3,
            name: country.name.common,
            flag: country.flags.png,
            isClicked: false,
          };
        });
        setCountries(newData);
        setIsLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div id="card-container">
      {countries.map((country) => {
        return (
          <Card
            key={country.ccn3}
            country={country}
          />
        )
      })}
    </div>
  )
};

export default CardContainer;