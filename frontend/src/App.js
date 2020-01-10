import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//component
import Navigation from './Components/Navigation'
import NotesList from './Components/NotesList'
import CreateNote from './Components/CreateNote'
import CreateUser from './Components/CreateUser'

function App() {
  return (
    <Router>
      <Navigation/>

      <div className="container p-4">
        <Route path="/" exact component={NotesList} />
        <Route path="/edit/:id" component={CreateNote} />
        <Route path="/create" component={CreateNote} />
        <Route path="/user" component={CreateUser} />
      </div>
      
    </Router>
  )
}

export default App;
