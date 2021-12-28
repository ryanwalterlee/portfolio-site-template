import React, { Component } from 'react';
import './TopNavBar.css';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, MenuItem, Menu } from '@mui/material';


class TopNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { project: null };
    this.OpenProjectMenu = this.OpenProjectMenu.bind(this);
    this.CloseProjectMenu = this.CloseProjectMenu.bind(this);
  }

  OpenProjectMenu(event) {
    this.setState({project : event.currentTarget});
  }

  CloseProjectMenu() {
    this.setState({project : null});
  }

  render() {

    return (
      <div>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Button variant="contained"
              component={Link}
              to="/"
              disableElevation>
              Home
            </Button>
            <Button variant="contained"
              disableElevation
              onClick={this.OpenProjectMenu}
              >                
              Projects
            </Button>
            <Menu
              anchorEl={this.state.project}
              open={Boolean(this.state.project)}
              onClose={this.CloseProjectMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
              <MenuItem component={Link} 
                to="/financialcalculator"
                onClick={this.CloseProjectMenu}>
                  Financial Calculator
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </div>)
  }
}

export default TopNavBar;