import { useState, useEffect } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleSearch = (e) => setSearch(e.target.value);

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
