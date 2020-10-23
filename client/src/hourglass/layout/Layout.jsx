import React from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import Search from "../../components/Search/Search";
import "./Layout.css";

const Layout = (props) => {
  return (
    <div className="layout">
      <Nav />
        <div className="layout-searchbar">
          <Search handleSearch={props.handleSearch} setQueryResults={props.setQueryResults}/>
        </div>
        {props.children}
      <Footer />
    </div>
  )
};

export default Layout;