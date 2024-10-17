import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Form from "./Pages/Electricity";
import ElectricityForm from "./Pages/Electricity";
import SolarForm from "./Pages/Solar";
import WaterForm from "./Pages/Water";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/electricity" element={<ElectricityForm />} />
          <Route path="/solar" element={<SolarForm />} />
          <Route path="/water" element={<WaterForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
