import '../styles/Card.css';

const Card = ({ country }) => {
  return (
    <div className="card">
        <img src={country.flag} alt="country flag" />
        <p>{country.name}</p>
    </div>
  )
};

export default Card;