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
import { useSelector, useDispatch } from 'react-redux';

// class App extends Component {
function App() {

  const payLoadText = useSelector(state => state.simple);
  const dispatch = useDispatch();

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/tracks" component={Tracks} />
        </Switch>
        <h1>Text: {payLoadText}</h1>
        <button onClick={() => dispatch(simpleAction())}>Test redux action</button>
      </div>
    </Router>
  );

}

export default App;


// export default App;