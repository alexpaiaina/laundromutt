import React, { useState, useEffect } from "react";
import { getAllDogs } from "../../services/dogs";
import "./Sort.css";

const Sort = (props) => {
  const [allDog, setAllDog] = useState([]);
  const [queriedDog, setQueriedDog] = useState([]);
  const [sortType, setSortType] = useState([]);

  useEffect(() => {
    const fetchDog = async () => {
      const dogs = await getAllDogs();
      setAllDog(dogs);
      setQueriedDog(dogs);
    };
    fetchDog();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault()
  };

  return (
    <form className="sort-container" onSubmit={handleSubmit}>
      <label htmlFor="sort">SORT BY:</label>
      <select className="sort" onChange={(e) => props.handleSort(e)}>
        <option className="option" value="name-ascending">
          &nbsp; Alphabetically, A-Z &nbsp;
        </option>
        <option value="name-descending">
          &nbsp; Alphabetically, Z-A &nbsp;
        </option>
      </select>
    </form>
  );
};

export default Sort;