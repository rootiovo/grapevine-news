import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
import './navigation.css';

//Components
// import Filter from '../../components/filter/filter'

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Navigation extends Component {
  render() {
    // const classes = styles;
    return (
        // <nav className="navbar navbar-light bg-light justify-content-between top-fixed toolbar">
        //   <a className="navbar-brand" href="/"><i className="fas fa-newspaper"></i>&nbsp;React News Parser</a>
        //   <Filter onFilterTextChange={this.props.onFilterTextChange}/>
        // </nav>     
        <div className="root">
          <AppBar position="static">
            <Toolbar>
              <IconButton className="menuButton" color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className="grow">
                News
              </Typography>
              {/* <InputBase placeholder="Search…" /> */}
              <div className="grow" />
              {/* <div className="search">
                <div className="searchIcon">
                  <SearchIcon />
                </div>
                <InputBase placeholder="Search…" className="inputRoot inputInput"/>
              </div> */}
            </Toolbar>
          </AppBar>
        </div>
      )
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);
