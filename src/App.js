import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Screens/Header";
// import React, {useState } from "react";
import Home from "./Screens/Home";
import Encode from "./Screens/Encode";
import Decode from "./Screens/Decode";

function App() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/encode" element={<Encode />}></Route>
          <Route exact path="/decode" element={<Decode />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
