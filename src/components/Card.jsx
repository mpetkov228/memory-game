const Card = ({ country, onClick }) => {
    return (
      <div className="card" onClick={onClick}>
          <img src={country.flag} alt="country flag" />
          <p>{country.name}</p>
      </div>
    )
};

export default Card;