import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // App is the root, every class component we want to show need to claim here
  render() {
    return (
      <div className="App">
        My Hello World
        <FirstComponent></FirstComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}

// class component
class FirstComponent extends Component {
  render() {
    return (
      <div className="firstComponent">
        First Component
      </div>
    );
  }
}

// function component
function ThirdComponent() {
  return (
    <div className="thirdComponent">
      Third Component
    </div>
  );
}
// class ThirdComponent extends Component {
//   render() {

//   }
// }

export default App;
