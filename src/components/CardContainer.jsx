import { useEffect, useState } from 'react';

import shuffleArray from '../utils/arrayShuffle';
import Header from './Header';
import Card from './Card';
import '../styles/CardContainer.css';


const CardContainer = () => {
  const [countries, setCountries] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const newData = data.slice(30, 42).map(country => {
          return {
            id: country.ccn3,
            name: country.name.common,
            flag: country.flags.png,
            clicked: false,
          };
        });
        setCountries(newData);
      })
      .catch(error => console.error(error));
  }, []);

  const handleClick = (countryId) => {
    const country = countries.find(c => c.id == countryId);
    if (country.clicked) {
      const updatedData = shuffleArray(countries.map(country => {
          return { ...country, clicked: false };  
      }));
      setScore(0);
      setBestScore(score);
      setCountries(updatedData);
    } else {
      country.clicked = true;
      setScore(score + 1);
      setCountries(shuffleArray(countries));
    }

  }

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <div id="card-container">
        {countries.map((country) => {
          return (
            <Card
              key={country.id}
              country={country}
              onClick={() => handleClick(country.id)}
            />
          )
        })}
      </div>
    </>
  )
};

export default CardContainer;