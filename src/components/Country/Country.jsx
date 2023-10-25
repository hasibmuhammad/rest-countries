import { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountries }) => {
  const [visited, setVisited] = useState(false);
  const {
    name: { common },
    cca2,
    flags: { png, alt },
  } = country;

  const handleVisited = (country) => {
    setVisited(!visited);

    handleVisitedCountries(country);
  };

  // console.log(handleVisitedCountries);

  return (
    <div className={`country ${visited && "visited"}`}>
      <img className="country-img" src={png} alt={alt} />
      <p className="name">{common}</p>
      <p>Code: {cca2}</p>
      <button onClick={() => handleVisited(common)}>Mark as visited</button>
    </div>
  );
};

export default Country;
