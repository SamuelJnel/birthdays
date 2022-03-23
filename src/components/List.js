import React, { useState } from "react";
import { deletePerson } from "../services/persons";

const List = (props) => {
  let fetchPeople = props.fetchPeople;
  const [searchList, setSearchList] = useState("");

  const deletePeople = (id) => {
    deletePerson(id);
    fetchPeople();
  };

  return (
    <>
      <div className="stay-header">
        <input
          type="text"
          placeholder="Find contact"
          onChange={(event) => {
            setSearchList(event.target.value);
          }}
        />
      </div>
      {props.people
        .filter((el) => {
          if (searchList === "") {
            return el;
          } else if (el.name.toLowerCase().includes(searchList.toLowerCase())) {
            return el;
          }
        })
        .map((el, idx) => {
          return (
            <article key={idx} className="person">
              <img src={el.image} alt={el.name} />
              <div className="person-details-container">
                <h4>{el.name}</h4>
                <p>{el.age} years</p>
              </div>
              <div className="delete-btn-container">
                <button
                  className="clear-btn delete-btn"
                  onClick={() => deletePeople(el._id)}
                >
                  delete
                </button>
              </div>
            </article>
          );
        })}
    </>
  );
};

export default List;
