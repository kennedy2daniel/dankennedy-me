import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import React, { Component } from 'react';
import { BrowserRouter, Outlet} from "react-router-dom";


function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Navbar />
          <Outlet />
        </BrowserRouter>
      </div>
  );
}

export default App;
