import React from 'react';
import logo from './logo.svg';
import {MyComponent} from './MyComponent'
import {NavBar} from '../src/components/NavBar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CourseMaterial } from './components/CourseMaterial';
import { BrowserRouter,Routes, Route} from "react-router";
import { Course } from './components/Course';


function App() {

  return (
    <>
    <BrowserRouter>
       <NavBar/>
        <Routes>
           <Route path='/coursematerial' element={ <CourseMaterial/>}/>
           <Route path='/course' element={ <Course/>}/>
        </Routes>
    </BrowserRouter>
  
      {/* <CourseMaterial/> */}
    </>
    
  );
}

export default App;
