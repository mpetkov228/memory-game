import '../styles/Card.css';

const Card = ({ country, onClick }) => {
    return (
      <div className="card" onClick={onClick}>
          <img className="country-flag" src={country.flag} alt="country flag" />
          <p className="country-name">{country.name}</p>
      </div>
    )
};

export default Card;