import React, { Component } from 'react';
import { connect } from 'react-redux';
import BriefForm from "./BriefForm/BriefForm";

import logo from './logo.svg';
import './App.css';

import { simpleAction } from './actions/simpleAction'
import ListBrief from './ListBrief/ListBrief';

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

/* 
 * mapStateToProps
*/
const mapStateToProps = state => ({
  ...state
})

/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   * @memberof App
   * @summary handles button click 
   */
  simpleAction = (event) => {
    this.props.simpleAction();
  }
  
  render() {

    return (
      <div className="App">
 
        <ListBrief />
        <BriefForm/>
      </div>
    );
  }
}

export default App;
