import { useState, useEffect } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1>Countries</h1>
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.cca2} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
