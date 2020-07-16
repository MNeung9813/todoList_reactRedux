import React from 'react';
import { useLocation, Link, NavLink, Switch, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHistory } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import History from './pages/History';

function App() {
  let location = useLocation();
  let iconMenu, pathMenu;
  switch (location.pathname) {
    case "/history": 
      iconMenu = faHome;
      pathMenu = "/";
      break;
    default: 
      iconMenu = faHistory;
      pathMenu = "/history";
      break;
  }
  return (
    <div className="container mt-3 mb-3">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="text-center mb-0 title">Todo List</h1>
        <div>
          <Link to={pathMenu}>
            <FontAwesomeIcon icon={iconMenu} size="2x" />
          </Link>
        </div>
      </div>

      <div className="pt-4 pb-4 content">
        <Switch className="App">
          <Route exact path="/" component={Home} />
          <Route path="/history" component={History} />
        </Switch>
      </div>
    </div>
  );
}

export default App;