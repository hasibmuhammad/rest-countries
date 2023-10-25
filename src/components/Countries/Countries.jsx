import { useState, useEffect } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

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

  return (
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
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.cca2} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
