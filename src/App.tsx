import React from 'react';
import logo from './logo.svg';
import {MyComponent} from './MyComponent'
import {NavBar} from '../src/components/NavBar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CourseMaterial } from './components/CourseMaterial';


function App() {

  return (
    <>
      <NavBar/>
      <CourseMaterial/>
    </>
    
  );
}

export default App;
