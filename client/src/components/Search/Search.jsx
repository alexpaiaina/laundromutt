import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAllDogs } from '../../services/dogs'
// import handleSearch from '../../utils/search.js'
import "./Search.css";

const Search = (props) => {
  const [inventory, setInventory] = useState([])
  const history  = useHistory()

  useEffect(() => {
    const fetchDog = async () => {
      const dog = await getAllDogs();
      setInventory(dog);
    };
    fetchDog();
  }, [])

  const handleSubmit = event => {
    event.preventDefault()
    history.push("/search-dogs")

  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-input"
        value={props.value}
        onChange={(e) => {
          props.setQueryResults(props.handleSearch(e.target.value, inventory))
        }}
        name="search"
        placeholder="Doggy in the window"
        type="text"
        autoFocus
      />
    </form>
  )
};

export default Search;