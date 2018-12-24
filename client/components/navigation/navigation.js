import React, { Component } from 'react';
import './navigation.css';

class Navigation extends Component {

  constructor(props) {
    super(props);
}

  render() {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between top-fixed">
          <a className="navbar-brand" href="/"><i className="fas fa-newspaper fa-lg"></i>&nbsp;News</a>
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>
      );
  }
}

export default Navigation;
