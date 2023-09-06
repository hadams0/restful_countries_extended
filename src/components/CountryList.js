import Country from "./Country";

const CountryList = ({ countries, movedToVisited }) => {
  const mappedCountries = countries.map((country) => {
    return (
      <li>
        <Country
          country={country}
          key={country.id}
          movedToVisited={movedToVisited}
        />
        <button onClick={() => movedToVisited(country.name.common)}>
          Have you visited this country?
        </button>
      </li>
    );
  });

  return (
    <>
      <ul>{mappedCountries}</ul>
    </>
  );
};

export default CountryList;
