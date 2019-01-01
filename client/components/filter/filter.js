import React, { Component } from 'react';
import './filter.css';

class Filter extends Component {

  constructor(props) {
    super(props);
}

  render() {
    return (
          <form className="form-inline">
            <input id="newsFilter" className="form-control mr-sm-2" type="search" 
            placeholder="Filter" aria-label="Filter" 
            onKeyUp={event => this.props.onFilterTextChange(event.target.value)} />
          </form>
      );
  }
}

export default Filter;
