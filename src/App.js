import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";

//Components
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

function App() {
  return (
    <>
      <Header />
      <Content />
    </>
  );
}

export default App;
