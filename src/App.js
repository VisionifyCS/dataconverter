import React, { Fragment } from "react";

import "./App.css";
import Convert from "./component/Convert";
import HomePage from "./component/HomePage";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/converter" element={<Convert />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
