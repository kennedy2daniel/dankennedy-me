import React, { Component } from 'react';

export default class Navbar extends Component {
render() {
    return (
<nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand border bg-warning text-dark opacity-75 p-2" href="/">dk</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse w-100" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/blog">blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/music">music</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/pics">pics</a>
        </li>
      </ul>
      <div className="ms-auto nav-item"><a href="mailto:kennedy2.daniel@gmail.com" className="nav-link text-light" title="email!"><i className="fa fa-paper-plane"></i> </a></div>
    </div>
  </div>
</nav>
    )
}
}