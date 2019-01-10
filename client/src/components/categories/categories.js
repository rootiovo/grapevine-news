import React, { Component } from 'react'
import './categories.css'

class Categories extends Component {  
  render() {
    return (
      <ul className="nav flex-column float-left">
        <li className="nav-item">
          <a className="nav-link active" href="/">Top Stories</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">US</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">World</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Technology</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Entertainment</a>
        </li>
      </ul>
      )
  }
}

export default Categories
