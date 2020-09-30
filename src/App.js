import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Video } from './components/Video';
import { Login } from './components/login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return ( 
    <BrowserRouter>
       <Switch>
        <Route path='/' exact component={Login}/> 
        <Route path='/video'  component={Video}/>
      </Switch>
    </BrowserRouter>
  
  );
}

export default App;