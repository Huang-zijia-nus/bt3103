import React from 'react'
import { render } from 'react-dom'
import PageA from './PageA'
import Main from './Main'
import PropTypes from "prop-types";

import AppBar from "material-ui/AppBar";
import Toolbar from 'material-ui/Toolbar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import withStyles from 'material-ui/styles';

import classNames from "classnames";


class App extends React.Component{
  state = {
    mobileDrawerOpen: false,
    dropdownAnchorEl: null,
    dropdownMenuOpen: false,
    };

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }
  render(){
    const { children, classes } = this.props;
    return (
      <div >
        <AppBar title="Group 5 Project" >      
          <PageA />
        </AppBar>
          <Main />        

      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

export default App