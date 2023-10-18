
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RandomGreeting from "./Greeting.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<RandomGreeting />} />
      </Routes>
    </Router>
  );
};

export default App;