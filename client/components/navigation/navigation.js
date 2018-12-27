import React, { Component } from 'react';
import './navigation.css';

//Components
import Search from '../../components/search/search'

class Navigation extends Component {

  constructor(props) {
    super(props);
}

  render() {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between top-fixed">
          <a className="navbar-brand" href="/"><i className="fas fa-newspaper fa-lg"></i>&nbsp;News</a>
          <Search />
        </nav>
      );
  }
}

export default Navigation;
