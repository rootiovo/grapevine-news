import React, { Component } from 'react';
import './search.css';

class Search extends Component {

  constructor(props) {
    super(props);
}

  render() {
    return (
          <form className="form-inline">
            <input id="newsFilter" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
      );
  }
}

export default Search;
