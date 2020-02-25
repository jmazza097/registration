import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './Components/layouts/Navbar'
import Dashboard from './Components/dashboard/Dashboard'
import ClassDetails from  './Components/projects/ClassDetails'
import SignIn from './Components/auth/SignIn';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path = '/' component={Dashboard}/>
        <Route path = '/class/:id' component={ClassDetails}/>
        <Route path ='/signin' component = {SignIn}/>
      </Switch> 
    </div>
    </BrowserRouter>
  );
}

export default App;
