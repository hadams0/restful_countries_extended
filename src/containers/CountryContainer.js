import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";

const CountryContainer = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  const loadData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await response.json();
    setCountries(jsonData);
  };

  useEffect(() => {
    loadData();
  }, []);

  const moveToVisited = (country) => {
    const updatedList = [...visitedCountries, country];
    setVisitedCountries(updatedList);
  };

  return (
    <>
      <h1>Countries Bucket List</h1>
      <p>All Countries: </p>
      {countries ? (
        <CountryList countries={countries} movedToVisited={moveToVisited} />
      ) : (
        <p>loading...</p>
      )}
      <p>Previously visited countries: </p>
      {visitedCountries.map((country) => (
        <li key={country}>{country}</li>
      ))}
    </>
  );
};

export default CountryContainer;
