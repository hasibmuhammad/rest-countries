import { useState, useEffect } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [visitedCountries, setVisitedCountries] = useState([]);

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
        <p>
          <small>Visited Countries: {visitedCountries.length}</small>
          <ul>
            {visitedCountries.map((vc) => (
              <li>{vc}</li>
            ))}
          </ul>
        </p>
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca2}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
