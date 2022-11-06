import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import React, { Component } from 'react';
import { Outlet} from "react-router-dom";


function App() {
  return (
      <div className="App">
        <Header />
        <Navbar />
        <Outlet />
      </div>
  );
}

export default App;
