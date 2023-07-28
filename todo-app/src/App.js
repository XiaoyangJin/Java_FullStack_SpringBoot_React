import React, { Component } from 'react';
import FirstComponent, { SecondComponent } from './components/learning-examples/FirstComponent'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // App is the root, every class component we want to show need to claim here
  render() {
    return (
      <div className="App">
        My Hello World
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
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
