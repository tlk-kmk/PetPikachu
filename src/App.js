import React from 'react';
import MyRiveAnimation from './MyRiveAnimation.jsx'; // Explicitly include the .jsx extension
import './App.css'; // Or any other CSS imports you might have

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="tlk-logo" src="/tlk-logo.svg" alt="logo"></img>
        <MyRiveAnimation />
      </header>
    </div>
  );
}

export default App;