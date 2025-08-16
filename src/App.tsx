import React from 'react';
import logo from './logo.svg';
import {MyComponent} from './MyComponent'
import './App.css';

function App() {
  const myName = "Kamal"

  return (
    <>
      <h1>{myName}</h1>
      <MyComponent/>
     
    </>
    
  );
}

export default App;
