/*
 src/App.js

 creating mapStateToProps and mapDispatchToProps to add to the connect function
*/
import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import Tracks from './Tracks';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { simpleAction } from './actions/simpleAction';
import { connect } from 'react-redux';

class App extends Component {

  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/tracks" component={Tracks} />
          </Switch>
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
        <button onClick={this.simpleAction}>Test redux action</button>
        </div>
      </Router>
    );
  }
}


const mapStateToProps = state => ({
  ...state
})

console.log(mapStateToProps);

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);


// export default App;