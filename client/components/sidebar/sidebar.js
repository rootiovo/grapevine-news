import React, { Component } from 'react';
import './sidebar.css';

class Sidebar extends Component {

  constructor(props) {
    super(props);
}
  
  render() {
    return (
      <ul className="nav flex-column float-left">
        <li className="nav-item">
          <a className="nav-link active" href="#">Tops Stories</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Markets</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Weather</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Twitter</a>
        </li>
      </ul>
      );
  }
}

export default Sidebar;
