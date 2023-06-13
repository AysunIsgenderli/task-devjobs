import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import Devjobs from "./components/Devjobs";
import Layout from "./components/Layout";
import JobPage from "./pages/JobPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index  element={<Devjobs />} />
            <Route path="/:id" element={<JobPage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
