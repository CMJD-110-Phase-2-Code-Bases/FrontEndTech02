import React from 'react';
import logo from './logo.svg';
import {MyComponent} from './MyComponent'
import {NavBar} from '../src/components/NavBar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CourseMaterial } from './components/CourseMaterial/CourseMaterial';
import { BrowserRouter,Routes, Route} from "react-router";
import { Course } from './components/Course/Course';
import { SignIn } from './components/auth/SignIn';
import { SignUp } from './components/auth/SignUp';
import { AuthProvider } from './components/auth/AuthProvider';


function App() {

  return (
    <>
    <AuthProvider>
    <BrowserRouter>
       <NavBar/>
        <Routes>
           <Route path='/signin' element={ <SignIn/>}/>
           <Route path='/signup' element={ <SignUp/>}/>
           <Route path='/coursematerial' element={ <CourseMaterial/>}/>
           <Route path='/course' element={ <Course/>}/>
        </Routes>
    </BrowserRouter>
    </AuthProvider>
    </>
    
  );
}

export default App;
