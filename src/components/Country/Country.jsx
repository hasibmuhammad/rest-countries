import { useState } from "react";
import "./Country.css";
const Country = ({
  country,
  handleVisitedCountries,
  handleFavorites,
  favorites,
}) => {
  const [visited, setVisited] = useState(false);
  const [fav, setFav] = useState(false);
  const {
    name: { common },
    cca2,
    flags: { png, alt },
  } = country;

  const handleVisited = (country) => {
    setVisited(!visited);

    handleVisitedCountries(country);
  };

  const handleFavClick = (common) => {
    handleFavorites(common);
    setFav(!fav);
  };

  return (
    <div className="country">
      <img className="country-img" src={png} alt={alt} />
      <p className="name">{common}</p>
      <p>Code: {cca2}</p>
      <button onClick={() => handleVisited(common)}>Mark as visited</button>
      <button
        className={fav && "favorite"}
        onClick={() => handleFavClick(common)}
      >
        ❤️
      </button>
    </div>
  );
};

export default Country;
