import "./Country.css";
const Country = ({ country }) => {
  const {
    name: { common },
    cca2,
    flags: { png, alt },
  } = country;

  return (
    <div className="country">
      <img className="country-img" src={png} alt={alt} />
      <p className="name">{common}</p>
      <p>Code: {cca2}</p>
    </div>
  );
};

export default Country;
