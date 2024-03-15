import { useEffect, useState } from 'react';

import '../styles/CardContainer.css';



const CardContainer = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [score, setScore] = useState(0);

  const Card = ({ country }) => {
    function handleClick(e) {
      if (!country.isClicked) {
        country.isClicked = true;
        setScore(score + 1);
      } else {
        setScore(0);
      }

    }

    return (
      <div onClick={handleClick} className="card">
          <img src={country.flag} alt="country flag" />
          <p>{country.name}</p>
      </div>
    )
  };

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
    <>
      <h2>{score}</h2>
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
    </>
  )
};

export default CardContainer;