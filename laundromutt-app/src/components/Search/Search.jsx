import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import Dog from "../../components/Candy/Candy";
import Sort from "../../components/Sort/Sort";

const SearchResults = (props) => {
  const dogs =
    props.queriedDog && props.queriedDog.length > 0
      ? props.queriedDog
      : props.queryResults;
  const productsJSX = dogs.map((dog, index) => (
    <Dog
      _id={dog._id}
      dog_name={dog.dog_name}
      breed={dog.breed}
      photo={dog.photo}
      washes={dog.washes}
      key={index}
    />
  ));

  return (
    <>
      <Layout
        handleSearch={props.handleSearch}
        setQueryResults={props.setQueryResults}
      >
        <div className="results-container">
          <h3>Search Results</h3>
          <Sort
            handleSort={props.handleSort}
            setQueriedCandy={props.setQueriedDog}
          />
          {console.log(dogs)}
          {productsJSX}
        </div>
      </Layout>
    </>
  );
};

export default SearchResults;