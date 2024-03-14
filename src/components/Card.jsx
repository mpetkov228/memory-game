import '../styles/Card.css';

const Card = ({ country }) => {
  return (
    <div className="card">
        <img src={country.flags.png} alt="country flag" />
        <p>{country.name.common}</p>
    </div>
  )
};

export default Card;