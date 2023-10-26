import { useState, useEffect } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const api = search
    ? "https://restcountries.com/v3.1/name"
    : "https://restcountries.com/v3.1/all";

  useEffect(() => {
    fetch(`${api}`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch(`${api}/${search}`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, [search]);

  const handleVisitedCountries = (country) => {
    setVisitedCountries([...visitedCountries, country]);
  };

  const handleFavorites = (fav) => {
    setFavorites([...favorites, fav]);
  };

  return (
    <div>
      <div>
        <div className="header">
          <h1>Countries</h1>
          <input
            className="input-country"
            type="search"
            placeholder="Search your country..."
            onChange={handleSearch}
          />
        </div>
        <div>
          <small>Visited Countries: {visitedCountries.length}</small>
          <ul>
            {visitedCountries.map((vc) => (
              <li>{vc}</li>
            ))}
          </ul>
        </div>

        <div>
          <small>Favorite Countries: {favorites.length}</small>
          <ul>
            {favorites.map((fav) => (
              <li key={fav}>{fav}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca2}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleFavorites={handleFavorites}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
