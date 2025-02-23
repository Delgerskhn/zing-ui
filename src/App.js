import React from "react";
import { Router } from "react-router-dom";
import Routes from "./routes";
import { createBrowserHistory } from "history";
import './assets/style.css'

const browserHistory = createBrowserHistory();

function App() {
  return (
    <div>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
