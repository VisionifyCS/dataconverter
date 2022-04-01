import React, { Fragment } from "react";
import "./App.css";
import HomePage from "./component/HomePage";
import Navbar from "./component/Navbar";
import CocotoPascal from "./component/model/CocotoPascal";
import PascaltoCoco from "./component/model/PascaltoCoco";
import LabelmetoPascal from "./component/model/LabelmetoPascal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pascaltococo" element={<PascaltoCoco />} />
          <Route path="/cocotopascal" element={<CocotoPascal />} />
          <Route path="/labelmetopascal" element={<LabelmetoPascal />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
