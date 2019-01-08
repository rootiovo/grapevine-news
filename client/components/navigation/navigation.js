import React, { Component } from 'react'
import './navigation.css'

//Components
import Filter from '../../components/filter/filter'

class Navigation extends Component {

  constructor(props) {
    super(props)
}

  render() {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between top-fixed">
          <a className="navbar-brand" href="/"><i className="fas fa-newspaper"></i>&nbsp;News</a>
          <Filter onFilterTextChange={this.props.onFilterTextChange}/>
        </nav>
      )
  }
}

export default Navigation;
