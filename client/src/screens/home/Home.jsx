import React, { useState, useEffect } from "react";
import BaseLayout from "../../hourglass/baselayout/BaseLayout";
import Carousel from "../../components/Carousel/Carousel";
import Search from "../../components/Search/Search"
import "./Home.css";

const Home = (props) => {
  return (
    <BaseLayout>
      <div className="home">
        <div className="img-carousel"><Carousel /></div>
        <div className="searchbar-container">
        <Search handleSearch={props.handleSearch} setQueryResults={props.setQueryResults}
          />
        </div>
      </div>
    </BaseLayout>
  );
};

export default Home;