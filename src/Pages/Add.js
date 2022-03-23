import React from "react";
import AddForm from "../components/AddForm";

const Add = (props) => {
  return (
    <>
      <main data-mode={props.mode}>
        <section className="container">
          <AddForm fetchPeople={props.fetchPeople} />
        </section>
      </main>
    </>
  );
};

export default Add;
