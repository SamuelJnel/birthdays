import React from "react";
import List from "../components/List";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <main data-mode={props.mode}>
        <section className="container list-page">
          <div className="theme-toggle">
            <div className="stay-header">
              <i onClick={props.switchMode} className="fas fa-toggle-on"></i>
              <Link to="/addPerson">
                <i className="fas fa-plus add-btn"></i>
              </Link>
            </div>
            <div>
              <h3> {props.people.length} Birthdays today</h3>
            </div>
            <List people={props.people} fetchPeople={props.fetchPeople} />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
