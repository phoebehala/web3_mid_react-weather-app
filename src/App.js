
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const api ={
  key: "3604b1ba5a1968ab01e1c8e3be99e1ec",
  base: "api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact />
      </Switch>
    </Router>


      <main className="search-box">
        <input className="search-bar"
                type="text"
                placeholder="Searching...">
            
        </input>

      </main>
    </>
  );
}

export default App;
