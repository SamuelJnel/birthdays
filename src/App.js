import Home from "./Pages/Home";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getPeople } from "./services/persons";
import useLocalStorage from "use-local-storage";

import Add from "./Pages/Add";

function App() {
  const [people, setPeople] = useState([]);

  const [mode, setMode] = useLocalStorage("mode" ? "dark" : "light");

  const switchMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
  };

  async function fetchPeople() {
    const data = await getPeople();
    setPeople(data);
  }

  useEffect(() => {
    fetchPeople();
  }, [setPeople]);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              mode={mode}
              people={people}
              fetchPeople={fetchPeople}
              switchMode={switchMode}
            />
          }
        />
        <Route
          path="/addPerson"
          element={<Add mode={mode} fetchPeople={fetchPeople} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
