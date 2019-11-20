import React, { Component } from 'react';
import { connect } from 'react-redux';
import BriefForm from "./BriefForm/BriefForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

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
     <Router>
      <div>
        <ul>
          <li>
            <Link to="/BriefForm">BriefForm</Link>
          </li>
          <li>
            <Link to="/ListBrief">ListBrief</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/BriefForm">
          <BriefForm />
          </Route>
          <Route path="/ListBrief">
          <ListBrief />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}
}

export default App;
