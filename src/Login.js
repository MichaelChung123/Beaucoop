/*
 src/Login.js
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import jwt from 'jsonwebtoken';
import { simpleAction } from './actions/simpleAction';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = {
      id: 1,
      username: this.state.username,
      password: this.state.password
    };

    jwt.sign({ user: user }, 'secretKey', (err, token) => {
      console.log('TOKEN: ', token);
    });

    console.log("Submitted username: ", this.state.username, " & password: ", this.state.password);
  }

  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="Login">
        <h1>Sign in:</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          <br />
          <label>Password:</label>
          <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
          <br />
          <input type="submit" value="submit" />
        </form>
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
        <button onClick={this.simpleAction}>Test redux action</button>
        <p className="App-intro">
          To get started, edit <code>src/Login.js</code> and save to reload
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);

// /*
//  src/Login.js
// */
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import logo from './logo.svg';
// import './App.css';

// import { simpleAction } from './actions/simpleAction';

// const mapStateToProps = state => ({
//   ...state
// })

// const mapDispatchToProps = dispatch => ({
//   simpleAction: () => dispatch(simpleAction())
// })

// class Login extends Component {

//   simpleAction = (event) => {
//     this.props.simpleAction();
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <pre>
//           {
//             JSON.stringify(this.props)
//           }
//         </pre>
//         <button onClick={this.simpleAction}>Test redux action</button>
//         <p className="App-intro">
//           To get started, edit <code>src/Login.js</code> and save to reload
//         </p>
//       </div>
//     );
//   }
// }

// // export default connect()(Login);
// export default connect(mapStateToProps, mapDispatchToProps)(Login);