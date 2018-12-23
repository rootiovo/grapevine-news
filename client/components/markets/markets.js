import React, { Component } from 'react';
import './markets.css';

class Markets extends Component {
  render () {
    return (
        <div className="weather">
          <div className="card">
            <div className="card-header">
            <i className="fas fa-chart-line"></i>&nbsp;<span>Markets</span>
            </div>
            <div className="card-body">
              <h5 className="card-title">Lorem ipsum</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed massa orci, pharetra vitae venenatis a,
              suscipit et sem. Cras mauris lorem, pulvinar vitae ex eu,
              bibendum consectetur ligula.</p>
              <a href="/" className="btn btn-primary btn-sm">Lorem Ipsum</a>
            </div>
          </div>
      </div>
  );
  }
}

export default Markets;
