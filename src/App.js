import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    // BEM
    <div className="app">
      <Router>
        <Switch>
          <Route path='/search' component={SearchPage} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
